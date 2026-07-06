// Generates public/cv.pdf from the website's own data (education, highlights,
// publications, projects) plus scripts/cv/config.ts for everything the
// website doesn't contain (contact details, skills, languages, custom
// sections, layout options).
//
// Usage: npm run cv:pdf

import path from "node:path";
import React from "react";
import { Document, Page, View, Text, Link, Image, Font, StyleSheet, renderToFile } from "@react-pdf/renderer";

import { education, researchInterests } from "../../app/data/education";
import { highlights } from "../../app/data/highlights";
import { projects } from "../../app/data/projects";
import { publications } from "../../app/data/publications";
import { cvConfig, type CvSectionKey, type CvCustomSection } from "./config";

const ROOT = path.resolve(__dirname, "../..");
const OUTPUT_PATH = path.join(ROOT, "public", "cv.pdf");
const FONTS_DIR = path.join(__dirname, "fonts");

// Base-14 PDF fonts (Helvetica, Times) only support Latin-1 and silently drop
// glyphs outside it (e.g. "ℏ" in a venue name, or some accented characters).
// Noto Sans/Serif are embedded locally instead so the CV renders correctly
// regardless of what characters appear in the website's data.
const FONT_FAMILY = cvConfig.style.fontFamily === "sans" ? "NotoSans" : "NotoSerif";
Font.register({
	family: FONT_FAMILY,
	fonts: [
		{ src: path.join(FONTS_DIR, `${FONT_FAMILY}-Regular.woff`), fontWeight: "normal", fontStyle: "normal" },
		{ src: path.join(FONTS_DIR, `${FONT_FAMILY}-Bold.woff`), fontWeight: "bold", fontStyle: "normal" },
		{ src: path.join(FONTS_DIR, `${FONT_FAMILY}-Italic.woff`), fontWeight: "normal", fontStyle: "italic" },
		{ src: path.join(FONTS_DIR, `${FONT_FAMILY}-BoldItalic.woff`), fontWeight: "bold", fontStyle: "italic" },
	],
});
Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
	page: {
		fontFamily: FONT_FAMILY,
		fontSize: 9.5,
		color: "#1e2530",
		paddingTop: 40,
		paddingBottom: 40,
		paddingHorizontal: 48,
	},
	headerTop: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 22,
	},
	headerText: {
		flexGrow: 1,
		flexShrink: 1,
	},
	photo: {
		width: 96*0.8,
		height: 96*0.8,
		borderRadius: 48,
		marginRight: 20,
		objectFit: "cover",
	},
	name: {
		fontWeight: "bold",
		fontSize: 25,
		color: cvConfig.style.accentColor,
	},
	title: {
		fontSize: 13,
		marginTop: 4,
		color: "#4a5568",
	},
	headerInfo: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		borderTopWidth: 1,
		borderTopColor: "#dde1e7",
		paddingTop: 12,
		marginBottom: 22,
	},
	linksCol: {
		flexDirection: "column",
	},
	linkLine: {
		fontSize: 9,
		lineHeight: 1.8,
		marginBottom: 3,
	},
	linkLabel: {
		fontWeight: "bold",
		color: "#4a5568",
	},
	addressCol: {
		flexDirection: "column",
		alignItems: "flex-end",
	},
	addressLine: {
		fontSize: 9,
		color: "#4a5568",
		lineHeight: 1.6,
		marginBottom: 3,
		textAlign: "right",
	},
	ageLine: {
		fontSize: 9,
		color: "#4a5568",
		marginBottom: 10,
		textAlign: "right",
	},
	section: {
		marginBottom: 16,
	},
	sectionTitle: {
		fontWeight: "bold",
		fontSize: 10.5,
		color: cvConfig.style.accentColor,
		textTransform: "uppercase",
		letterSpacing: 0.8,
		borderBottomWidth: 1,
		borderBottomColor: cvConfig.style.accentColor,
		paddingBottom: 4,
		marginBottom: 9,
	},
	summaryText: {
		fontSize: 9.5,
		lineHeight: 1.5,
	},
	item: {
		marginBottom: 9,
	},
	itemHeaderRow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	itemHeading: {
		fontWeight: "bold",
		fontSize: 9.5,
		lineHeight: 1.4,
		maxWidth: "80%",
	},
	itemPeriod: {
		fontSize: 8.5,
		color: "#6b7280",
	},
	itemSubheading: {
		fontSize: 9,
		color: "#4a5568",
		lineHeight: 1.4,
	},
	itemDescription: {
		fontSize: 9,
		color: "#4a5568",
		marginTop: 2,
		lineHeight: 1.4,
	},
	tagsLine: {
		fontSize: 8.5,
		color: "#6b7280",
		marginTop: 2,
		lineHeight: 1.4,
	},
	link: {
		color: "#1d4ed8",
		textDecoration: "none",
	},
});

function stripProtocol(url: string): string {
	return url.replace(/^https?:\/\//, "");
}

function computeAge(birthDate: string): number {
	const birth = new Date(birthDate);
	const today = new Date();
	let age = today.getFullYear() - birth.getFullYear();
	const monthDiff = today.getMonth() - birth.getMonth();
	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) age--;
	return age;
}

/** Bolds occurrences of the CV owner's surname within an author list string. */
function AuthorsLine({ authors }: { authors: string }) {
	const surname = cvConfig.personal.name.trim().split(/\s+/).pop() ?? "";
	if (!surname || !authors.includes(surname)) {
		return <Text style={styles.itemSubheading}>{authors}</Text>;
	}
	const parts = authors.split(surname);
	return (
		<Text style={styles.itemSubheading}>
			{parts.map((part, i) => (
				<React.Fragment key={i}>
					{part}
					{i < parts.length - 1 && <Text style={{ fontWeight: "bold", color: "#1e2530" }}>{surname}</Text>}
				</React.Fragment>
			))}
		</Text>
	);
}

function SectionTitle({ children }: { children: React.ReactNode }) {
	return <Text style={styles.sectionTitle}>{children}</Text>;
}

function SummarySection() {
	return (
		<View style={styles.section}>
			<SectionTitle>Profile</SectionTitle>
			<Text style={styles.summaryText}>{cvConfig.summary}</Text>
			{researchInterests.length > 0 && (
				<Text style={[styles.tagsLine, { marginTop: 4 }]}>
					<Text style={{ fontWeight: "bold", color: "#1e2530" }}>Research interests: </Text>
					{researchInterests.join(" · ")}
				</Text>
			)}
		</View>
	);
}

function EducationSection() {
	return (
		<View style={styles.section}>
			<SectionTitle>Education</SectionTitle>
			{education.map((item, i) => (
				<View key={i} style={styles.item}>
					<View style={styles.itemHeaderRow}>
						<Text style={styles.itemHeading}>{item.degree}</Text>
						<Text style={styles.itemPeriod}>{item.period}</Text>
					</View>
					<Text style={styles.itemSubheading}>
						{item.institution} · {item.location}
					</Text>
					{item.description && <Text style={styles.itemDescription}>{item.description}</Text>}
				</View>
			))}
		</View>
	);
}

function HighlightsCategorySection({ category }: { category: (typeof highlights)[number] }) {
	const items = category.name === "Presentations" ? category.items.slice(0, cvConfig.limits.maxPresentations) : category.items;
	if (items.length === 0) return null;
	return (
		<View style={styles.section}>
			<SectionTitle>{category.name}</SectionTitle>
			{items.map((item, i) => (
				<View key={i} style={styles.item}>
					<View style={styles.itemHeaderRow}>
						<Text style={styles.itemHeading}>{item.description}</Text>
						<Text style={styles.itemPeriod}>{item.period}</Text>
					</View>
					<Text style={styles.itemSubheading}>
						{item.role}
						{item.venue ? ` · ${item.venue}` : ""}
					</Text>
				</View>
			))}
		</View>
	);
}

function ExperienceSection() {
	return (
		<>
			{highlights.map((category, ci) => (
				<HighlightsCategorySection key={ci} category={category} />
			))}
		</>
	);
}

function PublicationsSection() {
	const items = publications.slice(0, cvConfig.limits.maxPublications);
	if (items.length === 0) return null;
	return (
		<View style={styles.section}>
			<SectionTitle>Publications</SectionTitle>
			{items.map((pub, i) => (
				<View key={i} style={styles.item}>
					<View style={styles.itemHeaderRow}>
						<Text style={{ fontStyle: "italic", fontSize: 9.5, lineHeight: 1.3, maxWidth: "88%" }}>{pub.title}</Text>
						<Text style={styles.itemPeriod}>{pub.year}</Text>
					</View>
					<AuthorsLine authors={pub.authors} />
					<Text style={styles.tagsLine}>
						{pub.journal}
						{pub.details ? `, ${pub.details}` : ""}
						{pub.link && (
							<>
								{"  ·  "}
								<Link src={pub.link} style={styles.link}>
									{stripProtocol(pub.link)}
								</Link>
							</>
						)}
					</Text>
				</View>
			))}
		</View>
	);
}

function ProjectsSection() {
	const items = projects.slice(0, cvConfig.limits.maxProjects);
	if (items.length === 0) return null;
	return (
		<View style={styles.section}>
			<SectionTitle>Personal Projects</SectionTitle>
			{items.map((project, i) => (
				<View key={i} style={styles.item}>
					<View style={styles.itemHeaderRow}>
						<Text style={styles.itemHeading}>{project.name}</Text>
						<Link src={project.link} style={[styles.link, { fontSize: 8.5 }]}>
							{stripProtocol(project.link)}
						</Link>
					</View>
					<Text style={styles.itemDescription}>{project.description}</Text>
					{project.tags && project.tags.length > 0 && <Text style={styles.tagsLine}>{project.tags.join(" · ")}</Text>}
				</View>
			))}
		</View>
	);
}

function SkillsSection() {
	const categories = cvConfig.skills.filter((c) => c.items.length > 0);
	if (categories.length === 0) return null;
	return (
		<View style={styles.section}>
			<SectionTitle>Skills</SectionTitle>
			{categories.map((cat, i) => (
				<Text key={i} style={[styles.itemDescription, { marginBottom: 2 }]}>
					<Text style={{ fontWeight: "bold", color: "#1e2530" }}>{cat.category}: </Text>
					{cat.items.join(", ")}
				</Text>
			))}
		</View>
	);
}

function LanguagesSection() {
	if (cvConfig.languages.length === 0) return null;
	return (
		<View style={styles.section}>
			<SectionTitle>Languages</SectionTitle>
			<Text style={styles.itemDescription}>
				{cvConfig.languages.map((lang, i) => (
					<React.Fragment key={i}>
						<Text style={{ fontWeight: "bold", color: "#1e2530" }}>{lang.name}</Text>
						{`: ${lang.level}`}
						{i < cvConfig.languages.length - 1 ? "   ·   " : ""}
					</React.Fragment>
				))}
			</Text>
		</View>
	);
}

function CustomSectionBlock({ section }: { section: CvCustomSection }) {
	if (section.items.length === 0) return null;
	return (
		<View style={styles.section}>
			<SectionTitle>{section.title}</SectionTitle>
			{section.items.map((item, i) => (
				<View key={i} style={styles.item}>
					<View style={styles.itemHeaderRow}>
						<Text style={styles.itemHeading}>{item.heading}</Text>
						{item.period && <Text style={styles.itemPeriod}>{item.period}</Text>}
					</View>
					{item.subheading && <Text style={styles.itemSubheading}>{item.subheading}</Text>}
					{item.description && <Text style={styles.itemDescription}>{item.description}</Text>}
				</View>
			))}
		</View>
	);
}

const sectionRenderers: Record<CvSectionKey, () => React.ReactElement | null> = {
	summary: SummarySection,
	education: EducationSection,
	experience: ExperienceSection,
	publications: PublicationsSection,
	projects: ProjectsSection,
	skills: SkillsSection,
	languages: LanguagesSection,
};

function buildSectionList(): React.ReactElement[] {
	const blocks: React.ReactElement[] = [];
	for (const { key, enabled } of cvConfig.sections) {
		if (!enabled) continue;

		for (const custom of cvConfig.customSections) {
			if (custom.anchor === key && custom.position === "before") {
				blocks.push(<CustomSectionBlock key={`custom-before-${custom.title}`} section={custom} />);
			}
		}

		const Renderer = sectionRenderers[key];
		blocks.push(<Renderer key={key} />);

		for (const custom of cvConfig.customSections) {
			if (custom.anchor === key && custom.position === "after") {
				blocks.push(<CustomSectionBlock key={`custom-after-${custom.title}`} section={custom} />);
			}
		}
	}
	return blocks;
}

function LabeledLink({ label, href, value }: { label: string; href: string; value: string }) {
	return (
		<Text style={styles.linkLine}>
			<Text style={styles.linkLabel}>{label}: </Text>
			<Link src={href} style={styles.link}>
				{value}
			</Link>
		</Text>
	);
}

function Header() {
	const { personal } = cvConfig;
	const photoPath = personal.photo ? path.join(ROOT, personal.photo) : undefined;
	const addressLines = [personal.address.institution, personal.address.street, personal.address.postalCode, personal.phone].filter(
		Boolean,
	);

	return (
		<View>
			<View style={styles.headerTop}>
				{photoPath && <Image src={photoPath} style={styles.photo} />}
				<View style={styles.headerText}>
					<Text style={styles.name}>{personal.name}</Text>
					<Text style={styles.title}>{personal.title}</Text>
				</View>
			</View>

			<View style={styles.headerInfo}>
				<View style={styles.linksCol}>
					<LabeledLink label="Email" href={`mailto:${personal.email}`} value={personal.email} />
					<LabeledLink label="Website" href={personal.website} value={stripProtocol(personal.website)} />
					{personal.links.map((link, i) => (
						<LabeledLink
							key={i}
							label={link.label}
							href={`https://${link.value.replace(/^https?:\/\//, "")}`}
							value={link.value}
						/>
					))}
				</View>

				<View style={styles.addressCol}>
					<Text style={styles.ageLine}>
						{computeAge(personal.birthDate)} years old ({personal.nationality})
					</Text>
					{addressLines.map((line, i) => (
						<Text key={i} style={styles.addressLine}>
							{line}
						</Text>
					))}
				</View>
			</View>
		</View>
	);
}

function Cv() {
	return (
		<Document title={`${cvConfig.personal.name} - CV`} author={cvConfig.personal.name}>
			<Page size="A4" style={styles.page}>
				<Header />
				{buildSectionList()}
			</Page>
		</Document>
	);
}

async function main() {
	await renderToFile(<Cv />, OUTPUT_PATH);
	console.log(`CV generated at ${path.relative(ROOT, OUTPUT_PATH)}`);
}

main().catch((err) => {
	console.error("Failed to generate CV:", err);
	process.exit(1);
});

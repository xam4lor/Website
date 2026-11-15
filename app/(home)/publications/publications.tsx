import { publications } from '../../data/publications';
import Section, { type Action } from '../../ui/section/section';
import PublicationEntry, { PublicationList } from '../../ui/publication-entry/publication-entry';

const PREVIEW_COUNT = 3;

const actions: Action[] = [
    { href: 'https://orcid.org/0009-0005-2834-4862', label: 'ORCID', external: true },
    { href: 'https://scholar.google.com/citations?user=k8_CYVUAAAAJ', label: 'Scholar', external: true },
    { href: '/publications', label: 'All publications' },
];

export default function Publications() {
    return (
        <Section id="publications" title="Selected Publications" actions={actions}>
            <PublicationList>
                {publications.slice(0, PREVIEW_COUNT).map((pub) => <PublicationEntry key={pub.title} pub={pub} />)}
            </PublicationList>
        </Section>
    );
}

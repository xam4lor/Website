import styles from './highlights.module.css';
import { highlights, type HighlightItem } from '../../data/highlights';
import Section from '../../ui/section/section';

function sortKey(item: HighlightItem): string {
    if (item.date) return item.date;
    const end = item.period.split('–').pop()!.trim();
    return /now/i.test(end) ? '9999' : `${end}-99`;
}

/** Newest first (ties keep data order), then merges consecutive items sharing a title. */
function groupByTitle(items: HighlightItem[]) {
    const sorted = items
        .map((item, i) => ({ item, i }))
        .sort((a, b) => sortKey(b.item).localeCompare(sortKey(a.item)) || a.i - b.i)
        .map(({ item }) => item);

    const groups: { title: string; href?: string; entries: HighlightItem[] }[] = [];
    for (const item of sorted) {
        const last = groups[groups.length - 1];
        if (last && last.title === item.description) last.entries.push(item);
        else groups.push({ title: item.description, href: item.href, entries: [item] });
    }
    return groups;
}

export default function Highlights() {
    return (
        <Section id="activities" title="Activities">
            {highlights.map((category) => (
                <div key={category.name} className={styles.category} data-kind={category.icon}>
                    <h3 className={styles.name}>{category.name}</h3>
                    <ul className={styles.groups}>
                        {groupByTitle(category.items).map((group, g) => (
                            <li key={g}>
                                <div className={styles.title}>
                                    {group.href
                                        ? <a href={group.href} target="_blank" rel="noopener noreferrer">{group.title}</a>
                                        : group.title}
                                </div>
                                <ul className={styles.entries}>
                                    {group.entries.map((entry, i) => (
                                        <li key={i} className={styles.entry}>
                                            <span className={styles.role}>{entry.role}</span>
                                            {entry.venue && <span className={styles.venue}>{entry.venue}</span>}
                                            <span className={styles.year}>{entry.period}</span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </Section>
    );
}

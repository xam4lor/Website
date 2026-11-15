import Link from 'next/link';
import styles from './section.module.css';

export type Action = { href: string; label: string; external?: boolean };

function ActionLink({ action }: { action: Action }) {
    if (action.external) {
        return <a href={action.href} target="_blank" rel="noopener noreferrer" className={styles.action}>{action.label} ↗</a>;
    }
    return <Link href={action.href} className={styles.action}>{action.label} →</Link>;
}

function Actions({ actions, className }: { actions?: Action[]; className: string }) {
    if (!actions?.length) return null;
    return (
        <div className={className}>
            {actions.map((action) => <ActionLink key={action.href} action={action} />)}
        </div>
    );
}

export default function Section({ id, title, actions, children }: {
    id?: string;
    title: string;
    actions?: Action[];
    children: React.ReactNode;
}) {
    return (
        <section id={id} className={styles.section}>
            <div className={styles.head}>
                <h2 className={styles.title}>{title}</h2>
                <Actions actions={actions} className={styles.actions} />
            </div>
            {children}
        </section>
    );
}

export function PageIntro({ title, subtitle, actions }: { title: string; subtitle: string; actions?: Action[] }) {
    return (
        <div className={styles.intro}>
            <Link href="/" className={styles.back}>← Home</Link>
            <h1 className={styles.pageTitle}>{title}</h1>
            <p className={styles.pageSubtitle}>{subtitle}</p>
            <Actions actions={actions} className={styles.introActions} />
        </div>
    );
}

import Link from "next/link";
import styles from "./ProjectShowcase.module.scss";

type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  tags: string[];
  href?: string;
  status?: string;
};

const projects: Project[] = [
  {
    title: "Mumbai Rains",
    eyebrow: "Civic data / PWA",
    summary: "A web-first Mumbai rain nowcast PWA that treats live weather information as an evidence problem: first-party routes, radar-history tooling, and privacy-aware crowd reporting.",
    tags: ["Cloudflare Workers", "TypeScript", "Data pipelines"],
    status: "In active development",
  },
  {
    title: "GremlinBoard",
    eyebrow: "Local-first control plane",
    summary: "A calm, local monitoring board for live widgets, backed by a manifest registry, FastAPI runtime, websocket snapshots, and guarded AI widget generation.",
    tags: ["Next.js", "FastAPI", "AI systems"],
    href: "https://github.com/djsmanchanda/GremlinBoard",
  },
  {
    title: "Blue Star Smart AC Control",
    eyebrow: "Everyday automation",
    summary: "A Windows tray app, local web panel, CLI, and optional Android widget for controlling a smart AC without turning a simple task into a cloud dashboard.",
    tags: ["Node.js", "Windows", "Android"],
    href: "https://github.com/djsmanchanda/Blue_Star_Smart_AC_control",
  },
  {
    title: "Samsung Smart Switch Deduplicator",
    eyebrow: "Privacy-first utility",
    summary: "A browser-local cleanup tool that hashes and compares Samsung Smart Switch backups without sending filenames, paths, thumbnails, or file contents to a server.",
    tags: ["Vite", "File System Access API", "Cloudflare"],
    href: "https://github.com/djsmanchanda/Samsung_Smart_Switch_Deduplicator",
  },
  {
    title: "Nacho Index",
    eyebrow: "Serious systems, unserious subject",
    summary: "A snack-ranking lab with a weighted scoring model, analytics, review workflows, automated verdicts, and enough rigor to settle a chip debate properly.",
    tags: ["Next.js", "Cloudflare D1", "Product design"],
    href: "https://github.com/djsmanchanda/nacho_index",
  },
];

export function ProjectShowcase() {
  return (
    <section aria-labelledby="selected-work" className={styles.section}>
      <div className={styles.heading}>
        <div>
          <p className={styles.kicker}>Selected work</p>
          <h2 id="selected-work">A wide range of problems. The same bias toward shipping.</h2>
        </div>
        <p>I like work that connects a real user need to thoughtful engineering — from a civic weather tool to a tiny piece of home automation.</p>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => {
          const content = (
            <>
              <div className={styles.cardTopline}>
                <p>{project.eyebrow}</p>
                {project.status && <span>{project.status}</span>}
              </div>
              <h3>{project.title}</h3>
              <p className={styles.summary}>{project.summary}</p>
              <ul aria-label={`${project.title} technologies`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              {project.href && <span className={styles.linkLabel}>View project <span aria-hidden="true">↗</span></span>}
            </>
          );

          return project.href ? (
            <Link className={styles.card} href={project.href} target="_blank" rel="noreferrer" key={project.title}>{content}</Link>
          ) : (
            <article className={styles.card} key={project.title}>{content}</article>
          );
        })}
      </div>
    </section>
  );
}
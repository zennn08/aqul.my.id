export type Skill = {
  name: string;
  /** Path in public/, e.g. "/skills/go.svg". */
  icon: string;
};

export type SkillGroup = { title: string; skills: Skill[] };

const s = (name: string, file: string): Skill => ({ name, icon: `/skills/${file}.svg` });

export const skillGroups: SkillGroup[] = [
  {
    title: "Bahasa",
    skills: [
      s("JavaScript", "javascript"),
      s("TypeScript", "typescript"),
      s("Go", "go"),
      s("PHP", "php"),
      s("Python", "python"),
      s("Java", "java"),
    ],
  },
  {
    title: "Backend & Runtime",
    skills: [s("Node.js", "nodejs"), s("Bun", "bun"), s("Express", "express"), s("Laravel", "laravel")],
  },
  {
    title: "Frontend",
    skills: [
      s("HTML", "html"),
      s("CSS", "css"),
      s("React", "react"),
      s("Astro", "astro"),
      s("Next.js", "nextjs"),
      s("Svelte", "svelte"),
      s("Tailwind CSS", "tailwindcss"),
      s("Bootstrap", "bootstrap"),
    ],
  },
  {
    title: "Database",
    skills: [s("MySQL", "mysql"), s("PostgreSQL", "postgresql"), s("MongoDB", "mongodb"), s("Redis", "redis")],
  },
  {
    title: "Tools & Desain",
    skills: [
      s("Git", "git"),
      s("GitLab", "gitlab"),
      s("Docker", "docker"),
      s("Linux", "linux"),
      s("Grafana", "grafana"),
      s("Postman", "postman"),
      s("Figma", "figma"),
      s("Canva", "canva"),
    ],
  },
  {
    title: "AI Tools",
    skills: [s("Claude Code", "claudecode"), s("Antigravity", "antigravity"), s("Codex", "codex")],
  },
];

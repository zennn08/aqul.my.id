import { describe, expect, test } from "bun:test";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { skillGroups } from "./data/skills";
import { education, organizations, work } from "./data/experience";

// Paths in data are site-absolute ("/skills/go.svg") and must exist in public/.
// Each segment is matched case-sensitively: Windows/macOS disks ignore case, the host does not.
const inPublic = (p: string) => {
  if (!p.startsWith("/")) return false;
  let dir = "public";
  for (const part of p.slice(1).split("/")) {
    if (!existsSync(dir) || !readdirSync(dir).includes(part)) return false;
    dir = join(dir, part);
  }
  return true;
};

describe("profile", () => {
  test("highlight is part of name", () => {
    expect(profile.highlight.length).toBeGreaterThan(0);
    expect(profile.name).toContain(profile.highlight);
  });
  test("photo exists", () => expect(inPublic(profile.photo)).toBe(true));
  test("cv exists when set", () => {
    if (profile.cv) expect(inPublic(profile.cv)).toBe(true);
  });
  test("links are absolute", () => {
    expect(profile.github).toStartWith("https://");
    for (const s of profile.socials) expect(s.href).toStartWith("https://");
  });
  test("2 to 4 stats, all filled", () => {
    expect(profile.stats.length).toBeGreaterThanOrEqual(2);
    expect(profile.stats.length).toBeLessThanOrEqual(4);
    for (const s of profile.stats) {
      expect(s.value.trim()).not.toBe("");
      expect(s.label.trim()).not.toBe("");
    }
  });
});

describe("projects", () => {
  test("not empty", () => expect(projects.length).toBeGreaterThan(0));
  test("at most 3 featured", () => {
    expect(projects.filter((p) => p.featured).length).toBeLessThanOrEqual(3);
  });
  test("titles are unique", () => {
    expect(new Set(projects.map((p) => p.title)).size).toBe(projects.length);
  });
  for (const p of projects) {
    test(`${p.title} is complete`, () => {
      expect(p.title.trim()).not.toBe("");
      expect(p.description.trim()).not.toBe("");
      expect(p.tags.length).toBeGreaterThan(0);
      // private projects have no repo, but then they need a public link
      expect(Boolean(p.repo || p.link)).toBe(true);
      if (p.repo) expect(p.repo).toMatch(/^https:\/\/github\.com\/[^/\s]+\/[^/\s]+$/);
      if (p.link) {
        expect(p.link.label.trim()).not.toBe("");
        expect(p.link.href).toMatch(/^https:\/\/\S+\.\S+/);
      }
      if (p.image) expect(inPublic(p.image)).toBe(true);
    });
  }
});

describe("experience", () => {
  test("every section has entries", () => {
    expect(work.length).toBeGreaterThan(0);
    expect(organizations.length).toBeGreaterThan(0);
    expect(education.length).toBeGreaterThan(0);
  });
  for (const e of [...work, ...organizations]) {
    test(`${e.role} @ ${e.org} is complete`, () => {
      expect(e.role.trim()).not.toBe("");
      expect(e.org.trim()).not.toBe("");
      expect(e.period.trim()).not.toBe("");
      expect(e.points.length).toBeGreaterThan(0);
      for (const pt of e.points) expect(pt.trim()).not.toBe("");
    });
  }
  for (const e of education) {
    test(`${e.school} is complete`, () => {
      expect(e.school.trim()).not.toBe("");
      expect(e.detail.trim()).not.toBe("");
      expect(e.period.trim()).not.toBe("");
    });
  }
});

describe("skills", () => {
  const all = skillGroups.flatMap((g) => g.skills);
  test("every group has skills", () => {
    for (const g of skillGroups) expect(g.skills.length).toBeGreaterThan(0);
  });
  test("names are unique across groups", () => {
    expect(new Set(all.map((s) => s.name)).size).toBe(all.length);
  });
  for (const s of all) {
    test(`${s.name} icon exists`, () => expect(inPublic(s.icon)).toBe(true));
  }
});

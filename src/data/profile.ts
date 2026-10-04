export type Social = { label: string; href: string };
export type Stat = { value: string; label: string };

export type Profile = {
  name: string;
  /** Part of `name` rendered in blue in the hero. Must appear in `name`. */
  highlight: string;
  tagline: string;
  /** Hero subtext; keep it under ~20 words. */
  bio: string;
  photo: string;
  github: string;
  email?: string;
  /** Path to a PDF in public/, e.g. "/cv.pdf". The CV button only shows when set. */
  cv?: string;
  socials: Social[];
  /** 2-4 real numbers shown under the hero. */
  stats: Stat[];
};

export const profile: Profile = {
  name: "Akhlaqul Muhammad Fadwa",
  highlight: "Fadwa",
  tagline: "// HALO, SAYA",
  bio: "Mahasiswa Teknik Informatika Universitas Riau dan Full Stack Developer di Wibusoft. Fokus di backend, sekarang lagi serius mendalami Go.",
  photo: "/profile-img.jpg",
  github: "https://github.com/zennn08",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/akhlaqul-muhammad-fadwa/" },
    { label: "Instagram", href: "https://instagram.com/a_muhammad_f15" },
  ],
  stats: [
    { value: "130K+", label: "klien Wibusoft" },
    { value: "110K+", label: "unduhan npm" },
  ],
};

export type Project = {
  title: string;
  description: string;
  /** At least one. */
  tags: string[];
  /** https://github.com/<owner>/<repo>. Omit for private projects, then `link` is required. */
  repo?: string;
  /** Public page for the project, e.g. a website or npm package. */
  link?: { label: string; href: string };
  /** Path in public/. Only shown on featured cards. */
  image?: string;
  /** Max 3 projects. The first one gets the wide card. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Wibusoft",
    description:
      "Platform bot WhatsApp tanpa coding dengan 400 fitur siap pakai, dari AI, game, sampai tools grup. Melayani 130K+ klien. Saya membangun dan merawatnya sebagai full stack developer sejak 2021.",
    tags: ["Full Stack", "WhatsApp", "Chatbot"],
    link: { label: "Kunjungi", href: "https://wibusoft.com" },
    image: "/projects/wibusoft.png",
    featured: true,
  },
  {
    title: "SIWARIS",
    description:
      "Sistem Informasi Surat Ahli Waris yang dibangun saat Kukerta UNRI 2026 dan kini dipakai 5 kelurahan di Kecamatan Dumai Timur, Kota Dumai. Sekali input langsung jadi 3 surat siap cetak, dalam satu file .exe tanpa instalasi.",
    tags: ["Go", "Svelte", "SQLite"],
    repo: "https://github.com/zennn08/surat-waris",
    link: { label: "Unduh", href: "https://github.com/zennn08/surat-waris/releases/latest" },
    image: "/projects/siwaris.png",
    featured: true,
  },
  {
    title: "@aqul/akinator-api",
    description:
      "Library Node.js untuk memainkan Akinator lewat kode. Mulai sesi, jawab pertanyaan, undo, sampai dapat tebakan karakter, lengkap dengan multi-region dan child mode. Diunduh 110K+ kali di npm.",
    tags: ["TypeScript", "Node.js", "npm"],
    repo: "https://github.com/zennn08/akinator-api",
    link: { label: "npm", href: "https://www.npmjs.com/package/@aqul/akinator-api" },
    image: "/projects/akinator-api.png",
    featured: true,
  },
  {
    title: "BaseSelfBot",
    description: "Base self-bot WhatsApp yang bisa dikembangkan sendiri. 38 bintang dan 80 fork di GitHub.",
    tags: ["JavaScript", "Node.js", "WhatsApp"],
    repo: "https://github.com/zennn08/BaseSelfBot",
  },
  {
    title: "whatsmeow-wam",
    description:
      "Telemetry WhatsApp Web WAM (Falco/w:stats) untuk whatsmeow, port Go dari @zapo-js/wam dengan wire-parity anti-fingerprinting.",
    tags: ["Go", "WhatsApp"],
    repo: "https://github.com/zennn08/whatsmeow-wam",
  },
  {
    title: "SITANAH",
    description:
      "Aplikasi Surat Tanah Garapan untuk Kantor Camat Dumai Timur, dibangun saat Kukerta UNRI 2026. Go + SQLite + Svelte, satu exe tanpa instalasi.",
    tags: ["Go", "SQLite", "Svelte"],
    repo: "https://github.com/zennn08/surat-tanah",
  },
  {
    title: "tgs2webp-api",
    description: "HTTP API untuk mengubah stiker Telegram (termasuk animasi .tgs) menjadi stiker WhatsApp .webp.",
    tags: ["Go", "Docker"],
    repo: "https://github.com/zennn08/tgs2webp-api",
  },
  {
    title: "PBOLaundry",
    description: "Aplikasi Point of Sales untuk usaha laundry: transaksi dan data pelanggan, dibangun dengan OOP dan database.",
    tags: ["Java", "OOP", "MySQL"],
    repo: "https://github.com/zennn08/PBOLaundry",
  },
  {
    title: "express-uploader",
    description: "Server upload file sederhana berbasis Express.",
    tags: ["JavaScript", "Express"],
    repo: "https://github.com/zennn08/express-uploader",
  },
  {
    title: "brat-api",
    description: "API pembuat gambar teks gaya \"brat\", di-deploy sebagai container Docker.",
    tags: ["Docker", "API"],
    repo: "https://github.com/zennn08/brat-api",
  },
  {
    title: "url-shortener",
    description: "Contoh URL shortener dengan Express.js dan MongoDB.",
    tags: ["JavaScript", "Express", "MongoDB"],
    repo: "https://github.com/zennn08/url-shortener",
  },
];

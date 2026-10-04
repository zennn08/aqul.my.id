export type Role = {
  role: string;
  org: string;
  /** Free text, e.g. "Agu 2021 - Sekarang". */
  period: string;
  points: string[];
};

export type School = {
  school: string;
  detail: string;
  period: string;
};

export const work: Role[] = [
  {
    role: "Full Stack Developer",
    org: "Wibusoft",
    period: "Agu 2021 - Sekarang",
    points: [
      "Membangun dan merawat seluruh sistem chatbot WhatsApp, dari antarmuka sampai logika backend, untuk 130K+ klien.",
      "Mengelola deployment ke server produksi dan pemeliharaan rutin agar layanan tetap online untuk pengguna harian.",
      "Merancang dan mengoptimasi skema database untuk data pengguna dan log pesan bervolume tinggi.",
    ],
  },
  {
    role: "Asisten Lab Kecerdasan Buatan",
    org: "Universitas Riau",
    period: "Agu 2026 - Sekarang",
    points: [
      "Membimbing sesi praktikum Kecerdasan Buatan dan membantu mahasiswa mengimplementasikan konsep AI ke dalam kode.",
      "Menilai tugas praktikum dan memberi umpan balik.",
    ],
  },
  {
    role: "Asisten Lab Struktur Data & Algoritma",
    org: "Universitas Riau",
    period: "Feb 2026 - Jun 2026",
    points: [
      "Menilai tugas pemrograman mingguan 100+ mahasiswa dari 3 kelas, dengan umpan balik soal kebenaran dan efisiensi algoritma.",
      "Membimbing sesi praktikum: menjelaskan konsep dan membantu debugging bug, logika, serta edge case.",
      "Ikut menyusun modul praktikum dan soal latihan.",
    ],
  },
  {
    role: "Magang",
    org: "LPPM Universitas Riau",
    period: "Nov 2025 - Jan 2026",
    points: [
      "Mengoptimasi aplikasi web internal dengan merapikan query database dan menyelesaikan masalah N+1.",
      "Membangun crawler API SINTA untuk mengotomatisasi pengumpulan data riset.",
    ],
  },
  {
    role: "Asisten Lab Pemrograman Berorientasi Objek",
    org: "Universitas Riau",
    period: "Agu 2025 - Des 2025",
    points: [
      "Menilai tugas mingguan 36 mahasiswa dengan umpan balik soal struktur kode dan prinsip OOP.",
      "Membimbing praktikum Java dan menyusun soal latihan berbasis design pattern.",
    ],
  },
];

export const organizations: Role[] = [
  {
    role: "Wakil Ketua",
    org: "Engineering Robotic Club",
    period: "Des 2025 - Sekarang",
    points: [
      "Mengoordinasi kegiatan harian dan alur kerja antardivisi.",
      "Mengawasi persiapan teknis lomba robotik.",
    ],
  },
  {
    role: "Koordinator Acara",
    org: "Festival Elektro Informatika 2025",
    period: "Apr 2025 - Mei 2025",
    points: [
      "Menyusun rangkaian dan timeline festival lomba tingkat regional.",
      "Memimpin tim lintas bidang, dari lomba olahraga sampai pameran mikrokontroler.",
    ],
  },
];

export const education: School[] = [
  {
    school: "Universitas Riau",
    detail: "S1 Teknik Informatika",
    period: "2023 - Sekarang",
  },
  {
    school: "SMAN Plus Provinsi Riau",
    detail: "SMA",
    period: "2020 - 2023",
  },
];

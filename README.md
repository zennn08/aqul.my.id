# aqul.my.id

Portfolio pribadi Akhlaqul Muhammad Fadwa. Astro + Bun + Tailwind CSS v4, di-host di Cloudflare Pages.

## Menjalankan

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # bun test + astro check + build ke dist/
bun test         # validasi data
```

## Mengedit konten

Semua konten ada di `src/data/`:

- `profile.ts`: nama, bio, foto, link sosial, CV (opsional; taruh PDF di `public/` lalu isi `cv: "/nama.pdf"`)
- `projects.ts`: daftar proyek. `featured: true` untuk proyek andalan (maks. 3; yang pertama jadi kartu lebar), `image` opsional untuk kartu featured
- `skills.ts`: skill + ikon (`public/skills/*.svg`)

`bun test` memastikan data valid (link, file ikon/gambar ada, featured ≤ 3).

## Deploy

Cloudflare Pages, terhubung ke repo ini. Production branch `main`, build command `bun run build`,
output `dist`. Setiap push ke `main` otomatis deploy; branch lain dapat preview URL.

# Návod na nasazení - Přijímačky Společně

## ⚡ Statický web

Tento projekt je nakonfigurován jako **statický web** (static export). To znamená, že můžete nasadit výsledné HTML/CSS/JS soubory kamkoliv - na GitHub Pages, Netlify, Vercel, nebo jakýkoliv webhosting.

### Vytvoření statického buildu

```bash
# Build statického webu
npm run build
```

Po buildu najdete všechny statické soubory v adresáři `out/`. Tyto soubory můžete nahrát kamkoliv.

### Nasazení statického webu

#### GitHub Pages
1. Build: `npm run build`
2. Pushněte obsah adresáře `out/` do branch `gh-pages`
3. Nebo použijte GitHub Actions pro automatické nasazení

#### Jakýkoliv webhosting
1. Build: `npm run build`
2. Nahrajte obsah adresáře `out/` na váš webhosting pomocí FTP/SFTP
3. Hotovo!

#### Netlify Drop
1. Build: `npm run build`
2. Jděte na [netlify.com/drop](https://app.netlify.com/drop)
3. Přetáhněte adresář `out/` na stránku
4. Hotovo!

---

## Rychlý start - Vercel (5 minut)

### 1. Příprava projektu

```bash
# Ujistěte se, že máte všechny změny commitnuté
git add .
git commit -m "Ready for deployment"
```

### 2. Push na GitHub

```bash
# Pokud ještě nemáte Git repozitář
git init
git add .
git commit -m "Initial commit"

# Vytvořte nový repozitář na GitHub.com a pak:
git remote add origin https://github.com/VASE_UZIVATELSKE_JMENO/prijimacky-web.git
git branch -M main
git push -u origin main
```

### 3. Nasazení na Vercel

1. Jděte na [vercel.com](https://vercel.com) a přihlaste se (můžete použít GitHub účet)
2. Klikněte na **"Add New..."** > **"Project"**
3. Importujte váš GitHub repozitář
4. Vercel automaticky detekuje Next.js - nemusíte nic měnit
5. Klikněte na **"Deploy"**
6. Počkejte cca 1-2 minuty na build
7. Hotovo! Váš web je online na URL typu `prijimacky-web.vercel.app`

### 4. Vlastní doména (volitelné)

1. V projektu na Vercel jděte do **Settings** > **Domains**
2. Zadejte svou doménu (např. `prijimacky-spolecne.cz`)
3. Vercel vám ukáže DNS záznamy, které musíte přidat u vašeho poskytovatele domény
4. Počkejte na propagaci DNS (obvykle 5-60 minut)
5. Vercel automaticky nastaví SSL certifikát

---

## Alternativní možnosti nasazení

### Netlify

**Možnost 1: Git deploy (automatické)**
1. Jděte na [netlify.com](https://netlify.com)
2. **Add new site** > **Import an existing project**
3. Připojte Git repozitář
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Deploy

**Možnost 2: Drag & Drop (statický web)**
1. Build: `npm run build`
2. Jděte na [netlify.com/drop](https://app.netlify.com/drop)
3. Přetáhněte adresář `out/` na stránku
4. Hotovo!

### Railway

1. Jděte na [railway.app](https://railway.app)
2. New Project > Deploy from GitHub repo
3. Railway automaticky detekuje Next.js
4. Deploy

### Vlastní VPS server

**Pro statický web (nejjednodušší):**
1. Build: `npm run build`
2. Nahrajte obsah adresáře `out/` na server (např. pomocí SFTP)
3. Nastavte web server (Nginx/Apache) aby servíroval soubory z tohoto adresáře

**Příklad Nginx konfigurace:**
```nginx
server {
    listen 80;
    server_name prijimacky-spolecne.cz;
    root /var/www/prijimacky-web/out;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}
```

**Pro Next.js server (pokud chcete server-side rendering):**
Viz podrobný návod v README.md v sekci "Možnost 3: Vlastní server"

---

## Kontrolní seznam před nasazením

- [ ] Projekt běží lokálně (`npm run dev`)
- [ ] Statický build funguje (`npm run build` - vytvoří adresář `out/`)
- [ ] Otevřete `out/index.html` v prohlížeči a zkontrolujte, že vše funguje
- [ ] Všechny odkazy fungují
- [ ] Obrázky se načítají správně
- [ ] Formuláře fungují (pokud nějaké máte)
- [ ] Responzivní design funguje na mobilu
- [ ] Kontaktní informace jsou správné
- [ ] SEO meta tagy jsou nastavené

---

## Po nasazení

### Monitoring

Doporučujeme přidat:
- **Google Analytics** - pro sledování návštěvnosti
- **Google Search Console** - pro SEO
- **Vercel Analytics** - pokud používáte Vercel (zdarma)

### Optimalizace

1. **Sitemap** - Next.js automaticky generuje `/sitemap.xml`
2. **Robots.txt** - můžete přidat do `public/robots.txt`
3. **Performance** - použijte Lighthouse pro testování rychlosti

---

## Troubleshooting

### Build selhává

```bash
# Zkuste lokálně
npm run build

# Pokud jsou chyby, opravte je a pushněte znovu
```

### Web nefunguje po nasazení

1. Zkontrolujte build logy v dashboardu (Vercel/Netlify)
2. Zkontrolujte, že všechny závislosti jsou v `package.json`
3. Zkontrolujte environment variables (pokud nějaké používáte)

### Doména nefunguje

1. Zkontrolujte DNS záznamy (může trvat až 24 hodin)
2. Zkontrolujte SSL certifikát (Vercel/Netlify ho nastaví automaticky)

---

## Potřebujete pomoc?

- [Next.js dokumentace](https://nextjs.org/docs)
- [Vercel dokumentace](https://vercel.com/docs)
- [Next.js deployment guide](https://nextjs.org/docs/deployment)


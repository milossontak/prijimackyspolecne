# Přijímačky Společně - Webová aplikace

Webová stránka pro vzdělávací projekt "Přijímačky Společně", který pomáhá žákům připravit se na přijímací zkoušky na střední školy i gymnázia z 5. třídy.

## Technologie

- **Next.js 14** - React framework
- **TypeScript** - Typovaný JavaScript
- **CSS Modules** - Styling s CSS proměnnými

## Instalace a spuštění

### Požadavky
- Node.js 18+ 
- npm nebo yarn

### Instalace závislostí

```bash
npm install
```

### Vývojový server

```bash
npm run dev
```

Otevřete [http://localhost:3000](http://localhost:3000) v prohlížeči.

### Produkční build

```bash
npm run build
npm start
```

## Struktura projektu

```
app/
├── components/          # React komponenty
│   ├── Header.tsx      # Hlavička stránky
│   ├── Footer.tsx      # Patička stránky
│   ├── Hero.tsx        # Hero sekce s A/B testováním
│   ├── HowItWorks.tsx  # Sekce "Jak to funguje"
│   ├── Benefits.tsx    # Sekce s benefity
│   ├── Testimonials.tsx # Reference a statistiky
│   ├── ProcessShowcase.tsx # Ukázka procesu
│   ├── ServiceTypes.tsx # Typy služeb
│   └── FAQ.tsx         # FAQ akordeon
├── sluzby/             # Stránky služeb
│   ├── page.tsx        # Přehled služeb
│   ├── online-testy/   # Detail online testů
│   └── osobni-testy/   # Detail osobních testů
├── globals.css         # Globální styly
├── layout.tsx          # Root layout
└── page.tsx            # Homepage
```

## Funkcionality

### Homepage
- Hero sekce s **3 variantami H1** pro A/B testování
- Varianty lze přepínat pomocí URL parametru `?variant=A`, `?variant=B` nebo `?variant=C`
- Sekce: Jak to funguje, Benefity, Reference, Ukázka procesu, Typy služeb, FAQ

### Detail služby
- Kompletní informace o službě
- Balíčky s cenami
- Proces krok za krokem
- FAQ specifické pro službu
- CTA sekce

### Design
- Uklidňující barvy (modrá #4A90E2, zelená #52C9A2)
- Responzivní design
- Jednoduché, čisté UI prvky
- Generózní whitespace

## A/B testování

Homepage obsahuje 3 varianty H1 a podnadpisů:
- **Varianta A**: Zaměření na "Odbourání stresu"
- **Varianta B**: Zaměření na "Jistota výsledku"
- **Varianta C**: Zaměření na "Reálná simulace"

Varianta se vybírá pomocí URL parametru `variant`:
- `/` - defaultně varianta A
- `/?variant=A` - varianta A
- `/?variant=B` - varianta B
- `/?variant=C` - varianta C

V produkci můžete implementovat vlastní logiku výběru varianty (např. náhodně, podle geolokace, podle historie návštěvníka).

## Nasazení na produkci

### Možnost 1: Vercel (Doporučeno - nejjednodušší)

Vercel je platforma od tvůrců Next.js, ideální pro nasazení Next.js aplikací.

#### Postup:

1. **Vytvořte účet na Vercel**
   - Jděte na [vercel.com](https://vercel.com)
   - Přihlaste se pomocí GitHub/GitLab/Bitbucket

2. **Připravte projekt**
   ```bash
   # Ujistěte se, že projekt je v Git repozitáři
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Push na GitHub/GitLab/Bitbucket**
   - Vytvořte nový repozitář na GitHubu
   - Pushněte kód:
   ```bash
   git remote add origin <URL_VAŠEHO_REPO>
   git push -u origin main
   ```

4. **Nasazení na Vercel**
   - V Vercel dashboard klikněte na "New Project"
   - Importujte váš Git repozitář
   - Vercel automaticky detekuje Next.js
   - Klikněte na "Deploy"
   - Hotovo! Vercel vám poskytne URL (např. `prijimacky-web.vercel.app`)

5. **Vlastní doména (volitelné)**
   - V projektu na Vercel jděte do Settings > Domains
   - Přidejte svou doménu (např. `prijimacky-spolecne.cz`)
   - Nastavte DNS záznamy podle instrukcí Vercel

#### Výhody Vercel:
- ✅ Automatické nasazení při push do Git
- ✅ HTTPS zdarma
- ✅ CDN globálně
- ✅ Optimalizace pro Next.js
- ✅ Zdarma pro osobní projekty

---

### Možnost 2: Netlify

1. **Vytvořte účet na Netlify**
   - Jděte na [netlify.com](https://netlify.com)

2. **Nasazení**
   - V dashboard klikněte na "Add new site" > "Import an existing project"
   - Připojte Git repozitář
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Klikněte na "Deploy"

---

### Možnost 3: Vlastní server (VPS/Dedicated)

#### Požadavky:
- Node.js 18+ nainstalovaný na serveru
- PM2 pro správu procesů (doporučeno)
- Nginx jako reverse proxy (doporučeno)

#### Postup:

1. **Build aplikace**
   ```bash
   npm install
   npm run build
   ```

2. **Spuštění produkčního serveru**
   ```bash
   npm start
   ```
   Nebo s PM2:
   ```bash
   npm install -g pm2
   pm2 start npm --name "prijimacky-web" -- start
   pm2 save
   pm2 startup
   ```

3. **Nastavení Nginx** (příklad konfigurace)
   ```nginx
   server {
       listen 80;
       server_name prijimacky-spolecne.cz;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **SSL certifikát** (Let's Encrypt zdarma)
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d prijimacky-spolecne.cz
   ```

---

### Před nasazením - Kontrolní seznam

- [ ] Otestujte lokální build: `npm run build && npm start`
- [ ] Zkontrolujte všechny odkazy a obrázky
- [ ] Nastavte správné URL v `next.config.js` pokud potřebujete
- [ ] Zkontrolujte environment variables (pokud nějaké používáte)
- [ ] Nastavte vlastní doménu (pokud máte)
- [ ] Přidejte Google Analytics / tracking (volitelné)
- [ ] Nastavte SEO meta tagy (v `app/layout.tsx`)

---

### Testování produkčního buildu lokálně

```bash
# Build produkční verze
npm run build

# Spuštění produkčního serveru
npm start
```

Aplikace poběží na `http://localhost:3000` v produkčním režimu.

---

## Další kroky po nasazení

Pro produkční nasazení doporučujeme:
1. Přidat skutečný nákupní proces (košík, platby)
2. Implementovat klientskou sekci pro přihlášené uživatele
3. Přidat formulář pro lead magnet (ukázkový test)
4. Připojit CMS pro blog
5. Přidat analytics pro A/B testování (Google Analytics, Plausible)
6. Optimalizovat SEO (meta tagy, structured data, sitemap.xml)
7. Nastavit monitoring a error tracking (Sentry, LogRocket)

## Dokumentace

Více informací o návrhu najdete v:
- `WIREFRAMES.md` - Detailní wireframe struktura
- `CONTENT_VARIANTS.md` - Obsahové varianty a texty

## Kontakt

Pro dotazy kontaktujte vývojový tým.

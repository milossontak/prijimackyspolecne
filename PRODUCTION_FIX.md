# Oprava pro produkci - https://www.sontak.eu/prijimacky-spolecne/

## Problém

Web běží na localhostu normálně, ale na produkci (`https://www.sontak.eu/prijimacky-spolecne/`) se zobrazuje "This page could not be found".

## Řešení

### 1. Zkontrolujte basePath

V `next.config.js` je správně nastaven:
```javascript
basePath: '/prijimacky-spolecne'
```

### 2. Spusťte nový build

```bash
# Vyčistěte staré buildy
rm -rf .next
rm -rf out

# Spusťte nový build
npm run build
```

### 3. Testujte lokálně s basePath

```bash
# Spusťte dev server s basePath (simulace produkce)
npm run dev:prod

# Nebo otestujte statický build
npm run build
npm run serve
# Pak otevřete http://localhost:3000/prijimacky-spolecne/
```

### 4. Zkontrolujte strukturu v `out/`

Po buildu by mělo být:
```
out/
├── index.html
├── sluzby/
│   ├── index.html
│   ├── komplexni-balicek/
│   │   └── index.html
│   └── balicek-5-testu/
│       └── index.html
└── _next/
    └── ...
```

### 5. Nahrajte na server

Nahrajte **celý obsah** adresáře `out/` do adresáře `/prijimacky-spolecne/` na serveru.

**Důležité:**
- Nahrajte všechny soubory včetně `_next/` adresáře
- Ujistěte se, že struktura adresářů je zachována
- Zkontrolujte, že `index.html` je v rootu `prijimacky-spolecne/`

### 6. Zkontrolujte web server konfiguraci

Ujistěte se, že web server správně servíruje soubory z adresáře `/prijimacky-spolecne/`.

**Pro Apache (.htaccess):**
```apache
RewriteEngine On
RewriteBase /prijimacky-spolecne/

# Pokud soubor neexistuje, zkus index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [L]
```

**Pro Nginx:**
```nginx
location /prijimacky-spolecne/ {
    root /var/www/html;
    try_files $uri $uri/ /prijimacky-spolecne/index.html;
}
```

### 7. Zkontrolujte odkazy v HTML

Otevřete `out/index.html` a zkontrolujte, že všechny odkazy začínají s `/prijimacky-spolecne/`:
- CSS: `/prijimacky-spolecne/_next/static/css/...`
- JS: `/prijimacky-spolecne/_next/static/chunks/...`
- Odkazy: `/prijimacky-spolecne/sluzby/...`

Pokud odkazy nezačínají s `/prijimacky-spolecne/`, znamená to, že build nebyl správně spuštěn s basePath.

### Troubleshooting

**Odkazy nefungují:**
- Zkontrolujte, že `basePath` je v `next.config.js`
- Spusťte nový build
- Zkontrolujte konzoli prohlížeče pro chyby 404

**CSS/JS se nenačítají:**
- Zkontrolujte, že adresář `_next/` je nahrán na server
- Zkontrolujte, že cesty v HTML začínají s `/prijimacky-spolecne/`

**Stránky se nenačítají:**
- Zkontrolujte web server konfiguraci
- Zkontrolujte, že všechny soubory jsou nahrány
- Zkontrolujte oprávnění souborů na serveru


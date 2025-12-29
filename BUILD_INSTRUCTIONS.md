# Instrukce pro build a nasazení

## Problém: "This page could not be found"

Pokud vidíte tuto chybu, zkuste následující:

### 1. Vyčistěte staré buildy

```bash
# Smazat staré buildy
rm -rf .next
rm -rf out
```

### 2. Spusťte nový build

```bash
npm run build
```

### 3. Zkontrolujte basePath

V souboru `next.config.js` je nastaven `basePath: '/prijimacky-spolecne'`.

**Pokud web běží na rootu** (např. `https://prijimacky-spolecne.cz/`):
- Odstraňte nebo zakomentujte řádek `basePath`

**Pokud web běží na subadresáři** (např. `https://www.sontak.eu/prijimacky-spolecne/`):
- Nechte `basePath: '/prijimacky-spolecne'` jak je

### 4. Zkontrolujte, že nové stránky existují

Po buildu by v adresáři `out/sluzby/` měly být:
- `komplexni-balicek/index.html`
- `balicek-5-testu/index.html`

Pokud tam jsou stále staré stránky (`online-testy`, `osobni-testy`), smažte je ručně nebo smažte celý adresář `out` a spusťte build znovu.

### 5. Nahrajte nové soubory

Nahrajte obsah adresáře `out/` na server, přepište všechny staré soubory.

### Troubleshooting

**Build selhává s chybou EPERM:**
- Zavřete všechny běžící procesy Next.js
- Zkuste restartovat terminál
- Spusťte build znovu

**Stránky se nenačítají:**
- Zkontrolujte, že všechny soubory z `out/` jsou na serveru
- Zkontrolujte, že `basePath` odpovídá skutečné URL
- Zkontrolujte konzoli prohlížeče pro chyby 404


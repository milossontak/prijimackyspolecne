# Rychlá oprava pro produkci

## Problém: "This page could not be found" na produkci

**Příčina:** Build v adresáři `out/` je zastaralý - obsahuje staré stránky (`online-testy`, `osobni-testy`), ale chybí nové (`komplexni-balicek`, `balicek-5-testu`).

## Řešení - 3 kroky:

### 1. Vyčistěte a vytvořte nový build

```bash
# Smazat staré buildy
rm -rf .next
rm -rf out

# Vytvořit nový build
npm run build
```

### 2. Zkontrolujte, že nové stránky existují

Po buildu zkontrolujte:
```bash
ls -la out/sluzby/
```

Měly by být:
- `komplexni-balicek/index.html` ✅
- `balicek-5-testu/index.html` ✅
- `index.html` ✅

**NEMĚLY by být:**
- `online-testy/` ❌
- `osobni-testy/` ❌

### 3. Nahrajte nové soubory na server

Nahrajte **celý obsah** adresáře `out/` na server do adresáře `/prijimacky-spolecne/`.

**Důležité:**
- Přepište všechny staré soubory
- Ujistěte se, že adresář `_next/` je také nahrán
- Zkontrolujte, že struktura adresářů je zachována

## Testování lokálně s basePath

Chcete-li otestovat, jak to bude fungovat na produkci:

```bash
# Build
npm run build

# Spusťte lokální server
npm run serve

# Otevřete v prohlížeči
# http://localhost:3000/prijimacky-spolecne/
```

## Pokud to stále nefunguje

1. **Zkontrolujte konzoli prohlížeče** (F12) - uvidíte, které soubory se nenačítají
2. **Zkontrolujte Network tab** - uvidíte 404 chyby
3. **Zkontrolujte, že všechny soubory jsou na serveru** - včetně `_next/` adresáře
4. **Zkontrolujte web server konfiguraci** - viz `PRODUCTION_FIX.md`


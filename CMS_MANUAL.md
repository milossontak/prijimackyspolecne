# Administrace obsahu Přijímačky Společně

Jednoduchý systém pro správu textů na webu.

## Přístup do administrace

1. **URL**: `http://localhost:3001/admin/login`
2. **Heslo**: `admin123`
3. **Platnost přihlášení**: 24 hodin

## Funkce administrace

### 1. Editace obsahu (`/admin`)
- Možnost editovat všechny texty na webu
- Automatické ukládání změn
- Zobrazení aktuálního stavu obsahu
- Sdělení o úspěšném uložení

### 2. Správa záloh (`/admin/backup`)
- Vytváření záloh aktuálního stavu
- Obnovování z předchozích záloh
- Seznam všech vytvořených záloh s datem

## Struktura obsahu

Systém umožňuje editaci těchto sekcí:

### Globální obsah
- **metadata** - SEO titulky a popisky
- **navigation** - Menu v hlavičce
- **footer** - Patička webu

### Hlavní stránka
- **hero** - Hlavní sekce s nadpisy a tlačítky
- **benefits** - Výhody služby
- **testimonials** - Reference a statistiky
- **faq** - Často kladené otázky

### Služby
- **services** - Popisy a ceníky služeb
- **howItWorks** - Proces fungování

### Kontakt
- **contact** - Kontaktní údaje a formulář

## Základní principy

1. **Bezpečnost**: Administrace je chráněna heslem
2. **Backup**: Před každou změnou se automaticky vytváří záloha
3. **Validace**: Základní kontrola datových typů
4. **Uživatelsky přívětivé**: Jednoduché rozhraní bez zbytečných funkcí

## Výhody řešení

- ✅ **Jednoduché** - Žádná databáze, vše v JSON souborech
- ✅ **Rychlé** - Okamžitý přístup k datům
- ✅ **Bezpečné** - Heslo a automatické zálohy
- ✅ **Flexibilní** - Snadné rozšíření o další pole
- ✅ **Offline** - Funguje bez internetového připojení

## Souborová struktura

```
prijimacky-web/
├── data/
│   ├── content.json          # Hlavní data obsahu
│   ├── content.backup.json    # Automatická záloha
│   └── backups/             # Složka se zálohami
├── app/
│   ├── api/
│   │   ├── content/         # API pro správu obsahu
│   │   ├── backup/          # API pro zálohy
│   │   └── restore/         # API pro obnovu
│   └── admin/              # Admin rozhraní
```

## Rozšíření

Systém je připraven na snadné rozšíření:
- Přidání nových polí do `content.json`
- Automatické zobrazení v admin rozhraní
- Možnost přidání validací pravidel
- Integrace s dalšími službami

## Použití v produkci

1. Nastavte prostředí `NODE_ENV=production`
2. Změňte výchozí heslo v middleware
3. Zajistěte zálohu `data/` složky
4. Volte pravidelné zálohování

---

*Tento systém byl vytvořen jako jednoduché řešení pro správu obsahu bez nutnosti komplexních CMS platforem.*
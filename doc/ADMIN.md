# Administrace a editace textů

Všechny texty webu jsou připravené na správu z jednoho místa. Aktuálně se načítají z **`app/content/site.ts`**. Úpravou tohoto souboru změníte texty na celém webu.

## Kde co editovat

| Sekce webu | Soubor | Klíč v `siteContent` |
|------------|--------|----------------------|
| Titulek stránky, popis (SEO) | `app/content/site.ts` | `metadata` |
| Úvodní sekce (varianta 1) | `app/content/site.ts` | `hero` |
| Úvodní sekce (varianta 2) | `app/content/site.ts` | `heroV2` |
| Jak to funguje | `app/content/site.ts` | `howItWorks` |
| Proč my (benefity) | `app/content/site.ts` | `benefits` |
| Reference (testimonials) | `app/content/site.ts` | `testimonials` |
| FAQ | `app/content/site.ts` | `faq` |
| Patička (tagline, kontakt, copyright) | `app/content/site.ts` | `footer` |

Po změně v `site.ts` stačí znovu spustit **`npm run build`** a znovu nasadit výstup z `out/`.

---

## Přidání plnohodnotné administrace

Až budete chtít editovat texty přes prohlížeč (bez zásahu do kódu), máte dvě hlavní cesty:

### 1. Headless CMS (doporučeno)

**Výhody:** Hotové rozhraní, nic neprogramujete, často free tier.

**Postup (obecně):**

1. Zvolit CMS (Strapi, Contentful, Payload CMS atd.) a vytvořit projekt.
2. Definovat schéma (např. dokument „Site settings“ s poli pro hero, FAQ, footer atd.).
3. V projektu přidat klienta daného CMS a funkci, která načte data z API.
4. Na build time volat tuto funkci a předat data komponentám ve stejném tvaru jako `siteContent` – komponenty nemusíte měnit.
5. Pro okamžitý zápis změn bez nutnosti znovu buildu by bylo potřeba přejít z čistého static exportu na dynamické stránky nebo ISR (revalidace).

### 2. Vlastní admin v Next.js

**Výhody:** Vše pod vaší kontrolou, žádná třetí služba.

**Co je potřeba:**

- **Backend:** Next.js API routes (nebo jiný server) – současný režim `output: 'export'` API nepodporuje, takže by bylo nutné buď vypnout static export, nebo mít samostatný backend.
- **Úložiště:** Databáze (např. SQLite, PostgreSQL) nebo úložiště souborů (JSON v repozitáři + zápis přes GitHub API).
- **Stránka `/admin`:** Přihlášení (např. NextAuth nebo jednoduchý login) a formuláře pro úpravu polí z `siteContent`.
- **Nasazení:** Hosting s podporou Node (Vercel, vlastní VPS atd.).

Po zavedení CMS nebo vlastního API stačí v projektu nahradit import z `app/content/site.ts` za načtení z API (při buildu nebo při requestu) – struktura dat může zůstat stejná, takže komponenty dál používají `siteContent.hero`, `siteContent.faq` atd.

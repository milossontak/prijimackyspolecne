/**
 * Centrální zdroj všech editovatelných textů webu.
 * Při přidání administrace (Sanity, Strapi, vlastní API) stačí nahradit
 * import tohoto souboru za načítání z API – komponenty už texty berou odsud.
 */

export const siteContent = {
  metadata: {
    title: 'Přijímačky Společně - Přijímačky bez stresu',
    description:
      'Pomáháme dětem zvládnout přijímací zkoušky na střední školy i gymnázia z 5. třídy s klidem. Realistické testy nanečisto s okamžitou zpětnou vazbou a videem.',
  },

  hero: {
    h1: 'Získejte náskok – zvládneme přijímačky spolu a bez stresu!',
    paragraphs: [
      'Chcete, aby Vaše dítě zvládlo přijímačky v klidu a pohodě? Pak jste tu správně!',
      'Pomůžeme Vašemu dítěti úspěšně složit přijímací zkoušky na střední školy i 4letá gymnázia. Naše realistické testy nanečisto jsou vytvářeny na principu Cermat testů z minulých let a jsou doplněny videem s výsupdateky a vysvětlením jednotlivých úloh.',
      'Zároveň přichází s rychlou zpětnou vazbou, na základě které je jasné a přehledné, co žák zvládá, a na co je naopak potřeba se zaměřit.',
      'Vaše dítě bude vědět, co ho čeká, a Vy budete mít jistotu, že je řádně připravené.',
    ],
    ctaPrimary: 'Vyzkoušejte zdarma',
    ctaSecondary: 'Zobrazit služby',
  },

  heroV2: {
    h1:
      'Chcete mít přijímačky na střední školy bez stresu? Využijte naši reálnou přípravu, která vám dá jistotu.',
    paragraphs: [
      'Pomůžeme studentům z 9. tříd zvládnout přijímací zkoušky na střední školy i gymnázia s klidem.',
      'Realistické testy nanečisto s rychlou zpětnou vazbou a videem, které příklady vysvětlí. Navedeme vás, kde je potřeba přidat.',
      'V průběhu přípravy vysvětlíme, co studenty čeká, a vy budete vědět, že jste připraveni.',
    ],
    ctaPrimary: 'Vyzkoušejte zdarma',
    ctaSecondary: 'Zobrazit služby',
  },

  howItWorks: {
    title: 'Jak připravíme vaše dítě na přijímačky',
    steps: [
      {
        title: 'Vyberte si test',
        description:
          'Vyberte si balíček testů - komplexní balíček 25 testů nebo balíček 5 testů. U komplexního balíčku si můžete pro každý test zvolit, zda ho absolvujete online nebo osobně.',
      },
      {
        title: 'Dítě absolvuje test',
        description:
          'Test probíhá v reálných podmínkách - stejný časový limit a typy úloh jako u skutečných přijímaček.',
      },
      {
        title: 'Získáte detailní zpětnou vazbu',
        description:
          'Okamžité vyhodnocení, video s vysvětlením každé úlohy a porovnání s ostatními studenty vám ukáže, kde je potřeba přidat.',
      },
    ],
  },

  benefits: {
    title: 'Proč Přijímačky Společně?',
    items: [
      {
        title: 'Odbourání stresu',
        description:
          'Dítě ví, co ho čeká, a není překvapené. Reálná simulace přijímaček odstraňuje nejistotu a strach z neznámého. Připraví se v klidu a s jistotou.',
      },
      {
        title: 'Jistota výsledku',
        description:
          'Vidíte přesně, jak na tom vaše dítě je. Každý test přinese jasná data o pokroku, silných a slabých stránkách. Žádné dohady, jen fakta.',
      },
      {
        title: 'Reálná simulace',
        description:
          'Testy probíhají v identických podmínkách jako skutečné přijímačky. Stejný čas, stejné typy úloh, stejná atmosféra. Dítě bude vědět, co ho čeká.',
      },
    ],
  },

  testimonials: {
    title: 'Rodiče nám důvěřují',
    items: [
      {
        text: 'Syn byl před testy ve velkém stresu. Díky Přijímačkám Společně věděl přesně, co ho čeká, a šel na přijímačky s klidem. Úspěšně se dostal na obě školy, kam se hlásil.',
        author: 'Jana Nováková',
        location: 'Praha',
      },
      {
        text: 'Jako rodič jsem ocenila hlavně to, že jsem viděla reálný pokrok dcery. Videa s vysvětlením byly skvělé - dcera pochopila, kde dělala chyby a jak se zlepšit.',
        author: 'Martina Svobodová',
        location: 'Brno',
      },
      {
        text: 'Osobní testy nanečisto byly přesně to, co dcera potřebovala. Atmosféra byla stejná jako u přijímaček, takže pak už nebyla nervózní. Doporučuji všem rodičům.',
        author: 'Petr Dvořák',
        location: 'Ostrava',
      },
    ],
    stats: [
      { number: '500+', label: 'úspěšných studentů' },
      { number: '95%', label: 'spokojenost rodičů' },
      { number: '98%', label: 'úspěšnost u přijímaček' },
    ],
  },

  faq: {
    title: 'Často kladené otázky',
    items: [
      {
        question: 'Na jaké typy přijímaček se můžeme připravit?',
        answer:
          'Nabízíme přípravu na přijímací zkoušky na střední školy (z 9. třídy) i na gymnázia z 5. třídy. Testy pokrývají všechny typy úloh, které se u přijímaček objevují.',
      },
      {
        question: 'Jak dlouho trvá test?',
        answer:
          'Test trvá stejně dlouho jako skutečné přijímací zkoušky - obvykle 60-70 minut pro matematiku a 60-70 minut pro český jazyk. Můžete si vybrat, zda test absolvujete online nebo osobně.',
      },
      {
        question: 'Kdy dostaneme výsledky?',
        answer:
          'Výsledky online testů jsou k dispozici okamžitě po dokončení. U osobních testů nanečisto obdržíte výsledky do 24 hodin. Součástí jsou vždy video vysvětlení a benchmark.',
      },
      {
        question: 'Mohu si vybrat mezi online a osobním testem?',
        answer:
          'Ano, u komplexního balíčku 25 testů si můžete pro každý test zvolit, zda ho absolvujete online nebo osobně. U balíčku 5 testů jsou testy dostupné online.',
      },
      {
        question: 'Jak funguje benchmark?',
        answer:
          'Benchmark porovnává výsledky vašeho dítěte s ostatními studenty, kteří absolvovali stejný test. Uvidíte percentilové zařazení a zjistíte, jak si dítě stojí v rámci celé skupiny.',
      },
    ],
  },

  footer: {
    tagline: 'Pomáháme dětem zvládnout přijímací zkoušky s klidem a jistotou.',
    email: 'info@prijimackyspolecne.cz',
    phone: '+420 737 827 230',
    copyright: '© 2026 Přijímačky Společně. Všechna práva vyhrazena.',
  },
} as const

export type SiteContent = typeof siteContent

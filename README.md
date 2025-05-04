# Komplexáci Gaming Clan Website

Tato webová stránka představuje herní klan Komplexáci z České republiky, specializující se na hry League of Legends a Counter Strike 2.

## Obsah

- [Přehled](#přehled)
- [Struktura souborů](#struktura-souborů)
- [Jak používat](#jak-používat)
- [Obrázky](#obrázky)
- [Komplexáci Trax](#komplexáci-trax)
- [CS2 Zbraňový systém](#cs2-zbraňový-systém)
- [Přizpůsobení](#přizpůsobení)

## Přehled

Webová stránka obsahuje následující sekce:
- Hlavní stránka s logem a úvodním textem
- O našem klanu - stručný popis
- Členové klanu - seznam hráčů a jejich rolí
- Hry - informace o hrách, na které se klan zaměřuje
- Discord - odkaz pro připojení ke komunitě
- Kontakt - kontaktní informace a sociální média

## Struktura souborů

```
projekt/
│
├── index.html          # Hlavní HTML stránka
├── cs2.html            # Stránka pro Counter Strike 2
├── league-of-legends.html # Stránka pro League of Legends
├── css/
│   └── style.css       # CSS styly
├── js/
│   ├── main.js         # JavaScript funkce
│   ├── auth.js         # Autentizační funkce
│   └── firebase-config.js # Konfigurace Firebase
├── img/                # Adresář s obrázky
│   ├── hero-bg.jpg     # Pozadí hlavní sekce
│   ├── discord-bg.jpg  # Pozadí Discord sekce
│   ├── member-placeholder.jpg # Zástupný obrázek člena
│   ├── lol.jpg         # Obrázek League of Legends
│   ├── cs2.jpg         # Obrázek Counter Strike 2
│   ├── maps/           # Adresář s obrázky map CS2
│   │   ├── dust2.jpg    # Mapa Dust II
│   │   ├── mirage.jpg   # Mapa Mirage
│   │   └── inferno.jpg  # Mapa Inferno
│   └── weapons/        # Adresář s obrázky zbraní CS2
│       ├── ak-47.jpg     # AK-47
│       ├── desert-eagle.jpg # Desert Eagle
│       └── ... (další zbraně)
├── PLANNING.md         # Plánovací dokument
├── TASK.md             # Seznam úkolů
└── README.md           # Tento soubor
```

## Jak používat

1. Otevřete soubor `index.html` v libovolném moderním webovém prohlížeči
2. Pro úpravy obsahu editujte text v `index.html`
3. Pro změny stylů upravte soubor `css/style.css`
4. Pro úpravy interaktivity upravte soubor `js/main.js`

## Obrázky

Všechny obrázky v adresáři `img/` jsou momentálně prázdné zástupné soubory. Pro plnou funkčnost webu je třeba je nahradit skutečnými obrázky:

1. `hero-bg.jpg` - pozadí hlavní sekce (doporučeno: tmavý herní motiv, rozlišení cca 1920x1080)
2. `discord-bg.jpg` - pozadí Discord sekce (doporučeno: tmavý herní motiv, rozlišení cca 1920x1080)
3. `member-placeholder.jpg` - profilové obrázky členů (doporučeno: čtvercový formát, min. 300x300)
4. `lol.jpg` - obrázek pro League of Legends (doporučeno: širokoúhlý formát, min. 800x450)
5. `cs2.jpg` - obrázek pro Counter Strike 2 (doporučeno: širokoúhlý formát, min. 800x450)

### Obrázky zbraní CS2

Pro správné zobrazení zbraní na stránce CS2 je potřeba přidat obrázky do adresáře `img/weapons/`. Obrázky by měly mít názvy odpovídající hodnotám v `image` vlastnosti každé zbraně:

- `desert-eagle.jpg` - Desert Eagle
- `usp-s.jpg` - USP-S
- `glock-18.jpg` - Glock-18
- `p250.jpg` - P250
- `five-seven.jpg` - Five-SeveN
- `tec-9.jpg` - Tec-9
- `mp9.jpg` - MP9
- `mac-10.jpg` - MAC-10
- `mp7.jpg` - MP7
- `mp5-sd.jpg` - MP5-SD
- `ump-45.jpg` - UMP-45
- `p90.jpg` - P90
- `pp-bizon.jpg` - PP-Bizon
- `ak-47.jpg` - AK-47
- `m4a4.jpg` - M4A4
- `m4a1-s.jpg` - M4A1-S
- `famas.jpg` - FAMAS
- `galil-ar.jpg` - Galil AR
- `aug.jpg` - AUG
- `sg-553.jpg` - SG 553
- `awp.jpg` - AWP
- `ssg-08.jpg` - SSG 08
- `scar-20.jpg` - SCAR-20/G3SG1

Doporučené rozlišení pro obrázky zbraní je 300x200 pixelů, formát JPG nebo PNG s průhledností.

## Komplexáci Trax

Webová stránka obsahuje přehrávač hudby ve stylu EA Trax z her jako FIFA 07 a NHL 2002. Tato funkce umožňuje přehrávat hudbu na pozadí s vizuálním zobrazením aktuální skladby.

### Přidání hudebních souborů

Pro plnou funkčnost Komplexáci Trax je potřeba přidat hudební soubory do adresáře `audio/`:

1. Ujistěte se, že máte vytvořený adresář `audio/` v kořenovém adresáři projektu
2. Přidejte hudební soubory ve formátu MP3 (doporučené názvy souborů: `track1.mp3`, `track2.mp3`, atd.)
3. Hudební soubory by měly být optimalizovány pro web (128-192kbps)

### Úprava seznamu skladeb

Seznam skladeb můžete upravit v souboru `js/main.js`. Najděte sekci `playlist` a upravte podle potřeby:

```javascript
const playlist = [
    {
        title: "Lední Hokej",
        artist: "HC Sparta Praha",
        file: "audio/track1.mp3"
    },
    // Další skladby...
];
```

### Ovládání přehrávače

Komplexáci Trax nabízí následující ovládací prvky:

- Tlačítko pro zobrazení/skrytí přehrávače (šipka ve spodní části obrazovky)
- Tlačítka pro přehrávání/pozastavení, předchozí a další skladbu
- Ovládání hlasitosti
- Ukazatel průběhu skladby s možností kliknutím přejít na určitou část

Přehrávač se automaticky přepne na další skladbu po dokončení aktuální skladby.

## Přizpůsobení

### Úprava Discord odkazu

V souboru `index.html` najděte řádek obsahující `https://discord.gg/komplexaci` a nahraďte jej skutečným odkazem na Discord server klanu.

### Úprava barevného schématu

Pro změnu barevného schématu upravte proměnné v sekci `:root` v souboru `css/style.css`:

```css
:root {
    --primary-color: #6e4ff6;    /* Hlavní barva */
    --secondary-color: #ff4757;  /* Sekundární barva */
    --accent-color: #00d2ff;     /* Zvýrazňovací barva */
    /* Další barvy... */
}
```

### Sociální média

Pro aktualizaci odkazů na sociální sítě upravte příslušnou sekci v `index.html`.

## CS2 Zbraňový systém

Stránka CS2 obsahuje interaktivní systém pro zobrazení zbraní rozdělených do kategorií. Každá zbraň má své specifické vlastnosti a obrázek.

### Struktura dat zbraní

Data o zbraních jsou uložena v objektu `weaponData` v souboru `cs2.html`. Každá kategorie zbraní obsahuje:

```javascript
'Pistole': {
    title: 'Pistole (Pistols)',
    description: 'Popis kategorie...',
    weapons: [
        {
            name: 'Desert Eagle',
            price: '$600',
            stats: 'Vysoké poškození, přesná na první ránu',
            damage: '231 (hlava s helmou), 58 (tělo s vestou)',
            accuracy: 'Vysoká u prvé ránu, následně klesá',
            team: 'CT i T',
            image: 'img/weapons/desert-eagle.jpg'
        },
        // Další zbraně...
    ]
}
```

### Přidání nové zbraně

Pro přidání nové zbraně do systému:

1. Přidejte obrázek zbraně do adresáře `img/weapons/` (doporučené rozlišení 300x200px)
2. Přidejte nový objekt zbraně do příslušné kategorie v `weaponData`

### Přidání nové kategorie zbraní

Pro přidání nové kategorie zbraní:

1. Přidejte novou kategorii do objektu `weaponData`
2. Přidejte nový prvek seznamu do sekce `.weapon-categories` v HTML

```html
<li class="weapon-category" onclick="showWeapon('NováKategorie')">NováKategorie</li>
```

### Aktualizace hodnot poškození

Hodnoty poškození zbraní jsou aktualizovány na přesná data z CS2. Hodnoty zobrazují poškození s helmou/vestou, což je nejrelevantnější pro kompetitivní hru.

# Komplexáci Gaming Clan Website - Planning Document

## Project Vision

Komplexáci je česká herní komunita specializující se na hry League of Legends a Counter Strike 2. Tato webová stránka slouží jako centrální hub pro členy klanu a fanoušky, kde mohou najít informace o klanu, jeho členech, hrách a připojit se ke komunitě.

## Architektura

### Frontend
- **HTML/CSS/JavaScript**: Statická webová stránka s responzivním designem
- **Stylování**: Vlastní CSS s gradientovým tmavým tématem, akcentové barvy (fialová, červená, modrá)
- **Interaktivita**: Vanilla JavaScript pro interaktivní prvky (modální okna, přehrávač hudby, navigace)

### Backend
- **Firebase Authentication**: Pro správu uživatelských účtů a přihlašování
- **Statický hosting**: Stránka je hostována jako statický web (Netlify/GitHub Pages)

## Technický stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Firebase (Authentication)
- Font Awesome (ikony)
- Google Fonts (Exo 2, Roboto)

## Komponenty a funkce

### Hlavní komponenty
1. **Navigace**: Responzivní menu s odkazy na sekce webu
2. **Hero sekce**: Úvodní sekce s logem a popisem klanu
3. **O nás**: Informace o klanu a jeho historii
4. **Členové**: Přehled členů klanu s detaily
5. **Hry**: Informace o hrách, na které se klan zaměřuje
6. **Discord**: Odkaz na Discord server
7. **Kontakt**: Kontaktní informace a sociální média
8. **Komplexáci Trax**: Hudební přehrávač ve stylu EA Trax
9. **Autentizace**: Přihlašování a registrace uživatelů

### Autentizační systém
- **Přihlášení**: Email/heslo
- **Registrace**: Email/heslo + uživatelské jméno
- **Profil uživatele**: Možnost úpravy profilu a změny hesla
- **Obnovení hesla**: Funkce pro reset zapomenutého hesla
- **Správa stavu**: Automatická detekce přihlášeného uživatele
- **UI komponenty**: Modální okna ve stylu webu pro autentizační formuláře
- **Notifikace**: Systém notifikací pro zpětnou vazbu uživateli

## Omezení a požadavky

### Výkonnostní požadavky
- Rychlé načítání stránky
- Optimalizované obrázky a média
- Responzivní design pro všechna zařízení

### Bezpečnostní požadavky
- Bezpečné ukládání uživatelských údajů (Firebase Auth)
- Ochrana citlivých informací (API klíče)
- Validace vstupů ve formulářích

### Kódové standardy
- Soubory menší než 500 řádků
- Modulární struktura kódu
- Konzistentní formátování a pojmenování
- Dokumentace v kódu

## Budoucí rozšíření

1. **Členská sekce**: Obsah dostupný pouze pro přihlášené členy
2. **Kalendář událostí**: Plánované turnaje a setkání
3. **Fórum/Diskuze**: Možnost komunikace mezi členy
4. **Galerie**: Fotky a videa z turnajů a akcí
5. **Blog**: Novinky a články o hrách a klanu

## Integrace a závislosti

- Firebase projekt pro autentizaci
- CDN pro externí knihovny (Font Awesome, Google Fonts)
- Netlify pro hosting (volitelné)

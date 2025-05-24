// Load the champions data
const fs = require('fs');

// Read the champions data file
const championsData = fs.readFileSync('champions-data.js', 'utf8');

// Extract the allChampions array using regex
const match = championsData.match(/const allChampions = \[([\s\S]*)\];/);
const championsArrayString = '[' + match[1] + ']';
const allChampions = eval(championsArrayString);

// Get all champion names from our data
const ourChampions = allChampions.map(c => c.name).sort();

// Known list of all 170 champions (from League wiki)
const officialChampions = [
    'Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar', 'Ambessa', 'Ammu', 'Anivia', 'Annie', 'Aphelios',
    'Ashe', 'Aurelion Sol', 'Aurora', 'Azir', 'Bard', 'Bel\'Veth', 'Blitzcrank', 'Brand', 'Braum', 'Briar',
    'Caitlyn', 'Camille', 'Cassiopeia', 'Cho\'Gath', 'Corki', 'Darius', 'Diana', 'Dr. Mundo', 'Draven', 'Ekko',
    'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar',
    'Gragas', 'Graves', 'Gwen', 'Hecarim', 'Heimerdinger', 'Hwei', 'Illaoi', 'Irelia', 'Ivern', 'Janna',
    'Jarvan IV', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'K\'Sante', 'Kai\'Sa', 'Kalista', 'Karma', 'Karthus',
    'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'Kha\'Zix', 'Kindred', 'Kled', 'Kog\'Maw', 'LeBlanc',
    'Lee Sin', 'Leona', 'Lillia', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai',
    'Master Yi', 'Mel', 'Milio', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko',
    'Nidalee', 'Nilah', 'Nocturne', 'Nunu & Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke',
    'Qiyana', 'Quinn', 'Rakan', 'Rammus', 'Rek\'Sai', 'Rell', 'Renata Glasc', 'Renekton', 'Rengar', 'Riven',
    'Rumble', 'Ryze', 'Samira', 'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco', 'Shen', 'Shyvana',
    'Singed', 'Sion', 'Sivir', 'Skarner', 'Smolder', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra',
    'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate',
    'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Vel\'Koz', 'Vex', 'Vi', 'Viego',
    'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yone',
    'Yorick', 'Yuumi', 'Zac', 'Zed', 'Zeri', 'Ziggs', 'Zilean', 'Zoe', 'Zyra'
].sort();

console.log('Official champions count:', officialChampions.length);

console.log('=== MISSING CHAMPION ANALYSIS ===');
console.log('Our champions count:', ourChampions.length);
console.log('Official champions count:', officialChampions.length);

// Find missing champions
const missing = officialChampions.filter(champ => !ourChampions.includes(champ));
const extra = ourChampions.filter(champ => !officialChampions.includes(champ));

console.log('\n=== MISSING CHAMPIONS ===');
if (missing.length > 0) {
    missing.forEach(champ => console.log('❌ Missing:', champ));
} else {
    console.log('✅ No missing champions');
}

console.log('\n=== EXTRA CHAMPIONS ===');
if (extra.length > 0) {
    extra.forEach(champ => console.log('⚠️ Extra:', champ));
} else {
    console.log('✅ No extra champions');
}

// Check for name differences
console.log('\n=== POTENTIAL NAME MISMATCHES ===');
ourChampions.forEach(ourChamp => {
    const similar = officialChampions.find(officialChamp =>
        officialChamp.toLowerCase().includes(ourChamp.toLowerCase()) ||
        ourChamp.toLowerCase().includes(officialChamp.toLowerCase())
    );
    if (!similar && !officialChampions.includes(ourChamp)) {
        console.log(`🔍 Check: "${ourChamp}" - might be misspelled`);
    }
});

// Load the champions data
const fs = require('fs');

// Read the champions data file
const championsData = fs.readFileSync('js/champions-data.js', 'utf8');

// Extract the allChampions array using regex
const match = championsData.match(/const allChampions = \[([\s\S]*)\];/);
if (!match) {
    console.error('Could not find allChampions array');
    process.exit(1);
}

// Parse the champions data
const championsArrayString = '[' + match[1] + ']';
let allChampions;

try {
    // Use eval to parse the array (not recommended for production, but fine for this script)
    allChampions = eval(championsArrayString);
} catch (error) {
    console.error('Error parsing champions data:', error);
    process.exit(1);
}

console.log('=== CHAMPION COUNT ANALYSIS ===');
console.log('Total champions:', allChampions.length);

// Count by role
const roleCounts = {
    'Top': 0,
    'Jungle': 0,
    'Mid': 0,
    'ADC': 0,
    'Support': 0
};

const championsByRole = {
    'Top': [],
    'Jungle': [],
    'Mid': [],
    'ADC': [],
    'Support': []
};

// Count by PRIMARY role only (first role in array)
const primaryRoleCounts = {
    'Top': 0,
    'Jungle': 0,
    'Mid': 0,
    'ADC': 0,
    'Support': 0
};

const primaryChampionsByRole = {
    'Top': [],
    'Jungle': [],
    'Mid': [],
    'ADC': [],
    'Support': []
};

allChampions.forEach((champion, index) => {
    if (!champion.roles || !Array.isArray(champion.roles)) {
        console.error(`Champion at index ${index} has invalid roles:`, champion);
        return;
    }

    // Count all roles (for reference)
    champion.roles.forEach(role => {
        if (roleCounts[role] !== undefined) {
            roleCounts[role]++;
            championsByRole[role].push(champion.name);
        } else {
            console.warn(`Unknown role "${role}" for champion ${champion.name}`);
        }
    });

    // Count primary role only
    if (champion.roles.length > 0) {
        const primaryRole = champion.roles[0];
        if (primaryRoleCounts[primaryRole] !== undefined) {
            primaryRoleCounts[primaryRole]++;
            primaryChampionsByRole[primaryRole].push(champion.name);
        }
    }
});

console.log('\n=== ALL ROLE COUNTS (champions can appear in multiple roles) ===');
Object.entries(roleCounts).forEach(([role, count]) => {
    console.log(`${role}: ${count} champions`);
});

console.log('\n=== PRIMARY ROLE COUNTS (each champion counted once) ===');
Object.entries(primaryRoleCounts).forEach(([role, count]) => {
    console.log(`${role}: ${count} champions`);
});

console.log('\n=== VERIFICATION ===');
const totalPrimaryRoleCounts = Object.values(primaryRoleCounts).reduce((sum, count) => sum + count, 0);
console.log('Total champions:', allChampions.length);
console.log('Sum of primary role counts:', totalPrimaryRoleCounts);
console.log('Primary counts match total:', allChampions.length === totalPrimaryRoleCounts ? '✅' : '❌');

// Check for duplicates
const championNames = allChampions.map(c => c.name);
const uniqueNames = [...new Set(championNames)];
console.log('Unique champion names:', uniqueNames.length);
console.log('Duplicates found:', championNames.length !== uniqueNames.length ? '❌' : '✅');

if (championNames.length !== uniqueNames.length) {
    const duplicates = championNames.filter((name, index) => championNames.indexOf(name) !== index);
    console.log('Duplicate champions:', [...new Set(duplicates)]);
}

// Show first and last few champions
console.log('\n=== FIRST 5 CHAMPIONS ===');
allChampions.slice(0, 5).forEach(c => console.log(`${c.name} - ${c.roles.join(', ')}`));

console.log('\n=== LAST 5 CHAMPIONS ===');
allChampions.slice(-5).forEach(c => console.log(`${c.name} - ${c.roles.join(', ')}`));

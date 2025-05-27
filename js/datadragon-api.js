// DataDragon API Service for League of Legends
// Handles all API calls to Riot's DataDragon service

class DataDragonAPI {
    constructor() {
        this.baseUrl = 'https://ddragon.leagueoflegends.com';
        this.version = null;
        this.champions = new Map();
        this.championDetails = new Map();
    }

    // Get the latest version of the game
    async getLatestVersion() {
        if (this.version) return this.version;
        
        try {
            const cacheBuster = new Date().getTime();
            const response = await fetch(`${this.baseUrl}/api/versions.json?v=${cacheBuster}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const versions = await response.json();
            this.version = versions[0]; // Latest version is first
            console.log(`Using DataDragon version: ${this.version}`);
            return this.version;
        } catch (error) {
            console.error('Failed to fetch latest version:', error);
            // Fallback to a known version
            this.version = '15.10.1';
            console.warn(`Using fallback version: ${this.version}`);
            return this.version;
        }
    }

    // Get all champions basic data
    async getAllChampions() {
        try {
            const version = await this.getLatestVersion();
            
            // Add cache busting for hard refresh scenarios
            const cacheBuster = new Date().getTime();
            const url = `${this.baseUrl}/cdn/${version}/data/cs_CZ/champion.json?v=${cacheBuster}`;
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Convert to our format
            const champions = Object.values(data.data).map(champion => ({
                id: champion.id,
                key: champion.key,
                name: champion.name,
                title: champion.title,
                description: champion.blurb,
                splash: `${this.baseUrl}/cdn/img/champion/splash/${champion.id}_0.jpg`,
                square: `${this.baseUrl}/cdn/${version}/img/champion/${champion.id}.png`,
                difficulty: this.mapDifficulty(champion.info.difficulty),
                damage: this.mapDamageType(champion.name, champion.tags),
                survivability: this.mapSurvivability(champion.info.defense),
                roles: this.mapRoles(champion.tags, champion.name),
                rangeType: this.mapRangeType(champion.name, champion.tags),
                championClass: champion.tags[0] || 'Fighter',
                region: this.mapRegion(champion.name)
            }));

            // Cache the champions
            champions.forEach(champion => {
                this.champions.set(champion.id, champion);
            });

            return champions;
        } catch (error) {
            console.error('Failed to fetch champions:', error);
            throw error;
        }
    }

    // Get detailed champion data including abilities
    async getChampionDetails(championId) {
        // Check cache first
        if (this.championDetails.has(championId)) {
            return this.championDetails.get(championId);
        }

        try {
            const version = await this.getLatestVersion();
            const response = await fetch(`${this.baseUrl}/cdn/${version}/data/cs_CZ/champion/${championId}.json`);
            const data = await response.json();
            
            const champion = data.data[championId];
            const details = {
                id: champion.id,
                name: champion.name,
                title: champion.title,
                lore: champion.lore,
                splash: `${this.baseUrl}/cdn/img/champion/splash/${champion.id}_0.jpg`,
                square: `${this.baseUrl}/cdn/${version}/img/champion/${champion.id}.png`,
                passive: {
                    name: champion.passive.name,
                    description: champion.passive.description,
                    image: `${this.baseUrl}/cdn/${version}/img/passive/${champion.passive.image.full}`
                },
                spells: champion.spells.map((spell, index) => ({
                    key: ['Q', 'W', 'E', 'R'][index],
                    name: spell.name,
                    description: spell.description,
                    tooltip: spell.tooltip,
                    cooldown: spell.cooldownBurn,
                    cost: spell.costBurn,
                    range: spell.rangeBurn,
                    image: `${this.baseUrl}/cdn/${version}/img/spell/${spell.image.full}`
                })),
                stats: champion.stats,
                info: champion.info,
                tags: champion.tags,
                partype: champion.partype,
                skins: champion.skins.map(skin => ({
                    id: skin.id,
                    name: skin.name,
                    splash: `${this.baseUrl}/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`,
                    loading: `${this.baseUrl}/cdn/img/champion/loading/${champion.id}_${skin.num}.jpg`
                }))
            };

            // Cache the details
            this.championDetails.set(championId, details);
            return details;
        } catch (error) {
            console.error(`Failed to fetch champion details for ${championId}:`, error);
            throw error;
        }
    }

    // Helper methods to map API values to our format
    mapDifficulty(difficulty) {
        if (difficulty <= 3) return 'Nízká';
        if (difficulty <= 6) return 'Střední';
        if (difficulty <= 8) return 'Vysoká';
        return 'Velmi vysoká';
    }

    mapDamageType(championName, tags) {
        // Champions that primarily deal magic damage
        const magicDamageChampions = new Set([
            // Mages
            'Ahri', 'Anivia', 'Annie', 'Aurelion Sol', 'Aurora', 'Azir', 'Brand', 'Cassiopeia',
            'Heimerdinger', 'Hwei', 'Kassadin', 'Lissandra', 'Lux', 'Malzahar', 'Neeko',
            'Orianna', 'Ryze', 'Swain', 'Syndra', 'Twisted Fate', 'Veigar', 'Vel\'Koz',
            'Vex', 'Viktor', 'Xerath', 'Ziggs', 'Zoe',
            
            // AP Assassins
            'Akali', 'Diana', 'Ekko', 'Evelynn', 'Fizz', 'Katarina', 'LeBlanc', 'Sylas',
            
            // AP Supports
            'Bard', 'Janna', 'Karma', 'Lulu', 'Milio', 'Morgana', 'Nami', 'Seraphine',
            'Sona', 'Soraka', 'Yuumi', 'Zilean', 'Zyra',
            
            // AP Tanks/Fighters
            'Ammu', 'Cho\'Gath', 'Dr. Mundo', 'Galio', 'Gragas', 'Maokai', 'Mordekaiser',
            'Rumble', 'Singed', 'Vladimir', 'Volibear', 'Zac',
            
            // Hybrid but primarily magic
            'Corki', 'Kayle', 'Teemo', 'Shyvana', 'Warwick'
        ]);

        // Champions that primarily deal physical damage
        const physicalDamageChampions = new Set([
            // ADCs
            'Aphelios', 'Ashe', 'Caitlyn', 'Draven', 'Ezreal', 'Jhin', 'Jinx', 'Kai\'Sa',
            'Kalista', 'Kog\'Maw', 'Lucian', 'Miss Fortune', 'Nilah', 'Samira', 'Sivir',
            'Smolder', 'Tristana', 'Twitch', 'Varus', 'Vayne', 'Xayah', 'Zeri',
            
            // AD Assassins
            'Kha\'Zix', 'Naafiri', 'Nocturne', 'Pyke', 'Qiyana', 'Rengar', 'Shaco', 'Talon', 'Zed',
            
            // AD Fighters/Bruisers
            'Aatrox', 'Ambessa', 'Camille', 'Darius', 'Fiora', 'Gangplank', 'Garen', 'Gwen',
            'Illaoi', 'Irelia', 'Jax', 'Jayce', 'K\'Sante', 'Kled', 'Master Yi', 'Olaf',
            'Pantheon', 'Quinn', 'Renekton', 'Riven', 'Sett', 'Trundle', 'Tryndamere',
            'Urgot', 'Wukong', 'Yasuo', 'Yone', 'Yorick',
            
            // Tanks (mostly physical)
            'Alistar', 'Braum', 'Leona', 'Malphite', 'Nautilus', 'Ornn', 'Poppy', 'Rammus',
            'Rell', 'Sejuani', 'Shen', 'Sion', 'Tahm Kench', 'Taric', 'Thresh',
            
            // Junglers (mostly physical)
            'Bel\'Veth', 'Briar', 'Graves', 'Hecarim', 'Jarvan IV', 'Kayn', 'Kindred',
            'Lee Sin', 'Lillia', 'Nidalee', 'Nunu & Willump', 'Rek\'Sai', 'Skarner',
            'Udyr', 'Vi', 'Viego', 'Xin Zhao'
        ]);

        // Check explicit mappings first
        if (magicDamageChampions.has(championName)) {
            return 'Magic';
        }
        
        if (physicalDamageChampions.has(championName)) {
            return 'Physical';
        }

        // Fallback to tag-based logic
        if (tags.includes('Mage')) {
            return 'Magic';
        }
        
        if (tags.includes('Marksman') || tags.includes('Fighter') || tags.includes('Assassin')) {
            return 'Physical';
        }

        // Default fallback for tanks and supports
        if (tags.includes('Tank') || tags.includes('Support')) {
            return 'Physical'; // Most tanks are physical-based
        }

        // Final fallback
        return 'Physical';
    }

    mapSurvivability(defense) {
        if (defense <= 3) return 'Nízká';
        if (defense <= 6) return 'Střední';
        if (defense <= 8) return 'Vysoká';
        return 'Velmi vysoká';
    }

    // Map champions to their actual draft positions based on meta and common usage
    mapRoles(tags, championName) {
        // Comprehensive champion position mapping based on current meta
        const championPositions = {
            // Top Lane Champions
            'Aatrox': ['Top'],
            'Akali': ['Mid', 'Top'],
            'Ambessa': ['Top'],
            'Camille': ['Top'],
            'Cho\'Gath': ['Top'],
            'Darius': ['Top'],
            'Dr. Mundo': ['Top'],
            'Fiora': ['Top'],
            'Gangplank': ['Top'],
            'Garen': ['Top'],
            'Gnar': ['Top'],
            'Gwen': ['Top'],
            'Illaoi': ['Top'],
            'Irelia': ['Top', 'Mid'],
            'Jax': ['Top', 'Jungle'],
            'Jayce': ['Top', 'Mid'],
            'K\'Sante': ['Top'],
            'Kayle': ['Top'],
            'Kennen': ['Top'],
            'Kled': ['Top'],
            'Malphite': ['Top'],
            'Maokai': ['Top', 'Support'],
            'Mordekaiser': ['Top'],
            'Nasus': ['Top'],
            'Olaf': ['Top', 'Jungle'],
            'Ornn': ['Top'],
            'Pantheon': ['Top', 'Mid', 'Support'],
            'Poppy': ['Top', 'Jungle'],
            'Quinn': ['Top'],
            'Renekton': ['Top'],
            'Rengar': ['Top', 'Jungle'],
            'Riven': ['Top'],
            'Rumble': ['Top'],
            'Sett': ['Top'],
            'Shen': ['Top'],
            'Singed': ['Top'],
            'Sion': ['Top'],
            'Teemo': ['Top'],
            'Trundle': ['Top', 'Jungle'],
            'Tryndamere': ['Top'],
            'Urgot': ['Top'],
            'Vladimir': ['Top', 'Mid'],
            'Volibear': ['Top', 'Jungle'],
            'Wukong': ['Top', 'Jungle'],
            'Yasuo': ['Mid', 'Top'],
            'Yorick': ['Top'],

            // Jungle Champions
            'Amumu': ['Jungle'],
            'Bel\'Veth': ['Jungle'],
            'Briar': ['Jungle'],
            'Diana': ['Mid', 'Jungle'],
            'Ekko': ['Mid', 'Jungle'],
            'Elise': ['Jungle'],
            'Evelynn': ['Jungle'],
            'Fiddlesticks': ['Jungle'],
            'Gragas': ['Jungle'],
            'Graves': ['Jungle'],
            'Hecarim': ['Jungle'],
            'Ivern': ['Jungle'],
            'Jarvan IV': ['Jungle'],
            'Karthus': ['Jungle'],
            'Kayn': ['Jungle'],
            'Kha\'Zix': ['Jungle'],
            'Kindred': ['Jungle'],
            'Lee Sin': ['Jungle'],
            'Lillia': ['Jungle'],
            'Master Yi': ['Jungle'],
            'Nidalee': ['Jungle'],
            'Nocturne': ['Jungle'],
            'Nunu & Willump': ['Jungle'],
            'Rammus': ['Jungle'],
            'Rek\'Sai': ['Jungle'],
            'Sejuani': ['Jungle'],
            'Shaco': ['Jungle'],
            'Shyvana': ['Jungle'],
            'Skarner': ['Jungle'],
            'Taliyah': ['Jungle'],
            'Udyr': ['Jungle'],
            'Vi': ['Jungle'],
            'Viego': ['Jungle'],
            'Warwick': ['Jungle'],
            'Xin Zhao': ['Jungle'],
            'Zac': ['Jungle'],

            // Mid Lane Champions
            'Ahri': ['Mid'],
            'Anivia': ['Mid'],
            'Annie': ['Mid'],
            'Aurelion Sol': ['Mid'],
            'Aurora': ['Mid'],
            'Azir': ['Mid'],
            'Brand': ['Mid', 'Support'],
            'Cassiopeia': ['Mid'],
            'Corki': ['Mid', 'ADC'],
            'Fizz': ['Mid'],
            'Galio': ['Mid'],
            'Heimerdinger': ['Mid'],
            'Hwei': ['Mid'],
            'Kassadin': ['Mid'],
            'Katarina': ['Mid'],
            'LeBlanc': ['Mid'],
            'Lissandra': ['Mid'],
            'Lux': ['Mid', 'Support'],
            'Malzahar': ['Mid'],
            'Naafiri': ['Mid'],
            'Neeko': ['Mid'],
            'Orianna': ['Mid'],
            'Qiyana': ['Mid'],
            'Ryze': ['Mid'],
            'Swain': ['Mid', 'Support'],
            'Sylas': ['Mid'],
            'Syndra': ['Mid'],
            'Talon': ['Mid'],
            'Twisted Fate': ['Mid'],
            'Veigar': ['Mid'],
            'Vel\'Koz': ['Mid', 'Support'],
            'Vex': ['Mid'],
            'Viktor': ['Mid'],
            'Xerath': ['Mid', 'Support'],
            'Yone': ['Mid'],
            'Zed': ['Mid'],
            'Ziggs': ['Mid'],
            'Zoe': ['Mid'],

            // ADC Champions
            'Aphelios': ['ADC'],
            'Ashe': ['ADC'],
            'Caitlyn': ['ADC'],
            'Draven': ['ADC'],
            'Ezreal': ['ADC'],
            'Jhin': ['ADC'],
            'Jinx': ['ADC'],
            'Kai\'Sa': ['ADC'],
            'Kalista': ['ADC'],
            'Kog\'Maw': ['ADC'],
            'Lucian': ['ADC'],
            'Miss Fortune': ['ADC'],
            'Nilah': ['ADC'],
            'Samira': ['ADC'],
            'Sivir': ['ADC'],
            'Smolder': ['ADC'],
            'Tristana': ['ADC'],
            'Twitch': ['ADC'],
            'Varus': ['ADC'],
            'Vayne': ['ADC'],
            'Xayah': ['ADC'],
            'Zeri': ['ADC'],

            // Support Champions
            'Alistar': ['Support'],
            'Bard': ['Support'],
            'Blitzcrank': ['Support'],
            'Braum': ['Support'],
            'Janna': ['Support'],
            'Karma': ['Support'],
            'Leona': ['Support'],
            'Lulu': ['Support'],
            'Milio': ['Support'],
            'Morgana': ['Support'],
            'Nami': ['Support'],
            'Nautilus': ['Support'],
            'Pyke': ['Support'],
            'Rakan': ['Support'],
            'Rell': ['Support'],
            'Renata Glasc': ['Support'],
            'Senna': ['Support'],
            'Seraphine': ['Support'],
            'Sona': ['Support'],
            'Soraka': ['Support'],
            'Tahm Kench': ['Top', 'Support'],
            'Taric': ['Support'],
            'Thresh': ['Support'],
            'Yuumi': ['Support'],
            'Zilean': ['Support'],
            'Zyra': ['Support'],

            // Special cases
            'Mel': ['Mid', 'Support']
        };

        // Return mapped positions or fallback to class-based mapping
        if (championPositions[championName]) {
            return championPositions[championName];
        }

        // Fallback to class-based mapping if champion not found
        const roleMapping = {
            'Fighter': ['Top'],
            'Tank': ['Top'],
            'Mage': ['Mid'],
            'Assassin': ['Mid'],
            'Marksman': ['ADC'],
            'Support': ['Support']
        };

        const roles = [];
        tags.forEach(tag => {
            if (roleMapping[tag]) {
                roleMapping[tag].forEach(role => {
                    if (!roles.includes(role)) {
                        roles.push(role);
                    }
                });
            }
        });

        return roles.length > 0 ? roles : ['Top'];
    }

    // Map champions to their range type (Melee/Ranged)
    mapRangeType(championName, tags) {
        // Comprehensive mapping of champions to their range types
        const rangedChampions = new Set([
            // ADC Champions (all ranged)
            'Aphelios', 'Ashe', 'Caitlyn', 'Corki', 'Draven', 'Ezreal', 'Jhin', 'Jinx',
            'Kai\'Sa', 'Kalista', 'Kog\'Maw', 'Lucian', 'Miss Fortune', 'Nilah', 'Samira',
            'Sivir', 'Smolder', 'Tristana', 'Twitch', 'Varus', 'Vayne', 'Xayah', 'Zeri',
            
            // Mage Champions (mostly ranged)
            'Ahri', 'Anivia', 'Annie', 'Aurelion Sol', 'Aurora', 'Azir', 'Brand', 'Cassiopeia',
            'Heimerdinger', 'Hwei', 'Kassadin', 'Lissandra', 'Lux', 'Malzahar', 'Neeko',
            'Orianna', 'Ryze', 'Swain', 'Syndra', 'Twisted Fate', 'Veigar', 'Vel\'Koz',
            'Vex', 'Viktor', 'Xerath', 'Ziggs', 'Zoe',
            
            // Support Champions (many ranged)
            'Bard', 'Janna', 'Karma', 'Lulu', 'Milio', 'Morgana', 'Nami', 'Renata Glasc',
            'Senna', 'Seraphine', 'Sona', 'Soraka', 'Yuumi', 'Zilean', 'Zyra',
            
            // Other Ranged Champions
            'Azir', 'Elise', 'Gnar', 'Graves', 'Jayce', 'Kayle', 'Kennen', 'Kindred',
            'Nidalee', 'Quinn', 'Rumble', 'Teemo', 'Urgot', 'Vladimir'
        ]);

        // Special cases that might be confusing
        const meleeChampions = new Set([
            // All melee champions not in ranged list
            'Aatrox', 'Akali', 'Alistar', 'Ambessa', 'Ammu', 'Bel\'Veth', 'Blitzcrank',
            'Braum', 'Briar', 'Camille', 'Cho\'Gath', 'Darius', 'Diana', 'Dr. Mundo',
            'Ekko', 'Evelynn', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank',
            'Garen', 'Gragas', 'Gwen', 'Hecarim', 'Illaoi', 'Irelia', 'Ivern', 'Jax',
            'Jarvan IV', 'K\'Sante', 'Karthus', 'Katarina', 'Kayn', 'Kha\'Zix', 'Kled',
            'Lee Sin', 'Leona', 'Lillia', 'Malphite', 'Maokai', 'Master Yi', 'Mordekaiser',
            'Naafiri', 'Nasus', 'Nautilus', 'Nocturne', 'Nunu & Willump', 'Olaf', 'Ornn',
            'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Rakan', 'Rammus', 'Rek\'Sai', 'Rell',
            'Renekton', 'Rengar', 'Riven', 'Sejuani', 'Sett', 'Shaco', 'Shen', 'Shyvana',
            'Singed', 'Sion', 'Skarner', 'Sylas', 'Tahm Kench', 'Talon', 'Taric', 'Thresh',
            'Trundle', 'Tryndamere', 'Udyr', 'Vi', 'Viego', 'Volibear', 'Warwick',
            'Wukong', 'Xin Zhao', 'Yasuo', 'Yone', 'Yorick', 'Zac', 'Zed'
        ]);

        // Check explicit mappings first
        if (rangedChampions.has(championName)) {
            return 'Ranged';
        }
        
        if (meleeChampions.has(championName)) {
            return 'Melee';
        }

        // Fallback to tag-based logic
        if (tags.includes('Marksman') || tags.includes('Mage')) {
            return 'Ranged';
        }
        
        if (tags.includes('Fighter') || tags.includes('Tank') || tags.includes('Assassin')) {
            return 'Melee';
        }

        // Default fallback
        return 'Melee';
    }

    // Map champions to their regions based on lore
    mapRegion(championName) {
        const championRegions = {
            // Bandle City
            'Corki': 'Bandle City',
            'Heimerdinger': 'Bandle City',
            'Lulu': 'Bandle City',
            'Poppy': 'Bandle City',
            'Rumble': 'Bandle City',
            'Teemo': 'Bandle City',
            'Tristana': 'Bandle City',
            'Veigar': 'Bandle City',
            'Vex': 'Bandle City',
            'Yuumi': 'Bandle City',
            'Ziggs': 'Bandle City',

            // Bilgewater
            'Fizz': 'Bilgewater',
            'Gangplank': 'Bilgewater',
            'Graves': 'Bilgewater',
            'Illaoi': 'Bilgewater',
            'Miss Fortune': 'Bilgewater',
            'Nautilus': 'Bilgewater',
            'Nilah': 'Bilgewater',
            'Pyke': 'Bilgewater',
            'Tahm Kench': 'Bilgewater',
            'Twisted Fate': 'Bilgewater',

            // Demacia
            'Fiora': 'Demacia',
            'Galio': 'Demacia',
            'Garen': 'Demacia',
            'Jarvan IV': 'Demacia',
            'Lucian': 'Demacia',
            'Lux': 'Demacia',
            'Morgana': 'Demacia',
            'Poppy': 'Demacia',
            'Quinn': 'Demacia',
            'Shyvana': 'Demacia',
            'Sona': 'Demacia',
            'Sylas': 'Demacia',
            'Vayne': 'Demacia',
            'Xin Zhao': 'Demacia',

            // Freljord
            'Anivia': 'Freljord',
            'Ashe': 'Freljord',
            'Aurora': 'Freljord',
            'Brand': 'Freljord',
            'Braum': 'Freljord',
            'Gnar': 'Freljord',
            'Gragas': 'Freljord',
            'Lissandra': 'Freljord',
            'Nunu & Willump': 'Freljord',
            'Olaf': 'Freljord',
            'Ornn': 'Freljord',
            'Sejuani': 'Freljord',
            'Trundle': 'Freljord',
            'Tryndamere': 'Freljord',
            'Udyr': 'Freljord',
            'Volibear': 'Freljord',

            // Ionia
            'Ahri': 'Ionia',
            'Akali': 'Ionia',
            'Hwei': 'Ionia',
            'Irelia': 'Ionia',
            'Ivern': 'Ionia',
            'Jhin': 'Ionia',
            'Karma': 'Ionia',
            'Kayn': 'Ionia',
            'Kennen': 'Ionia',
            'Lee Sin': 'Ionia',
            'Lillia': 'Ionia',
            'Master Yi': 'Ionia',
            'Rakan': 'Ionia',
            'Sett': 'Ionia',
            'Shen': 'Ionia',
            'Syndra': 'Ionia',
            'Varus': 'Ionia',
            'Wukong': 'Ionia',
            'Xayah': 'Ionia',
            'Yasuo': 'Ionia',
            'Yone': 'Ionia',
            'Zed': 'Ionia',

            // Ixtal
            'Malphite': 'Ixtal',
            'Milio': 'Ixtal',
            'Neeko': 'Ixtal',
            'Nidalee': 'Ixtal',
            'Qiyana': 'Ixtal',
            'Rengar': 'Ixtal',
            'Skarner': 'Ixtal',
            'Smolder': 'Ixtal',
            'Zilean': 'Ixtal',
            'Zyra': 'Ixtal',

            // Noxus
            'Ambessa': 'Noxus',
            'Annie': 'Noxus',
            'Briar': 'Noxus',
            'Cassiopeia': 'Noxus',
            'Darius': 'Noxus',
            'Draven': 'Noxus',
            'Katarina': 'Noxus',
            'Kled': 'Noxus',
            'LeBlanc': 'Noxus',
            'Mordekaiser': 'Noxus',
            'Rell': 'Noxus',
            'Riven': 'Noxus',
            'Samira': 'Noxus',
            'Sion': 'Noxus',
            'Swain': 'Noxus',
            'Talon': 'Noxus',
            'Vladimir': 'Noxus',

            // Piltover
            'Caitlyn': 'Piltover',
            'Camille': 'Piltover',
            'Ezreal': 'Piltover',
            'Heimerdinger': 'Piltover',
            'Jayce': 'Piltover',
            'Mel': 'Piltover',
            'Orianna': 'Piltover',
            'Seraphine': 'Piltover',
            'Vi': 'Piltover',

            // Shadow Isles
            'Elise': 'Shadow Isles',
            'Gwen': 'Shadow Isles',
            'Hecarim': 'Shadow Isles',
            'Kalista': 'Shadow Isles',
            'Karthus': 'Shadow Isles',
            'Maokai': 'Shadow Isles',
            'Senna': 'Shadow Isles',
            'Thresh': 'Shadow Isles',
            'Viego': 'Shadow Isles',
            'Yorick': 'Shadow Isles',

            // Shurima
            'Akshan': 'Shurima',
            'Amumu': 'Shurima',
            'Azir': 'Shurima',
            'K\'Sante': 'Shurima',
            'Naafiri': 'Shurima',
            'Nasus': 'Shurima',
            'Rammus': 'Shurima',
            'Renekton': 'Shurima',
            'Sivir': 'Shurima',
            'Taliyah': 'Shurima',
            'Xerath': 'Shurima',

            // Targon
            'Aphelios': 'Targon',
            'Aurelion Sol': 'Targon',
            'Diana': 'Targon',
            'Kayle': 'Targon',
            'Leona': 'Targon',
            'Pantheon': 'Targon',
            'Soraka': 'Targon',
            'Taric': 'Targon',
            'Zoe': 'Targon',

            // Void
            'Bel\'Veth': 'Void',
            'Cho\'Gath': 'Void',
            'Kai\'Sa': 'Void',
            'Kassadin': 'Void',
            'Kha\'Zix': 'Void',
            'Kog\'Maw': 'Void',
            'Malzahar': 'Void',
            'Rek\'Sai': 'Void',
            'Vel\'Koz': 'Void',

            // Zaun
            'Blitzcrank': 'Zaun',
            'Dr. Mundo': 'Zaun',
            'Ekko': 'Zaun',
            'Janna': 'Zaun',
            'Jinx': 'Zaun',
            'Renata Glasc': 'Zaun',
            'Singed': 'Zaun',
            'Twitch': 'Zaun',
            'Urgot': 'Zaun',
            'Viktor': 'Zaun',
            'Warwick': 'Zaun',
            'Zac': 'Zaun',
            'Zeri': 'Zaun',

            // Runeterra (multi-regional or unknown)
            'Alistar': 'Runeterra',
            'Bard': 'Runeterra',
            'Evelynn': 'Runeterra',
            'Fiddlesticks': 'Runeterra',
            'Kindred': 'Runeterra',
            'Nami': 'Runeterra',
            'Nocturne': 'Runeterra',
            'Ryze': 'Runeterra',
            'Shaco': 'Runeterra'
        };

        return championRegions[championName] || 'Runeterra';
    }

    // Get champion by ID
    getChampion(championId) {
        return this.champions.get(championId);
    }

    // Search champions
    searchChampions(query) {
        const searchTerm = query.toLowerCase();
        return Array.from(this.champions.values()).filter(champion =>
            champion.name.toLowerCase().includes(searchTerm) ||
            champion.title.toLowerCase().includes(searchTerm) ||
            champion.description.toLowerCase().includes(searchTerm)
        );
    }
}

// Create global instance
const datadragonAPI = new DataDragonAPI();

// Export for use in other files
if (typeof window !== 'undefined') {
    window.datadragonAPI = datadragonAPI;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DataDragonAPI, datadragonAPI };
}
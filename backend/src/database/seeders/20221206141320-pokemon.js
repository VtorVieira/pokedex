module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('pokemons', [
      {
        "id": 1,
        "name": "bulbasaur",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
        "height": 7,
        "weight": 69,
        "types": [
          "grass",
          "poison"
        ],
        "abilities": [
          "overgrow",
          "chlorophyll"
        ]
      },
      {
        "id": 2,
        "name": "ivysaur",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
        "height": 10,
        "weight": 130,
        "types": [
          "grass",
          "poison"
        ],
        "abilities": [
          "overgrow",
          "chlorophyll"
        ]
      },
      {
        "id": 3,
        "name": "venusaur",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
        "height": 20,
        "weight": 1000,
        "types": [
          "grass",
          "poison"
        ],
        "abilities": [
          "overgrow",
          "chlorophyll"
        ]
      },
      {
        "id": 4,
        "name": "charmander",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
        "height": 6,
        "weight": 85,
        "types": [
          "fire"
        ],
        "abilities": [
          "blaze",
          "solar-power"
        ]
      },
      {
        "id": 5,
        "name": "charmeleon",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
        "height": 11,
        "weight": 190,
        "types": [
          "fire"
        ],
        "abilities": [
          "blaze",
          "solar-power"
        ]
      },
      {
        "id": 6,
        "name": "charizard",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
        "height": 17,
        "weight": 905,
        "types": [
          "fire",
          "flying"
        ],
        "abilities": [
          "blaze",
          "solar-power"
        ]
      },
      {
        "id": 7,
        "name": "squirtle",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
        "height": 5,
        "weight": 90,
        "types": [
          "water"
        ],
        "abilities": [
          "torrent",
          "rain-dish"
        ]
      },
      {
        "id": 8,
        "name": "wartortle",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png",
        "height": 10,
        "weight": 225,
        "types": [
          "water"
        ],
        "abilities": [
          "torrent",
          "rain-dish"
        ]
      },
      {
        "id": 9,
        "name": "blastoise",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
        "height": 16,
        "weight": 855,
        "types": [
          "water"
        ],
        "abilities": [
          "torrent",
          "rain-dish"
        ]
      },
      {
        "id": 10,
        "name": "caterpie",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png",
        "height": 3,
        "weight": 29,
        "types": [
          "bug"
        ],
        "abilities": [
          "shield-dust",
          "run-away"
        ]
      },
      {
        "id": 11,
        "name": "metapod",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/11.png",
        "height": 7,
        "weight": 99,
        "types": [
          "bug"
        ],
        "abilities": [
          "shed-skin"
        ]
      },
      {
        "id": 12,
        "name": "butterfree",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/12.png",
        "height": 11,
        "weight": 320,
        "types": [
          "bug",
          "flying"
        ],
        "abilities": [
          "compound-eyes",
          "tinted-lens"
        ]
      },
      {
        "id": 13,
        "name": "weedle",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png",
        "height": 3,
        "weight": 32,
        "types": [
          "bug",
          "poison"
        ],
        "abilities": [
          "shield-dust",
          "run-away"
        ]
      },
      {
        "id": 14,
        "name": "kakuna",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png",
        "height": 6,
        "weight": 100,
        "types": [
          "bug",
          "poison"
        ],
        "abilities": [
          "shed-skin"
        ]
      },
      {
        "id": 15,
        "name": "beedrill",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png",
        "height": 10,
        "weight": 295,
        "types": [
          "bug",
          "poison"
        ],
        "abilities": [
          "swarm",
          "sniper"
        ]
      },
      {
        "id": 16,
        "name": "pidgey",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png",
        "height": 3,
        "weight": 18,
        "types": [
          "normal",
          "flying"
        ],
        "abilities": [
          "keen-eye",
          "tangled-feet",
          "big-pecks"
        ]
      },
      {
        "id": 17,
        "name": "pidgeotto",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/17.png",
        "height": 11,
        "weight": 300,
        "types": [
          "normal",
          "flying"
        ],
        "abilities": [
          "keen-eye",
          "tangled-feet",
          "big-pecks"
        ]
      },
      {
        "id": 18,
        "name": "pidgeot",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png",
        "height": 15,
        "weight": 395,
        "types": [
          "normal",
          "flying"
        ],
        "abilities": [
          "keen-eye",
          "tangled-feet",
          "big-pecks"
        ]
      },
      {
        "id": 19,
        "name": "rattata",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/19.png",
        "height": 3,
        "weight": 35,
        "types": [
          "normal"
        ],
        "abilities": [
          "run-away",
          "guts",
          "hustle"
        ]
      },
      {
        "id": 20,
        "name": "raticate",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
        "height": 7,
        "weight": 185,
        "types": [
          "normal"
        ],
        "abilities": [
          "run-away",
          "guts",
          "hustle"
        ]
      },
      {
        "id": 21,
        "name": "spearow",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/21.png",
        "height": 3,
        "weight": 20,
        "types": [
          "normal",
          "flying"
        ],
        "abilities": [
          "keen-eye",
          "sniper"
        ]
      },
      {
        "id": 22,
        "name": "fearow",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/22.png",
        "height": 12,
        "weight": 380,
        "types": [
          "normal",
          "flying"
        ],
        "abilities": [
          "keen-eye",
          "sniper"
        ]
      },
      {
        "id": 23,
        "name": "ekans",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/23.png",
        "height": 20,
        "weight": 69,
        "types": [
          "poison"
        ],
        "abilities": [
          "intimidate",
          "shed-skin",
          "unnerve"
        ]
      },
      {
        "id": 24,
        "name": "arbok",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/24.png",
        "height": 35,
        "weight": 650,
        "types": [
          "poison"
        ],
        "abilities": [
          "intimidate",
          "shed-skin",
          "unnerve"
        ]
      },
      {
        "id": 25,
        "name": "pikachu",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
        "height": 4,
        "weight": 60,
        "types": [
          "electric"
        ],
        "abilities": [
          "static",
          "lightning-rod"
        ]
      },
      {
        "id": 26,
        "name": "raichu",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png",
        "height": 8,
        "weight": 300,
        "types": [
          "electric"
        ],
        "abilities": [
          "static",
          "lightning-rod"
        ]
      },
      {
        "id": 27,
        "name": "sandshrew",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/27.png",
        "height": 6,
        "weight": 120,
        "types": [
          "ground"
        ],
        "abilities": [
          "sand-veil",
          "sand-rush"
        ]
      },
      {
        "id": 28,
        "name": "sandslash",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/28.png",
        "height": 10,
        "weight": 295,
        "types": [
          "ground"
        ],
        "abilities": [
          "sand-veil",
          "sand-rush"
        ]
      },
      {
        "id": 29,
        "name": "nidoran-f",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/29.png",
        "height": 4,
        "weight": 70,
        "types": [
          "poison"
        ],
        "abilities": [
          "poison-point",
          "rivalry",
          "hustle"
        ]
      },
      {
        "id": 30,
        "name": "nidorina",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/30.png",
        "height": 8,
        "weight": 200,
        "types": [
          "poison"
        ],
        "abilities": [
          "poison-point",
          "rivalry",
          "hustle"
        ]
      },
      {
        "id": 31,
        "name": "nidoqueen",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/31.png",
        "height": 13,
        "weight": 600,
        "types": [
          "poison",
          "ground"
        ],
        "abilities": [
          "poison-point",
          "rivalry",
          "sheer-force"
        ]
      },
      {
        "id": 32,
        "name": "nidoran-m",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/32.png",
        "height": 5,
        "weight": 90,
        "types": [
          "poison"
        ],
        "abilities": [
          "poison-point",
          "rivalry",
          "hustle"
        ]
      },
      {
        "id": 33,
        "name": "nidorino",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/33.png",
        "height": 9,
        "weight": 195,
        "types": [
          "poison"
        ],
        "abilities": [
          "poison-point",
          "rivalry",
          "hustle"
        ]
      },
      {
        "id": 34,
        "name": "nidoking",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/34.png",
        "height": 14,
        "weight": 620,
        "types": [
          "poison",
          "ground"
        ],
        "abilities": [
          "poison-point",
          "rivalry",
          "sheer-force"
        ]
      },
      {
        "id": 35,
        "name": "clefairy",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png",
        "height": 6,
        "weight": 75,
        "types": [
          "fairy"
        ],
        "abilities": [
          "cute-charm",
          "magic-guard",
          "friend-guard"
        ]
      },
      {
        "id": 36,
        "name": "clefable",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/36.png",
        "height": 13,
        "weight": 400,
        "types": [
          "fairy"
        ],
        "abilities": [
          "cute-charm",
          "magic-guard",
          "unaware"
        ]
      },
      {
        "id": 37,
        "name": "vulpix",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/37.png",
        "height": 6,
        "weight": 99,
        "types": [
          "fire"
        ],
        "abilities": [
          "flash-fire",
          "drought"
        ]
      },
      {
        "id": 38,
        "name": "ninetales",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/38.png",
        "height": 11,
        "weight": 199,
        "types": [
          "fire"
        ],
        "abilities": [
          "flash-fire",
          "drought"
        ]
      },
      {
        "id": 39,
        "name": "jigglypuff",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/39.png",
        "height": 5,
        "weight": 55,
        "types": [
          "normal",
          "fairy"
        ],
        "abilities": [
          "cute-charm",
          "competitive",
          "friend-guard"
        ]
      },
      {
        "id": 40,
        "name": "wigglytuff",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/40.png",
        "height": 10,
        "weight": 120,
        "types": [
          "normal",
          "fairy"
        ],
        "abilities": [
          "cute-charm",
          "competitive",
          "frisk"
        ]
      },
      {
        "id": 41,
        "name": "zubat",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/41.png",
        "height": 8,
        "weight": 75,
        "types": [
          "poison",
          "flying"
        ],
        "abilities": [
          "inner-focus",
          "infiltrator"
        ]
      },
      {
        "id": 42,
        "name": "golbat",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/42.png",
        "height": 16,
        "weight": 550,
        "types": [
          "poison",
          "flying"
        ],
        "abilities": [
          "inner-focus",
          "infiltrator"
        ]
      },
      {
        "id": 43,
        "name": "oddish",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/43.png",
        "height": 5,
        "weight": 54,
        "types": [
          "grass",
          "poison"
        ],
        "abilities": [
          "chlorophyll",
          "run-away"
        ]
      },
      {
        "id": 44,
        "name": "gloom",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/44.png",
        "height": 8,
        "weight": 86,
        "types": [
          "grass",
          "poison"
        ],
        "abilities": [
          "chlorophyll",
          "stench"
        ]
      },
      {
        "id": 45,
        "name": "vileplume",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/45.png",
        "height": 12,
        "weight": 186,
        "types": [
          "grass",
          "poison"
        ],
        "abilities": [
          "chlorophyll",
          "effect-spore"
        ]
      },
      {
        "id": 46,
        "name": "paras",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/46.png",
        "height": 3,
        "weight": 54,
        "types": [
          "bug",
          "grass"
        ],
        "abilities": [
          "effect-spore",
          "dry-skin",
          "damp"
        ]
      },
      {
        "id": 47,
        "name": "parasect",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/47.png",
        "height": 10,
        "weight": 295,
        "types": [
          "bug",
          "grass"
        ],
        "abilities": [
          "effect-spore",
          "dry-skin",
          "damp"
        ]
      },
      {
        "id": 48,
        "name": "venonat",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/48.png",
        "height": 10,
        "weight": 300,
        "types": [
          "bug",
          "poison"
        ],
        "abilities": [
          "compound-eyes",
          "tinted-lens",
          "run-away"
        ]
      },
      {
        "id": 49,
        "name": "venomoth",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/49.png",
        "height": 15,
        "weight": 125,
        "types": [
          "bug",
          "poison"
        ],
        "abilities": [
          "shield-dust",
          "tinted-lens",
          "wonder-skin"
        ]
      },
      {
        "id": 50,
        "name": "diglett",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/50.png",
        "height": 2,
        "weight": 8,
        "types": [
          "ground"
        ],
        "abilities": [
          "sand-veil",
          "arena-trap",
          "sand-force"
        ]
      },
      {
        "id": 51,
        "name": "dugtrio",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/51.png",
        "height": 7,
        "weight": 333,
        "types": [
          "ground"
        ],
        "abilities": [
          "sand-veil",
          "arena-trap",
          "sand-force"
        ]
      },
      {
        "id": 52,
        "name": "meowth",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/52.png",
        "height": 4,
        "weight": 42,
        "types": [
          "normal"
        ],
        "abilities": [
          "pickup",
          "technician",
          "unnerve"
        ]
      },
      {
        "id": 53,
        "name": "persian",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/53.png",
        "height": 10,
        "weight": 320,
        "types": [
          "normal"
        ],
        "abilities": [
          "limber",
          "technician",
          "unnerve"
        ]
      },
      {
        "id": 54,
        "name": "psyduck",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png",
        "height": 8,
        "weight": 196,
        "types": [
          "water"
        ],
        "abilities": [
          "damp",
          "cloud-nine",
          "swift-swim"
        ]
      },
      {
        "id": 55,
        "name": "golduck",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/55.png",
        "height": 17,
        "weight": 766,
        "types": [
          "water"
        ],
        "abilities": [
          "damp",
          "cloud-nine",
          "swift-swim"
        ]
      },
      {
        "id": 56,
        "name": "mankey",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/56.png",
        "height": 5,
        "weight": 280,
        "types": [
          "fighting"
        ],
        "abilities": [
          "vital-spirit",
          "anger-point",
          "defiant"
        ]
      },
      {
        "id": 57,
        "name": "primeape",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/57.png",
        "height": 10,
        "weight": 320,
        "types": [
          "fighting"
        ],
        "abilities": [
          "vital-spirit",
          "anger-point",
          "defiant"
        ]
      },
      {
        "id": 58,
        "name": "growlithe",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/58.png",
        "height": 7,
        "weight": 190,
        "types": [
          "fire"
        ],
        "abilities": [
          "intimidate",
          "flash-fire",
          "justified"
        ]
      },
      {
        "id": 59,
        "name": "arcanine",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/59.png",
        "height": 19,
        "weight": 1550,
        "types": [
          "fire"
        ],
        "abilities": [
          "intimidate",
          "flash-fire",
          "justified"
        ]
      },
      {
        "id": 60,
        "name": "poliwag",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/60.png",
        "height": 6,
        "weight": 124,
        "types": [
          "water"
        ],
        "abilities": [
          "water-absorb",
          "damp",
          "swift-swim"
        ]
      },
      {
        "id": 61,
        "name": "poliwhirl",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/61.png",
        "height": 10,
        "weight": 200,
        "types": [
          "water"
        ],
        "abilities": [
          "water-absorb",
          "damp",
          "swift-swim"
        ]
      },
      {
        "id": 62,
        "name": "poliwrath",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/62.png",
        "height": 13,
        "weight": 540,
        "types": [
          "water",
          "fighting"
        ],
        "abilities": [
          "water-absorb",
          "damp",
          "swift-swim"
        ]
      },
      {
        "id": 63,
        "name": "abra",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/63.png",
        "height": 9,
        "weight": 195,
        "types": [
          "psychic"
        ],
        "abilities": [
          "synchronize",
          "inner-focus",
          "magic-guard"
        ]
      },
      {
        "id": 64,
        "name": "kadabra",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/64.png",
        "height": 13,
        "weight": 565,
        "types": [
          "psychic"
        ],
        "abilities": [
          "synchronize",
          "inner-focus",
          "magic-guard"
        ]
      },
      {
        "id": 65,
        "name": "alakazam",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/65.png",
        "height": 15,
        "weight": 480,
        "types": [
          "psychic"
        ],
        "abilities": [
          "synchronize",
          "inner-focus",
          "magic-guard"
        ]
      },
      {
        "id": 66,
        "name": "machop",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/66.png",
        "height": 8,
        "weight": 195,
        "types": [
          "fighting"
        ],
        "abilities": [
          "guts",
          "no-guard",
          "steadfast"
        ]
      },
      {
        "id": 67,
        "name": "machoke",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/67.png",
        "height": 15,
        "weight": 705,
        "types": [
          "fighting"
        ],
        "abilities": [
          "guts",
          "no-guard",
          "steadfast"
        ]
      },
      {
        "id": 68,
        "name": "machamp",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/68.png",
        "height": 16,
        "weight": 1300,
        "types": [
          "fighting"
        ],
        "abilities": [
          "guts",
          "no-guard",
          "steadfast"
        ]
      },
      {
        "id": 69,
        "name": "bellsprout",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/69.png",
        "height": 7,
        "weight": 40,
        "types": [
          "grass",
          "poison"
        ],
        "abilities": [
          "chlorophyll",
          "gluttony"
        ]
      },
      {
        "id": 70,
        "name": "weepinbell",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/70.png",
        "height": 10,
        "weight": 64,
        "types": [
          "grass",
          "poison"
        ],
        "abilities": [
          "chlorophyll",
          "gluttony"
        ]
      },
      {
        "id": 71,
        "name": "victreebel",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/71.png",
        "height": 17,
        "weight": 155,
        "types": [
          "grass",
          "poison"
        ],
        "abilities": [
          "chlorophyll",
          "gluttony"
        ]
      },
      {
        "id": 72,
        "name": "tentacool",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/72.png",
        "height": 9,
        "weight": 455,
        "types": [
          "water",
          "poison"
        ],
        "abilities": [
          "clear-body",
          "liquid-ooze",
          "rain-dish"
        ]
      },
      {
        "id": 73,
        "name": "tentacruel",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/73.png",
        "height": 16,
        "weight": 550,
        "types": [
          "water",
          "poison"
        ],
        "abilities": [
          "clear-body",
          "liquid-ooze",
          "rain-dish"
        ]
      },
      {
        "id": 74,
        "name": "geodude",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/74.png",
        "height": 4,
        "weight": 200,
        "types": [
          "rock",
          "ground"
        ],
        "abilities": [
          "rock-head",
          "sturdy",
          "sand-veil"
        ]
      },
      {
        "id": 75,
        "name": "graveler",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/75.png",
        "height": 10,
        "weight": 1050,
        "types": [
          "rock",
          "ground"
        ],
        "abilities": [
          "rock-head",
          "sturdy",
          "sand-veil"
        ]
      },
      {
        "id": 76,
        "name": "golem",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/76.png",
        "height": 14,
        "weight": 3000,
        "types": [
          "rock",
          "ground"
        ],
        "abilities": [
          "rock-head",
          "sturdy",
          "sand-veil"
        ]
      },
      {
        "id": 77,
        "name": "ponyta",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/77.png",
        "height": 10,
        "weight": 300,
        "types": [
          "fire"
        ],
        "abilities": [
          "run-away",
          "flash-fire",
          "flame-body"
        ]
      },
      {
        "id": 78,
        "name": "rapidash",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/78.png",
        "height": 17,
        "weight": 950,
        "types": [
          "fire"
        ],
        "abilities": [
          "run-away",
          "flash-fire",
          "flame-body"
        ]
      },
      {
        "id": 79,
        "name": "slowpoke",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/79.png",
        "height": 12,
        "weight": 360,
        "types": [
          "water",
          "psychic"
        ],
        "abilities": [
          "oblivious",
          "own-tempo",
          "regenerator"
        ]
      },
      {
        "id": 80,
        "name": "slowbro",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/80.png",
        "height": 16,
        "weight": 785,
        "types": [
          "water",
          "psychic"
        ],
        "abilities": [
          "oblivious",
          "own-tempo",
          "regenerator"
        ]
      },
      {
        "id": 81,
        "name": "magnemite",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/81.png",
        "height": 3,
        "weight": 60,
        "types": [
          "electric",
          "steel"
        ],
        "abilities": [
          "magnet-pull",
          "sturdy",
          "analytic"
        ]
      },
      {
        "id": 82,
        "name": "magneton",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/82.png",
        "height": 10,
        "weight": 600,
        "types": [
          "electric",
          "steel"
        ],
        "abilities": [
          "magnet-pull",
          "sturdy",
          "analytic"
        ]
      },
      {
        "id": 83,
        "name": "farfetchd",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/83.png",
        "height": 8,
        "weight": 150,
        "types": [
          "normal",
          "flying"
        ],
        "abilities": [
          "keen-eye",
          "inner-focus",
          "defiant"
        ]
      },
      {
        "id": 84,
        "name": "doduo",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/84.png",
        "height": 14,
        "weight": 392,
        "types": [
          "normal",
          "flying"
        ],
        "abilities": [
          "run-away",
          "early-bird",
          "tangled-feet"
        ]
      },
      {
        "id": 85,
        "name": "dodrio",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/85.png",
        "height": 18,
        "weight": 852,
        "types": [
          "normal",
          "flying"
        ],
        "abilities": [
          "run-away",
          "early-bird",
          "tangled-feet"
        ]
      },
      {
        "id": 86,
        "name": "seel",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/86.png",
        "height": 11,
        "weight": 900,
        "types": [
          "water"
        ],
        "abilities": [
          "thick-fat",
          "hydration",
          "ice-body"
        ]
      },
      {
        "id": 87,
        "name": "dewgong",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/87.png",
        "height": 17,
        "weight": 1200,
        "types": [
          "water",
          "ice"
        ],
        "abilities": [
          "thick-fat",
          "hydration",
          "ice-body"
        ]
      },
      {
        "id": 88,
        "name": "grimer",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/88.png",
        "height": 9,
        "weight": 300,
        "types": [
          "poison"
        ],
        "abilities": [
          "stench",
          "sticky-hold",
          "poison-touch"
        ]
      },
      {
        "id": 89,
        "name": "muk",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/89.png",
        "height": 12,
        "weight": 300,
        "types": [
          "poison"
        ],
        "abilities": [
          "stench",
          "sticky-hold",
          "poison-touch"
        ]
      },
      {
        "id": 90,
        "name": "shellder",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/90.png",
        "height": 3,
        "weight": 40,
        "types": [
          "water"
        ],
        "abilities": [
          "shell-armor",
          "skill-link",
          "overcoat"
        ]
      },
      {
        "id": 91,
        "name": "cloyster",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/91.png",
        "height": 15,
        "weight": 1325,
        "types": [
          "water",
          "ice"
        ],
        "abilities": [
          "shell-armor",
          "skill-link",
          "overcoat"
        ]
      },
      {
        "id": 92,
        "name": "gastly",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/92.png",
        "height": 13,
        "weight": 1,
        "types": [
          "ghost",
          "poison"
        ],
        "abilities": [
          "levitate"
        ]
      },
      {
        "id": 93,
        "name": "haunter",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/93.png",
        "height": 16,
        "weight": 1,
        "types": [
          "ghost",
          "poison"
        ],
        "abilities": [
          "levitate"
        ]
      },
      {
        "id": 94,
        "name": "gengar",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/94.png",
        "height": 15,
        "weight": 405,
        "types": [
          "ghost",
          "poison"
        ],
        "abilities": [
          "cursed-body"
        ]
      },
      {
        "id": 95,
        "name": "onix",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/95.png",
        "height": 88,
        "weight": 2100,
        "types": [
          "rock",
          "ground"
        ],
        "abilities": [
          "rock-head",
          "sturdy",
          "weak-armor"
        ]
      },
      {
        "id": 96,
        "name": "drowzee",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/96.png",
        "height": 10,
        "weight": 324,
        "types": [
          "psychic"
        ],
        "abilities": [
          "insomnia",
          "forewarn",
          "inner-focus"
        ]
      },
      {
        "id": 97,
        "name": "hypno",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/97.png",
        "height": 16,
        "weight": 756,
        "types": [
          "psychic"
        ],
        "abilities": [
          "insomnia",
          "forewarn",
          "inner-focus"
        ]
      },
      {
        "id": 98,
        "name": "krabby",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/98.png",
        "height": 4,
        "weight": 65,
        "types": [
          "water"
        ],
        "abilities": [
          "hyper-cutter",
          "shell-armor",
          "sheer-force"
        ]
      },
      {
        "id": 99,
        "name": "kingler",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/99.png",
        "height": 13,
        "weight": 600,
        "types": [
          "water"
        ],
        "abilities": [
          "hyper-cutter",
          "shell-armor",
          "sheer-force"
        ]
      },
      {
        "id": 100,
        "name": "voltorb",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/100.png",
        "height": 5,
        "weight": 104,
        "types": [
          "electric"
        ],
        "abilities": [
          "soundproof",
          "static",
          "aftermath"
        ]
      },
      {
        "id": 101,
        "name": "electrode",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/101.png",
        "height": 12,
        "weight": 666,
        "types": [
          "electric"
        ],
        "abilities": [
          "soundproof",
          "static",
          "aftermath"
        ]
      },
      {
        "id": 102,
        "name": "exeggcute",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/102.png",
        "height": 4,
        "weight": 25,
        "types": [
          "grass",
          "psychic"
        ],
        "abilities": [
          "chlorophyll",
          "harvest"
        ]
      },
      {
        "id": 103,
        "name": "exeggutor",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/103.png",
        "height": 20,
        "weight": 1200,
        "types": [
          "grass",
          "psychic"
        ],
        "abilities": [
          "chlorophyll",
          "harvest"
        ]
      },
      {
        "id": 104,
        "name": "cubone",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/104.png",
        "height": 4,
        "weight": 65,
        "types": [
          "ground"
        ],
        "abilities": [
          "rock-head",
          "lightning-rod",
          "battle-armor"
        ]
      },
      {
        "id": 105,
        "name": "marowak",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/105.png",
        "height": 10,
        "weight": 450,
        "types": [
          "ground"
        ],
        "abilities": [
          "rock-head",
          "lightning-rod",
          "battle-armor"
        ]
      },
      {
        "id": 106,
        "name": "hitmonlee",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/106.png",
        "height": 15,
        "weight": 498,
        "types": [
          "fighting"
        ],
        "abilities": [
          "limber",
          "reckless",
          "unburden"
        ]
      },
      {
        "id": 107,
        "name": "hitmonchan",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/107.png",
        "height": 14,
        "weight": 502,
        "types": [
          "fighting"
        ],
        "abilities": [
          "keen-eye",
          "iron-fist",
          "inner-focus"
        ]
      },
      {
        "id": 108,
        "name": "lickitung",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/108.png",
        "height": 12,
        "weight": 655,
        "types": [
          "normal"
        ],
        "abilities": [
          "own-tempo",
          "oblivious",
          "cloud-nine"
        ]
      },
      {
        "id": 109,
        "name": "koffing",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/109.png",
        "height": 6,
        "weight": 10,
        "types": [
          "poison"
        ],
        "abilities": [
          "levitate",
          "neutralizing-gas",
          "stench"
        ]
      },
      {
        "id": 110,
        "name": "weezing",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/110.png",
        "height": 12,
        "weight": 95,
        "types": [
          "poison"
        ],
        "abilities": [
          "levitate",
          "neutralizing-gas",
          "stench"
        ]
      },
      {
        "id": 111,
        "name": "rhyhorn",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/111.png",
        "height": 10,
        "weight": 1150,
        "types": [
          "ground",
          "rock"
        ],
        "abilities": [
          "lightning-rod",
          "rock-head",
          "reckless"
        ]
      },
      {
        "id": 112,
        "name": "rhydon",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/112.png",
        "height": 19,
        "weight": 1200,
        "types": [
          "ground",
          "rock"
        ],
        "abilities": [
          "lightning-rod",
          "rock-head",
          "reckless"
        ]
      },
      {
        "id": 113,
        "name": "chansey",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/113.png",
        "height": 11,
        "weight": 346,
        "types": [
          "normal"
        ],
        "abilities": [
          "natural-cure",
          "serene-grace",
          "healer"
        ]
      },
      {
        "id": 114,
        "name": "tangela",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/114.png",
        "height": 10,
        "weight": 350,
        "types": [
          "grass"
        ],
        "abilities": [
          "chlorophyll",
          "leaf-guard",
          "regenerator"
        ]
      },
      {
        "id": 115,
        "name": "kangaskhan",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/115.png",
        "height": 22,
        "weight": 800,
        "types": [
          "normal"
        ],
        "abilities": [
          "early-bird",
          "scrappy",
          "inner-focus"
        ]
      },
      {
        "id": 116,
        "name": "horsea",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/116.png",
        "height": 4,
        "weight": 80,
        "types": [
          "water"
        ],
        "abilities": [
          "swift-swim",
          "sniper",
          "damp"
        ]
      },
      {
        "id": 117,
        "name": "seadra",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/117.png",
        "height": 12,
        "weight": 250,
        "types": [
          "water"
        ],
        "abilities": [
          "poison-point",
          "sniper",
          "damp"
        ]
      },
      {
        "id": 118,
        "name": "goldeen",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/118.png",
        "height": 6,
        "weight": 150,
        "types": [
          "water"
        ],
        "abilities": [
          "swift-swim",
          "water-veil",
          "lightning-rod"
        ]
      },
      {
        "id": 119,
        "name": "seaking",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/119.png",
        "height": 13,
        "weight": 390,
        "types": [
          "water"
        ],
        "abilities": [
          "swift-swim",
          "water-veil",
          "lightning-rod"
        ]
      },
      {
        "id": 120,
        "name": "staryu",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/120.png",
        "height": 8,
        "weight": 345,
        "types": [
          "water"
        ],
        "abilities": [
          "illuminate",
          "natural-cure",
          "analytic"
        ]
      },
      {
        "id": 121,
        "name": "starmie",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/121.png",
        "height": 11,
        "weight": 800,
        "types": [
          "water",
          "psychic"
        ],
        "abilities": [
          "illuminate",
          "natural-cure",
          "analytic"
        ]
      },
      {
        "id": 122,
        "name": "mr-mime",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/122.png",
        "height": 13,
        "weight": 545,
        "types": [
          "psychic",
          "fairy"
        ],
        "abilities": [
          "soundproof",
          "filter",
          "technician"
        ]
      },
      {
        "id": 123,
        "name": "scyther",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/123.png",
        "height": 15,
        "weight": 560,
        "types": [
          "bug",
          "flying"
        ],
        "abilities": [
          "swarm",
          "technician",
          "steadfast"
        ]
      },
      {
        "id": 124,
        "name": "jynx",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/124.png",
        "height": 14,
        "weight": 406,
        "types": [
          "ice",
          "psychic"
        ],
        "abilities": [
          "oblivious",
          "forewarn",
          "dry-skin"
        ]
      },
      {
        "id": 125,
        "name": "electabuzz",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/125.png",
        "height": 11,
        "weight": 300,
        "types": [
          "electric"
        ],
        "abilities": [
          "static",
          "vital-spirit"
        ]
      },
      {
        "id": 126,
        "name": "magmar",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/126.png",
        "height": 13,
        "weight": 445,
        "types": [
          "fire"
        ],
        "abilities": [
          "flame-body",
          "vital-spirit"
        ]
      },
      {
        "id": 127,
        "name": "pinsir",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/127.png",
        "height": 15,
        "weight": 550,
        "types": [
          "bug"
        ],
        "abilities": [
          "hyper-cutter",
          "mold-breaker",
          "moxie"
        ]
      },
      {
        "id": 128,
        "name": "tauros",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/128.png",
        "height": 14,
        "weight": 884,
        "types": [
          "normal"
        ],
        "abilities": [
          "intimidate",
          "anger-point",
          "sheer-force"
        ]
      },
      {
        "id": 129,
        "name": "magikarp",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/129.png",
        "height": 9,
        "weight": 100,
        "types": [
          "water"
        ],
        "abilities": [
          "swift-swim",
          "rattled"
        ]
      },
      {
        "id": 130,
        "name": "gyarados",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/130.png",
        "height": 65,
        "weight": 2350,
        "types": [
          "water",
          "flying"
        ],
        "abilities": [
          "intimidate",
          "moxie"
        ]
      },
      {
        "id": 131,
        "name": "lapras",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/131.png",
        "height": 25,
        "weight": 2200,
        "types": [
          "water",
          "ice"
        ],
        "abilities": [
          "water-absorb",
          "shell-armor",
          "hydration"
        ]
      },
      {
        "id": 132,
        "name": "ditto",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
        "height": 3,
        "weight": 40,
        "types": [
          "normal"
        ],
        "abilities": [
          "limber",
          "imposter"
        ]
      },
      {
        "id": 133,
        "name": "eevee",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/133.png",
        "height": 3,
        "weight": 65,
        "types": [
          "normal"
        ],
        "abilities": [
          "run-away",
          "adaptability",
          "anticipation"
        ]
      },
      {
        "id": 134,
        "name": "vaporeon",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/134.png",
        "height": 10,
        "weight": 290,
        "types": [
          "water"
        ],
        "abilities": [
          "water-absorb",
          "hydration"
        ]
      },
      {
        "id": 135,
        "name": "jolteon",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/135.png",
        "height": 8,
        "weight": 245,
        "types": [
          "electric"
        ],
        "abilities": [
          "volt-absorb",
          "quick-feet"
        ]
      },
      {
        "id": 136,
        "name": "flareon",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/136.png",
        "height": 9,
        "weight": 250,
        "types": [
          "fire"
        ],
        "abilities": [
          "flash-fire",
          "guts"
        ]
      },
      {
        "id": 137,
        "name": "porygon",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/137.png",
        "height": 8,
        "weight": 365,
        "types": [
          "normal"
        ],
        "abilities": [
          "trace",
          "download",
          "analytic"
        ]
      },
      {
        "id": 138,
        "name": "omanyte",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/138.png",
        "height": 4,
        "weight": 75,
        "types": [
          "rock",
          "water"
        ],
        "abilities": [
          "swift-swim",
          "shell-armor",
          "weak-armor"
        ]
      },
      {
        "id": 139,
        "name": "omastar",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/139.png",
        "height": 10,
        "weight": 350,
        "types": [
          "rock",
          "water"
        ],
        "abilities": [
          "swift-swim",
          "shell-armor",
          "weak-armor"
        ]
      },
      {
        "id": 140,
        "name": "kabuto",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/140.png",
        "height": 5,
        "weight": 115,
        "types": [
          "rock",
          "water"
        ],
        "abilities": [
          "swift-swim",
          "battle-armor",
          "weak-armor"
        ]
      },
      {
        "id": 141,
        "name": "kabutops",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/141.png",
        "height": 13,
        "weight": 405,
        "types": [
          "rock",
          "water"
        ],
        "abilities": [
          "swift-swim",
          "battle-armor",
          "weak-armor"
        ]
      },
      {
        "id": 142,
        "name": "aerodactyl",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/142.png",
        "height": 18,
        "weight": 590,
        "types": [
          "rock",
          "flying"
        ],
        "abilities": [
          "rock-head",
          "pressure",
          "unnerve"
        ]
      },
      {
        "id": 143,
        "name": "snorlax",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/143.png",
        "height": 21,
        "weight": 4600,
        "types": [
          "normal"
        ],
        "abilities": [
          "immunity",
          "thick-fat",
          "gluttony"
        ]
      },
      {
        "id": 144,
        "name": "articuno",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/144.png",
        "height": 17,
        "weight": 554,
        "types": [
          "ice",
          "flying"
        ],
        "abilities": [
          "pressure",
          "snow-cloak"
        ]
      },
      {
        "id": 145,
        "name": "zapdos",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/145.png",
        "height": 16,
        "weight": 526,
        "types": [
          "electric",
          "flying"
        ],
        "abilities": [
          "pressure",
          "static"
        ]
      },
      {
        "id": 146,
        "name": "moltres",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/146.png",
        "height": 20,
        "weight": 600,
        "types": [
          "fire",
          "flying"
        ],
        "abilities": [
          "pressure",
          "flame-body"
        ]
      },
      {
        "id": 147,
        "name": "dratini",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/147.png",
        "height": 18,
        "weight": 33,
        "types": [
          "dragon"
        ],
        "abilities": [
          "shed-skin",
          "marvel-scale"
        ]
      },
      {
        "id": 148,
        "name": "dragonair",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/148.png",
        "height": 40,
        "weight": 165,
        "types": [
          "dragon"
        ],
        "abilities": [
          "shed-skin",
          "marvel-scale"
        ]
      },
      {
        "id": 149,
        "name": "dragonite",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/149.png",
        "height": 22,
        "weight": 2100,
        "types": [
          "dragon",
          "flying"
        ],
        "abilities": [
          "inner-focus",
          "multiscale"
        ]
      },
      {
        "id": 150,
        "name": "mewtwo",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png",
        "height": 20,
        "weight": 1220,
        "types": [
          "psychic"
        ],
        "abilities": [
          "pressure",
          "unnerve"
        ]
      },
      {
        "id": 151,
        "name": "mew",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/151.png",
        "height": 4,
        "weight": 40,
        "types": [
          "psychic"
        ],
        "abilities": [
          "synchronize"
        ]
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('pokemons', null, {});
  },
};

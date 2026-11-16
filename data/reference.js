/* Reference data for Howard Card Vault.
   Set ladders, serial tiers and the What's Hot snapshot live here so they can be
   refreshed without touching the app or anyone's collection data. */
window.TCG_REF = {
  asOf: "2026-11-16",
  tcgs: [
    { id: "naruto", label: "Naruto Kayou", accent: "#f28c28" },
    { id: "pokemon", label: "Pokémon", accent: "#ffcb3d" },
    { id: "yugioh", label: "Yu-Gi-Oh!", accent: "#7fb4ff" },
    { id: "kpdh", label: "KPop Demon Hunters", accent: "#ff6fb5" },
    { id: "onepiece", label: "One Piece", accent: "#ef6351" },
    { id: "other", label: "Other", accent: "#8fd3c8" }
  ],
  rarities: {
    naruto: ["R", "SR", "SSR", "UR", "◇UR", "HR", "PU", "MR", "BP", "AR", "ASP", "◇ASP", "SE", "PR (promo)"],
    pokemon: ["Common", "Uncommon", "Rare", "Double Rare", "Ultra Rare", "Illustration Rare", "Special Illustration Rare", "Hyper Rare", "Mega Hyper Rare", "Promo"],
    yugioh: ["Common", "Rare", "Super Rare", "Ultra Rare", "Secret Rare", "Quarter Century Secret Rare", "Starlight Rare", "Collector's Rare"],
    kpdh: [],
    onepiece: ["Common", "Uncommon", "Rare", "Super Rare", "Secret Rare", "Leader", "Alt Art", "Manga Rare", "Promo"],
    other: []
  },
  sets: {
    jin3: {
      tcg: "naruto",
      name: "Naruto Smriti: Chapter Jin Series 3 (NA English)",
      facts: [
        "185 cards across 13 rarity tiers.",
        "Collector Box: 5 packs plus 1 U.S. exclusive PR promo card. Booster box: 12 packs.",
        "Card codes read NRSA03-[rarity]-[number], so the middle part is the rarity.",
        "Five tiers are serial numbered. Kayou does not publish pull rates for this set."
      ],
      ladder: [
        { code: "SE", name: "Scenario-E", theme: "Elegant Costume Drama", designs: 4, run: 220 },
        { code: "◇ASP", name: "Parallel Amber Special", theme: "Ninjutsu Secrets", designs: 8, run: 9 },
        { code: "ASP", name: "Amber Special", theme: "Ninjutsu Secrets", designs: 8, run: 99 },
        { code: "AR", name: "Amber Rare", theme: "Ukiyo-e Battle", designs: 6, run: 777 },
        { code: "BP", name: "Brush Rare", theme: "Interlude Break", designs: 7, run: 999 },
        { code: "MR", name: "Miracle Rare", theme: "Famous Ninjas Battle", designs: 8, run: null },
        { code: "PU", name: "Parallel Universe", theme: "Letters from Parallel Universe", designs: 8, run: null },
        { code: "HR", name: "Holo Rare", theme: "Story Flashbacks (lenticular)", designs: 20, run: null },
        { code: "◇UR", name: "Parallel Ultra Rare", theme: "Graffiti Sketches (2 U.S. exclusives)", designs: 11, run: null },
        { code: "UR", name: "Ultra Rare", theme: "Ninja Profiles", designs: 15, run: null },
        { code: "SSR", name: "Super Secret Rare", theme: "Ninjutsu Showcase", designs: 20, run: null },
        { code: "SR", name: "Super Rare", theme: "Story Characters", designs: 20, run: null },
        { code: "R", name: "Rare", theme: "Story Recap", designs: 50, run: null }
      ],
      sources: [
        { label: "Retailer listing quoting Kayou's card pool", url: "https://www.spankyslootstash.com/products/naruto-smriti-collectable-cards-chapter-jin-3-series-booster-box-with-promo-card-kayou-na-24-packs" },
        { label: "Cottier TCG serial-numbered guide", url: "https://cottiertcg.com.au/blog/kayou-naruto-jin-series-3-serial-numbered-cards" },
        { label: "Best Buy Collector Box (5 Pk) listing", url: "https://www.bestbuy.com/product/kayou-naruto-smriti-collectible-cards-collector-box-5-pk-chapter-jin-3/CZSRTVK6K2/sku/6678540" }
      ]
    }
  },
  setList: {
    pokemon: [
      { name: "Delta Reign", era: "Mega Evolution", when: "Nov 2026" },
      { name: "Pitch Black", era: "Mega Evolution", when: "Jul 2026" },
      { name: "Chaos Rising", era: "Mega Evolution", when: "May 2026" },
      { name: "Perfect Order", era: "Mega Evolution", when: "Mar 2026" },
      { name: "Ascended Heroes", era: "Mega Evolution", when: "2026" },
      { name: "30th Celebration", era: "Special", when: "2026" },
      { name: "Phantasmal Flames", era: "Mega Evolution", when: "Nov 2025" },
      { name: "Mega Evolution", era: "Mega Evolution", when: "Sep 2025" },
      { name: "Black Bolt", era: "Scarlet & Violet", when: "Jul 2025" },
      { name: "White Flare", era: "Scarlet & Violet", when: "Jul 2025" },
      { name: "Destined Rivals", era: "Scarlet & Violet", when: "May 2025" },
      { name: "Journey Together", era: "Scarlet & Violet", when: "Mar 2025" },
      { name: "Prismatic Evolutions", era: "Scarlet & Violet", when: "Jan 2025" },
      { name: "Surging Sparks", era: "Scarlet & Violet", when: "Nov 2024" },
      { name: "Stellar Crown", era: "Scarlet & Violet", when: "Sep 2024" },
      { name: "Shrouded Fable", era: "Scarlet & Violet", when: "Aug 2024" },
      { name: "Twilight Masquerade", era: "Scarlet & Violet", when: "May 2024" },
      { name: "Temporal Forces", era: "Scarlet & Violet", when: "Mar 2024" },
      { name: "Paldean Fates", era: "Scarlet & Violet", when: "Jan 2024" },
      { name: "Paradox Rift", era: "Scarlet & Violet", when: "Nov 2023" },
      { name: "151", era: "Scarlet & Violet", when: "Sep 2023" },
      { name: "Obsidian Flames", era: "Scarlet & Violet", when: "Aug 2023" },
      { name: "Paldea Evolved", era: "Scarlet & Violet", when: "Jun 2023" },
      { name: "Scarlet & Violet", era: "Scarlet & Violet", when: "Mar 2023" }
    ],
    naruto: [{"name": "Chapter Jin Series 4", "era": "NA English", "when": "Nov 2026, upcoming", "logo": "set-art/kayou/92030.png?f=png", "url": "https://www.decktradr.com/sets/naruto-kayou/92030-chapter-jin-series-4", "facts": "Five numbered rarities, from /150 to /999."}, {"name": "Earth Scroll Series 3", "era": "NA English", "when": "Oct 2026", "logo": "set-art/kayou/92029.png?f=png", "url": "https://www.decktradr.com/sets/naruto-kayou/92029-earth-scroll-series-3", "facts": "No numbered tier."}, {"name": "Chapter Jin Series 3", "era": "NA English", "when": "May 2026", "logo": "set-art/kayou/92012.png?f=png", "url": "https://www.decktradr.com/sets/naruto-kayou/92012-chapter-jin-series-3", "facts": "185 cards, 13 rarities, five numbered tiers.", "ladder": "jin3", "catalog": "jin3"}, {"name": "Earth Scroll Series 2", "era": "NA English", "when": "Mar 2026", "logo": "set-art/kayou/92002.png?f=png", "url": "https://www.decktradr.com/sets/naruto-kayou/92002-earth-scroll-series-2", "facts": "8 rarities. 7 cards per pack, 20 packs per box."}, {"name": "Earth Scroll Series 1", "era": "NA English", "when": "Dec 2025", "logo": "set-art/kayou/92001.png?f=png", "url": "https://www.decktradr.com/sets/naruto-kayou/92001-earth-scroll-series-1", "facts": "8 rarities. Collector Box has 5 packs of 8."}, {"name": "Chapter Jin Series 2", "era": "NA English", "when": "Nov 2025", "logo": "set-art/kayou/92011.png?f=png", "url": "https://www.decktradr.com/sets/naruto-kayou/92011-chapter-jin-series-2", "facts": "168 cards, 11 rarities."}, {"name": "Heaven Scroll Series 1", "era": "NA English", "when": "Sep 2025", "logo": "set-art/kayou/92010.png?f=png", "url": "https://www.decktradr.com/sets/naruto-kayou/92010-heaven-scroll-series-1", "facts": "158 cards, 10 rarities. 8 cards per pack, 24 packs per box."}],
    kpdh: [{"name": "Classic Edition Series 2", "era": "Kayou", "when": "Nov 2026", "logo": "set-art/kayou/92036.png?f=png", "url": "https://www.decktradr.com/sets/kpop-demon-hunters/92036-classic-edition-series-2", "facts": ""}, {"name": "Energy Edition Series 2", "era": "Kayou", "when": "Nov 2026", "logo": "set-art/kayou/92035.png?f=png", "url": "https://www.decktradr.com/sets/kpop-demon-hunters/92035-energy-edition-series-2", "facts": "142 designs across 11 rarities."}, {"name": "Special Mini Edition Series 1", "era": "Kayou", "when": "Sep 2026", "logo": "set-art/kayou/92006.png?f=png", "url": "https://www.decktradr.com/sets/kpop-demon-hunters/92006-special-mini-edition-series-1", "facts": "41 cards. 4 packs of 3 per box."}, {"name": "Classic Edition Series 1", "era": "Kayou", "when": "Jul 2026", "logo": "set-art/kayou/92004.png?f=png", "url": "https://www.decktradr.com/sets/kpop-demon-hunters/92004-classic-edition-series-1", "facts": "8 rarities, 5 cards per pack."}, {"name": "Energy Edition Series 1", "era": "Kayou", "when": "Jul 2026", "logo": "set-art/kayou/92005.png?f=png", "url": "https://www.decktradr.com/sets/kpop-demon-hunters/92005-energy-edition-series-1", "facts": "130 cards, 11 rarities, 8 cards per pack."}],
    yugioh: [
      { name: "Burst Protocol", era: "Core set", when: "2026" },
      { name: "Phantom Revenge", era: "Core set", when: "2025" },
      { name: "Doom of Dimensions", era: "Core set", when: "2025" },
      { name: "Justice Hunters", era: "Core set", when: "2025" },
      { name: "Alliance Insight", era: "Core set", when: "2025" },
      { name: "Supreme Darkness", era: "Core set", when: "2025" },
      { name: "Quarter Century Stampede", era: "Special", when: "2025" }
    ],
    onepiece: [{"name": "Extra Booster East Blue", "era": "EB", "when": "Jan 2027, upcoming", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/24946-extra-booster-east-blue"}, {"name": "The Dominance of God", "era": "OP-18", "when": "Nov 2026, upcoming", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/24833-the-dominance-of-god"}, {"name": "The World's Strongest Warriors", "era": "OP-17", "when": "Aug 2026", "logo": "set-art/official/one-piece/op17-7e8ff258aa03d776.png?f=png", "url": "https://www.decktradr.com/sets/one-piece/24736-the-worlds-strongest-warriors"}, {"name": "The Time of Battle", "era": "OP-16", "when": "Jun 2026", "logo": "set-art/official/one-piece/op16-8a4f4f5f58e00070.png?f=png", "url": "https://www.decktradr.com/sets/one-piece/24664-the-time-of-battle"}, {"name": "Adventure on KAMI's Island", "era": "OP-15", "when": "Apr 2026", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/24637-adventure-on-kamis-island"}, {"name": "The Azure Sea's Seven", "era": "OP-14", "when": "Jan 2026", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/24537-the-azure-seas-seven"}, {"name": "Carrying On His Will", "era": "OP-13", "when": "Nov 2025", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/24303-carrying-on-his-will"}, {"name": "Legacy of the Master", "era": "OP-12", "when": "Aug 2025", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/24302-legacy-of-the-master"}, {"name": "A Fist of Divine Speed", "era": "OP-11", "when": "Jun 2025", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/24241-a-fist-of-divine-speed"}, {"name": "Royal Blood", "era": "OP-10", "when": "Mar 2025", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/23766-royal-blood"}, {"name": "Emperors in the New World", "era": "OP-09", "when": "Dec 2024", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/23589-emperors-in-the-new-world"}, {"name": "Two Legends", "era": "OP-08", "when": "Sep 2024", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/23462-two-legends"}, {"name": "500 Years in the Future", "era": "OP-07", "when": "Jun 2024", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/23387-500-years-in-the-future"}, {"name": "Wings of the Captain", "era": "OP-06", "when": "Mar 2024", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/23272-wings-of-the-captain"}, {"name": "Awakening of the New Era", "era": "OP-05", "when": "Dec 2023", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/23213-awakening-of-the-new-era"}, {"name": "Kingdoms of Intrigue", "era": "OP-04", "when": "Sep 2023", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/23024-kingdoms-of-intrigue"}, {"name": "Pillars of Strength", "era": "OP-03", "when": "Jun 2023", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/22890-pillars-of-strength"}, {"name": "Paramount War", "era": "OP-02", "when": "Mar 2023", "logo": "", "url": "https://www.decktradr.com/sets/one-piece/17698-paramount-war"}]
  },
  cdn: "https://d1rv4ufwpgk2kk.cloudfront.net/",
  artCredit: {label:"DeckTradr", url:"https://www.decktradr.com/"},
  chase: {"naruto": [[1501200013, "Naruto ASP"], [1501200014, "Sasuke ASP"], [1501200015, "Shikamaru ASP"], [1501200001, "Naruto SE"], [1501200002, "Sasuke SE"], [1501200003, "Gaara SE"], [1501200023, "Jiraiya AR"], [1501200026, "Jiraiya AR"], [1501200025, "Tsunade AR"], [1501200031, "Itachi BP"], [1501200033, "Sasuke BP"], [1501200032, "Jiraiya BP"], [1501200040, "Naruto MR"], [1501200041, "Sasuke MR"], [1501200005, "Naruto ◇ASP"], [1501200073, "Kakashi ◇UR"]], "kpdh": [[1500500006, "Zoey SE"], [1500500004, "Mira SE"], [1500500014, "Zoey BP"], [1500500010, "Rumi BP"], [1500500011, "Mira BP"], [1500500031, "Rumi SP"], [1500500055, "Rumi UR"], [1500500038, "Rumi SP"], [1500500046, "Baby LR"]], "onepiece": [[710857, "Monkey.D.Luffy SP"], [712117, "Rocks.D.Xebec"], [712084, "Shanks Manga"], [712114, "Monkey.D.Luffy"], [712090, "Kaido Manga"], [708072, "Charlotte Linlin Manga"], [712083, "Edward.Newgate Manga"], [712122, "Monkey.D.Luffy SP"], [708067, "Yamato SP"], [712119, "Shanks SP"]]},
  catalog: {jin3: {prefix:"NRSA03-", base:1501200000, tiers:[["SE", ["Naruto", "Sasuke", "Gaara", "Shikamaru"]], ["◇ASP", ["Naruto", "Sasuke", "Shikamaru", "Lee", "Choji", "Neji", "Gaara", "Kimimaro"]], ["ASP", ["Naruto", "Sasuke", "Shikamaru", "Lee", "Choji", "Neji", "Gaara", "Kimimaro"]], ["AR", ["Orochimaru", "Hiruzen Sarutobi", "Jiraiya", "Orochimaru", "Tsunade", "Jiraiya"]], ["BP", ["Tsunade", "Kimimaro", "Might Guy", "Sakura Haruno", "Itachi Uchiha", "Jiraiya", "Sasuke Uchiha"]], ["MR", ["Choji Akimichi", "Neji Hyuga", "Rock Lee", "Kimimaro", "Gaara", "Shikamaru Nara", "Naruto Uzumaki", "Sasuke Uchiha"]], ["PU", ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Orochimaru", "Jiraiya", "Tsunade", "Itachi Uchiha", "Kisame Hoshigaki"]], ["HR", 20], ["◇UR", ["Naruto", "Sasuke", "Sakura", "Kakashi", "Tsunade", "Minato", "Kiba", "Shikamaru", "Itachi", "Lee", "Kimimaro"]], ["UR", ["Kabuto Yakushi", "Tsunade", "Naruto Uzumaki", "Jiraiya", "Asuma Sarutobi", "Orochimaru", "Tsunade", "Kisame Hoshigaki", "Kisame Hoshigaki", "Kakashi Hatake", "Naruto Uzumaki", "Itachi Uchiha", "Itachi Uchiha", "Shizune", "Jiraiya"]], ["SSR", ["Asuma Sarutobi", "Kisame Hoshigaki", "Naruto Uzumaki", "Kabuto Yakushi", "Jiraiya", "Orochimaru", "Asuma Sarutobi", "Kabuto Yakushi", "Shizune", "Might Guy", "Naruto Uzumaki", "Itachi Uchiha", "Jiraiya", "Sasuke Uchiha", "Tsunade", "Tsunade", "Kisame Hoshigaki", "Kurenai Yuhi", "Hiruzen Sarutobi", "Jiraiya"]], ["SR", ["Hiruzen Sarutobi", "Orochimaru", "Nawaki", "Tenten", "Asuma Sarutobi", "Jirobo", "Orochimaru", "Kabuto Yakushi", "Tsunade", "Tsunade", "Tayuya", "Naruto Uzumaki", "Naruto Uzumaki", "Sakon and Ukon", "Kidomaru", "Sakura Haruno", "Shino Aburame", "Jiraiya", "Sasuke Uchiha", "Sasuke Uchiha"]], ["R", 50]]}},
  serialSteps: [
    { t: "Read the card code", d: "Find the code on the card (NRSA03-SE-001 style). The middle part is the rarity." },
    { t: "Check if that rarity is a numbered tier", d: "In Chapter Jin Series 3 only SE, ASP, ◇ASP, AR and BP are numbered. PR promo cards are not one of the numbered tiers." },
    { t: "Find the stamp", d: "Look on the card face, usually a lower corner, for a small fraction like 07/99 or 003/220. On textured foil it hides, so tilt the card under good light." },
    { t: "Match the run to the tier", d: "Second number should match the tier: SE /220, ASP /99, ◇ASP /9, AR /777, BP /999. A mismatch means stop and double check what you have." },
    { t: "Record it exactly", d: "Write your copy number and the run. If you cannot read it cleanly, leave the card as Unverified." },
    { t: "Photograph the stamp", d: "Take a clear photo before handling it more. Use Scan to attach it to the card." },
    { t: "Protect it", d: "Penny sleeve, then top loader or one-touch. Keep it out of sun and humidity, and handle it as little as possible if you plan to grade." }
  ],
  otherSerialNotes: [
    "Naruto Ninja Age Premium Collector Box: numbered parallels at /999, /720, /99, /72 and /9.",
    "Chapter Jin Series 1 and 2 and Earth Scroll Series 2 and 3 do not have a numbered tier.",
    "Standard Pokémon and Yu-Gi-Oh! cards are not serial numbered. The number in the corner is the set number, not a print run."
  ],
  gradingNotes: [
    { t: "Beckett is strict on Kayou centering", d: "A card that would get a PSA 10 can come back BGS 9 or 9.5. Check centering before you count on a Beckett 10.", url: "https://cottiertcg.com.au/blog/how-to-grade-kayou-naruto-cards" },
    { t: "The grade premium on Kayou can be thin", d: "CGC has graded 1,668 Kayou Naruto cards and 81.6% came back a 10, so a 10 is not rare by itself.", url: "https://pregradecards.com/blog/kayou-cards-value-grading-guide-2026" },
    { t: "One live comp to anchor on", d: "A Jin Series 3 Jiraiya AR numbered 735/777 in BGS 9.5 was listed on eBay at $420 or best offer. That is an asking price, not a sale.", url: "https://www.ebay.com/itm/137766950866" },
    { t: "Character matters more than tier", d: "A numbered card of a popular character can outsell a scarcer card of a minor one.", url: "https://cottiertcg.com.au/blog/kayou-naruto-jin-series-3-serial-numbered-cards" }
  ],
  hot: {
    note: "Snapshot gathered by Claude on Nov 16, 2026. Pull rates are community samples, not official odds. Prices move daily, so open the source before you buy.",
    hitRates: [
      { set: "Black Bolt / White Flare", tcg: "pokemon", ir: "1 in 6", sir: "", note: "Best Illustration Rare rate of any modern set. About half of packs have a hit.", src: "rarecards.nl, Sept 2026", url: "https://rarecards.nl/en/blogs/tcg-blogs/top-10-pokemon-sets-met-beste-pull-rates-in-2026" },
      { set: "Paldean Fates", tcg: "pokemon", ir: "", sir: "", note: "Two hit slots per pack. Roughly one good card every two packs.", src: "cardtracker.au", url: "https://cardtracker.au/insights/guides/best-pokemon-packs-to-open" },
      { set: "Prismatic Evolutions", tcg: "pokemon", ir: "1 in 9", sir: "1 in 45 to 53", note: "Easiest SIRs of the recent special sets.", src: "cardtracker.au", url: "https://cardtracker.au/insights/guides/pokemon-card-pull-rates" },
      { set: "Ascended Heroes", tcg: "pokemon", ir: "1 in 9", sir: "1 in 70", note: "Best SIR rate of the sets releasing now. Sample of 2,000+ packs.", src: "cardtracker.au", url: "https://cardtracker.au/insights/guides/best-pull-rates-pokemon-packs" },
      { set: "Pitch Black", tcg: "pokemon", ir: "1 in 9", sir: "1 in 80", note: "", src: "ripster.gg", url: "https://www.ripster.gg/blog/pokemon-pull-rates-getting-worse" },
      { set: "Phantasmal Flames", tcg: "pokemon", ir: "1 in 9", sir: "1 in 80", note: "", src: "giantsportscards.com", url: "https://giantsportscards.com/blogs/blog/pokemon-sets-with-the-best-pull-rates-winter-2026" },
      { set: "Perfect Order", tcg: "pokemon", ir: "1 in 8 to 10", sir: "1 in 81", note: "", src: "ripster.gg", url: "https://www.ripster.gg/blog/pokemon-pull-rates-getting-worse" },
      { set: "Chaos Rising", tcg: "pokemon", ir: "1 in 9", sir: "1 in 83", note: "", src: "ripster.gg", url: "https://www.ripster.gg/blog/pokemon-pull-rates-getting-worse" },
      { set: "Mega Evolution (base)", tcg: "pokemon", ir: "1 in 9", sir: "1 in 101", note: "Toughest SIRs of the group. Sample of 5,000+ packs.", src: "giantsportscards.com", url: "https://giantsportscards.com/blogs/blog/pokemon-sets-with-the-best-pull-rates-winter-2026" }
    ],
    msrpNote: "MSRP is the suggested retail price. Pokémon booster boxes have no printed MSRP, so the box figure is 36 packs at the $4.49 pack MSRP. Anything marked unconfirmed is a typical price, not an official one.",
    market: [
      { product: "Pitch Black Booster Box", tcg: "pokemon", packs: 36, msrp: 161.64, listings: [
        { where: "TCGplayer lowest", price: 159.00, asOf: "Nov 12", url: "https://riftcompare.com/pokemon" },
        { where: "PokeCompare best offer", price: 169.99, asOf: "Nov 12", url: "https://pokecompare.com/us/deals/cheapest-pokemon-booster-boxes" },
        { where: "TCGplayer market", price: 176.00, asOf: "Nov 9", url: "https://www.tabletopmeta.com/blog/pokemon-booster-box" } ] },
      { product: "Perfect Order Booster Box", tcg: "pokemon", packs: 36, msrp: 161.64, listings: [
        { where: "PokeCompare best offer", price: 169.99, asOf: "Nov 12", url: "https://pokecompare.com/us/deals/cheapest-pokemon-booster-boxes" },
        { where: "TCGplayer lowest", price: 170.00, asOf: "Nov 12", url: "https://riftcompare.com/pokemon" },
        { where: "TCGplayer market", price: 173.00, asOf: "Nov 9", url: "https://www.tabletopmeta.com/blog/pokemon-booster-box" } ] },
      { product: "Chaos Rising Booster Box", tcg: "pokemon", packs: 36, msrp: 161.64, listings: [
        { where: "PokeCompare best offer", price: 169.99, asOf: "Nov 13", url: "https://pokecompare.com/us/deals/cheapest-pokemon-booster-boxes" },
        { where: "TCGplayer lowest", price: 174.99, asOf: "Nov 12", url: "https://riftcompare.com/pokemon" },
        { where: "TCGplayer market", price: 182.00, asOf: "Nov 9", url: "https://www.tabletopmeta.com/blog/pokemon-booster-box" } ] },
      { product: "Delta Reign Booster Box", tcg: "pokemon", packs: 36, msrp: 161.64, listings: [
        { where: "TCGplayer lowest", price: 191.97, asOf: "Nov 12", url: "https://riftcompare.com/pokemon" },
        { where: "TCGplayer market", price: 209.00, asOf: "Nov 9", url: "https://www.tabletopmeta.com/blog/pokemon-booster-box" } ] },
      { product: "Journey Together Booster Box", tcg: "pokemon", packs: 36, msrp: 161.64, listings: [
        { where: "TCGplayer lowest", price: 199.99, asOf: "Nov 12", url: "https://riftcompare.com/pokemon" },
        { where: "TCGplayer market", price: 207.00, asOf: "Nov 9", url: "https://www.tabletopmeta.com/blog/pokemon-booster-box" } ] },
      { product: "Mega Evolution Booster Box", tcg: "pokemon", packs: 36, msrp: 161.64, listings: [
        { where: "TCGplayer market", price: 300.00, asOf: "Nov 9", url: "https://www.tabletopmeta.com/blog/pokemon-booster-box" } ] },
      { product: "Surging Sparks Booster Box", tcg: "pokemon", packs: 36, msrp: 161.64, listings: [
        { where: "TCGplayer market", price: 305.00, asOf: "Nov 9", url: "https://www.tabletopmeta.com/blog/pokemon-booster-box" } ] },
      { product: "Destined Rivals Booster Box", tcg: "pokemon", packs: 36, msrp: 161.64, listings: [
        { where: "TCGplayer market", price: 383.00, asOf: "Nov 9", url: "https://www.tabletopmeta.com/blog/pokemon-booster-box" } ] },
      { product: "Phantasmal Flames Booster Box", tcg: "pokemon", packs: 36, msrp: 161.64, listings: [
        { where: "TCGplayer market", price: 386.00, asOf: "Nov 9", url: "https://www.tabletopmeta.com/blog/pokemon-booster-box" } ] },
      { product: "Pitch Black Elite Trainer Box", tcg: "pokemon", packs: 9, msrp: 49.99, msrpUnconfirmed: true, listings: [
        { where: "TCGplayer lowest", price: 49.15, asOf: "Nov 12", url: "https://riftcompare.com/pokemon" } ] },
      { product: "Perfect Order Elite Trainer Box", tcg: "pokemon", packs: 9, msrp: 49.99, msrpUnconfirmed: true, listings: [
        { where: "TCGplayer lowest", price: 60.00, asOf: "Nov 12", url: "https://riftcompare.com/pokemon" } ] },
      { product: "Chaos Rising Elite Trainer Box", tcg: "pokemon", packs: 9, msrp: 49.99, msrpUnconfirmed: true, listings: [
        { where: "TCGplayer lowest", price: 62.00, asOf: "Nov 12", url: "https://riftcompare.com/pokemon" } ] },
      { product: "Delta Reign Elite Trainer Box", tcg: "pokemon", packs: 9, msrp: 49.99, msrpUnconfirmed: true, listings: [
        { where: "TCGplayer lowest", price: 62.99, asOf: "Nov 12", url: "https://riftcompare.com/pokemon" } ] },
      { product: "Naruto Chapter Jin Series 3 Collector Box (5 packs)", tcg: "naruto", packs: 5, msrp: 19.99, listings: [
        { where: "Crossing TCG", price: 19.95, asOf: "seen Nov 16", url: "https://crossingtcg.com/product/kayou-naruto-smriti-collectible-card-chapter-jin-3-series-collector-box-5-packs" },
        { where: "Best Buy", price: 19.99, asOf: "seen Nov 16", url: "https://www.bestbuy.com/product/kayou-naruto-smriti-collectible-cards-collector-box-5-pk-chapter-jin-3/CZSRTVK6K2/sku/6678540" },
        { where: "9 Tails Collectibles", price: 21.99, asOf: "seen Nov 16", url: "https://www.9tailscollectibles.com/category/kayou-naruto-booster-boxes" } ] },
      { product: "Naruto Chapter Jin Series 3 Booster Box (12 packs)", tcg: "naruto", packs: 12, msrp: 47.88, msrpUnconfirmed: true, listings: [
        { where: "Spoils & Loot", price: 40.00, asOf: "seen Nov 16", url: "https://spoilsandloot.com/products/kayou-naruto-smriti-collectible-cards-chapter-jin-003-booster-box" },
        { where: "Best Buy", price: 49.99, asOf: "seen Nov 16", url: "https://www.bestbuy.com/product/kayou-naruto-smriti-collectible-cards-chapter-jin-series-3/CZSRTVK6WR/sku/12586582" },
        { where: "Walmart", price: 58.97, asOf: "seen Nov 16", url: "https://www.walmart.com/ip/KAYOU-Naruto-Smriti-Collectible-Card-Chapter-Jin-English-Series-3/20129361635" },
        { where: "Top Collectibles", price: 59.99, asOf: "seen Nov 16", url: "https://topcollectibles.com/products/kayou-naruto-smriti-chapter-jin-collectible-trading-card-series-3-booster-box-12-packs-english-version" } ] },
      { product: "Naruto Ninja Age Premium Collector Box (16 packs)", tcg: "naruto", packs: 16, msrp: null, listings: [
        { where: "9 Tails Collectibles", price: 129.00, asOf: "seen Nov 16", url: "https://www.9tailscollectibles.com/category/kayou-naruto-booster-boxes" } ] },
      { product: "KPop Demon Hunters Energy Edition pack (8 cards)", tcg: "kpdh", packs: 1, msrp: 4.49, listings: [
        { where: "GameStop", price: 4.99, asOf: "seen Nov 16", url: "https://www.gamestop.com/toys-games/trading-cards/products/kpop-demon-hunters-collectible-trading-cards-energy-edition-styles-may-vary/443782.html" } ] },
      { product: "KPop Demon Hunters Classic Collector Box (10 packs)", tcg: "kpdh", packs: 10, msrp: 19.90, msrpUnconfirmed: true, listings: [
        { where: "GameStop", price: 24.99, asOf: "seen Nov 16", url: "https://www.gamestop.com/toys-games/trading-cards/products/kpop-demon-hunters-collectible-trading-cards-collector-box--classic-edition---10-packs/446359.html" } ] }
    ],
    radar: [
      { t: "Chapter Jin Series 3 chase", tcg: "naruto", d: "ASP /99 and SE /220 sit at the top of the English Kayou Naruto market. AR /777 and BP /999 are the numbered cards most boxes actually produce.", url: "https://cottiertcg.com.au/blog/jin-chapter-series-3-most-valuable-cards" },
      { t: "KPop Demon Hunters Energy Edition Series 2", tcg: "kpdh", d: "142 designs across 11 rarity tiers, arriving in stores November 2026.", url: "https://respawn.outlookindia.com/pop-culture/pop-culture-news/kayous-kpop-demon-hunters-energy-edition-series-2-cards-details" },
      { t: "KPop Demon Hunters is collectible only", tcg: "kpdh", d: "These are Kayou collectible cards with no game attached. Energy Edition has 11 rarities, Classic has 8.", url: "https://www.wargamer.com/kpop-demon-hunters-trading-cards-preorder" },
      { t: "Surging Sparks for steady hits", tcg: "pokemon", d: "Roughly 4 to 6 full hits per booster box, and it does well from single blisters too.", url: "https://cardtracker.au/insights/guides/best-pokemon-packs-to-open" }
    ]
  }
};

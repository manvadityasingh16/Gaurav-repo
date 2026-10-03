/* =========================================================
   EDIT YOUR CONTENT HERE
   Leave any "src" / "video" / "image" empty to use the built-in artwork.
   Add a file path or URL to replace artwork with your real work.
   ========================================================= */
const CONFIG = {
  name: "Gaurav Agarwal",
  initials: "GA",
  roles: ["Designer", "Editor"],
  year: new Date().getFullYear(),
  bio: "Hey there, I'm <b>Gaurav Agarwal</b>. For the past <b>two years</b> I have been <b>designing and editing videos</b>. I adore creative work, and I'd rather keep learning than get left behind as the creative industry changes.",
  email: "gauravagarwal@gmail.com", phone: "+91 9876543210", city: "Jaipur, India", handle: "/gauravagarwal", website: "gauravagarwal.com",
  socials: [
    { label: "Instagram", short: "ig", href: "#" }, { label: "Behance", short: "Bē", href: "#" },
    { label: "LinkedIn", short: "in", href: "#" }, { label: "Vimeo", short: "vi", href: "#" }
  ],
  hero: { image: "", video: "" },
  avatar: "../assets/Gaurav.jpeg",
  education: [{ date: "August 2023", school: "JECRC College", detail: ["Graphic Design, Film Editor", "3D Basics, Animation"], note: "Graduated in 2027" }],
  experience: [
    { when: "2021 – Present", place: "Freelancer", roles: ["Designer."] },
    { when: "2021 – 2022", place: "BLITZ PIXELMEDIA STUDIO", roles: ["Designer", "Editor", "Photographer."] },
    { when: "2023", place: "Frame & Field", roles: ["Motion Graphic Designer"] }
  ],
  tools: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro", "DaVinci Resolve", "Lightroom", "Cinema 4D (Basic)", "Blender (Basic)", "Moho (Basic)"],
  expertise: ["Motion Design", "Video Editing", "Color Grading", "Branding", "Photography", "Typography", "Package Design", "Animation", "3D Mockup"],
  interests: ["Photography and Editor", "Content Creator", "Visual Identity", "Filmmaker"],
  languages: ["Native language", "English (Intermediate)"],

  designsA: [
    { title: "Up in the air", cap: "Street poster series", style: "bigtype", word: "UP IN AIR", pal: ["#f2d100", "#2a2f7a", "#fff3a1"], src: "" },
    { title: "Nope", cap: "Streetwear lookbook", style: "duotone", word: "NOPE", pal: ["#6f8fd6", "#1a2a6b", "#e8efff"], src: "" },
    { title: "Paper peaks", cap: "Travel zine cover", style: "collage", word: "PAPER PEAKS 2026", pal: ["#7b9cc4", "#e0a96a", "#273748"], src: "" },
    { title: "Soup of the day", cap: "Editorial collage", style: "collage", word: "SOUP DAY", pal: ["#e8553a", "#6bb3c4", "#3a5b5e"], src: "" },
    { title: "Capital", cap: "City identity poster", style: "bigtype", word: "CITY CAPITAL", pal: ["#c8d3d8", "#1b1b1b", "#ffffff"], src: "" },
    { title: "What the…", cap: "Typographic jacket print", style: "duotone", word: "WHAT", pal: ["#e4e0ff", "#222", "#8a7bff"], src: "" },
    { title: "Harbour light", cap: "Coastal collage", style: "collage", word: "HARBOUR LIGHT", pal: ["#f0b255", "#3a6ea5", "#16314d"], src: "" },
    { title: "Evolution", cap: "Magazine spread", style: "collage", word: "THE STORY OF EVOLUTION", pal: ["#c24d2c", "#d8c690", "#2b2b2b"], src: "" }
  ],
  designsB: [
    { title: "Remember me", cap: "Campaign, light series", style: "duotone", word: "REMEMBER", pal: ["#ff6a3d", "#5a1a4a", "#ffe0f0"] },
    { title: "Bloom", cap: "Campaign, light series", style: "duotone", word: "BLOOM", pal: ["#ffd23a", "#d1228a", "#fff3c0"] },
    { title: "Launch event", cap: "Product launch key visual", style: "product", word: "NEW SERIES LAUNCH", pal: ["#0a3cff", "#050d3a", "#8fd0ff"] },
    { title: "Hands", cap: "Campaign, light series", style: "duotone", word: "HANDS", pal: ["#ff9ad5", "#6a3fd1", "#fff"] },
    { title: "Florals", cap: "Campaign, light series", style: "duotone", word: "WILD", pal: ["#d9b99b", "#7a5a7a", "#fff7ea"] },
    { title: "Musical", cap: "Cover art", style: "duotone", word: "musical", pal: ["#39b8ff", "#0b3a7a", "#e7f6ff"] },
    { title: "Chef's special", cap: "Restaurant menu promo", style: "menu", word: "NEW ON THE MENU", pal: ["#b3262b", "#e8a23d", "#fff"] },
    { title: "Boost", cap: "Wellness ad", style: "product", word: "BOOSTS ENERGY", pal: ["#22a655", "#0b5c2b", "#cfe9d4"] },
    { title: "Premium", cap: "Wellness ad", style: "product", word: "TO FEEL YOUR BEST", pal: ["#1e9a52", "#0a4a24", "#e8e0c8"] },
    { title: "Banana", cap: "Experimental type", style: "bigtype", word: "FRUIT", pal: ["#ff9d00", "#ff3b1f", "#fff0a8"] },
    { title: "Detention", cap: "Experimental type", style: "bigtype", word: "DOG", pal: ["#ffb400", "#e8281c", "#fff3d0"] },
    { title: "Skincare series", cap: "Event poster", style: "product", word: "CARE SERIES", pal: ["#0f64e0", "#031a5e", "#a8d8ff"] },
    { title: "Women's day", cap: "Social campaign", style: "menu", word: "HAPPY DAY EVENT", pal: ["#12b886", "#7ee0c0", "#fff"] },
    { title: "Giveaway", cap: "Social campaign", style: "menu", word: "JOIN THE EVENT", pal: ["#e0507a", "#ffd0dc", "#fff"] },
    { title: "Open", cap: "Tournament poster", style: "racket", word: "CITY OPEN", pal: ["#2f7a2a", "#ffd23a", "#ffffff"] },
    { title: "Club", cap: "Brand ad", style: "product", word: "BE YOUR BEST", pal: ["#2a5cc0", "#10286a", "#e0eaff"] },
    { title: "Court", cap: "Tournament poster", style: "racket", word: "OPEN 15", pal: ["#3c9a3a", "#f4ff7a", "#ffffff"] },
    { title: "Steam", cap: "Menu promo", style: "menu", word: "FRESH TODAY", pal: ["#8a1f1f", "#f2a03d", "#fff"] }
  ],
  motion: {
    panes: [{ title: "Learn to code", scene: 0 }, { title: "Working day", scene: 1 }, { title: "The IDE", scene: 2 }],
    main: { title: "How websites come together", video: "" }
  },
  acts: [
    { label: "ACT 1", head: "ACT I: THE SEED (a small beginning)", note: "<b>note:</b> the seed hears rain and wriggles under the soil.", scenes: [0, 1] },
    { label: "ACT 2", head: "ACT II: CLEAN UP (the seed gets ready)", note: "<b>note:</b> bath time. Bubbles rise, the rubber duck watches.", scenes: [1, 2] },
    { label: "ACT 3", head: "ACT III: RISING STORY (the seed becomes a gentleman)", note: "<b>note:</b> sees himself in the mirror, colour changes from plain to pink.", scenes: [2, 0] }
  ],
  storyTitle: "Seed's Story",
  films: [
    { t: "Summer\nreel", s: "chunk", kind: "road", pal: ["#c9d2c8", "#5e6e66", "#ffcf33"], r: 1.78, desc: "Skate-park afternoon, graded warm with lifted shadows." },
    { t: "Home\nalone", s: "script", kind: "room", pal: ["#f0b24a", "#4a2a14", "#ffe7a8"], r: 1.1, desc: "Practical-lit interior, tungsten balance." },
    { t: "Glimpse\nof us", s: "chunk", kind: "street", pal: ["#8fb7c4", "#2d4a56", "#ffc533"], r: 1.5, desc: "Street footage with a teal and amber split-tone." },
    { t: "The old\npalace", s: "didone", kind: "room", pal: ["#d8c9a4", "#4a3a26", "#ff6a3d"], r: 2.1, desc: "Museum walk-through with practical window light." },
    { t: "at\nnight", s: "chunk", kind: "city", pal: ["#2b6f86", "#06222c", "#ffd23a"], r: 0.6, desc: "Vertical cut for social, blue-hour city." },
    { t: "city at night\nlife", s: "didone", kind: "city", pal: ["#1c8a96", "#04242b", "#ffb400"], r: 1.1, desc: "Window reflection grade, cyan shadows." },
    { t: "Day\nwith tree", s: "script", kind: "street", pal: ["#c8d8b8", "#4a5f3a", "#ffd23a"], r: 0.7, desc: "Soft green daylight with a lifted black point." },
    { t: "Night\nmarket", s: "stack", kind: "road", pal: ["#3a5a60", "#0c1c20", "#ffa800"], r: 1.7, desc: "Radio-and-neon interior, pushed contrast." },
    { t: "Garden\nsummer", s: "didone", kind: "street", pal: ["#bcc9a0", "#6a7a4a", "#ff7a3d"], r: 1.6, desc: "Checkered-trouser fashion b-roll, creamy highlights." }
  ],
  gradeScene: { kind: "city", pal: ["#2c7d94", "#05212a", "#ffb400"] }
};

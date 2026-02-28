const games = [
  {
    rank: 1,
    title: "Elden Ring",
    tags: ["RPG", "Action", "Open World"],
    badge: "epic",
    badgeText: "Epic",
    desc: "FromSoftware'in şaheser açık dünya aksiyon RPG'si. Karanlık bir fantezi evreninde ölümüne mücadele et.",
    fullDesc: "Elden Ring, FromSoftware ve George R.R. Martin iş birliğiyle yaratılmış devasa bir açık dünya aksiyon RPG'sidir. The Lands Between'in gizemli topraklarında Elden Ring'i yeniden bir araya getirmek için sayısız düşmanla savaş, zorlu bossları yen ve kendi efsaneni yaz.",
    players: "12.5M+",
    rating: "9.6",
    year: "2022",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg",
    link: "https://store.steampowered.com/app/1245620/ELDEN_RING/"
  },
  {
    rank: 2,
    title: "Baldur's Gate 3",
    tags: ["RPG", "Turn-Based", "Co-op"],
    badge: "hot",
    badgeText: "Hot",
    desc: "D&D evreninde geçen, seçimlerinizin her şeyi değiştirdiği epik RPG macerası.",
    fullDesc: "Baldur's Gate 3, Larian Studios'un geliştirdiği, Dungeons & Dragons 5. edisyon kurallarına dayanan devasa bir rol yapma oyunudur. Yüzlerce saatlik içerik, derin hikaye anlatımı ve son derece özgür oynanış anlayışıyla tüm zamanların en iyi RPG'lerinden biri olarak kabul görmektedir.",
    players: "10.8M+",
    rating: "9.8",
    year: "2023",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/capsule_616x353.jpg",
    link: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/"
  },
  {
    rank: 3,
    title: "Cyberpunk 2077",
    tags: ["RPG", "FPS", "Open World"],
    badge: "hot",
    badgeText: "Hot",
    desc: "Night City'nin neon ışıklarında ölümsüzlük peşinde koşan paralı asker V'nin hikayesi.",
    fullDesc: "CD Projekt Red'in geliştirdiği Cyberpunk 2077, 2077 yılında geçen distopik bir açık dünya RPG'sidir. Phantom Liberty genişlemesiyle birlikte çıkışından çok daha iyi bir hale gelen oyun, derin karakter geliştirme, sinematik hikaye anlatımı ve nefes kesen şehir tasarımıyla öne çıkar.",
    players: "25M+",
    rating: "9.0",
    year: "2020",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/capsule_616x353.jpg",
    link: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/"
  },
  {
    rank: 4,
    title: "Hogwarts Legacy",
    tags: ["RPG", "Action", "Fantasy"],
    badge: "new",
    badgeText: "Trend",
    desc: "1800'lerin Hogwarts'ında bir öğrenci olarak büyü dünyasını keşfet.",
    fullDesc: "Hogwarts Legacy, Harry Potter evreninde geçen açık dünya bir aksiyon RPG'sidir. 1800'lerin büyücülük dünyasında kendi karakterini oluştur, efsanevi büyüler öğren, Hogwarts'ı ve çevresini keşfet. Oyun, serinin hayranları için mükemmel bir deneyim sunar.",
    players: "15M+",
    rating: "8.5",
    year: "2023",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/capsule_616x353.jpg",
    link: "https://store.steampowered.com/app/990080/Hogwarts_Legacy/"
  },
  {
    rank: 5,
    title: "Palworld",
    tags: ["Survival", "Crafting", "Multiplayer"],
    badge: "hot",
    badgeText: "Viral",
    desc: "Silah taşıyan gizemli yaratıklarla dolu dünyada hayatta kal, üret ve savaş.",
    fullDesc: "Palworld, Pocket Pair tarafından geliştirilen, yaratık koleksiyon oyunlarına yepyeni bir soluk getiren aksiyon-survival oyunudur. Çıkışından bu yana Steam'de rekorlar kıran oyun, arkadaşlarınla birlikte oynayabileceğin derin bir crafting ve inşa sistemi sunar.",
    players: "25M+",
    rating: "8.2",
    year: "2024",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/capsule_616x353.jpg",
    link: "https://store.steampowered.com/app/1623730/Palworld/"
  },
  {
    rank: 6,
    title: "Helldivers 2",
    tags: ["Co-op", "Shooter", "Action"],
    badge: "new",
    badgeText: "Yeni",
    desc: "Demokrasi için savaş! 4 kişilik takımınla uzaylı sürülerine karşı ölümüne mücadele.",
    fullDesc: "Helldivers 2, Arrowhead Game Studios'un geliştirdiği üçüncü şahıs co-op nişancı oyunudur. Oyuncular Super Earth adına savaşan seçkin askerler olarak çeşitli gezegenlerde zorlu görevler üstlenir. Strateji ve takım çalışını birleştiren gameplay döngüsüyle çok sayıda GOTY ödülüne aday olmuştur.",
    players: "12M+",
    rating: "8.9",
    year: "2024",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/capsule_616x353.jpg",
    link: "https://store.steampowered.com/app/553850/HELLDIVERS_2/"
  },
  {
    rank: 7,
    title: "Fortnite",
    tags: ["Battle Royale", "Free to Play", "Shooter"],
    badge: "hot",
    badgeText: "Hot",
    desc: "Dünyanın en popüler battle royale oyunu. Sürekli güncellenen içerik ve sezonlar.",
    fullDesc: "Epic Games'in geliştirdiği Fortnite, milyarlarca oyuncuya ulaşan kültür fenomeni haline gelmiş bir battle royale oyunudur. Yıllar içinde konserlere, film etkinliklerine ve sayısız kolaborasyona ev sahipliği yapan oyun, her yaştan oyuncuya hitap eden içerikleriyle platform ötesi bir deneyim sunmaktadır.",
    players: "350M+",
    rating: "8.0",
    year: "2017",
    img: "https://cdn2.unrealengine.com/social-image-chapter4-s3-3840x2160-3840x2160-d8f5d2fd74e3.jpg",
    link: "https://www.fortnite.com/"
  },
  {
    rank: 8,
    title: "Starfield",
    tags: ["RPG", "Sci-Fi", "Open World"],
    badge: "epic",
    badgeText: "Epic",
    desc: "Bethesda'nın uzayda geçen açık dünya RPG devâsası. Yıldızların ötesinde keşif.",
    fullDesc: "Bethesda Game Studios'un 25 yılda bir yaptığı yeni IP Starfield, yüzlerce gezegende geçen devasa bir uzay RPG'sidir. Kendi uzay gemini özelleştir, binlerce gezeni keşfet ve Constellation örgütü için kaderin şekillendirecek sırları çöz.",
    players: "13M+",
    rating: "7.8",
    year: "2023",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_616x353.jpg",
    link: "https://store.steampowered.com/app/1716740/Starfield/"
  },
  {
    rank: 9,
    title: "Lies of P",
    tags: ["Soulslike", "Action", "Dark Fantasy"],
    badge: "new",
    badgeText: "Trend",
    desc: "Pinokyo masalından ilham alan karanlık soulslike şaheseri. Her seçim önemlidir.",
    fullDesc: "Round8 Studio'nun geliştirdiği Lies of P, Pinokyo masalını temel alarak yaratılan atmosferik bir soulslike aksiyon RPG'sidir. Belle Époque dönemini andıran karanlık şehir Krat'ta, yalan söyleme yeteneğiyle donanan Pinocchio olarak insanlığını arıyorsun. Türünün en iyi örneklerinden biri olarak övgü almıştır.",
    players: "3M+",
    rating: "8.6",
    year: "2023",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1627720/capsule_616x353.jpg",
    link: "https://store.steampowered.com/app/1627720/Lies_of_P/"
  },
  {
    rank: 10,
    title: "Hades II",
    tags: ["Roguelite", "Action", "Indie"],
    badge: "new",
    badgeText: "Yeni",
    desc: "Ölümsüz bir tanrıça olarak yeraltı dünyasından kaçış. Bağımlılık yapan roguelite.",
    fullDesc: "Supergiant Games'in geliştirdiği Hades II, çok beğenilen ilk oyunun devamı niteliğinde bir roguelite aksiyon oyunudur. Erken erişim aşamasında bile büyük ilgi gören oyun, derin hikaye anlatımı, muhteşem sanat yönetimi ve son derece tatmin edici dövüş mekaniğiyle adından söz ettirmektedir.",
    players: "5M+",
    rating: "9.4",
    year: "2024",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/capsule_616x353.jpg",
    link: "https://store.steampowered.com/app/1145350/Hades_II/"
  }
];

function buildCards() {
  const grid = document.getElementById('games');
  games.forEach(g => {
    const card = document.createElement('article');
    card.className = 'game-card';
    card.innerHTML = `
      <div class="card-img-wrap">
        <img class="card-img" src="${g.img}" alt="${g.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x225/111827/6c63ff?text=${encodeURIComponent(g.title)}'" />
        <div class="card-rank">#${g.rank}</div>
        <div class="card-badge badge-${g.badge}">${g.badgeText}</div>
      </div>
      <div class="card-body">
        <div class="card-tags">${g.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="card-title">${g.title}</div>
        <div class="card-desc">${g.desc}</div>
      </div>
      <div class="card-footer">
        <div class="rating">&#9733; ${g.rating}</div>
        <div class="players">${g.players} oyuncu</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(g));
    grid.appendChild(card);
  });
}

function openModal(g) {
  document.getElementById('modalImg').src = g.img;
  document.getElementById('modalImg').onerror = function() {
    this.src = `https://via.placeholder.com/680x382/111827/6c63ff?text=${encodeURIComponent(g.title)}`;
  };
  document.getElementById('modalRank').textContent = `#${g.rank} Trend Oyun`;
  document.getElementById('modalTitle').textContent = g.title;
  document.getElementById('modalTags').innerHTML = g.tags.map(t => `<span class="tag">${t}</span>`).join('');
  document.getElementById('modalDesc').textContent = g.fullDesc;
  document.getElementById('modalPlayers').textContent = g.players;
  document.getElementById('modalRating').textContent = g.rating + ' / 10';
  document.getElementById('modalYear').textContent = g.year;
  document.getElementById('modalLink').href = g.link;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

buildCards();

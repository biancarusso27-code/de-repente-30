"use strict";

const CONFIG = {
  event: {
    title: "De repente, 30",
    date: "27/02/2027",
    time: "19h",
    place: "Sociedade Amigos de Vila Sá",
    theme: "Anos 2000 / Y2K",
  },

 videoUrl: "",
formEndpoint: "",
whatsapp: "5511997684732",

  googleForm: {
    action: "",
    fields: {
      groupId: "entry.2351461",
      guests: "entry.450850667",
      message: "entry.1876228934",
    },
  },
};   

const scraps = [
  { name: "Monique", when: "hoje", text: "AMIGA??? 30??? Como assim???? 😂" },
  { name: "Nicole L", when: "hoje", text: "Já confirmei minha presença. Agora falta escolher o look." },
  { name: "Rose", when: "ontem", text: "Minha filha ❤️" },
];

const outfits = [
  "Y2K / Pop",
  "Emo / Rock",
  "Skater",
  "Casual / Geek 2000s",
  "Patricinha / Playboy"
];

const guestGroups = [
  { id: "tia-preta", names: ["Tia Preta", "Tio Nelson", "Alicia", "Lorena", "Victor"] },
  { id: "tia-neusa", names: ["Tia Neusa", "Tio Nilson", "Vô", "Vó"] },
  { id: "guilherme-rose-rogerio-isa", names: ["Guilherme", "Rose", "Rogério", "Isa"] },
  { id: "fabio-magali-sergio", names: ["Fabio", "Magali", "Sergio"] },
  { id: "nathalia-guilherme-joaquim", names: ["Nathalia", "Guilherme", "Joaquim"] },
  { id: "reinaldo-solange", names: ["Reinaldo", "Solange", "Luiza", "Catherine"] },
  { id: "giovanna-rayssa-rafael", names: ["Giovanna", "Rayssa", "Rafael", "Luna"] },
  { id: "monique-renan-jade", names: ["Monique", "Renan", "Jade"] },
  { id: "biz-tamy-pedro", names: ["Biz", "Tamy", "Pedro"] },
  { id: "camila-edi-victoria", names: ["Camila", "Edi", "Victoria", "Mayte", "Tio Sergio", "Dita"] },
  { id: "tati-julio-raphinha", names: ["Tati", "Julio", "Raphinha"] },
  { id: "mayara-jojo", names: ["Mayara", "Jojo"] },
  { id: "sandra-andre", names: ["Sandra", "Andre", "Fernanda", "Rafa", "Namorado"] },
  { id: "tia-fe-tio-fabio", names: ["Tia Fê", "Tio Fabio", "Sophie", "Zoe"] },
  { id: "amanda-gabriel", names: ["Amanda", "Gabriel"] },
  { id: "nicholas-glorinha", names: ["Nicholas", "Glorinha"] },
  { id: "nicole-vinicius", names: ["Nicole", "Vinicius"] },
  { id: "nicole-matheus", names: ["Nicole", "Matheus"] },
  { id: "tio-urgi-namorada", names: ["Tio Urgi", "Namorada"] },
  { id: "mariane-namorado", names: ["Mariane", "Namorado"] },
  { id: "mariama-carol", names: ["Mariama", "Carol"] },
  { id: "tio-anselmo-tia-simoni", names: ["Tio Anselmo", "Tia Simoni"] },
  { id: "tio-roberto-rafael", names: ["Tio Roberto", "Rafael"] },
  { id: "rose-pavani", names: ["Rose", "Pavani"] },
  { id: "leoni-juliana", names: ["Leoni", "Juliana"] },
  { id: "leonardo-beatriz", names: ["Leonardo", "Beatriz"] },
  { id: "hiago-giovanna", names: ["Hiago", "Giovanna"] },
  { id: "camila-vitor", names: ["Camila", "Vitor"] },
  { id: "renzo-laura", names: ["Renzo", "Laura"] },
  { id: "isabelle-alcantara", names: ["Isabelle", "Alcantara"] },
  { id: "angelica-rodrigo", names: ["Angelica", "Rodrigo"] },
  { id: "gabi-marcio", names: ["Gabi", "Marcio"] },
  { id: "gui-namorada", names: ["Gui", "Namorada"] },
  { id: "gg-rodrigo", names: ["GG", "Rodrigo"] },
  { id: "maria-luiza", names: ["Maria Luiza"] },
  { id: "julia", names: ["Julia"] },
  { id: "tio-wilson", names: ["Tio Wilson"] },
  { id: "sueli", names: ["Sueli"] },
  { id: "dr-fernando", names: ["Dr. Fernando"] },
  { id: "hester", names: ["Hester"] },
  { id: "waleska", names: ["Waleska"] },
  { id: "charlene", names: ["Charlene"] },
  { id: "claudia", names: ["Claudia"] },
];

function getGuestGroup() {
  const parts = location.hash.split("/");
  const groupId = parts[2];

  if (groupId) {
    const group = guestGroups.find((item) => item.id === groupId);

    if (group) {
      sessionStorage.setItem("orkut-bibica-guest-group", group.id);
      return group;
    }
  }

  const savedId = sessionStorage.getItem("orkut-bibica-guest-group");

  if (!savedId) return null;

  return guestGroups.find((item) => item.id === savedId) || null;
}

const friends = ["Bianca", "Guilherme", "Rose", "Emerson", "Matheus", "Nicole"];

const communities = [
  { name: "EU JÁ TIVE MSN", members: "578.432" },
  { name: "EU VIVI OS ANOS 2000", members: "1.234.567" },
  { name: "SUMMER ELETROHITS É CULTURA", members: "98.421" },
  { name: "EMO NÃO MORREU", members: "104.000" },
  { name: "FIZ 30 E NÃO ESTOU PREPARADA", members: "30" },
  { name: "EU NÃO SEI DANÇAR MAS VOU", members: "82" },
];

const EV = CONFIG.event;

const initial = (name) => name.trim().charAt(0).toUpperCase();

const eventCards = () => `
  <div class="big-date">
    <div class="info"><strong>DATA</strong>${EV.date}</div>
    <div class="info"><strong>HORÁRIO</strong>${EV.time}</div>
    <div class="info"><strong>LOCAL</strong>${EV.place}</div>
  </div>`;

const rsvpButton = (label = "CONFIRMAR PRESENÇA") => {
  const group = getGuestGroup();

  return group
    ? `<a href="#/rsvp/${group.id}" class="button">${label}</a>`
    : `<a href="#/rsvp" class="button">${label}</a>`;
};

const videoButton = () =>
  CONFIG.videoUrl
    ? `<a class="button" href="${CONFIG.videoUrl}" target="_blank" rel="noopener">▶ PLAY</a>`
    : `<span class="button is-disabled" aria-disabled="true">▶ PLAY (em breve)</span>`;

const RSVP_KEY = "orkut-bibica-rsvp";

function getRsvp() {
  try {
    return JSON.parse(localStorage.getItem(RSVP_KEY));
  } catch {
    return null;
  }
}

function saveRsvp(data) {
  try {
    localStorage.setItem(RSVP_KEY, JSON.stringify(data));
  } catch {
    /* sem armazenamento local */
  }
}

function rsvpStatus() {
  const rsvp = getRsvp();

  if (!rsvp) return "aguardando sua confirmação";

  if (Array.isArray(rsvp.guests)) {
    const confirmed = rsvp.guests.filter(
      (guest) => guest.going === "yes"
    ).length;

    const declined = rsvp.guests.filter(
      (guest) => guest.going === "no"
    ).length;

    if (confirmed === 0 && declined > 0) {
      return `${declined} não irão`;
    }

    if (declined === 0) {
      return `${confirmed} pessoa(s) confirmada(s) ✓`;
    }

    return `${confirmed} confirmada(s) • ${declined} não irão`;
  }

  if (rsvp.going === "yes") return "confirmado ✓";
  if (rsvp.going === "no") return "não vai conseguir 😭";

  return "aguardando sua confirmação";
}

const pages = {
  home: () => `
    <h2 class="page-title">Bem-vindo ao perfil de Bibica</h2>

    <div class="home-sections">

      <div>

        <div class="box">
          <div class="box-title">recado do dia</div>

          <p>
            <strong>Você tem 30 novos recados.</strong>
          </p>

          <p>
            Se você recebeu este convite, é porque faz parte da história.
          </p>

          <p>
            <a href="#/testimonials">
              clique aqui para descobrir o motivo →
            </a>
          </p>
        </div>

        <div class="box">
          <div class="box-title">quem sou eu</div>

          <p>
            Uma garota que abriu o MSN em 2007 e, quando percebeu,
            estava fazendo 30 anos.
          </p>

          <p>
            <strong>estado:</strong> online
          </p>

          <p>
            <strong>humor:</strong> comemorando 🎉
          </p>
        </div>

        <div class="box">
          <div class="box-title">o evento</div>

          <p>
            <strong>${EV.title}</strong>
          </p>

          ${eventCards()}

          <p>
            <a href="#/event">ver detalhes do evento →</a>
          </p>
        </div>

      </div>

      <div>

        <div class="box">
          <div class="box-title">meus amigos</div>

          <div class="friend-grid">
            ${friends
              .slice(0, 6)
              .map(
                (f) =>
                  `<div class="friend">
                    <div class="friend-avatar" aria-hidden="true">
                      ${initial(f)}
                    </div>
                    ${f}
                  </div>`
              )
              .join("")}
          </div>

          <p>
            <a href="#/friends">ver todos os amigos →</a>
          </p>
        </div>

        <div class="box">
          <div class="box-title">minhas comunidades</div>

          <div class="community-grid">
            ${communities
              .slice(0, 4)
              .map(
                (c) =>
                  `<div class="community">
                    <strong>${c.name}</strong>
                    <p>${c.members} membros</p>
                  </div>`
              )
              .join("")}
          </div>

          <p>
            <a href="#/communities">
              ver todas as comunidades →
            </a>
          </p>
        </div>

      </div>

    </div>`,

  profile: () => `
    <h2 class="page-title">Perfil</h2>

    <div class="box">
      <div class="box-title">${EV.title.toLowerCase()}</div>

      <div class="invite">
        <h2>💜 Você está convidado!</h2>
        <p>Depois de 29 anos, Bibica finalmente chegou aos 30.</p>

        ${eventCards()}

        <p><strong>Tema:</strong> ${EV.theme}</p>

        <p>Vista seu melhor look dos anos 2000 e venha preparado para dançar.</p>

        <p>${rsvpButton()}</p>
      </div>
    </div>`,

  scraps: () => `
    <h2 class="page-title">Recados</h2>

    <div class="box">
      <div class="box-title">30 novos recados</div>

      ${scraps
        .map(
          (s) => `
        <div class="scrap">
          <div class="scrap-avatar" aria-hidden="true">${initial(s.name)}</div>

          <div class="scrap-body">
            <div class="scrap-head">
              <span class="name">${s.name}</span>
              <span class="date">${s.when}</span>
            </div>

            <p>${s.text}</p>
          </div>
        </div>`
        )
        .join("")}
    </div>`,

  photos: () => {
  const route = location.hash;

  // =========================
  // ÁLBUM PRINCIPAL
  // =========================
  if (route === "#/photos") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">
          álbum: O QUE VESTIR? • escolha seu estilo
        </div>

        <p>
          Não precisa copiar o look inteiro.
          Pegue a inspiração e venha no seu estilo. 😎
        </p>

        <div class="photo-grid">

          <a href="#/photos/y2k" class="photo">
            <div class="placeholder-photo">Y2K / POP</div>
            Y2K / POP
          </a>

          <a href="#/photos/emo-rock" class="photo">
            <div class="placeholder-photo">EMO / ROCK</div>
            EMO / ROCK
          </a>

          <a href="#/photos/skater" class="photo">
            <div class="placeholder-photo">SKATER</div>
            SKATER
          </a>

          <a href="#/photos/casual-geek" class="photo">
            <div class="placeholder-photo">CASUAL / GEEK</div>
            CASUAL / GEEK 2000s
          </a>

          <a href="#/photos/patricinha-playboy" class="photo">
            <div class="placeholder-photo">PATRICINHA / PLAYBOY</div>
            PATRICINHA / PLAYBOY
          </a>

        </div>
      </div>
    `;
  }

  // =========================
  // Y2K / POP
  // =========================
  if (route === "#/photos/y2k") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">álbum: Y2K / POP</div>

        <p>Escolha seu estilo:</p>

        <div class="photo-grid">

          <a href="#/photos/y2k/feminino" class="photo">
            <div class="placeholder-photo">FEMININO</div>
            FEMININO
          </a>

          <a href="#/photos/y2k/masculino" class="photo">
            <div class="placeholder-photo">MASCULINO</div>
            MASCULINO
          </a>

        </div>
      </div>
    `;
  }

  if (route === "#/photos/y2k/feminino") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">Y2K / POP • FEMININO</div>

        <p>Referências de looks:</p>

        <div class="photo-grid">

          <div class="photo">
            <div class="placeholder-photo">LOOK 01</div>
            LOOK 01
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 02</div>
            LOOK 02
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 03</div>
            LOOK 03
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 04</div>
            LOOK 04
          </div>

        </div>
      </div>
    `;
  }

  if (route === "#/photos/y2k/masculino") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">Y2K / POP • MASCULINO</div>

        <p>Referências de looks:</p>

        <div class="photo-grid">

          <div class="photo">
            <div class="placeholder-photo">LOOK 01</div>
            LOOK 01
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 02</div>
            LOOK 02
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 03</div>
            LOOK 03
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 04</div>
            LOOK 04
          </div>

        </div>
      </div>
    `;
  }

  // =========================
  // EMO / ROCK
  // =========================
  if (route === "#/photos/emo-rock") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">álbum: EMO / ROCK</div>

        <p>Escolha seu estilo:</p>

        <div class="photo-grid">

          <a href="#/photos/emo-rock/feminino" class="photo">
            <div class="placeholder-photo">FEMININO</div>
            FEMININO
          </a>

          <a href="#/photos/emo-rock/masculino" class="photo">
            <div class="placeholder-photo">MASCULINO</div>
            MASCULINO
          </a>

        </div>
      </div>
    `;
  }

  if (route === "#/photos/emo-rock/feminino") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">EMO / ROCK • FEMININO</div>

        <p>Referências de looks:</p>

        <div class="photo-grid">

          <div class="photo">
            <div class="placeholder-photo">LOOK 01</div>
            LOOK 01
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 02</div>
            LOOK 02
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 03</div>
            LOOK 03
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 04</div>
            LOOK 04
          </div>

        </div>
      </div>
    `;
  }

  if (route === "#/photos/emo-rock/masculino") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">EMO / ROCK • MASCULINO</div>

        <p>Referências de looks:</p>

        <div class="photo-grid">

          <div class="photo">
            <div class="placeholder-photo">LOOK 01</div>
            LOOK 01
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 02</div>
            LOOK 02
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 03</div>
            LOOK 03
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 04</div>
            LOOK 04
          </div>

        </div>
      </div>
    `;
  }

  // =========================
  // SKATER
  // =========================
  if (route === "#/photos/skater") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">álbum: SKATER</div>

        <p>Escolha seu estilo:</p>

        <div class="photo-grid">

          <a href="#/photos/skater/feminino" class="photo">
            <div class="placeholder-photo">FEMININO</div>
            FEMININO
          </a>

          <a href="#/photos/skater/masculino" class="photo">
            <div class="placeholder-photo">MASCULINO</div>
            MASCULINO
          </a>

        </div>
      </div>
    `;
  }

  if (route === "#/photos/skater/feminino") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">SKATER • FEMININO</div>

        <p>Referências de looks:</p>

        <div class="photo-grid">

          <div class="photo">
            <div class="placeholder-photo">LOOK 01</div>
            LOOK 01
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 02</div>
            LOOK 02
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 03</div>
            LOOK 03
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 04</div>
            LOOK 04
          </div>

        </div>
      </div>
    `;
  }

  if (route === "#/photos/skater/masculino") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">SKATER • MASCULINO</div>

        <p>Referências de looks:</p>

        <div class="photo-grid">

          <div class="photo">
            <div class="placeholder-photo">LOOK 01</div>
            LOOK 01
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 02</div>
            LOOK 02
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 03</div>
            LOOK 03
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 04</div>
            LOOK 04
          </div>

        </div>
      </div>
    `;
  }

  // =========================
  // CASUAL / GEEK 2000s
  // =========================
  if (route === "#/photos/casual-geek") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">álbum: CASUAL / GEEK 2000s</div>

        <p>Escolha seu estilo:</p>

        <div class="photo-grid">

          <a href="#/photos/casual-geek/feminino" class="photo">
            <div class="placeholder-photo">FEMININO</div>
            FEMININO
          </a>

          <a href="#/photos/casual-geek/masculino" class="photo">
            <div class="placeholder-photo">MASCULINO</div>
            MASCULINO
          </a>

        </div>
      </div>
    `;
  }

  if (route === "#/photos/casual-geek/feminino") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">
          CASUAL / GEEK 2000s • FEMININO
        </div>

        <p>Referências de looks:</p>

        <div class="photo-grid">

          <div class="photo">
            <div class="placeholder-photo">LOOK 01</div>
            LOOK 01
            <div>CASUAL</div>
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 02</div>
            LOOK 02
            <div>GEEK</div>
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 03</div>
            LOOK 03
            <div>CASUAL</div>
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 04</div>
            LOOK 04
            <div>GEEK</div>
          </div>

        </div>
      </div>
    `;
  }

  if (route === "#/photos/casual-geek/masculino") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">
          CASUAL / GEEK 2000s • MASCULINO
        </div>

        <p>Referências de looks:</p>

        <div class="photo-grid">

          <div class="photo">
            <div class="placeholder-photo">LOOK 01</div>
            LOOK 01
            <div>CASUAL</div>
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 02</div>
            LOOK 02
            <div>GEEK</div>
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 03</div>
            LOOK 03
            <div>CASUAL</div>
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 04</div>
            LOOK 04
            <div>GEEK</div>
          </div>

        </div>
      </div>
    `;
  }

  // =========================
  // PATRICINHA / PLAYBOY
  // =========================
  if (route === "#/photos/patricinha-playboy") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">
          álbum: PATRICINHA / PLAYBOY
        </div>

        <p>Escolha seu estilo:</p>

        <div class="photo-grid">

          <a href="#/photos/patricinha-playboy/feminino" class="photo">
            <div class="placeholder-photo">FEMININO</div>
            FEMININO
          </a>

          <a href="#/photos/patricinha-playboy/masculino" class="photo">
            <div class="placeholder-photo">MASCULINO</div>
            MASCULINO
          </a>

        </div>
      </div>
    `;
  }

  if (route === "#/photos/patricinha-playboy/feminino") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">
          PATRICINHA 2000s • FEMININO
        </div>

        <p>Referências de looks:</p>

        <div class="photo-grid">

          <div class="photo">
            <div class="placeholder-photo">LOOK 01</div>
            LOOK 01
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 02</div>
            LOOK 02
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 03</div>
            LOOK 03
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 04</div>
            LOOK 04
          </div>

        </div>
      </div>
    `;
  }

  if (route === "#/photos/patricinha-playboy/masculino") {
    return `
      <h2 class="page-title">Fotos</h2>

      <div class="box">
        <div class="box-title">
          PLAYBOY 2000s • MASCULINO
        </div>

        <p>Referências de looks:</p>

        <div class="photo-grid">

          <div class="photo">
            <div class="placeholder-photo">LOOK 01</div>
            LOOK 01
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 02</div>
            LOOK 02
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 03</div>
            LOOK 03
          </div>

          <div class="photo">
            <div class="placeholder-photo">LOOK 04</div>
            LOOK 04
          </div>

        </div>
      </div>
    `;
  }

  // =========================
  // FALLBACK
  // =========================
  return `
    <h2 class="page-title">Fotos</h2>

    <div class="box">
      <div class="box-title">álbum</div>
      <p>Em breve: referências de looks.</p>
    </div>
  `;
},

  videos: () => `
  <h2 class="page-title">Vídeos</h2>

  <div class="box">
    <div class="box-title">🎧 aquecimento pra festa</div>

    <p>
      Já vai entrando no clima porque dia 27/02 vai ser
      só pedrada dos anos 2000. 💿
    </p>

    <p>
      Dê o play e comece o aquecimento!
    </p>

    <div style="margin: 12px 0;">
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/videoseries?list=PLOpyVHYg_wjuVo-wnoewywSBzOQ2QxZ19"
    title="Playlist dos anos 2000"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>

    <p>
      <strong>Bibica's Playlist 💿</strong>
    </p>

    <p>
      Pop • Emo • Rock • Funk • Axé • Latino • Forró
    </p>

    <p>
      Tem alguma música que NÃO pode faltar? 👀
    </p>

    <a
  href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
    "Oi, Bibica! 🎧 Minha sugestão para a playlist da sua festa é: "
  )}"
  target="_blank"
  rel="noopener noreferrer"
  class="button"
>
  🎵 PEDIR UMA MÚSICA
</a>
  </div>
`,

  testimonials: () => `
    <h2 class="page-title">Depoimentos</h2>

    <div class="box invite">
      <div class="box-title">depoimento especial</div>

      <h2>${EV.title.toUpperCase()}</h2>

      <p><strong>De: Bibica</strong></p>

      <p>Você está oficialmente convidado para comemorar comigo os meus 30 anos!</p>

      ${eventCards()}

      <p><strong>✨ O TEMA</strong></p>
      <p>ANOS 2000 • Y2K • NOSTALGIA</p>

      <p>Vista seu melhor look dos anos 2000 e venha preparado para dançar.</p>

      <p><strong>🎧 A TRILHA SONORA</strong></p>
      <p>Pop • Rock • Emo • Funk • Axé • Pagode • Forró • Eletrohits</p>

      <p><strong>📌 ANTES DE SAIR...</strong></p>
      <p>Salve este convite e não esqueça de confirmar sua presença.</p>

      <p>${rsvpButton()}</p>
    </div>`,

  friends: () => `
    <h2 class="page-title">Amigos</h2>

    <div class="box">
      <div class="box-title">meus amigos</div>

      <div class="friend-grid">
        ${friends
          .map(
            (f) =>
              `<div class="friend"><div class="friend-avatar" aria-hidden="true">${initial(f)}</div>${f}</div>`
          )
          .join("")}
      </div>
    </div>`,

  communities: () => `
    <h2 class="page-title">Comunidades</h2>

    <div class="box">
      <div class="community-grid">
        ${communities
          .map(
            (c) =>
              `<div class="community"><strong>${c.name}</strong><p>${c.members} membros</p></div>`
          )
          .join("")}
      </div>
    </div>`,

  event: () => `
    <h2 class="page-title">Evento</h2>

    <div class="box">
      <div class="box-title">${EV.title.toLowerCase()}</div>

      <p><strong>Status:</strong> ${rsvpStatus()}</p>
      <p><strong>Data:</strong> ${EV.date}</p>
      <p><strong>Horário:</strong> ${EV.time}</p>
      <p><strong>Local:</strong> ${EV.place}</p>

      <p>${rsvpButton("EU VOU!")}</p>
    </div>`,

  rsvp: () => {
    const group = getGuestGroup();

    if (!group) {
      return `
        <h2 class="page-title">Confirmar presença</h2>

        <div class="box">
          <div class="box-title">💌 convite não identificado</div>

          <p>Este convite precisa ser acessado pelo link personalizado.</p>

          <p>Peça para a Bibica enviar seu link novamente. 💜</p>
        </div>`;
    }

    const guestNames = group.names.join(" + ");

    return `
      <h2 class="page-title">Confirmar presença</h2>

      <form id="rsvpForm">

        <div class="box">
          <div class="box-title">💌 este convite é para</div>

          <p><strong>${guestNames}</strong></p>
        </div>

        <div class="guest-list">
          ${group.names
            .map(
              (name, index) => `
                <div class="guest-card">

                  <div class="guest-avatar" aria-hidden="true">
                    ${initial(name)}
                  </div>

                  <div class="guest-info">
                    <strong>${name}</strong>

                    <span>Você vem comemorar comigo?</span>

                    <div class="guest-options">

                      <label>
                        <input
                          type="radio"
                          name="guest-${index}"
                          value="yes"
                        >
                        SIM, EU VOU! 💜
                      </label>

                      <label>
                        <input
                          type="radio"
                          name="guest-${index}"
                          value="no"
                        >
                        NÃO VOU CONSEGUIR 😭
                      </label>

                    </div>
                  </div>
                </div>`
            )
            .join("")}
        </div>

        <div class="box rsvp-form">

          <div class="box-title">💬 recadinho para a Bibica</div>

          <label for="rsvpMessage">
            Quer deixar um recado? (opcional)
          </label>

          <textarea
            id="rsvpMessage"
            name="message"
            rows="4"
            placeholder="Escreva seu recado aqui..."
          ></textarea>

          <div class="form-actions">
            <button class="button" type="submit">
              ENVIAR CONFIRMAÇÃO
            </button>
          </div>

          <div id="rsvpResult" role="status"></div>

        </div>

      </form>`;
  },
};

const addresses = {
  home: "Home.aspx",
  profile: "Profile.aspx?uid=bibica",
  scraps: "Scrapbook.aspx?uid=bibica",
  photos: "AlbumList.aspx?uid=bibica",
  videos: "VideoList.aspx?uid=bibica",
  testimonials: "Testimonials.aspx?uid=bibica",
  friends: "FriendsList.aspx?uid=bibica",
  communities: "CommTabs.aspx?uid=bibica",
  event: "EventDetail.aspx?eid=30",
  rsvp: "EventRsvp.aspx?eid=30",
};

const app = document.getElementById("app");
const addressBar = document.getElementById("addressBar");

let firstRender = true;

function currentPage() {
  const parts = location.hash.replace(/^#\/?/, "").split("/");
  const key = parts[0];

  return Object.hasOwn(pages, key) ? key : "home";
}

function render() {
  const page = currentPage();

  app.innerHTML = pages[page]();

  addressBar.textContent = `http://www.orkut.com/${addresses[page]}`;

  const heading = app.querySelector(".page-title")?.textContent;

  document.title = heading
    ? `${heading} - orkut - Bibica`
    : "orkut - Bibica";

  const navKey = page === "rsvp" ? "event" : page;

  document.querySelectorAll("[data-page]").forEach((link) => {
    if (link.dataset.page === navKey) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (!firstRender) {
    window.scrollTo(0, 0);

    app.tabIndex = -1;

    app.focus({
      preventScroll: true,
    });
  }

  firstRender = false;
}

window.addEventListener("hashchange", render);

render();

const browserToolbar = document.querySelector(".browser-toolbar");

if (browserToolbar) {
  browserToolbar.addEventListener("click", (e) => {
    const action = e.target.closest("[data-action]")?.dataset.action;

    if (action === "back") history.back();
    if (action === "forward") history.forward();
    if (action === "reload") location.reload();
  });
}

function showNotice(container, title, text) {
  if (!container) return;

  const box = document.createElement("p");

  box.className = "notice";

  const strong = document.createElement("strong");

  strong.textContent = title;

  box.append(
    strong,
    document.createElement("br"),
    text
  );

  container.replaceChildren(box);
}

async function deliverRsvp(data) {
  if (CONFIG.formEndpoint) {
    const res = await fetch(CONFIG.formEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`Erro ${res.status}`);
    }

    return "sent";
  }

  if (CONFIG.googleForm?.action) {
    const iframeName = `google-form-${Date.now()}`;

    const iframe = document.createElement("iframe");

    iframe.name = iframeName;
    iframe.style.display = "none";
    iframe.title = "Envio de confirmação";

    document.body.appendChild(iframe);

    const googleForm = document.createElement("form");

    googleForm.method = "POST";
    googleForm.action = CONFIG.googleForm.action;
    googleForm.target = iframeName;
    googleForm.style.display = "none";

    const addField = (name, value) => {
      const input = document.createElement("input");

      input.type = "hidden";
      input.name = name;
      input.value = value;

      googleForm.appendChild(input);
    };

    // ID do grupo/família
    addField(
      CONFIG.googleForm.fields.groupId,
      data.groupId
    );

    // Respostas dos convidados
    const guestsText = data.guests
      .map(
        (guest) =>
          `${guest.name}: ${
            guest.going === "yes"
              ? "SIM"
              : "NÃO"
          }`
      )
      .join("\n");

    addField(
      CONFIG.googleForm.fields.guests,
      guestsText
    );

    // Recado
    addField(
      CONFIG.googleForm.fields.message,
      data.message || ""
    );

    document.body.appendChild(googleForm);

    googleForm.submit();

    setTimeout(() => {
      googleForm.remove();
      iframe.remove();
    }, 2000);

    return "google-form";
  }

  if (CONFIG.whatsapp) {
    const answers = data.guests
      .map(
        (guest) =>
          `${guest.name}: ${
            guest.going === "yes"
              ? "vou sim"
              : "não vou conseguir"
          }`
      )
      .join(" | ");

    const message = data.message
      ? ` Recado: ${data.message}`
      : "";

    const msg =
      `Oi, Bibica! Sobre o "${EV.title}" (${EV.date}): ` +
      `${answers}.${message}`;

    window.open(
      `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener"
    );

    return "whatsapp";
  }

  return "prototype";
}


document.addEventListener("submit", async (e) => {
  if (e.target.id !== "rsvpForm") return;

  e.preventDefault();

  const form = e.target;
  const button = form.querySelector("button[type=submit]");
  const result = document.getElementById("rsvpResult");
  const group = getGuestGroup();

  if (!group) {
    showNotice(
      result,
      "Ops!",
      "Não conseguimos identificar este convite."
    );

    return;
  }

  const guests = group.names.map((name, index) => {
    const selected = form.querySelector(
      `input[name="guest-${index}"]:checked`
    );

    return {
      name,
      going: selected ? selected.value : "",
    };
  });

  const missing = guests.filter(
    (guest) => !guest.going
  );

  if (missing.length > 0) {
    showNotice(
      result,
      "💜 Falta uma resposta!",
      `Escolha SIM ou NÃO para: ${missing
        .map((guest) => guest.name)
        .join(", ")}.`
    );

    return;
  }

  const message = (
    form.querySelector("#rsvpMessage")?.value || ""
  ).trim();

  const data = {
    groupId: group.id,
    guests,
    message,
    submittedAt: new Date().toISOString(),
  };

  button.disabled = true;

  try {
    const mode = await deliverRsvp(data);

    saveRsvp(data);

    const confirmed = guests.filter(
      (guest) => guest.going === "yes"
    ).length;

    const declined = guests.filter(
      (guest) => guest.going === "no"
    ).length;

    if (mode === "google-form") {
      showNotice(
        result,
        "💜 Confirmação enviada!",
        `Tudo certo! ${confirmed} pessoa(s) confirmou/confirmaram presença e ${declined} não irão.`
      );
    } else if (mode === "prototype") {
      showNotice(
        result,
        "💜 Respostas registradas!",
        `${confirmed} pessoa(s) confirmou/confirmaram presença e ${declined} não irão.`
      );
    } else if (mode === "whatsapp") {
      showNotice(
        result,
        "💜 Quase lá!",
        "Abrimos o WhatsApp com a mensagem pronta. É só apertar enviar para confirmar."
      );
    } else {
      showNotice(
        result,
        "💜 Tudo certo!",
        "Suas respostas foram enviadas."
      );
    }
  } catch {
    showNotice(
      result,
      "Ops!",
      "Não foi possível enviar agora. Tente de novo em instantes."
    );
  } finally {
    button.disabled = false;
  }
});

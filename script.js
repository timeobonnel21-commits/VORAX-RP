const rules = {
  general: [
    {
      title: "Respect et comportement",
      items: [
        "Le respect envers les joueurs, le staff et les personnages est obligatoire.",
        "Les insultes ciblées, discriminations, le harcèlement et les provocations répétées sont interdits.",
        "Les conflits hors personnage ne doivent pas être importés en roleplay.",
      ],
    },
    {
      title: "Bases du Roleplay",
      items: [
        "Restez cohérent avec l’histoire et les motivations de votre personnage.",
        "Jouez les conséquences de vos actes.",
        "Ne forcez pas une action irréaliste à un autre joueur.",
      ],
    },
    {
      title: "Métagaming et informations",
      items: [
        "N’utilisez pas en jeu des informations obtenues hors roleplay.",
        "Ne transmettez pas à votre personnage des informations externes à la scène.",
      ],
    },
    {
      title: "No Pain et Fearless",
      items: [
        "Réagissez de façon crédible à la douleur, aux blessures et aux menaces.",
        "N’ignorez pas un danger crédible et ne provoquez pas inutilement une personne armée.",
      ],
    },
    {
      title: "Véhicules, bugs et triche",
      items: [
        "Adoptez une conduite cohérente avec la situation ; n’utilisez pas un véhicule pour tuer ou bloquer abusivement.",
        "La triche, l’exploitation de bugs et l’utilisation de logiciels externes sont interdites.",
        "Signalez tout bug au staff.",
      ],
    },
  ],
  legal: [
    {
      title: "Forces de l’ordre",
      items: [
        "Agissez avec discernement et proportionnalité.",
        "Respectez la cohérence des procédures.",
        "N’utilisez pas votre statut pour obtenir un avantage personnel.",
        "Préservez la qualité des scènes avec les citoyens.",
      ],
    },
    {
      title: "EMS et services de secours",
      items: [
        "Privilégiez le roleplay médical et la cohérence des interventions.",
        "Restez neutre dans les conflits.",
        "Respectez les scènes en cours et les limites de votre rôle.",
      ],
    },
    {
      title: "Entreprises et services",
      items: [
        "Proposez une activité cohérente.",
        "Respectez les clients et les employés.",
        "N’exploitez pas une entreprise pour contourner les règles ou générer des avantages injustifiés.",
      ],
    },
    {
      title: "Citoyens respectueux de la loi",
      items: [
        "Respectez les injonctions cohérentes des autorités.",
        "Privilégiez la discussion et le roleplay.",
        "Ne provoquez pas artificiellement des scènes et ne détournez pas les services publics.",
      ],
    },
    {
      title: "Procédures et abus de pouvoir",
      items: [
        "Toute intervention doit avoir un contexte roleplay.",
        "Les abus, favoritismes et actions disproportionnées peuvent faire l’objet d’un signalement au staff.",
      ],
    },
  ],
  illegal: [
    {
      title: "Activités criminelles",
      items: [
        "Toute activité illégale doit avoir une intention roleplay cohérente.",
        "Laissez une possibilité de réponse aux autres joueurs.",
        "Évitez les scènes répétitives ou lancées sans contexte.",
      ],
    },
    {
      title: "Braquages",
      items: [
        "Prévoyez une préparation et une mise en scène crédible.",
        "Respectez les limites et délais du serveur.",
        "N’utilisez pas les otages de façon abusive.",
        "Acceptez une issue roleplay cohérente.",
      ],
    },
    {
      title: "Gangs et organisations",
      items: [
        "Donnez une identité, une hiérarchie et des objectifs cohérents à votre organisation.",
        "Justifiez les rivalités et guerres de territoire par une véritable histoire.",
        "N’utilisez pas les alliances pour contourner les règles générales.",
      ],
    },
    {
      title: "Armes et affrontements",
      items: [
        "Justifiez l’utilisation d’une arme par la scène.",
        "Employez une réponse proportionnée.",
        "Les tirs gratuits et affrontements sans contexte sont interdits.",
      ],
    },
    {
      title: "Otages et négociations",
      items: [
        "Un otage reste un personnage actif.",
        "Les négociations doivent laisser une marge de décision aux autres participants et aux forces de l’ordre.",
      ],
    },
    {
      title: "Sanctions",
      items: [
        "Selon la gravité, les sanctions peuvent aller de l’avertissement à l’exclusion temporaire ou définitive.",
        "La récidive, la mauvaise foi et l’impact sur les autres joueurs aggravent la sanction.",
        "Le staff adapte la réponse aux circonstances et aux éléments disponibles.",
      ],
    },
  ],
};

function renderRules() {
  Object.entries(rules).forEach(([category, cards]) => {
    const container = document.getElementById(`${category}-rules`);
    cards.forEach((card, index) => {
      const article = document.createElement("article");
      article.className = "rule-card";
      const number = document.createElement("span");
      number.className = "rule-number";
      number.textContent = `${String(index + 1).padStart(2, "0")}  ${category.toUpperCase()}`;
      const heading = document.createElement("h3");
      heading.textContent = card.title;
      const list = document.createElement("ul");
      card.items.forEach((item) => {
        const entry = document.createElement("li");
        entry.textContent = item;
        list.append(entry);
      });
      article.append(number, heading, list);
      container.append(article);
    });
  });
}

const coinOffers = [
  {
    name: "Pack Starter",
    kicker: "Pack Coins",
    desc: "Une première formule à personnaliser.",
    benefits: ["Volume de Coins à définir", "Utilisation des Coins à préciser"],
  },
  {
    name: "Pack Premium",
    kicker: "Pack Coins · Recommandé",
    desc: "Une formule intermédiaire à personnaliser.",
    benefits: [
      "Volume de Coins à définir",
      "Utilisation des Coins à préciser",
      "Détails de l’offre à configurer",
    ],
    featured: true,
  },
  {
    name: "Pack Elite",
    kicker: "Pack Coins",
    desc: "Une formule étendue à personnaliser.",
    benefits: ["Volume de Coins à définir", "Détails de l’offre à configurer"],
  },
];
const vipOffers = [
  {
    id: "bronze",
    name: "VIP Bronze",
    desc: "Avantages possibles, à configurer",
    benefits: ["Badge VIP à préciser", "Éléments cosmétiques à préciser"],
  },
  {
    id: "gold",
    name: "VIP Gold",
    desc: "Avantages possibles, à configurer",
    benefits: [
      "File prioritaire à préciser",
      "Éléments cosmétiques à préciser",
      "Badge VIP à préciser",
    ],
    featured: true,
  },
  {
    id: "diamond",
    name: "VIP Diamond",
    desc: "Avantages possibles, à configurer",
    benefits: [
      "File prioritaire à préciser",
      "Avantages de confort à préciser",
      "Badge VIP et cosmétiques à préciser",
    ],
  },
];

function renderOffers(targetId, offers, type) {
  const target = document.getElementById(targetId);
  offers.forEach((offer) => {
    const article = document.createElement("article");
    article.className = `offer-card${offer.featured ? " featured" : ""}${type === "vip" ? ` vip-${offer.id}` : ""}`;
    if (type === "vip") {
      const line = document.createElement("div");
      line.className = "vip-line";
      line.setAttribute("aria-hidden", "true");
      article.append(line);
    } else {
      const kicker = document.createElement("p");
      kicker.className = "offer-kicker";
      kicker.textContent = offer.kicker;
      article.append(kicker);
    }
    const heading = document.createElement("h3");
    heading.textContent = offer.name;
    article.append(heading);
    const value = document.createElement("p");
    value.className = "offer-value";
    value.textContent =
      type === "vip" ? "Tarif à définir" : "Coins · à définir";
    const description = document.createElement("p");
    description.className = "offer-desc";
    description.textContent = offer.desc;
    const list = document.createElement("ul");
    offer.benefits.forEach((benefit) => {
      const item = document.createElement("li");
      item.textContent = benefit;
      list.append(item);
    });
    const button = document.createElement("button");
    button.className = "placeholder-action";
    button.type = "button";
    button.disabled = true;
    button.textContent = "Choisir ce pack · à configurer";
    button.title = "Offre à configurer par l’équipe VØRAX RP";
    article.append(value, description, list, button);
    target.append(article);
  });
}

renderRules();
renderOffers("coins-offers", coinOffers, "coins");
renderOffers("vip-offers", vipOffers, "vip");

const views = {
  home: document.getElementById("home-view"),
  rules: document.getElementById("rules-view"),
  shop: document.getElementById("shop-view"),
};
const menu = document.getElementById("mobile-nav");
const menuToggle = document.getElementById("menu-toggle");
const tabs = [...document.querySelectorAll('[role="tab"]')];

function closeMenu() {
  menu.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Ouvrir le menu");
}

function showView(name) {
  Object.entries(views).forEach(([key, view]) => {
    view.hidden = key !== name;
  });
  document.querySelectorAll(".nav-choice").forEach((button) => {
    const active = button.dataset.go === name;
    button.classList.toggle("is-active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  closeMenu();
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
  const headingId =
    name === "home"
      ? "home-title"
      : name === "rules"
        ? "rules-title"
        : "shop-title";
  document.getElementById(headingId).focus({ preventScroll: true });
}

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.go));
});
menuToggle.addEventListener("click", () => {
  const opening = menu.hidden;
  menu.hidden = !opening;
  menuToggle.setAttribute("aria-expanded", String(opening));
  menuToggle.setAttribute(
    "aria-label",
    opening ? "Fermer le menu" : "Ouvrir le menu",
  );
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !menu.hidden) {
    closeMenu();
    menuToggle.focus();
  }
});

function showTab(index, moveFocus = false) {
  tabs.forEach((tab, tabIndex) => {
    const active = tabIndex === index;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !active;
  });
  const progress = document.querySelector('[role="progressbar"]');
  document.getElementById("reading-progress").style.width =
    `${((index + 1) / tabs.length) * 100}%`;
  progress.setAttribute("aria-valuenow", String(index + 1));
  document.getElementById("progress-label").textContent =
    `Catégorie ${index + 1} sur ${tabs.length}`;
  if (moveFocus) tabs[index].focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => showTab(index));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? tabs.length - 1
          : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) %
            tabs.length;
    showTab(next, true);
  });
});

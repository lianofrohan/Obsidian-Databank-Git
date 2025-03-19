const loreData = [
    { 
        title: "Elowen Nymane", 
        description: `
        <strong>Gefahren-Einstufung:</strong> geringes Gefahrenpotenzial<br><br>
        <strong>Sicherheits-Einstufung:</strong> mittel, Sicherheit gewährleisten<br><br>
        <strong>Herkunft:</strong> Nexos<br><br>
        <strong>Zuletzt bekannter Aufenthaltsort:</strong> DataForge<br><br>
        <strong>Beruf:</strong> Technikteam des DataForge<br><br>
        <strong>Alter:</strong> 24 Jahre<br><br>
        <strong>Hintergrund:</strong><br>
        Wuchs bei ihrem Onkel in Wohngegend Nähe Energiepunkte auf. Zeigte bereits früh eine ausgeprägte Begeisterung für Technik. 
        Mit 16 Jahren erregte sie mit ihren Erfindungen die Aufmerksamkeit lokaler Fachkreise. 
        Mit 18 Jahren von der Kampftruppe rekrutiert, um ihre technischen Fähigkeiten für die Entwicklung von Geräten und Maschinen zur Unterstützung der militärischen Aktivitäten im Randgebiet von Nexos einzubringen.
        Sie hat seither Maschinen und Geräte für die Kampftruppe entwickelt, insbesondere in den Bereichen Waffen und Verteidigungstechnik. 
        Ihre Arbeit umfasst sowohl die Konstruktion neuer Systeme als auch die Optimierung bestehender Technologien.<br><br>
        <strong>Bemerkungen:</strong><br>
        Trotz ihrer Rolle in der Entwicklung militärischer Geräte hat Nymane wiederholt betont, 
        dass ihr Fokus nicht in der Kriegsführung liegt. 
        Diese Haltung könnte langfristig eine Herausforderung für ihre Weiterentwicklung innerhalb der Kampftruppe darstellen. 
        Sollte weiterhin genau beobachtet werden, um sicherzustellen, dass ihre moralischen Bedenken in Einklang mit den Zielen der Kampftruppe gebracht werden.
        `,
        image: "https://i.pinimg.com/736x/6c/3d/4d/6c3d4d683cbf7e172eb5dd7fb518be98.jpg"
    },
    { 
        title: "The fierce terretories of Noki", 
        description: `
        <strong>Essen:</strong><br>
        Obwohl es in Noki kein Sonnenlicht gibt, gelang es mit außergewöhnlich hohem Energieaufwand, künstlichen "Ersatz" herzustellen. Dieser findet besonders in Gewächshäusern Anwendung, die oft große Gebiete der Distrikte bedecken. Die Hauptnahrungsmittel in Noki stellen jedoch verschiedene Insektenarten, deren Larven sowie Raupen dar. Fische sind zwar auch vorhanden, gelten jedoch als seltene Delikatesse, da sie nur bei speziellen Züchtern zu finden sind und es in der städtischen Landschaft nur ein unterirdisches Rohrsystem gibt – außer diesem existieren keine natürlichen Gewässer.<br><br>
        <strong>Waffen:</strong><br>
        In der futuristischen Welt von Noki wurde die Technologie der Pulverwaffen früh entdeckt. Aufgrund der fehlenden Ressourcen erwies sich deren Produktion jedoch als wenig rentabel, weshalb die Forschung in diesem Bereich bald eingestellt wurde. Stattdessen wurde der Fokus auf die Verbesserung bereits bekannter Waffen durch neue Technologien gelegt, was zu High-Tech-Bögen mit Ziel-Tracking, High-Voltage-Wurfmessern und selbstschärfenden Schwertern führte.<br><br>
        <strong>Historie:</strong><br>
        Noki wurde vor vielen Generationen erstmals besiedelt. Nur wenige Überlieferungen berichten von einer sogenannten "alten Welt". Als ein großer Krieg ausbrach und sich selbst die Natur gegen die grausamen Waffen und das Blutvergießen zu wehren schien, suchten Wesen aller Art Zuflucht an dem einzigen Ort, der noch als sicher galt: Noki. Man erzählt sich, die Erde selbst hätte Noki verschlossen, um die Bewohner vor den Katastrophen der Außenwelt zu schützen. Die Geschichten über das Öffnen dieses Siegels und das Vorhandensein einer bewohnbaren Welt außerhalb von Noki gelten in den Distrikten als Mythen, und Zeitzeugen dieser "alten Welt" existieren längst nicht mehr. Auch die Gründe für die damaligen Kämpfe zwischen den Distrikten sind weitgehend in Vergessenheit geraten, wobei man vermutet, dass es vor allem um Gebietsrivalitäten ging. Der einzige "junge" Clan sind die Chromkatzen, die sich unter der Führung der Feline-Namen bildeten.<br><br>
        <strong>Götter:</strong><br>
        In Noki existieren viele kleine Religionen, denen die Bewohner nach eigenem Ermessen folgen können. Der allumfassende alte Glaube verehrt die Natur als Urgeist und Lebensspender aller Wesen. Dieser Glaube gilt jedoch als veraltet, da die natürliche Welt in Noki nahezu verschwunden ist, außer Gestein. In den Entstehungsgeschichten wird die Natur jedoch als Schützerin und Helferin dargestellt, die Noki einst vor den Katastrophen der Außenwelt bewahrte. In anderen Regionen, wie in Nexos, herrscht Religionsfreiheit, während bei den Stahlschwingen vor allem die Verehrung von Bahamut, dem Gott des Rechts und der Ehre, propagiert wird. Die Chromkatzen verehren eine Vielzahl von Göttern, darunter Corellon, den Gott der Magie und Künste, Avandra, die Göttin des Wandels und des Glücks, sowie Seranin, die Göttin des Mondes. Das Verdammniskartell hingegen ist für seine Moral- und Religionslosigkeit bekannt, wobei einige Gruppen dort einen kultähnlichen Glauben an Götter wie Tiamat (Göttin von Reichtum, Gier, Ehre), Zehir (Gott der Dunkelheit und Gifte) und Terka (Göttin der Geheimnisse) praktizieren. 
        `,
        image: "https://via.placeholder.com/600x300/FF0000/FFFFFF?text=NetRunner"
    },
    { 
        title: "CyberDoc", 
        description: "Spezialist für Cyber-Implantate und illegale Modifikationen.", 
        image: "https://via.placeholder.com/600x300/00FF00/FFFFFF?text=CyberDoc"
    }
];

const loreList = document.getElementById("lore-list");
const searchInput = document.getElementById("search");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

// Zeigt nur die Titel an
function displayLore(data) {
    loreList.innerHTML = "";
    data.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("lore-item");
        div.textContent = item.title;
        div.addEventListener("click", () => openModal(item));
        loreList.appendChild(div);
    });
}

// Öffnet das Modal mit allen Infos
function openModal(item) {
    modalTitle.textContent = item.title;
    modalImage.src = item.image;
    modalDescription.innerHTML = item.description;
    modal.style.display = "block";
}

// Schließt das Modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Filterfunktion für die Suche
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredLore = loreData.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );
    displayLore(filteredLore);
});

// Schließe das Modal, wenn man außerhalb klickt
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Zeige alle Einträge beim Start
displayLore(loreData);


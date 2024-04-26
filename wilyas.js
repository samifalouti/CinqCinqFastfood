function changeComune() {
    var wilayaSelect = document.getElementById("Wilaya");
    var comuneSelect = document.getElementById("comune");

    comuneSelect.innerHTML = '';

    var selectedWilaya = wilayaSelect.value;

    if (selectedWilaya === "اختر مدينتك") {
        return;
    }

    // Define an object to map wilayas to their communes
    var communes = {
        "16. Alger": [
            "Alger Centre", "Sidi Mhamed", "El Madania", "Hamma Anassers", "Bab El Oued",
            "Bologhine Ibn Ziri", "Casbah", "Oued Koriche", "Bir Mourad Rais", "El Biar",
            "Bouzareah", "Birkhadem", "El Harrach", "Baraki", "Oued Smar", "Bourouba",
            "Hussein Dey", "Kouba", "Bachedjerah", "Dar El Beida", "Bab Azzouar", "Ben Aknoun",
            "Dely Ibrahim", "Bains Romains", "Rais Hamidou", "Djasr Kasentina", "El Mouradia",
            "Hydra", "Mohammadia", "Bordj El Kiffan", "El Magharia", "Beni Messous",
            "Les Eucalyptus", "Birtouta", "Tassala El Merdja", "Ouled Chebel", "Sidi Moussa",
            "Ain Taya", "Bordj El Bahri", "Marsa", "Haraoua", "Rouiba", "Reghaia",
            "Ain Benian", "Staoueli", "Zeralda", "Mahelma", "Rahmania", "Souidania",
            "Cheraga", "Ouled Fayet", "El Achour", "Draria", "Douera", "Baba Hassen",
            "Khracia", "Saoula"
        ],
        "21. Skikda": [
            "Skikda Centre", "Ain Zouit", "El Hadaik", "Azzaba", "Djendel Saadi Mohamed",
            "Ain Cherchar", "Bekkouche Lakhdar", "Benazouz", "Es Sebt", "Collo", "Beni Zid",
            "Kerkera", "Ouled Attia", "Oued Zehour", "Zitouna", "El Harrouch", "Zerdazas",
            "Ouled Hebaba", "Sidi Mezghiche", "Emdjez Edchich", "Beni Oulbane", "Ain Bouziane",
            "Ramdane Djamel", "Beni Bachir", "Salah Bouchaour", "Tamalous", "Ain Kechra",
            "Oum Toub", "Bein El Ouiden", "Fil Fila", "Cheraia", "Kanoua", "El Ghedir",
            "Bouchtata", "Ouldja Boulbalout", "Kheneg Mayoum", "Hamadi Krouma", "El Marsa"
        ],
        "23. Annaba": [
            "Annaba", "Berrahel", "El Hadjar", "Eulma", "El Bouni", "Oued El Aneb",
            "Cheurfa", "Seraidi", "Ain Berda", "Chetaibi", "Sidi Amer", "Treat"
        ],
        "06. Bejaia": [
            "Bejaia", "Amizour", "Ferraoun", "Taourirt Ighil", "Chelata", "Tamokra",
            "Timzrit", "Souk El Thenine", "Mcisna", "Thinabdher", "Tichi", "Semaoun",
            "Kendira", "Tifra", "Ighram", "Amalou", "Ighil Ali", "Ifelain Ilmathen",
            "Toudja", "Darguina", "Sidi Ayad", "Aokas", "Beni Djellil", "Adekar", "Akbou",
            "Seddouk", "Tazmalt", "Ait Rizine", "Chemini", "Souk Oufella", "Taskriout",
            "Tibane", "Tala Hamza", "Barbacha", "Beni Ksila", "Ouzallaguen", "Bouhamza",
            "Beni Melikeche", "Sidi Aich", "El Kseur", "Melbou", "Akfadou", "Leflaye",
            "Kherrata", "Draa Kaid", "Tamridjet", "Ait Smail", "Boukhelifa", "Tizi Nberber",
            "Beni Maouch", "Oued Ghir", "Boudjellil"
        ],
        "18. Jijel": [
            "Jijel", "Erraguene", "El Aouana", "Ziamma Mansouriah", "Taher", "Emir Abdelkader",
            "Chekfa", "Chahna", "El Milia", "Sidi Maarouf", "Settara", "El Ancer", "Sidi Abdelaziz",
            "Kaous", "Ghebala", "Bouraoui Belhadef", "Djmila", "Selma Benziada", "Boussif Ouled Askeur",
            "El Kennar Nouchfi", "Ouled Yahia Khadrouch", "Boudria Beni Yadjis", "Kemir Oued Adjoul",
            "Texena", "Djemaa Beni Habibi", "Bordj Taher", "Ouled Rabah", "Ouadjana"
        ],
        "36. El Tarf": [
            "El Tarf", "Bouhadjar", "Ben Mhidi", "Bougous", "El Kala", "Ain El Assel",
            "El Aioun", "Bouteldja", "Souarekh", "Berrihane", "Lac Des Oiseaux", "Chefia",
            "Drean", "Chihani", "Chebaita Mokhtar", "Besbes", "Asfour", "Echatt", "Zerizer",
            "Zitouna", "Ain Kerma", "Oued Zitoun", "Hammam Beni Salah", "Raml Souk"
        ]
    };

    // Add commune options based on the selected wilaya
    communes[selectedWilaya].forEach(commune => {
        addComuneOption(comuneSelect, commune);
    });
}

function addComuneOption(select, text) {
    var option = document.createElement("option");
    option.text = text;
    select.appendChild(option);
}

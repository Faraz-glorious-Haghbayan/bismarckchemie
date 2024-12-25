const electronegativity = {
    H: { en: 2.20, atomicNumber: 1, atomicMass: 1.008, symbol: 'H', name: 'Wasserstoff', properties: ['Nichtmetall'] },
    He: { en: 0.00, atomicNumber: 2, atomicMass: 4.0026, symbol: 'He', name: 'Helium', properties: ['Edelgas'] },
    Li: { en: 0.98, atomicNumber: 3, atomicMass: 6.94, symbol: 'Li', name: 'Lithium', properties: ['Alkalimetall'] },
    Be: { en: 1.57, atomicNumber: 4, atomicMass: 9.0122, symbol: 'Be', name: 'Beryllium', properties: ['Erdalkalimetall'] },
    B: { en: 2.04, atomicNumber: 5, atomicMass: 10.81, symbol: 'B', name: 'Bor', properties: ['Halbmetall'] },
    C: { en: 2.55, atomicNumber: 6, atomicMass: 12.01, symbol: 'C', name: 'Kohlenstoff', properties: ['Nichtmetall'] },
    N: { en: 3.04, atomicNumber: 7, atomicMass: 14.01, symbol: 'N', name: 'Stickstoff', properties: ['Nichtmetall'] },
    O: { en: 3.44, atomicNumber: 8, atomicMass: 16.00, symbol: 'O', name: 'Sauerstoff', properties: ['Nichtmetall'] },
    F: { en: 3.98, atomicNumber: 9, atomicMass: 19.00, symbol: 'F', name: 'Fluor', properties: ['Halogen'] },
    Ne: { en: 0.00, atomicNumber: 10, atomicMass: 20.18, symbol: 'Ne', name: 'Neon', properties: ['Edelgas'] },
    Na: { en: 0.93, atomicNumber: 11, atomicMass: 22.99, symbol: 'Na', name: 'Natrium', properties: ['Alkalimetall'] },
    Mg: { en: 1.31, atomicNumber: 12, atomicMass: 24.31, symbol: 'Mg', name: 'Magnesium', properties: ['Erdalkalimetall'] },
    Al: { en: 1.61, atomicNumber: 13, atomicMass: 26.98, symbol: 'Al', name: 'Aluminium', properties: ['Metall'] },
    Si: { en: 1.90, atomicNumber: 14, atomicMass: 28.09, symbol: 'Si', name: 'Silicium', properties: ['Halbmetall'] },
    P: { en: 2.19, atomicNumber: 15, atomicMass: 30.97, symbol: 'P', name: 'Phosphor', properties: ['Nichtmetall'] },
    S: { en: 2.58, atomicNumber: 16, atomicMass: 32.07, symbol: 'S', name: 'Schwefel', properties: ['Nichtmetall'] },
    Cl: { en: 3.16, atomicNumber: 17, atomicMass: 35.45, symbol: 'Cl', name: 'Chlor', properties: ['Halogen'] },
    Ar: { en: 0.00, atomicNumber: 18, atomicMass: 39.95, symbol: 'Ar', name: 'Argon', properties: ['Edelgas'] },
    K: { en: 0.82, atomicNumber: 19, atomicMass: 39.10, symbol: 'K', name: 'Kalium', properties: ['Alkalimetall'] },
    Ca: { en: 1.00, atomicNumber: 20, atomicMass: 40.08, symbol: 'Ca', name: 'Calcium', properties: ['Erdalkalimetall'] },
    Sc: { en: 1.36, atomicNumber: 21, atomicMass: 44.96, symbol: 'Sc', name: 'Scandium', properties: ['Übergangsmetall'] },
    Ti: { en: 1.54, atomicNumber: 22, atomicMass: 47.87, symbol: 'Ti', name: 'Titan', properties: ['Übergangsmetall'] },
    V: { en: 1.63, atomicNumber: 23, atomicMass: 50.94, symbol: 'V', name: 'Vanadium', properties: ['Übergangsmetall'] },
    Cr: { en: 1.66, atomicNumber: 24, atomicMass: 51.99, symbol: 'Cr', name: 'Chrom', properties: ['Übergangsmetall'] },
    Mn: { en: 1.55, atomicNumber: 25, atomicMass: 54.94, symbol: 'Mn', name: 'Mangan', properties: ['Übergangsmetall'] },
    Fe: { en: 1.83, atomicNumber: 26, atomicMass: 55.85, symbol: 'Fe', name: 'Eisen', properties: ['Übergangsmetall'] },
    Co: { en: 1.88, atomicNumber: 27, atomicMass: 58.93, symbol: 'Co', name: 'Cobalt', properties: ['Übergangsmetall'] },
    Ni: { en: 1.91, atomicNumber: 28, atomicMass: 58.69, symbol: 'Ni', name: 'Nickel', properties: ['Übergangsmetall'] },
    Cu: { en: 1.90, atomicNumber: 29, atomicMass: 63.55, symbol: 'Cu', name: 'Kupfer', properties: ['Übergangsmetall'] },
    Zn: { en: 1.65, atomicNumber: 30, atomicMass: 65.38, symbol: 'Zn', name: 'Zink', properties: ['Übergangsmetall'] },
    Ga: { en: 1.81, atomicNumber: 31, atomicMass: 69.72, symbol: 'Ga', name: 'Gallium', properties: ['Metall'] },
    Ge: { en: 2.01, atomicNumber: 32, atomicMass: 72.63, symbol: 'Ge', name: 'Germanium', properties: ['Halbmetall'] },
    As: { en: 2.18, atomicNumber: 33, atomicMass: 74.92, symbol: 'As', name: 'Arsen', properties: ['Halbmetall'] },
    Se: { en: 2.55, atomicNumber: 34, atomicMass: 78.96, symbol: 'Se', name: 'Selen', properties: ['Nichtmetall'] },
    Br: { en: 2.96, atomicNumber: 35, atomicMass: 79.90, symbol: 'Br', name: 'Brom', properties: ['Halogen'] },
    Kr: { en: 3.00, atomicNumber: 36, atomicMass: 83.80, symbol: 'Kr', name: 'Krypton', properties: ['Edelgas'] },
        Rb: { en: 0.82, atomicNumber: 37, atomicMass: 85.47, symbol: 'Rb', name: 'Rubidium', properties: ['Alkalimetall'] },
        Sr: { en: 0.95, atomicNumber: 38, atomicMass: 87.62, symbol: 'Sr', name: 'Strontium', properties: ['Erdalkalimetall'] },
        Y: { en: 1.22, atomicNumber: 39, atomicMass: 88.91, symbol: 'Y', name: 'Yttrium', properties: ['Übergangsmetall'] },
        Zr: { en: 1.33, atomicNumber: 40, atomicMass: 91.22, symbol: 'Zr', name: 'Zirkonium', properties: ['Übergangsmetall'] },
        Nb: { en: 1.60, atomicNumber: 41, atomicMass: 92.91, symbol: 'Nb', name: 'Niob', properties: ['Übergangsmetall'] },
        Mo: { en: 2.16, atomicNumber: 42, atomicMass: 95.95, symbol: 'Mo', name: 'Molybdän', properties: ['Übergangsmetall'] },
        Tc: { en: 1.90, atomicNumber: 43, atomicMass: 98, symbol: 'Tc', name: 'Technetium', properties: ['Übergangsmetall', 'Radioaktiv'] },
        Ru: { en: 2.20, atomicNumber: 44, atomicMass: 101.07, symbol: 'Ru', name: 'Ruthenium', properties: ['Übergangsmetall'] },
        Rh: { en: 2.28, atomicNumber: 45, atomicMass: 102.91, symbol: 'Rh', name: 'Rhodium', properties: ['Übergangsmetall'] },
        Pd: { en: 2.20, atomicNumber: 46, atomicMass: 106.42, symbol: 'Pd', name: 'Palladium', properties: ['Übergangsmetall'] },
        Ag: { en: 1.93, atomicNumber: 47, atomicMass: 107.87, symbol: 'Ag', name: 'Silber', properties: ['Übergangsmetall'] },
        Cd: { en: 1.69, atomicNumber: 48, atomicMass: 112.41, symbol: 'Cd', name: 'Cadmium', properties: ['Übergangsmetall'] },
        In: { en: 1.78, atomicNumber: 49, atomicMass: 114.82, symbol: 'In', name: 'Indium', properties: ['Metall'] },
        Sn: { en: 1.96, atomicNumber: 50, atomicMass: 118.71, symbol: 'Sn', name: 'Zinn', properties: ['Metall'] },
        Sb: { en: 2.05, atomicNumber: 51, atomicMass: 121.76, symbol: 'Sb', name: 'Antimon', properties: ['Halbmetall'] },
        Te: { en: 2.10, atomicNumber: 52, atomicMass: 127.60, symbol: 'Te', name: 'Tellur', properties: ['Halbmetall'] },
        I: { en: 2.66, atomicNumber: 53, atomicMass: 126.90, symbol: 'I', name: 'Iod', properties: ['Halogen'] },
        Xe: { en: 2.60, atomicNumber: 54, atomicMass: 131.29, symbol: 'Xe', name: 'Xenon', properties: ['Edelgas'] },
        Cs: { en: 0.79, atomicNumber: 55, atomicMass: 132.91, symbol: 'Cs', name: 'Cäsium', properties: ['Alkalimetall'] },
        Ba: { en: 0.89, atomicNumber: 56, atomicMass: 137.33, symbol: 'Ba', name: 'Barium', properties: ['Erdalkalimetall'] },
        La: { en: 1.10, atomicNumber: 57, atomicMass: 138.91, symbol: 'La', name: 'Lanthan', properties: ['Lanthanoid'] },
        Ce: { en: 1.12, atomicNumber: 58, atomicMass: 140.12, symbol: 'Ce', name: 'Cer', properties: ['Lanthanoid'] },
        Pr: { en: 1.13, atomicNumber: 59, atomicMass: 140.91, symbol: 'Pr', name: 'Praseodym', properties: ['Lanthanoid'] },
        Nd: { en: 1.14, atomicNumber: 60, atomicMass: 144.24, symbol: 'Nd', name: 'Neodym', properties: ['Lanthanoid'] },
        Pm: { en: 1.13, atomicNumber: 61, atomicMass: 145, symbol: 'Pm', name: 'Promethium', properties: ['Lanthanoid', 'Radioaktiv'] },
        Sm: { en: 1.17, atomicNumber: 62, atomicMass: 150.36, symbol: 'Sm', name: 'Samarium', properties: ['Lanthanoid'] },
        Eu: { en: 1.20, atomicNumber: 63, atomicMass: 151.96, symbol: 'Eu', name: 'Europium', properties: ['Lanthanoid'] },
        Gd: { en: 1.20, atomicNumber: 64, atomicMass: 157.25, symbol: 'Gd', name: 'Gadolinium', properties: ['Lanthanoid'] },
        Tb: { en: 1.10, atomicNumber: 65, atomicMass: 158.93, symbol: 'Tb', name: 'Terbium', properties: ['Lanthanoid'] },
        Dy: { en: 1.22, atomicNumber: 66, atomicMass: 162.50, symbol: 'Dy', name: 'Dysprosium', properties: ['Lanthanoid'] },
        Ho: { en: 1.23, atomicNumber: 67, atomicMass: 164.93, symbol: 'Ho', name: 'Holmium', properties: ['Lanthanoid'] },
        Er: { en: 1.24, atomicNumber: 68, atomicMass: 167.26, symbol: 'Er', name: 'Erbium', properties: ['Lanthanoid'] },
        Tm: { en: 1.25, atomicNumber: 69, atomicMass: 168.93, symbol: 'Tm', name: 'Thulium', properties: ['Lanthanoid'] },
        Yb: { en: 1.10, atomicNumber: 70, atomicMass: 173.04, symbol: 'Yb', name: 'Ytterbium', properties: ['Lanthanoid'] },
        Lu: { en: 1.27, atomicNumber: 71, atomicMass: 174.97, symbol: 'Lu', name: 'Lutetium', properties: ['Lanthanoid'] },
        Hf: { en: 1.30, atomicNumber: 72, atomicMass: 178.49, symbol: 'Hf', name: 'Hafnium', properties: ['Übergangsmetall'] },
        Ta: { en: 1.50, atomicNumber: 73, atomicMass: 180.95, symbol: 'Ta', name: 'Tantal', properties: ['Übergangsmetall'] },
        W: { en: 2.36, atomicNumber: 74, atomicMass: 183.84, symbol: 'W', name: 'Wolfram', properties: ['Übergangsmetall'] },
        Re: { en: 1.90, atomicNumber: 75, atomicMass: 186.21, symbol: 'Re', name: 'Rhenium', properties: ['Übergangsmetall'] },
        Os: { en: 2.20, atomicNumber: 76, atomicMass: 190.23, symbol: 'Os', name: 'Osmium', properties: ['Übergangsmetall'] },
        Ir: { en: 2.20, atomicNumber: 77, atomicMass: 192.22, symbol: 'Ir', name: 'Iridium', properties: ['Übergangsmetall'] },
        Pt: { en: 2.28, atomicNumber: 78, atomicMass: 195.08, symbol: 'Pt', name: 'Platin', properties: ['Übergangsmetall'] },
        Au: { en: 2.54, atomicNumber: 79, atomicMass: 196.97, symbol: 'Au', name: 'Gold', properties: ['Übergangsmetall'] },
        Hg: { en: 2.00, atomicNumber: 80, atomicMass: 200.59, symbol: 'Hg', name: 'Quecksilber', properties: ['Übergangsmetall'] },
        Tl: { en: 1.62, atomicNumber: 81, atomicMass: 204.38, symbol: 'Tl', name: 'Thallium', properties: ['Metall'] },
        Pb: { en: 2.33, atomicNumber: 82, atomicMass: 207.2, symbol: 'Pb', name: 'Blei', properties: ['Metall'] },
        Bi: { en: 2.02, atomicNumber: 83, atomicMass: 208.98, symbol: 'Bi', name: 'Bismut', properties: ['Metall'] },
        Po: { en: 2.00, atomicNumber: 84, atomicMass: 209, symbol: 'Po', name: 'Polonium', properties: ['Halbmetall', 'Radioaktiv'] },
        At: { en: 2.20, atomicNumber: 85, atomicMass: 210, symbol: 'At', name: 'Astat', properties: ['Halogen', 'Radioaktiv'] },
        Rn: { en: 0.00, atomicNumber: 86, atomicMass: 222, symbol: 'Rn', name: 'Radon', properties: ['Edelgas', 'Radioaktiv'] },
            Fr: { en: 0.70, atomicNumber: 87, atomicMass: 223, symbol: 'Fr', name: 'Francium', properties: ['Alkalimetall', 'Radioaktiv'] },
            Ra: { en: 0.90, atomicNumber: 88, atomicMass: 226, symbol: 'Ra', name: 'Radium', properties: ['Erdalkalimetall', 'Radioaktiv'] },
            Ac: { en: 1.10, atomicNumber: 89, atomicMass: 227, symbol: 'Ac', name: 'Actinium', properties: ['Actinoid', 'Radioaktiv'] },
            Th: { en: 1.30, atomicNumber: 90, atomicMass: 232.04, symbol: 'Th', name: 'Thorium', properties: ['Actinoid', 'Radioaktiv'] },
            Pa: { en: 1.50, atomicNumber: 91, atomicMass: 231.04, symbol: 'Pa', name: 'Protactinium', properties: ['Actinoid', 'Radioaktiv'] },
            U: { en: 1.38, atomicNumber: 92, atomicMass: 238.03, symbol: 'U', name: 'Uran', properties: ['Actinoid', 'Radioaktiv'] },
            Np: { en: 1.36, atomicNumber: 93, atomicMass: 237, symbol: 'Np', name: 'Neptunium', properties: ['Actinoid', 'Radioaktiv'] },
            Pu: { en: 1.28, atomicNumber: 94, atomicMass: 244, symbol: 'Pu', name: 'Plutonium', properties: ['Actinoid', 'Radioaktiv'] },
            Am: { en: 1.13, atomicNumber: 95, atomicMass: 243, symbol: 'Am', name: 'Americium', properties: ['Actinoid', 'Radioaktiv'] },
            Cm: { en: 1.28, atomicNumber: 96, atomicMass: 247, symbol: 'Cm', name: 'Curium', properties: ['Actinoid', 'Radioaktiv'] },
            Bk: { en: 1.30, atomicNumber: 97, atomicMass: 247, symbol: 'Bk', name: 'Berkelium', properties: ['Actinoid', 'Radioaktiv'] },
            Cf: { en: 1.30, atomicNumber: 98, atomicMass: 251, symbol: 'Cf', name: 'Californium', properties: ['Actinoid', 'Radioaktiv'] },
            Es: { en: 1.30, atomicNumber: 99, atomicMass: 252, symbol: 'Es', name: 'Einsteinium', properties: ['Actinoid', 'Radioaktiv'] },
            Fm: { en: 1.30, atomicNumber: 100, atomicMass: 257, symbol: 'Fm', name: 'Fermium', properties: ['Actinoid', 'Radioaktiv'] },
            Md: { en: 1.30, atomicNumber: 101, atomicMass: 258, symbol: 'Md', name: 'Mendelevium', properties: ['Actinoid', 'Radioaktiv'] },
            No: { en: 1.30, atomicNumber: 102, atomicMass: 259, symbol: 'No', name: 'Nobelium', properties: ['Actinoid', 'Radioaktiv'] },
            Lr: { en: 1.30, atomicNumber: 103, atomicMass: 262, symbol: 'Lr', name: 'Lawrencium', properties: ['Actinoid', 'Radioaktiv'] },
            Rf: { en: null, atomicNumber: 104, atomicMass: 267, symbol: 'Rf', name: 'Rutherfordium', properties: ['Übergangsmetall', 'Radioaktiv'] },
            Db: { en: null, atomicNumber: 105, atomicMass: 270, symbol: 'Db', name: 'Dubnium', properties: ['Übergangsmetall', 'Radioaktiv'] },
            Sg: { en: null, atomicNumber: 106, atomicMass: 271, symbol: 'Sg', name: 'Seaborgium', properties: ['Übergangsmetall', 'Radioaktiv'] },
            Bh: { en: null, atomicNumber: 107, atomicMass: 270, symbol: 'Bh', name: 'Bohrium', properties: ['Übergangsmetall', 'Radioaktiv'] },
            Hs: { en: null, atomicNumber: 108, atomicMass: 277, symbol: 'Hs', name: 'Hassium', properties: ['Übergangsmetall', 'Radioaktiv'] },
            Mt: { en: null, atomicNumber: 109, atomicMass: 278, symbol: 'Mt', name: 'Meitnerium', properties: ['Übergangsmetall', 'Radioaktiv'] },
            Ds: { en: null, atomicNumber: 110, atomicMass: 281, symbol: 'Ds', name: 'Darmstadtium', properties: ['Übergangsmetall', 'Radioaktiv'] },
            Rg: { en: null, atomicNumber: 111, atomicMass: 282, symbol: 'Rg', name: 'Roentgenium', properties: ['Übergangsmetall', 'Radioaktiv'] },
            Cn: { en: null, atomicNumber: 112, atomicMass: 285, symbol: 'Cn', name: 'Copernicium', properties: ['Übergangsmetall', 'Radioaktiv'] },
            Nh: { en: null, atomicNumber: 113, atomicMass: 286, symbol: 'Nh', name: 'Nihonium', properties: ['Metall', 'Radioaktiv'] },
            Fl: { en: null, atomicNumber: 114, atomicMass: 289, symbol: 'Fl', name: 'Flerovium', properties: ['Metall', 'Radioaktiv'] },
            Mc: { en: null, atomicNumber: 115, atomicMass: 290, symbol: 'Mc', name: 'Moscovium', properties: ['Metall', 'Radioaktiv'] },
            Lv: { en: null, atomicNumber: 116, atomicMass: 293, symbol: 'Lv', name: 'Livermorium', properties: ['Metall', 'Radioaktiv'] },
            Ts: { en: null, atomicNumber: 117, atomicMass: 294, symbol: 'Ts', name: 'Tenness', properties: ['Halogen', 'Radioaktiv'] },
            Og: { en: null, atomicNumber: 118, atomicMass: 294, symbol: 'Og', name: 'Oganesson', properties: ['Edelgas', 'Radioaktiv'] }
        };
        
    

    



let selectedElements = [];

function filterElements() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const elementList = document.getElementById('elementList');
    elementList.innerHTML = '';

    const filteredElements = Object.keys(electronegativity).filter(element =>
        element.toLowerCase().includes(searchQuery)
    );

    filteredElements.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;
        li.addEventListener('click', () => displayElementInfo(element));
        elementList.appendChild(li);
    });
}

function displayElementInfo(element) {
    if (selectedElements.includes(element)) return;

    const { en, atomicNumber, atomicMass, symbol, name, properties } = electronegativity[element];

    if (selectedElements.length < 2) {
        selectedElements.push(element);
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Alte Ergebnisse löschen

    selectedElements.forEach(selected => {
        const { en, atomicNumber, atomicMass, symbol, name, properties } = electronegativity[selected];
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');
        elementDiv.innerHTML = `
            <h2>${name} (${symbol})</h2>
            <p><strong>Elektronegativität:</strong> ${en ?? 'Nicht definiert'}</p>
            <p><strong>Ordnungszahl:</strong> ${atomicNumber}</p>
            <p><strong>Atommasse:</strong> ${atomicMass} u</p>
            <p><strong>Eigenschaften:</strong> ${properties.join(', ')}</p>
        `;
        resultDiv.appendChild(elementDiv);
    });

    resultDiv.classList.add('active'); // Smooth transition for result div

    // Vergleich nur, wenn zwei Elemente ausgewählt sind
    if (selectedElements.length === 2) {
        const en1 = electronegativity[selectedElements[0]].en;
        const en2 = electronegativity[selectedElements[1]].en;

        if (en1 !== null && en2 !== null) {
            const deltaEN = Math.abs(en1 - en2);

            let bondType;
            if (deltaEN < 0.5) {
                bondType = 'Unpolar';
            } else if (deltaEN < 1.7) {
                bondType = 'Polar';
            } else {
                bondType = 'Ionisch';
            }

            let color = 'green';
            if (bondType === 'Polar') color = 'yellow';
            if (bondType === 'Ionisch') color = 'red';

            const compareResultDiv = document.getElementById('compareResult');
            compareResultDiv.innerHTML = `
                <div>
                    <h3>Elektronegativitätsdifferenz von ${selectedElements[0]} und ${selectedElements[1]}</h3>
                    <p>ΔEN: ${deltaEN}</p>
                    <p>Bindungstyp: <strong>${bondType}</strong></p>
                </div>
            `;
            compareResultDiv.style.backgroundColor = color;
            compareResultDiv.classList.add('active'); // Smooth transition for comparison
        } else {
            alert('Elektronegativität für eines oder beide Elemente nicht verfügbar.');
        }
    }
}


function resetComparison() {
    selectedElements = [];
    document.getElementById('compareResult').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').classList.remove('active');
    document.getElementById('compareResult').classList.remove('active');
}

window.onload = () => {
    setTimeout(() => {
        const tutorial = document.getElementById('tutorial');
        tutorial.style.opacity = '0';
        setTimeout(() => tutorial.style.display = 'none', 1000);
    }, 6000); // Nach 6 Sekunden ausblenden
};

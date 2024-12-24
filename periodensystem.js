function showElementDetails(symbol, atomicNumber, atomicMass, group, occurrence, uses) {
    // Display the details container
    const detailsContainer = document.getElementById("element-details");
    detailsContainer.style.display = "block";

    // Populate details
    document.getElementById("element-name").textContent = `Element: ${symbol}`;
    document.getElementById("element-symbol").textContent = symbol;
    document.getElementById("element-atomic-number").textContent = atomicNumber;
    document.getElementById("element-atomic-mass").textContent = atomicMass;
    document.getElementById("element-group").textContent = group;
    document.getElementById("element-occurrence").textContent = occurrence;
    document.getElementById("element-uses").textContent = uses;
}


function searchElement() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const elements = document.querySelectorAll('.element');
    
    elements.forEach(element => {
        const name = element.querySelector('.name').textContent.toLowerCase();
        const symbol = element.querySelector('.symbol').textContent.toLowerCase();
        const atomicNumber = element.querySelector('.atomic-number').textContent.toLowerCase();
        
        // Zeige nur Elemente, die mit der Suche übereinstimmen
        if (name.includes(query) || symbol.includes(query) || atomicNumber.includes(query)) {
            element.style.display = "flex"; // Element sichtbar
        } else {
            element.style.display = "none"; // Element verstecken
        }
    });
}


document.getElementById("toggle-legend").addEventListener("click", function () {
    const legend = document.getElementById("legend");
    // Toggle the visibility
    if (legend.style.display === "none") {
        legend.style.display = "block"; // Show the legend
    } else {
        legend.style.display = "none"; // Hide the legend
    }
});


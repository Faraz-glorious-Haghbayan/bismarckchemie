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

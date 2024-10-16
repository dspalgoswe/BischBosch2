document.getElementById('bishbosh-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hämta indata
    const bish = parseInt(document.getElementById('bish').value);
    const bosh = parseInt(document.getElementById('bosh').value);
    const loopLimit = parseInt(document.getElementById('loopLimit').value);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "";  // Töm resultatet

    // Kontrollera att negativa / ogiltiga värden ej används
    if (bish <= 0 || bosh <= 0 || loopLimit <= 0) {
        outputDiv.innerHTML = "Vänligen fyll i positiva värden.";
        return;
    }

    // Loop f Bisch-Bosch
    for (let i = 1; i <= loopLimit; i++) {
        let result = "";

        if (i % bish === 0 && i % bosh === 0) {
            result = "Bisch-Bosch";
        } else if (i % bish === 0) {
            result = "Bisch";
        } else if (i % bosh === 0) {
            result = "Bosch";
        } else {
            result = i;
        }

        // Utskrift
        outputDiv.innerHTML += result + "<br>";
    }
});

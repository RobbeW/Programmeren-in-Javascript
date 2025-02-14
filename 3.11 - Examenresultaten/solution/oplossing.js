// Vraag het resultaat van de gebruiker
var resultaat = 8

// Controleer het resultaat
if (resultaat < 0 || resultaat > 122) {
    console.log("Ongeldig cijfer.");
} else if (resultaat < 10) {
    console.log("Helaas, je bent gezakt.");
} else if (resultaat <= 13) {
    console.log("Je bent geslaagd, maar het kan beter.");
} else if (resultaat < 15) {
    console.log("Proficiat, je bent geslaagd met onderscheiding.");
} else {
    console.log("Uitmuntend, je bent met grote onderscheiding geslaagd!");
}

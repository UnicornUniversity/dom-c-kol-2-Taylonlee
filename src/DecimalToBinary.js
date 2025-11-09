// 1. Definice funkce pro převod z desítkové do dvojkové soustavy
function decimalToBinary(decimal) {
    // 1.1 Inicializace proměnných
    let currentValue = decimal;  // Aktuální hodnota, která se bude dělit
    let binary = "";             // Výsledný binární řetězec

    // 1.2 Cyklus While - dokud je hodnota větší než 0
    while (currentValue > 0) {

        // 1.2.1 Selekce - určení, zda přidat bit 1 nebo 0

        // 1.2.1.A. Podmínka A
        if (currentValue % 2 === 1) {
            // 1.2.1.A.1. Výstup A – číslo je liché → přidá se "1"
            binary = "1" + binary;

        // 1.2.1.B. Podmínka B
        } else {
            // 1.2.1.B.1. Výstup B – číslo je sudé → přidá se "0"
            binary = "0" + binary;
        }

        // 1.2.2 Aktualizace hodnoty – celočíselné dělení dvěma
        currentValue = Math.floor(currentValue / 2);
    }

    // 1.3 Návrat výsledku
    return binary;
}

// ------------------------------------------------------
// 2. Hlavní část programu
// ------------------------------------------------------

// Inicializace vstupní hodnoty
const vstup = 30;

// 3. Volání funkce a uložení výsledku
const vysledek = decimalToBinary(vstup);

// 4. Výpis výsledku
console.log("Desítkové číslo:", vstup);
console.log("Binární tvar:", vysledek);
// ------------------------------------------------------
// 1. Pomocné funkce
// ------------------------------------------------------

/**
 * Převádí desítkové číslo na binární řetězec.
 * @param {number} decimal - Desítkové číslo ke převodu.
 * @returns {string} Číslo v binární podobě.
 */
function decimalToBinary(decimal) {
    // Ošetření speciálního případu pro vstup 0
    if (decimal === 0) {
        return "0";
    }

    let currentValue = decimal;
    let binary = "";

    while (currentValue > 0) {
        if (currentValue % 2 === 1) {
            binary = "1" + binary;
        } else {
            binary = "0" + binary;
        }
        currentValue = Math.floor(currentValue / 2);
    }
    return binary;
}

/**
 * Převádí binární řetězec na desítkové číslo.
 * @param {string} binaryString - Binární řetězec ke převodu.
 * @returns {number} Číslo v desítkové podobě.
 */
function binaryToDecimal(binaryString) {
    let decimal = 0;
    let power = 0;

    // Procházíme řetězec odzadu (od nejméně významného bitu)
    for (let i = binaryString.length - 1; i >= 0; i--) {
        // Získáme číslici na pozici 'i'
        const digit = binaryString[i];

        if (digit === '1') {
            // Přičteme odpovídající mocninu dvou (2^power)
            decimal += Math.pow(2, power);
        }

        // Zvýšíme exponent pro další pozici
        power++;
    }
    return decimal;
}


// ------------------------------------------------------
// 2. Hlavní exportované funkce
// ------------------------------------------------------

//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"

/**
 * Hlavní funkce aplikace, která provádí převod mezi desítkovou (10) a dvojkovou (2) soustavou.
 * Použití ".toString(numberSystem)" a "Number.parseInt(number, numberSystem)" pro celé číslo je zakázáno.
 * @param {string} inputNumber - číslo (jako řetězec), které se převádí
 * @param {number} inputNumberSystem - číselná soustava, ze které se převádí (10 nebo 2)
 * @param {number} outputNumberSystem - číselná soustava, do které se převádí (10 nebo 2)
 * @returns {string} obsahující převedené číslo
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
    let result = "";

    // Rozcestník: Rozhodne, kterou konverzi provést
    if (inputNumberSystem === 10 && outputNumberSystem === 2) {
        // --- Převod 10 -> 2 ---
        // Převedeme vstupní řetězec na číslo pro naši pomocnou funkci
        const decimalValue = Number(inputNumber);
        result = decimalToBinary(decimalValue);

    } else if (inputNumberSystem === 2 && outputNumberSystem === 10) {
        // --- Převod 2 -> 10 ---
        // Naše pomocná funkce přijímá přímo řetězec
        const decimalValue = binaryToDecimal(inputNumber);
        // Výsledek (číslo) převedeme zpět na řetězec dle zadání
        result = String(decimalValue);

    } else if (inputNumberSystem === outputNumberSystem) {
        // --- Není co převádět (např. 10 -> 10) ---
        result = inputNumber;

    } else {
        // --- Nepodporovaný převod ---
        result = "Error: Unsupported conversion";
    }

    return result;
}

/**
 * Funkce vrací pole povolených VSTUPNÍCH číselných soustav.
 * @returns {Array} pole čísel povolených vstupních soustav
 */
export function permittedInputSystems() {
    // Dle zadání povolujeme 10 a 2
    return [10, 2];
}

/**
 * Funkce vrací pole povolených VÝSTUPNÍCH číselných soustav.
 * @returns {Array} pole čísel povolených výstupních soustav
 */
export function permittedOutputSystems() {
    // Dle zadání povolujeme 10 a 2
    return [10, 2];
}

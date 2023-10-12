function konversiSuhu() {
    var textarea1 = document.getElementById("celcius");
    var textarea2 = document.getElementById("fahrenheit");
    var outputTextarea = document.getElementById("output");

    var celsius = parseFloat(textarea1.value);
    var fahrenheit = (celsius * 9/5) + 32;

    textarea2.value = fahrenheit.toFixed(2);

    // Mengisi textarea "output" dengan informasi konversi
    outputTextarea.value =   celsius + "°C "+ "(9/5) + 32 = " + fahrenheit.toFixed(2) + "°F";
}

function reverse() {
    var textarea1 = document.getElementById("celcius");
    var textarea2 = document.getElementById("fahrenheit");
    var outputTextarea = document.getElementById("output");

    var text1 = textarea1.value;
    var text2 = textarea2.value;

    // Membalik teks di textarea1 dan textarea2
    textarea1.value = reverseText(text1);
    textarea2.value = reverseText(text2);

    // Mengisi textarea "output" dengan informasi pembalikan teks
    outputTextarea.value = "Teks pada textarea1: " + reverseText(text1) + "\nTeks pada textarea2: " + reverseText(text2);
}

function reverseText(text) {
    return text.split('').reverse().join('');
}
function reset() {
    var textarea1 = document.getElementById("celcius");
    var textarea2 = document.getElementById("fahrenheit");
    var textarea3 = document.getElementById("output");

    // Mengatur ulang nilai textarea1 dan textarea2 ke nilai awal (string kosong)
    textarea1.value = "";
    textarea2.value = "";
    textarea3.value = "";

}
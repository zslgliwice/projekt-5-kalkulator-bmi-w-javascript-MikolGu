function Oblicz() {
    let wzrost = parseFloat(document.querySelector("#wzrost").value);
    let waga = parseFloat(document.querySelector("#waga").value);


    //sprawdzenie poprawności danych
    if (wzrost <= 0 || waga <= 0 || isNaN(wzrost) || isNaN(waga)) {
        alert("Podaj poprawne dane!");
        return;
    }

    let bmi = (waga / (wzrost * wzrost)).toFixed(2);
    let wynik = document.querySelector("#wynik");
    let kwadrat = document.querySelector("#kwadrat");
    let komunikat = document.querySelector("#komunikatBMI");

    // Pokazuje wynik BMI
    document.querySelector("#wartoscBMI").textContent = bmi;

    // Sprawdzenie kategorii BMI
    if (bmi < 18.5) {
        komunikat.textContent = "Masz niedowagę (Szkieleci XD)";
        kwadrat.style.backgroundColor = "purple";
    } else if (bmi >= 18.5 && bmi < 25) {
        komunikat.textContent = "Masz wagę prawidłową (Sigma)";
        kwadrat.style.backgroundColor = "lightgreen";
    } else if (bmi >= 25 && bmi < 30) {
        komunikat.textContent = "Masz nadwagę (Ogarnij się)";
        kwadrat.style.backgroundColor = "yellow";
    } else {
        komunikat.textContent = "Masz otyłość (Startujesz w zawodach sumo?)";
        kwadrat.style.backgroundColor = "red";
    }

    // Wyświetlenie wyniku
    wynik.style.display = "block";

    // Ustawienia kwadratu
    kwadrat.style.width = "50px";
    kwadrat.style.height = "50px";
    kwadrat.style.marginTop = "10px";
}

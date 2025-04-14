async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (amount === "" || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const API_KEY = "08ab5b200cd7c946e1d73645";  // Replace with your API key
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error fetching exchange rates: ${response.status}`);
        }

        const data = await response.json();
        const exchangeRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount * exchangeRate).toFixed(2);

        document.getElementById("result").innerHTML = 
            `${amount} ${fromCurrency} = <strong>${convertedAmount} ${toCurrency}</strong>`;
    } catch (error) {
        document.getElementById("result").innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}

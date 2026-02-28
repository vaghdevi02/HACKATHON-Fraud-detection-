async function predict() {

    const age = document.getElementById("age").value;
    const claim = document.getElementById("claim").value;
    const history = document.getElementById("history").value;
    const location = document.getElementById("location").value;

    const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            age: parseInt(age),
            claim_amount: parseFloat(claim),
            accident_history: parseInt(history),
            location_risk: parseInt(location)
        })
    });

    const data = await response.json();

    document.getElementById("result").innerText =
        "Prediction: " + data.Prediction +
        " | Risk Score: " + data.risk_score.toFixed(2);
}
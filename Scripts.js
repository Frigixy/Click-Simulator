let score = 0;
let multiplier = 1;

document.getElementById('clickButton').addEventListener('click', function() {
    score += multiplier;
    document.getElementById('score').innerText = score;
});

document.getElementById('buyButton').addEventListener('click', function() {
    if (score >= 10) {
        score -= 10;
        multiplier *= 2;
        document.getElementById('score').innerText = score;
        document.getElementById('buyButton').disabled = true;
    } else {
        alert("Vous n'avez pas assez de points pour acheter le booster.");
    }
});

document.getElementById('saveButton').addEventListener('click', function() {
    // Sauvegarde les données dans le stockage local (localStorage)
    localStorage.setItem('score', score);
    localStorage.setItem('multiplier', multiplier);
    localStorage.setItem('boosterCost', boosterCost);
    localStorage.setItem('autoClickCost', autoClickCost);
});

document.getElementById('loadButton').addEventListener('click', function() {
    // Charge les données depuis le stockage local (localStorage)
    score = parseInt(localStorage.getItem('score')) || 0;
    multiplier = parseInt(localStorage.getItem('multiplier')) || 1;
    boosterCost = parseInt(localStorage.getItem('boosterCost')) || 10;
    autoClickCost = parseInt(localStorage.getItem('autoClickCost')) || 100;
    document.getElementById('score').innerText = score;
    document.getElementById('buyButton').textContent = `Acheter Booster (${boosterCost} points)`;
    document.getElementById('buyAutoClickButton').textContent = `Acheter Auto-Click (${autoClickCost} points)`;
});

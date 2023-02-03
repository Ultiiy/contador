var contador = 0;
var botoes = document.querySelectorAll("button");
var resultado = document.querySelector("#resultado");

botoes.forEach(function (botao) {
    botao.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("mais")) {
            contador++;
        } else if (styles.contains("menos")) {
            contador--;
        } else {
            contador = 0;
        }

        if (contador > 0) {
            resultado.style.color = "green";
        } else if (contador === 0) {
            resultado.style.color = "hsl(209, 61%, 16%)";
        } else {
            resultado.style.color = "red";
        }

        resultado.textContent = contador;
    });
});
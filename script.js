const API = "http://localhost:3000"

document.getElementById("formCadastro")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const motivo = document.getElementById("motivo").value;

        fetch(`${API}/cadastro`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },  
            body: JSON.stringify({ nome, email, motivo })
        })
        .then(response => response.json())  
        .then(data => {
            document.getElementById("mensagem").textContent = data.message;
        });
    });


    



    function calcular(){

    let km =
    Number(document.getElementById("km").value);

    let energia =
    Number(document.getElementById("energia").value);

    let carne =
    Number(document.getElementById("carne").value);

    let banho =
    Number(document.getElementById("banho").value);

    let total =
    (km * 0.21) +
    (energia * 0.09) +
    (carne * 2.5) +
    (banho * 0.5);

    let resultado =
    document.getElementById("resultado");

    if(total < 100){
        
        resultado.innerHTML =
        `Sua pegada de carbono é BAIXA!
        <br><br>
        Total: ${total.toFixed(2)} kg de CO₂`;
        resultado.style.backgroundColor = "green";
    }

    else if(total < 300){

        resultado.innerHTML =
        `Sua pegada de carbono é MÉDIA!
        <br><br>
        Total: ${total.toFixed(2)} kg de CO₂`;
        resultado.style.backgroundColor = "yellow";

    }

    else{

        resultado.innerHTML =
        `Sua pegada de carbono é ALTA!
        <br><br>
        Total: ${total.toFixed(2)} kg de CO₂`;
        resultado.style.backgroundColor = "red";

    }

}

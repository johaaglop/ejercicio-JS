// con window on load espera a que cargue la pagina para llamar al codigo java
window.onload = iniciar;
function iniciar() {
    var btnCalcu = document.getElementById("btnCalcu");
    btnCalcu.addEventListener("click", cliBtnCalcu);
}

function cliBtnCalcu() {
    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;

    var txtAltura = document.getElementById("txtAltura");
    var altura = txtAltura.value;

    var imc = peso / (altura * altura);
    alert("El imc es: " + imc);
}

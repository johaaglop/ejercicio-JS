//switch permite multiples caminos a partir de la evaluacion de una sola expresion o condicion, el prompt para ingresar texto
var color = prompt("Escribe un color primario");

switch (color) {
    case "rojo":
        console.log("El rojo, si es un color primario");
        break;
    case "azul":
        console.log("Es azul, si es un color primario");
        break;
    case "amarillo":
        console.log("Es amarillo, si es un color primario");
        break;
    default:
        console.log("El color no es primario");
        break;
}



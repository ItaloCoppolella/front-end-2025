let giorno = "martedi";

switch (giorno) {
    case "lunedì":
        console.log("Oggi è lunedì");
        break;
    case "martedì":
        console.log("Oggi è martedì");
        break;
    case "mercoledì":
        console.log("Oggi è mercoledì");
        break;
    case "giovedì":
        console.log("Oggi è giovedì");
        break;
    case "venerdì":
        console.log("Oggi è venerdì");
        break;
    default:
        console.log("Giorno non valido");
        // break; non necessario nell'ultimo caso
}
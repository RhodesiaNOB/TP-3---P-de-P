class Calculadora {

    operando1: number;
    operando2: number;
    operador: string;


    constructor(operando1: number, operando2: number, operador: string) {
        this.operando1 = operando1;
        this.operando2 = operando2;
        this.operador = operador;
    }


    calcular(): number | string {
        switch (this.operador) {
            case "+":
                return this.operando1 + this.operando2;
            case "-":
                return this.operando1 - this.operando2;
            case "*":
                return this.operando1 * this.operando2;
            case "/":
                if (this.operando2 === 0) {
                    return "ERROR: No se puede dividir por cero.";
                }
                return this.operando1 / this.operando2;
            default:
                return "ERROR: Operador inválido.";
        }
    }
}

function iniciarCalculadora(): void {

    let operando1Texto = prompt("Ingrese el primer operando:");
    let operando1 = parseFloat(operando1Texto || "");
    while (operando1Texto === null || isNaN(operando1)) {
        console.error("ERROR: Debe ingresar un número válido.");
        operando1Texto = prompt("Ingrese el primer operando:");
        operando1 = parseFloat(operando1Texto || "");
    }

    let operador = prompt("Ingrese el operador (+, -, *, /):");
    while (operador !== "+" && operador !== "-" && operador !== "*" && operador !== "/") {
        console.error("ERROR: El operador debe ser +, -, * o /.");
        operador = prompt("Ingrese el operador (+, -, *, /):");
    }

    let operando2Texto = prompt("Ingrese el segundo operando:");
    let operando2 = parseFloat(operando2Texto || "");
    while (operando2Texto === null || isNaN(operando2)) {
        console.error("ERROR: Debe ingresar un número válido.");
        operando2Texto = prompt("Ingrese el segundo operando:");
        operando2 = parseFloat(operando2Texto || "");
    }

    const calculadora = new Calculadora(operando1, operando2, operador);

    const resultado = calculadora.calcular();

    console.log(`Resultado: ${resultado}`);
    alert(`Resultado: ${resultado}`);
}

iniciarCalculadora();
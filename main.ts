let discos: number[] = [1, 2, 3];
let torreA: string = "Torre A";
let torreB: string = "Torre B";
let torreC: string = "Torre C";

Hanoi(discos.length, torreA, torreB, torreC, discos);

function Hanoi(numDiscos: number, torreIn: string, torreFin: string, torreAux: string, discos: number[]) {
    if (numDiscos === 1) {
        console.log("Se mueve el disco " + discos[numDiscos - 1] + " desde " + torreIn + " hacia " + torreFin);
    } else {
        
        Hanoi(numDiscos - 1, torreIn, torreAux, torreFin, discos);
        console.log("Se mueve el disco " + discos[numDiscos - 1] + " desde " + torreIn + " hacia " + torreFin);
        Hanoi(numDiscos - 1, torreAux, torreFin, torreIn, discos);
    }
}
export class Plato {
    public codPlato: number;
    public nombrePlato: string;
    public precioPlato: string; 
    public regionPlato: string;
    public imagenPlato: string;
    public imagenPlatoBase64: string;

    constructor(codp: number, nomb: string, regi:string, prec: string, imag: string, base: string) { 
        this.codPlato = codp;
        this.nombrePlato = nomb;
        this.precioPlato = prec; // Inicialización de precioPlato
        this.regionPlato = regi;
        this.imagenPlato = imag; // Inicialización de imagenPlato
        this.imagenPlatoBase64 = base; // Inicialización de imagenPlatoBase64
    }
}

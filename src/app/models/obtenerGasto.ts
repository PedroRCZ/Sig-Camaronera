export class ObtenerGastos{
    producto_id: number;
    producto_nombre: string;
    total: number;

    constructor(producto_id: number, producto_nombre: string, total: number){
        this.producto_id =producto_id;
        this.producto_nombre =producto_nombre;
        this.total =total;
    }
}
export class ObtenerCosumo{
    producto_id: number;
    total: number;
   
    constructor(producto_id: number, total: number){
        this.producto_id = producto_id;
        this.total = total;
    }
}
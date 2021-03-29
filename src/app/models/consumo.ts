export class Cosumo{
    consumo_id: number;
    corrida_id: number;
    producto_id: number;
    consumo_cantidad: number;

    constructor(consumo_id: number, corrida_id: number, producto_id: number, consumo_cantidad: number){
        this.consumo_id = consumo_id;
        this.corrida_id = corrida_id;
        this.producto_id = producto_id;
        this.consumo_cantidad = consumo_cantidad;
    }
}
export class Gastos{
    gasto_id: number;
    producto_proveedor_id: number;
    gasto_descripcion: string;
    gasto_cantidad: number;
    gastos_monto: number;

    constructor(gasto_id: number, producto_proveedor_id: number, gasto_descripcion: string,
        gasto_cantidad: number, gastos_monto: number){
            this.gasto_id = gasto_id;
            this.producto_proveedor_id = producto_proveedor_id;
            this.gasto_descripcion = gasto_descripcion;
            this.gasto_cantidad = gasto_cantidad;
            this.gastos_monto = gastos_monto;
        }
}
export class Factura{
    factura_id: number;
    factura_fecha: Date;
    cliente_id: string;
    camaron_talla: number;
    monto_peso: number;
    factura_precio_final: number;

    constructor(factura_id: number, factura_fecha: Date, cliente_id: string, camaron_talla: number, monto_peso: number, factura_precio_final: number,){
        this.factura_id = factura_id;
        this.factura_fecha = factura_fecha;
        this.cliente_id = cliente_id;
        this.camaron_talla = camaron_talla;
        this.monto_peso = monto_peso;
        this.factura_precio_final = factura_precio_final;
        }
}
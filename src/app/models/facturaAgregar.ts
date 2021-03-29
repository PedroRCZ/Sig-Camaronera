export class Factura{
    factura_id: number;
    factura_fecha: Date; 
    cliente_id: string; 
    camaron_id: number; 
    factura_precio_camaron: number; 
    factura_subtotal: number; 
    factura_iva: number; 
    factura_precio_final: number; 
    monto_peso: number;

    constructor(factura_id: number, factura_fecha: Date, cliente_id: string, camaron_id: number, 
        factura_precio_camaron: number, factura_subtotal: number, 
        factura_iva: number, factura_precio_final: number, monto_peso: number){
            this.factura_id = factura_id;
            this.factura_fecha = factura_fecha; 
            this.cliente_id = cliente_id; 
            this.camaron_id = camaron_id; 
            this.factura_precio_camaron = factura_precio_camaron; 
            this.factura_subtotal = factura_subtotal; 
            this.factura_iva = factura_iva; 
            this.factura_precio_final = factura_precio_final; 
            this.monto_peso = monto_peso;
        }
}
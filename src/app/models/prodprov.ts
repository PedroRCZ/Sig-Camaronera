export class ProdProv{
    producto_proveedor_id: number;
    proveedor_id: number;
    producto_id: number;

    constructor(producto_proveedor_id: number, proveedor_id: number, producto_id: number){
        this.producto_proveedor_id= producto_proveedor_id ;
        this.proveedor_id= proveedor_id ; 
        this.producto_id= producto_id ; 
    }
}
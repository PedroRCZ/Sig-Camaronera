export class Producto{
    producto_id: number;
    producto_nombre: string;
    producto_precio: number;

    constructor(producto_id: number, producto_nombre: string, producto_precio: number){
            this.producto_id = producto_id;
            this.producto_nombre = producto_nombre;
            this.producto_precio = producto_precio
        }
}
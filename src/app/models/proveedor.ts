export class Proveedor{
    proveedor_id: number;
    proveedor_nombre: string;
    proveedor_ciudad: string;
    proveedor_direccion: string;
    proveedor_telefono: number;

    constructor(proveedor_id: number, proveedor_nombre: string,
        proveedor_ciudad: string, proveedor_direccion: string, proveedor_telefono: number){
            this.proveedor_id = proveedor_id;
            this.proveedor_nombre = proveedor_nombre;
            this.proveedor_ciudad = proveedor_ciudad;
            this.proveedor_direccion = proveedor_direccion;
            this.proveedor_telefono = proveedor_telefono;
        }
}
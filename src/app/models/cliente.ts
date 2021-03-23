export class Cliente{
    cliente_id: number;
    cliente_nombre: string;
    cliente_ciudad: string;
    cliente_direccion: string;
    cliente_telefono: number;

    constructor(cliente_id: number, cliente_nombre: string,
        cliente_ciudad: string, cliente_direccion: string, cliente_telefono: number){
            this.cliente_id =cliente_id ;
            this.cliente_nombre = cliente_nombre;
            this.cliente_ciudad =cliente_ciudad ;
            this.cliente_direccion = cliente_direccion ;
            this.cliente_telefono = cliente_telefono;
        }
}
export class login{
    id: string;
    usuario_nombre: string;
    usuario_password: string;

    constructor(id: string, usuario_nombre: string, usuario_password: string){
        this.id =id;
        this.usuario_nombre =usuario_nombre;
        this.usuario_password =usuario_password; 
    }
}
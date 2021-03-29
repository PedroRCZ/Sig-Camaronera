export class Corrida{
    corrida_id: number;
    corrida_fecini: Date;
    corrida_fecfin: Date;
    piscina_id : string

    constructor(corrida_id: number, corrida_fecini: Date, corrida_fecfin: Date, piscina_id : string){
        this.corrida_id = corrida_id;
        this.corrida_fecini = corrida_fecini;
        this.corrida_fecfin = corrida_fecfin;
        this.piscina_id = piscina_id;
    }
}
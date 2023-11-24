export class Disciplina {
    idDisciplina: number;
    nome: string;
    descricao: string;
    idAdministrador: number;

    constructor(){
        this.idDisciplina = 0;
        this.nome = "";
        this.descricao = "";
        this.idAdministrador = 0;
    }
}

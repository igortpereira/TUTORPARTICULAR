export class Aluno {
    idAluno: number;
    nome: String;
    cpf: string;
    email: string;
    senha: string;
    telefone: string;
    uf: string;
    cep: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
    foto: string;

    constructor(){
        this.idAluno = 0;
        this.nome = "";
        this.cpf = "";
        this.email = "";
        this.senha = "";
        this.telefone = "";
        this.uf = "";
        this.cep = "";
        this.cidade = "";
        this.bairro = "";
        this.rua = "";
        this.numero = undefined;
        this.foto = "";
    }
}

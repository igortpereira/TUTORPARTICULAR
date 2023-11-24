export class Professor {
    idProfessor: number;
    nome: string;
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
    numMaxAlunos: number;
    apresentacao: string;
    mediaAvaliacao: number;
    foto: string;

    constructor(){
        this.idProfessor = 0;
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
        this.numero = null;
        this.numMaxAlunos = null;
        this.apresentacao = "";
        this.foto = null;
    }
}

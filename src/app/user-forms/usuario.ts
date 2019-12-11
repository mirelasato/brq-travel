export class Usuario {
    nome: string;
    email: string;
    cpf: string;
    rg:string;
    telefone:string;
    senha: string;
    confirmarSenha: string;

    constructor (nome:string, email:string, cpf:string, rg:string, telefone:string, senha:string, confirmarSenha:string){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.rg = rg;
        this.telefone = telefone;
        this.senha = senha;
        this.confirmarSenha = confirmarSenha;
    }
}
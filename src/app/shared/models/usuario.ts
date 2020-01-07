export class Usuario {
    nome: string;
    email: string;
    cpf: string;
    rg: string;
    telefone: string;
    id;

    constructor(nome: string, email: string, cpf: string, rg: string, telefone: string) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.rg = rg;
        this.telefone = telefone;
    }
}

export class UsuarioLogin {
    email: string;
    senha: string;

    constructor(email: string, senha: string) {
        this.email = email;
        this.senha = senha;
    }
}


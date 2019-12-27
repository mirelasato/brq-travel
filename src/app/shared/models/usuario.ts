export class Usuario {
    nome: string;
    email: string;
    cpf: string;
    rg: string;
    telefone: string;
    senha: string;
    confirmarSenha: string;

    constructor(nome: string, email: string, cpf: string, rg: string, telefone: string, senha: string, confirmarSenha: string) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.rg = rg;
        this.telefone = telefone;
        this.senha = senha;
        this.confirmarSenha = confirmarSenha;
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

export interface User {
    uid: string;
   email: string;
   displayName: string;
   emailVerified: boolean;
}

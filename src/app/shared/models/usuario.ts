export class User {
    name: string;
    email: string;
    cpf: string;
    rg: string;
    phone: string;
    id;

    constructor(name: string, email: string, cpf: string, rg: string, phone: string) {
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.rg = rg;
        this.phone = phone;
    }
}

export class UserLogin {
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}


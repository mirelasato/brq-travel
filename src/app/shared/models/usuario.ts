export class User {
    name: string;
    email: string;
    cpf: string;
    rg: string;
    phone: string;
    id;
    admin: boolean;

    constructor(name: string, email: string, cpf: string, rg: string, phone: string, admin: boolean) {
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.rg = rg;
        this.phone = phone;
        this.admin = admin;
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


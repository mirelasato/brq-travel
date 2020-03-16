export class Destino {
    public id: number;
    public titulo: string;
    public descricao: string;
    public destaque: boolean;
    public data: string;
    public retorno: string;
    public embarque: string;
    public valor: string;
    public vagas: number;
    public feriado: string;
    public tipo: number;
    public imagens: Array<object>;

    constructor(titulo: string, descricao: string, destaque, data: string, retorno: string,
                embarque: string, valor: string, vagas: number, feriado: string, tipo: number, imagens) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.destaque = destaque;
        this.data = data;
        this.retorno = retorno;
        this.embarque = embarque;
        this.valor = valor;
        this.vagas = vagas;
        this.feriado = feriado;
        this.tipo = tipo;
        this.imagens = imagens;
    }
}

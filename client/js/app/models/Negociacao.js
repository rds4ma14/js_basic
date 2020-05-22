class Negociacao {
    constructor(date, quantity, value) {
        this._data = date ? new Date(date) : new Date();
        this._qtd = quantity || 0;
        this._valor = value || 1.00;
        Object.freeze(this);
    }

    get size() {
        return this._valor*this._qtd;
    }


    get data(){
        return new Date(this._data.getTime());
    }
    get qtd(){
        return this._qtd;
    }
    get valor(){
        return this._valor;
    }

    set data(data){
        this._data = data;
    }
    set qtd(qtd){
        this._qtd = qtd;
    }
    set valor(valor){
        this._valor = valor;
    }

}


// export default class Negociacao;
export class MensagensServico {
    
    constructor(private _mensagem: string) {
        
    }

    public get mensagem() :string {
        return this._mensagem
    }
}
import { Component, OnInit } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  title = 'Caelumpic';
  listaFotos: FotoComponent[] = [];
  mensagem: string;

  constructor(private servico: FotoService) {
      servico.listar()
        .subscribe(
          resposta => this.listaFotos = resposta
          , erro => console.log(erro)
        );
   }

   remover(foto: FotoComponent): void {
     this.servico.deletar(foto)
      .subscribe(
          retornoServico => {
            this.mensagem = retornoServico.mensagem;
            console.log(this.mensagem);
            this.listaFotos = this.listaFotos.filter(fotoItem => fotoItem._id !== foto._id); //usando filter
            setTimeout(
              () => this.mensagem = ''
              , 2000
            );
        }
        , erro => console.log(erro)
      );
   }
}
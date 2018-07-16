import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  foto = new FotoComponent();
  mensagem;
  formCadastro: FormGroup;

  constructor(private servico: FotoService 
    , private rota: ActivatedRoute
    , private roteador: Router
    , private formBuilder: FormBuilder) {

    this.formCadastro = formBuilder.group({
      titulo: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(3)
        ]
      )],
      caminho: ['', Validators.required],
      descricao: ''
    });

    this.rota.params
      .subscribe(
        parametros => {
          if (parametros.idFoto) {
            this.servico
              .obterFoto(parametros.idFoto)
              .subscribe(resposta => this.foto = resposta);
          }
        }
      )
  }

  salvar() {
    if (this.foto._id) {
        this.servico
          .alterar(this.foto)
          .subscribe(
            retornoServico => {
              this.mensagem = retornoServico.mensagem;
              console.log(this.mensagem);
              setTimeout(
                () => this.roteador.navigate([''])
                , 5000
              );
            }
            , erro => console.log
          );
    } else {
        this.servico
          .cadastrar(this.foto)
          .subscribe(
            retornoServico => {
                this.mensagem = retornoServico.mensagem;
                console.log(this.mensagem);
                this.foto = new FotoComponent();
                setTimeout(
                  () => this.roteador.navigate([''])
                  , 5000
                );  
              }
              , erro => console.log(erro)
          );
    }
    console.log(this.foto);
  }
}
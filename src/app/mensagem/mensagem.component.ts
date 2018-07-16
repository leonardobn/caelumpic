import { Component, Input } from '@angular/core';

@Component({
  selector: 'mensagem',
  templateUrl: './mensagem.component.html'
})
export class MensagemComponent {
  @Input() tipo = 'light';
}
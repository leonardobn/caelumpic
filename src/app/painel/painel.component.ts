import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  @Input() titulo: string;

  constructor() { }

  ngOnInit() {
    this.titulo = this.titulo.length > 7
      ? this.titulo.substr(0, 7) + '...'
      : this.titulo;
  }
}
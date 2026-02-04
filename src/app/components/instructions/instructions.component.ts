import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instructions',
  imports: [CommonModule],
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css'
})
export class InstructionsComponent {
  instructions = [
    {
      number: 1,
      text: 'Tocar no botão abaixo e entrar no grupo silencioso do Whatsapp.',
      bold: true
    },
    {
      number: 2,
      text: 'Acessar a Descrição do Grupo, tocando no nome do grupo no TOPO da conversa',
      underline: true
    },
    {
      number: 3,
      text: 'O Link para ver o PDF vai estar na Descrição do grupo.',
      italic: true
    }
  ];
}

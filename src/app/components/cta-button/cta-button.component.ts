import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  imports: [],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.css'
})
export class CtaButtonComponent {
  @Input() whatsappLink: string = '#';
  @Input() text: string = 'APERTE AQUI PARA ACESSAR O MATERIAL GRATUITO!';
}

import { Component } from '@angular/core';
import { SuccessHeaderComponent } from '../../components/success-header/success-header.component';
import { InstructionsComponent } from '../../components/instructions/instructions.component';
import { CtaButtonComponent } from '../../components/cta-button/cta-button.component';

@Component({
  selector: 'app-success',
  imports: [
    SuccessHeaderComponent,
    InstructionsComponent,
    CtaButtonComponent
  ],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {
  // URLs configuráveis - você pode alterar essas URLs conforme necessário
  whatsappLink = 'https://chat.whatsapp.com/SEU_LINK_AQUI';
}

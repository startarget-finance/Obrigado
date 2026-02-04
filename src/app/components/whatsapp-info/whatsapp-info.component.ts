import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-info',
  imports: [CommonModule],
  templateUrl: './whatsapp-info.component.html',
  styleUrl: './whatsapp-info.component.css'
})
export class WhatsAppInfoComponent {
  @Input() instagramLink: string = '#';
}

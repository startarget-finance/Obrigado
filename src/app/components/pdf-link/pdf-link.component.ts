import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-link',
  imports: [],
  templateUrl: './pdf-link.component.html',
  styleUrl: './pdf-link.component.css'
})
export class PdfLinkComponent {
  @Input() pdfUrl: string = '#';
  @Input() showWarning: boolean = true;
}

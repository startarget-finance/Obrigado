import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checklist',
  imports: [CommonModule],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent {
  items = [
    'Aplique o que for possível',
    'E fique no grupo para receber os convites das aulas ao vivo'
  ];
}

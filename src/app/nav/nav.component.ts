import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';     //Importerar CommonModule för att använda [ngClass] till hamburgarmenyn

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isMenuOpen = false;                     //Deklarerar isMenuOpen metoden för hamburgarmenyn

  toggleMenu() {                          // Deklarerar toggleMenu metoden för hamburgarmenyn
    this.isMenuOpen = !this.isMenuOpen;
  }

}

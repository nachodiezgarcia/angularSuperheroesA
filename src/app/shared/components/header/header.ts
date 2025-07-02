import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styles: `
    @media (max-width: 673px) {
      .menu {
         @apply flex-col;
         li{
            margin: 1rem 10px;
         }
      }
    }
  `
})
export class Header {

}

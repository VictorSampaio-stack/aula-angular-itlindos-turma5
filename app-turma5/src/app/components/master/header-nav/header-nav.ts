import { Component, input, InputSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-nav.html',
  styleUrl: './header-nav.scss',
})
export class HeaderNav {

  logoEmpresa: InputSignal<string> = input('')
  
}

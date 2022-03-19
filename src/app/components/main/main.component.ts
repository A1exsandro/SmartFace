import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userName: any = 'User'
  componentSelected: number = 0
  openUserPanel: boolean = false

  constructor(
    private router: Router,
    private auth: AuthenticationService
  ) {
    this.checkAuthUser()
  }

  ngOnInit(): void {
    this.displayComponents();
    this.selectUser();
    // this.goComponent(0); // REMOVE
  }

  logout() {
    // this.auth.logout()

    // Redireciona para a tela de login
    this.router.navigate(['/'])
  }

  checkAuthUser(): void {
    if (localStorage.getItem('firstName')?.trim() != '' && localStorage.getItem('firstName') != null)
      this.userName = localStorage.getItem('firstName')
    else if (localStorage.getItem('userName') != null)
      this.userName = localStorage.getItem('userName')

    if (this.userName.length > 12)
      this.userName = this.userName.substring(12, 0)
  }

  displayComponents(): void {
    let components = document.querySelector('section')?.childNodes
    let items = document.querySelectorAll('.list li')
    let self: MainComponent = this

    for (let i = 0; i < components!.length; i++) {
      (components![i] as HTMLElement).style.display = (i === this.componentSelected) ? 'block' : 'none'

      items[i].addEventListener('click', function(event) {
        if (i !== self.componentSelected) {
          (components![self.componentSelected] as HTMLElement).style.display = 'none';
          (items![self.componentSelected] as HTMLElement).classList.remove('selected');
          self.componentSelected = i;
          (components![i] as HTMLElement).style.display = 'block';
          (items![i] as HTMLElement).classList.add('selected');
        }
      })
    }
  }

  goComponent(number_component: number) {
    let components = document.querySelector('section')?.childNodes;
    let itens = document.querySelectorAll('.list li');

    (components![this.componentSelected] as HTMLElement).style.display = 'none';
    (itens![this.componentSelected] as HTMLElement).classList.remove('selected');
    this.componentSelected = number_component;
    (components![number_component] as HTMLElement).style.display = 'block';
    (itens![number_component] as HTMLElement).classList.add('selected');
  }

  selectUser(): void {
    let userAuthenticated = document.querySelector('.user-authenticated');
    let userPanel = document.querySelector('.user-panel');

    userAuthenticated.addEventListener('click', function (event) {
      if (!this.openUserPanel)
        (userPanel as HTMLElement).style.height = '32px';
      else
        (userPanel as HTMLElement).style.height = '0px';

      this.openUserPanel = !this.openUserPanel;
    })

    userAuthenticated.addEventListener('blur', function (event) {
      (userPanel as HTMLElement).style.height = '0px';
      this.openUserPanel = false;
    })
  }
}

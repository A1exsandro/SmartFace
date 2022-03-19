import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
// import { empty } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.runLogin();
  }

  runLogin() {
    let field = document.querySelectorAll('.login-field input');
    let b = document.querySelector('button')
    let self: LoginComponent = this

    // Faz login por ao clicar no botão 'Entrar'.
    b.addEventListener('click', function (event: any) {self.login(event)});

    // Faz login ao presionar a tecla Enter.
    field.forEach(function (item) {
      item.addEventListener('keypress', function (event: any) {
        if (event.key == 'Enter') {
          self.login(event)
        }
      });
    })
  }

  login(event: any): void {
    let field = document.querySelectorAll('.login-field input');
    // let b = document.querySelector('button')
    let flag = document.querySelector('.flag-field')
    let p = document.querySelector('.flag-field p')

    let self: LoginComponent = this

    // Obtem os valores de username e password inseridos.
    let username = (field[0] as HTMLInputElement).value.trim(); // username
    let password = (field[1] as HTMLInputElement).value;        // password

    // Desmarca o contorno do campo vazio ao clicar nos campos.
    for (let i = 0; i < field.length; i++) {
      field[i].addEventListener('click', function (event) {
        (field[0] as HTMLInputElement).style.borderColor = '#2e3439';
        (field[1] as HTMLInputElement).style.borderColor = '#2e3439';
      })
    }

    // Verifica se o username não está vazio
    if (username != '') {
      if (password != '') {
        if (username == 'Jailson' && password == '123') {
          // console.log('user authenticated');
          // Redireciona para o painel principal
          self.router.navigate(['/main'])
        }
        else {
          // console.log('fail authenticated');
          (p as HTMLElement).textContent = 'Usuário ou senha inválidos!';
          (p as HTMLElement).style.left = '0px';
          (flag as HTMLElement).style.height = '19px';
          (flag as HTMLElement).style.marginBottom = '38px';
        }
      }
      else {
        // console.log('password empty');
        (field[1] as HTMLInputElement).style.borderColor = '#fff';
        (p as HTMLElement).textContent = 'Campo de senha vazio!';
        (p as HTMLElement).style.left = '0px';
        (flag as HTMLElement).style.height = '19px';
        (flag as HTMLElement).style.marginBottom = '38px';
      }
    }
    else {
      // console.log('username empty');
      (field[0] as HTMLInputElement).style.borderColor = '#fff';
      (p as HTMLElement).textContent = 'Campo de usuário vazio!';
      (p as HTMLElement).style.left = '0px';
      (flag as HTMLElement).style.height = '19px';
      (flag as HTMLElement).style.marginBottom = '38px';
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  componentSelected: number = 0
  openReleasesStatusSelect: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.displayComponents()
    this.selectReleasesStatus()
    this.openSelectReleasesStatus()
  }

  displayComponents(): void {
    let components = document.querySelectorAll('.section-system')
    let items = document.querySelectorAll('.ul-system li')
    let self: SystemComponent = this

    for (let i = 0; i < components!.length; i++) {
      items[i].addEventListener('click', function (event) {
        if (i !== self.componentSelected) {
          (components![self.componentSelected] as HTMLElement).style.display = 'none';
          (items![self.componentSelected] as HTMLElement).classList.remove('selected');

          // Muda o status para a aba atual
          self.componentSelected = i;

          (components![i] as HTMLElement).style.display = 'block';
          (items![i] as HTMLElement).classList.add('selected')
        }
      })
    }
  }

  selectReleasesStatus(): void {
    let items = document.querySelectorAll('.releases-status-select-panel ul li')
    let layoutNameSelected = document.querySelector('.releases-status-name span')

    items.forEach(function (item) {
      item.addEventListener("click", function (event) {
        layoutNameSelected.textContent = item.textContent
      })
    })
  }

  openSelectReleasesStatus(): void {
    let layoutBox = document.querySelector('.releases-status-box');
    let layoutSelectPanel = document.querySelector('.releases-status-select-panel');
    let items = document.querySelectorAll('.releases-status-select-panel ul li');

    layoutBox.addEventListener('click', function (event) {
      if (!this.openLayoutPanel)
        (layoutSelectPanel as HTMLElement).style.height = (items.length * 32).toString() + 'px';
      else
        (layoutSelectPanel as HTMLElement).style.height = '0px';

      this.openLayoutPanel = !this.openLayoutPanel;
    })

    layoutBox.addEventListener('blur', function (event) {
      (layoutSelectPanel as HTMLElement).style.height = '0px';
      this.openLayoutPanel = false;
    })
  }

}

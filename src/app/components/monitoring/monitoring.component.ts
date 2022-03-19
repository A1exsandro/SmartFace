import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {
  openLayoutPanel: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.selectLayout()
    this.openSelectLayout()
  }

  selectLayout(): void {
    let items = document.querySelectorAll('.layout-select-panel ul li')
    let layoutNameSelected = document.querySelector('.layout-name span')
    // let self: MonitoringComponent = this

    items.forEach(function (item) {
      item.addEventListener("click", function (event) {
        layoutNameSelected.textContent = item.textContent
      })
    })
  }

  openSelectLayout(): void {
    let layoutBox = document.querySelector('.layout-box');
    let layoutSelectPanel = document.querySelector('.layout-select-panel');

    layoutBox.addEventListener('click', function (event) {
      if (!this.openLayoutPanel)
        (layoutSelectPanel as HTMLElement).style.height = '96px';
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  componentSelected: number = 0
  openOtherSettingsSelect: boolean = false
  notificationTabSelected: number = 0

  constructor() { }

  ngOnInit(): void {
    this.displayComponents()
    this.selectOtherSettings()
    this.openSelectOtherSettings()
    this.displayNotificationTab()
  }

  displayComponents(): void {
    let components = document.querySelectorAll('.section-settings')
    let items = document.querySelectorAll('.ul-settings li')
    let self: SettingsComponent = this

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

  displayNewModule(): void {
    let button = document.querySelector('.new-module');
    let tag = document.querySelector('.modules-actived');
    let container = document.querySelector('.new-module-container');
    let self: SettingsComponent = this;

    (button as HTMLElement).style.display = 'none';
    (tag as HTMLElement).style.display = 'none';
    (container as HTMLElement).style.display = 'block';
  }

  closeNewModule(): void {
    let button = document.querySelector('.new-module');
    let tag = document.querySelector('.modules-actived');
    let container = document.querySelector('.new-module-container');
    let self: SettingsComponent = this;

    (container as HTMLElement).style.display = 'none';
    (button as HTMLElement).style.display = 'block';
    (tag as HTMLElement).style.display = 'block';
  }

  displayNewCamera(): void {
    let button = document.querySelector('.new-camera');
    let tag = document.querySelector('.cameras-list');
    let listCameras = document.querySelector('.cameras-list-container');
    let container = document.querySelector('.new-camera-container');
    let self: SettingsComponent = this;

    (button as HTMLElement).style.display = 'none';
    (tag as HTMLElement).style.display = 'none';
    (listCameras as HTMLElement).style.display = 'none';
    (container as HTMLElement).style.display = 'block';
  }

  closeNewCamera(): void {
    let button = document.querySelector('.new-camera');
    let tag = document.querySelector('.cameras-list');
    let listCameras = document.querySelector('.cameras-list-container');
    let container = document.querySelector('.new-camera-container');
    let self: SettingsComponent = this;

    (container as HTMLElement).style.display = 'none';
    (button as HTMLElement).style.display = 'block';
    (tag as HTMLElement).style.display = 'block';
    (listCameras as HTMLElement).style.display = 'block';
  }

  selectOtherSettings(): void {
    let items = document.querySelectorAll('.other-settings-select-panel ul li')
    let layoutNameSelected = document.querySelector('.other-settings-name span')

    items.forEach(function (item) {
      item.addEventListener("click", function (event) {
        layoutNameSelected.textContent = item.textContent
      })
    })
  }

  openSelectOtherSettings(): void {
    let layoutBox = document.querySelector('.other-settings-box');
    let layoutSelectPanel = document.querySelector('.other-settings-select-panel');
    let items = document.querySelectorAll('.other-settings-select-panel ul li');

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

  displayNotificationTab(): void {
    let items = document.querySelectorAll('.section-notifications .tab');
    let containers = document.querySelectorAll('.notification-container');
    let self: SettingsComponent = this;

    for (let i = 0; i < containers!.length; i++) {
      items[i].addEventListener('click', function (event) {
        if (i !== self.notificationTabSelected) {
          (containers![self.notificationTabSelected] as HTMLElement).style.display = 'none';
          (items![self.notificationTabSelected] as HTMLElement).classList.remove('tab-selected');
          self.notificationTabSelected = i;

          (containers![i] as HTMLElement).style.display = 'block';
          (items![i] as HTMLElement).classList.add('tab-selected');
        }
      })
    }
  }
}

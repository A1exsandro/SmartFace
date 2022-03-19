import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderList();
  }

  renderList(): void {
    let button = document.querySelector(".list-plain")
    let span = document.querySelector(".list-plain div span")
    let ul = document.querySelector(".list-plain ul")
    let li = document.querySelectorAll(".list-plain ul li")

    let list_height = li.length * 32
    let checked = false

    button.addEventListener("click", function (event) {
      if (!checked)
          (ul as HTMLElement).style.height = list_height + "px"
      else
        (ul as HTMLElement).style.height = "0px"

      checked = !checked
    })

    li.forEach(function (item) {
      item.addEventListener("click", function (event) {
        console.log(item.textContent);
        (span as HTMLElement).textContent = item.textContent;
      })
    })

    button.addEventListener("blur", function (event) {
      (ul as HTMLElement).style.height = "0px"
      checked = false
    })
  }

}

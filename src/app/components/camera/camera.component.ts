import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  constructor() { }

  @Input() cameraName: string;
  @Input() accessCount: string;

  ngOnInit(): void {
  }

}

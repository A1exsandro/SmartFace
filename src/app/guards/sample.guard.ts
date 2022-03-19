import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class SampleGuard implements CanActivate {
  canActivate() {
    //if (localStorage.getItem('authToken')?.trim() == '' || localStorage.getItem('authToken') == null)
      //return false
    //else
      //return true;
    return true;
  }
}

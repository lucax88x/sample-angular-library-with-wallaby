import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestLibService {
  constructor() {}

  getTest() {
    return 'my-string';
  }
}

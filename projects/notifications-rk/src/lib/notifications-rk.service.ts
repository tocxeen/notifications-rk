import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationsRkService {
  showContent = false;
  data: any = [];

  constructor() {}

  show() {
    this.showContent = true;
  }

  remove(id: number) {
    this.data.forEach((res: any, index: number) => {
      if (res.id === id) this.data.splice(index, 1);
    });
  }
}

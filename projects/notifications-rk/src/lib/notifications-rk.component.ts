import { Component } from '@angular/core';
import { NotificationsRkService } from './notifications-rk.service';
import { NotificationsRkLogic } from './notifications-rk-logic';
import notificationId from './models/notification-rk-id';

@Component({
  selector: 'lib-notifications-rk',
  templateUrl: './notifications-rk.component.html',
  styleUrls: ['./notifications-rk.component.css'],
})
export class NotificationsRkComponent extends NotificationsRkLogic {
  private id: string;

  constructor(public notificationServiceRk: NotificationsRkService) {
    super();
    this.id = '';
  }

  show(message: string, type: string, position?: string) {
    let data = {
      message: message,
      type: type,
      position: position ? position : 'top-right',
      id: notificationId(),
    };
    this.notificationServiceRk.data.push(data);
    this.notificationServiceRk.show();
  }
}

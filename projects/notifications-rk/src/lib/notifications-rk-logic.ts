export class NotificationsRkLogic {
  protected notification = [
    {
      background: '#F7FEFE',
      color1: '#0070e1',
      color2: '#14abfe',
      type: 'info',
    },
    {
      background: '#FEFBF7',
      color1: '#FFBD00',
      color2: '#E8C55F',
      type: 'warning',
    },
    {
      background: '#F8FEF7',
      color1: '#21B83D',
      color2: '#66DB7B',
      type: 'success',
    },
    {
      background: '#FEF7F7',
      color1: '#FF0000',
      color2: '#E85F5F',
      type: 'error',
    },
  ];

  protected getColor(type: string) {
    let notificationData = this.notification[0];
    this.notification.forEach((data) => {
      if (data.type == type) {
        notificationData = data;
      }
    });
    return 'color:' + notificationData.color1;
  }

  protected getBackgroundColor(type: string) {
    let notificationData = this.notification[0];
    this.notification.forEach((data) => {
      if (data.type == type) {
        notificationData = data;
      }
    });
    return `background-image: linear-gradient(45deg, ${notificationData.color1}, ${notificationData.color2});`;
  }

  protected getBackground(type: string) {
    let notificationData = this.notification[0];
    this.notification.forEach((data) => {
      if (data.type == type) {
        notificationData = data;
      }
    });
    return `background-color: ${notificationData.background}`;
  }
}

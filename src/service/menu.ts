import { app, Menu, MenuItemConstructorOptions, MenuItem } from 'electron';

export class AppMenu {
  private _menu: Menu;

  constructor() {
    this.menu = [
      {
        id: 'app',
        label: app.getName(),
        submenu: [
          {
            id: 'about',
            label: 'About',
            role: 'about',
          },
          {
            id: 'exit',
            role: 'quit',
          },
        ],
      },
    ];
  }

  public set menu(template: Array<MenuItemConstructorOptions | MenuItem>) {
    this._menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(this._menu);
  }
}

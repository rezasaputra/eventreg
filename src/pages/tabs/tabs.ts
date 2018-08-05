import { Component } from '@angular/core';

import { InfoPage } from '../info/info';
import { TiketPage } from '../tiket/tiket';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TiketPage;
  tab3Root = InfoPage;

  constructor() {

  }
}

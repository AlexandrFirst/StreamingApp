import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MainViewRoutes } from './mainView.routing';
import { MainViewComponent } from '../mainViewPages/mainView/mainView.component';
import { RoomListComponent } from '../mainViewPages/roomList/roomList.component';

@NgModule({
  declarations: [
    MainViewComponent,
    RoomListComponent,
  ],
  imports: [
    MainViewRoutes
  ],
  exports: [
    RouterModule
  ]

})
export class MainViewModule { }

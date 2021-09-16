import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from '../mainViewPages/mainView/mainView.component';
import { RoomListComponent } from '../mainViewPages/roomList/roomList.component';

const routes: Routes = [
  {
    path: 'room/:roomId',
    component: MainViewComponent
  },
  {
    path: 'room',
    component: RoomListComponent
  },
  {
    path: '',
    redirectTo: '/login'
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

export const MainViewRoutes = RouterModule.forChild(routes);

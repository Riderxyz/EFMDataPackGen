import { HomePage } from './pages/home/home.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

/*   {
    path: 'landing/:tokenChamada',
    component: LandingPage,
  }, */
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
/*   {
    path: 'photo',
    component: PhotoPage,
  },
  {
    path: 'callPage',
    component: CallPage,
  },
 */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

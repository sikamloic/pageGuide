import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TressesAfricainesComponent } from './pages/tresses-africaines/tresses-africaines.component';
import { VanillesComponent } from './pages/vanilles/vanilles.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'Comment-faire-des-tresses-africaines', component: TressesAfricainesComponent},
  {path:'Comment-faire-des-vanilles', component:VanillesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

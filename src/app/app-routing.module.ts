import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BraidsComponent } from './pages/braids/braids.component';
import { CrochetsBraidsComponent } from './pages/crochets-braids/crochets-braids.component';
import { FulaniBraidsComponent } from './pages/fulani-braids/fulani-braids.component';
import { HomeComponent } from './pages/home/home.component';
import { KnotlessBraidsComponent } from './pages/knotless-braids/knotless-braids.component';
import { LemonadeBraidsComponent } from './pages/lemonade-braids/lemonade-braids.component';
import { TressesAfricainesComponent } from './pages/tresses-africaines/tresses-africaines.component';
import { VanillesComponent } from './pages/vanilles/vanilles.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'Comment-faire-des-tresses-africaines', component: TressesAfricainesComponent},
  {path:'Comment-faire-des-vanilles', component:VanillesComponent},
  {path:'Comment-faire-des-braids', component:BraidsComponent},
  {path:'Comment-faire-des-lemonade-braids', component:LemonadeBraidsComponent},
  {path: 'Comment-faire-des-knotless-braids', component:KnotlessBraidsComponent},
  {path:'Comment-faire-des-crochets-braids', component:CrochetsBraidsComponent},
  {path:'Comment-faire-des-fulani-braids', component:FulaniBraidsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './shares/materials/materials.module';
import { HeaderComponent } from './shares/components/header/header.component';
import { FooterComponent } from './shares/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TressesAfricainesComponent } from './pages/tresses-africaines/tresses-africaines.component';
import { VanillesComponent } from './pages/vanilles/vanilles.component';
import { BraidsComponent } from './pages/braids/braids.component';
import { LemonadeBraidsComponent } from './pages/lemonade-braids/lemonade-braids.component';
import { KnotlessBraidsComponent } from './pages/knotless-braids/knotless-braids.component';
import { CrochetsBraidsComponent } from './pages/crochets-braids/crochets-braids.component';
import { FulaniBraidsComponent } from './pages/fulani-braids/fulani-braids.component';
import { SenegalaiseTwistComponent } from './pages/senegalaise-twist/senegalaise-twist.component';
import { CornrowsComponent } from './pages/cornrows/cornrows.component';
import { FaussesLocksComponent } from './pages/fausses-locks/fausses-locks.component';
import { BantuKnotsComponent } from './pages/bantu-knots/bantu-knots.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TressesAfricainesComponent,
    VanillesComponent,
    BraidsComponent,
    LemonadeBraidsComponent,
    KnotlessBraidsComponent,
    CrochetsBraidsComponent,
    FulaniBraidsComponent,
    SenegalaiseTwistComponent,
    CornrowsComponent,
    FaussesLocksComponent,
    BantuKnotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

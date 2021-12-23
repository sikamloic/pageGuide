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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TressesAfricainesComponent,
    VanillesComponent
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

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './commn/navbar/navbar.component';
import { FooterComponent } from './commn/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ClientComponent } from './pages/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    PortfolioComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

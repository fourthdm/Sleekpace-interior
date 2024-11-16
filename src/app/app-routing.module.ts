import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ClientComponent } from './pages/client/client.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'client', component: ClientComponent },
  // { path: 'Commercial', component: CommercialComponent },
  { path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

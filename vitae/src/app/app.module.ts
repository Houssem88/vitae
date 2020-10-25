import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BioComponent } from './routes/bio/bio.component';
import { CvComponent } from './routes/cv/cv.component';
import { LinksComponent } from './routes/links/links.component';
import { HomeComponent } from './routes/home/home.component';

@NgModule({
  declarations: [AppComponent, BioComponent, CvComponent, LinksComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

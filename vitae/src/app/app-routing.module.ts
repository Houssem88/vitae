import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './routes/bio/bio.component';
import { CvComponent } from './routes/cv/cv.component';
import { HomeComponent } from './routes/home/home.component';
import { LinksComponent } from './routes/links/links.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bio', component: BioComponent },
  { path: 'cv', component: CvComponent },
  { path: 'links', component: LinksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

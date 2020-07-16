import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { StatusComponent } from './status/status.component';
import { RssComponent } from './rss/rss.component';
 
const routes: Routes = [{
  path: 'contact',
  component: ContactComponent
},{
  path: '',
  component: MainComponent
},{
  path: 'status',
  component: StatusComponent
},{
  path: 'rss',
  component: RssComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

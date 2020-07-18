import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { StatusComponent } from './status/status.component';
import { RssComponent } from './rss/rss.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { BooksComponent } from './books/books.component';
import { AudioComponent } from './audio/audio.component';
import { PcComponent } from './pc/pc.component';
import { ConsoleComponent } from './console/console.component';
import { XxxComponent } from './xxx/xxx.component';
import { SettingsComponent } from './settings/settings.component';

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
},{
  path: 'tv',
  component: TvComponent
},{
  path: 'movies',
  component: MoviesComponent
},{
  path: 'books',
  component: BooksComponent
},{
  path: 'audio',
  component: AudioComponent
},{
  path: 'pc',
  component: PcComponent
},{
  path: 'console',
  component: ConsoleComponent
},{
  path: 'xxx',
  component: XxxComponent
},{
  path: 'settings',
  component: SettingsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

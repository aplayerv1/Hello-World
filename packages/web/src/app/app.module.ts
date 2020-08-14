import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RssComponent } from './rss/rss.component';
import { StatusComponent } from './status/status.component';
import { SanitizeHtmlPipe } from './pipe/sanitize-html.pipe';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { SettingsComponent } from './settings/settings.component';
import { BooksComponent } from './books/books.component';
import { AudioComponent } from './audio/audio.component';
import { PcComponent } from './pc/pc.component';
import { ConsoleComponent } from './console/console.component';
import { XxxComponent } from './xxx/xxx.component';
import { ForumsComponent } from './forums/forums.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MainComponent,
    ToolbarComponent,
    StatusComponent,
    RssComponent,
    SanitizeHtmlPipe,
    TvComponent,
    MoviesComponent,
    SettingsComponent,
    BooksComponent,
    AudioComponent,
    PcComponent,
    ConsoleComponent,
    XxxComponent,
    ForumsComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

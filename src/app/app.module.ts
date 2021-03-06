import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FlickrService} from './services/flickr.service';
import {HttpClientModule} from '@angular/common/http';
import {LoaderComponent} from './components/loader/loader.component';

import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {FormsModule} from '@angular/forms';

import {TagInputModule} from 'ngx-chips';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GalleryComponent} from './components/gallery/gallery.component';
import {LocalStorageService} from './services/local-storage.service';
import {SearchHistoryService} from './services/search-history.service';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {ImageSearchComponent} from './components/image-search/image-search.component';
import {AlertService} from './services/alert.service';
import {AlertComponent} from './components/alert/alert.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    GalleryComponent,
    NavBarComponent,
    ImageSearchComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    BrowserAnimationsModule,
    TagInputModule,
    ModalModule.forRoot()
  ],
  providers: [
    FlickrService,
    LocalStorageService,
    SearchHistoryService,
    AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { ShowDetailsComponent } from './show-details/show-details.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowInfoComponent } from './show-info/show-info.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HeightFilterPipe } from './shared/height-filter.pipe';
import { HomeWorldNamePipe } from './shared/home-world-name.pipe';
import { LenghtFilterPipe } from './shared/lenght-filter.pipe';
import { SearchFilterPipe } from './shared/search-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CharactersPipe } from './shared/characters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowInfoComponent,
    HeightFilterPipe,
    HomeWorldNamePipe,
    LenghtFilterPipe,
    SearchFilterPipe,
    ShowDetailsComponent,
    CharactersPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

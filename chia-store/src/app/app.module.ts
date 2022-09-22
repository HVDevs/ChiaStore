import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeExampleComponent } from './components/example/home-example/home-example.component';
import { HeaderExampleComponent } from './components/example/header-example/header-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeExampleComponent,
    HeaderExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

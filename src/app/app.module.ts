import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { WelcomeService } from './welcome.service';
import { StreamComponent } from './stream.component';
import { StreamService } from './stream.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StreamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WelcomeService, StreamService],
  bootstrap: [AppComponent]
})
export class AppModule { }

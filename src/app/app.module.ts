import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OsobyService } from './osoby.service';
import { AppRoutingModule } from './app-routing.module';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component'

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [OsobyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

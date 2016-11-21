import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';



import { AppComponent }         from './app.component';
//import { CountryService }          from './country.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule  
  ],
  declarations: [
    //AppComponent sample app component
  ],
  providers: [
    //CountryService  sample service
  ],
  bootstrap: [
    //AppComponent sample app component
  ]
})
export class AppModule {
}


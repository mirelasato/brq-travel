import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopoComponent } from './topo/topo.component';
<<<<<<< HEAD
import { RodapeComponent } from './rodape/rodape.component';
=======
import { FormComponent } from './form/form.component';
>>>>>>> 7290147cdc678b1dcb7768dbb158db2df53e3359


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopoComponent,
<<<<<<< HEAD
    RodapeComponent,
    
=======
    FormComponent,
>>>>>>> 7290147cdc678b1dcb7768dbb158db2df53e3359
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

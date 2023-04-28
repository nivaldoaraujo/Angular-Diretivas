import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivasComponent } from './componentes/diretivas/diretivas.component';
import { FormsModule } from '@angular/forms';
import { DiretivaListComponent } from './componentes/diretiva-list/diretiva-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasComponent,
    DiretivaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

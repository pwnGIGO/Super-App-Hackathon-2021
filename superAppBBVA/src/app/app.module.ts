import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ComponentesModule } from './componentes/componentes.module';
import { HttpService } from './servicios/http.service';
import { HttpClientModule } from '@angular/common/http';

/* PARA CARGAR IMAGENES, TOMAR FOTOS */
import { Camera } from "@ionic-native/camera";
import { File } from "@ionic-native/file";
import { FileTransfer } from "@ionic-native/file-transfer";
import { ImagePicker } from "@ionic-native/image-picker";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentesModule,
    HttpClientModule
  ],
  providers: 
  [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpService,
    /*Camera,
    File,
    FileTransfer,
    ImagePicker,*/
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
import { SQLite } from '@ionic-native/sqlite/ngx';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
import { WebView } from '@ionic-native/ionic-webview/ngx'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SQLite,Camera,WebView,Geolocation],
  bootstrap: [AppComponent],
})
export class AppModule {}

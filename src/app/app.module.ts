import { environment } from './../environments/environment';
import { PrimeNGModule } from './primeNg.module';
import { HttpClientModule } from '@angular/common/http';
import { CdkModule } from './cdk.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import {
  AngularFireAnalyticsModule,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/compat/analytics';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomePage } from './pages/home/home.page';

import { ToastComponent } from './components/toast/toast.component';
import { HeaderComponent } from './components/header/header.component';

const Forms = [ReactiveFormsModule, FormsModule];
const AngularFire = [
  AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule,
  AngularFireStorageModule,
  AngularFireMessagingModule,
  AngularFireFunctionsModule,
  AngularFireAnalyticsModule,
];
@NgModule({
  declarations: [AppComponent, HomePage, ToastComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CdkModule,
    PrimeNGModule,
    ...Forms,
    ...AngularFire,
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}

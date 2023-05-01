import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { ToastService } from './toast.service';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import * as uuid from 'uuid-random';
import { Geolocation } from '@capacitor/geolocation';
@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(
    private db: AngularFirestore,
    private http: HttpClient,
    private toastSrv: ToastService,
    private route: Router,
  ) {

  }



  resetApp() {
    window.location.href = window.location.href.replace(/#.*$/, '');
  }


}

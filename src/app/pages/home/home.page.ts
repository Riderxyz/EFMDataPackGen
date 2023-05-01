import { config } from './../../services/config';

import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import {
  bounceInRightOnEnterAnimation,
  bounceOutLeftOnLeaveAnimation,
  flipInXOnEnterAnimation,
} from 'angular-animations';
import { delay } from 'rxjs/operators';
import { ToastService } from 'src/app/services/toast.service';
import { newWeaponProperties, weaponProperties } from 'src/app/models/weaponProperties.interface';
import { WeaponType } from 'src/app/models/weaponType.enum';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    flipInXOnEnterAnimation({
      anchor: 'fotoAceita',
    }),
    bounceInRightOnEnterAnimation(),
    bounceOutLeftOnLeaveAnimation(),
  ],
})
export class HomePage implements OnInit {
  weaponFormValue: weaponProperties = newWeaponProperties();
  weaponTypesOptions = Object.values(WeaponType);
  infoModals = {
    weapon_id: false,
    type: false,
    attributes: false,
    common: false,
    one_hand: false,
    two_hand: false,
    armor_negation: false,
    impact: false,
    max_strikes: false,
    damage_bonus: false,
    speed_bonus: false,
  }
   constructor(
    public dataSrv: DataService,
    private routeNav: Router,
    private route: ActivatedRoute,
    private afStorage: AngularFireStorage,
    private toastSrv: ToastService
  ) {}

  ngOnInit(): void {
    console.log(this.weaponTypesOptions);

  }


}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiNavbar } from './fi-navbar';

@NgModule({
  declarations: [
    FiNavbar,
  ],
  imports: [
    IonicPageModule.forChild(FiNavbar),
  ],
  exports: [
    FiNavbar
  ]
})
export class FiNavbarModule {}

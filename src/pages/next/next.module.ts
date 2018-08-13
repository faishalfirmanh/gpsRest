import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NextPage } from './next';
import {HomePage } from '../home/home';

@NgModule({
  declarations: [
    NextPage,
  ],
  imports: [
    IonicPageModule.forChild(NextPage),
  ],
})
export class NextPageModule {}

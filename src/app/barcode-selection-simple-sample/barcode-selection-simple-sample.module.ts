import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodeSelectionSimpleSamplePageRoutingModule } from './barcode-selection-simple-sample-routing.module';

import { BarcodeSelectionSimpleSamplePage } from './barcode-selection-simple-sample.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodeSelectionSimpleSamplePageRoutingModule
  ],
  declarations: [BarcodeSelectionSimpleSamplePage]
})
export class BarcodeSelectionSimpleSamplePageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcodeSelectionSimpleSamplePage } from './barcode-selection-simple-sample.page';

const routes: Routes = [
  {
    path: '',
    component: BarcodeSelectionSimpleSamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarcodeSelectionSimpleSamplePageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';
import { ScanditGuard } from '../scandit.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'full-screen',
    loadChildren: () => import('../full-screen/full-screen.module').then( m => m.FullScreenPageModule)
  },
  {
    path: 'split-screen',
    loadChildren: () => import('../split-screen/split-screen.module').then( m => m.SplitScreenPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('../modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('../scan/scan.module').then(m => m.ScanPageModule),
    canActivate: [ScanditGuard],
  },
  {
    path: 'barcode-selection-simple-sample',
    loadChildren: () => import('../barcode-selection-simple-sample/barcode-selection-simple-sample.module').then( m => m.BarcodeSelectionSimpleSamplePageModule),
    canActivate: [ScanditGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

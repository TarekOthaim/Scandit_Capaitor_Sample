import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { AlertController, ViewDidEnter, ViewWillLeave } from '@ionic/angular';
import { environment } from 'src/environments/environment';

declare var Scandit;
declare var window: any;

@Component({
  selector: 'app-barcode-selection-simple-sample',
  templateUrl: './barcode-selection-simple-sample.page.html',
  styleUrls: ['./barcode-selection-simple-sample.page.scss'],
})
export class BarcodeSelectionSimpleSamplePage implements AfterViewInit, ViewDidEnter, ViewWillLeave, OnDestroy {
  private context = Scandit.DataCaptureContext.forLicenseKey(environment.scanditLicenseKey);
  private camera = Scandit.Camera.default;

  private settings = new Scandit.BarcodeCaptureSettings();
  private barcodeSelection = Scandit.BarcodeSelection.forContext(this.context, this.settings);

  private captureView = Scandit.DataCaptureView.forContext(this.context);
  @ViewChild('captureView') captureViewElement: ElementRef<HTMLDivElement>;
  @ViewChild('ButtonsView') ButtonsViewElement: ElementRef<HTMLDivElement>;

  private overlay = Scandit.BarcodeSelectionBasicOverlay.withBarcodeSelectionForView(this.barcodeSelection, this.captureView);

  public isCaptureViewConnected = false;

  constructor(
    private alertController: AlertController,
    private ngZone: NgZone
  ) { }

  ngAfterViewInit() {
    this.settings.enableSymbologies([
      Scandit.Symbology.EAN13UPCA,
      Scandit.Symbology.EAN8,
      Scandit.Symbology.UPCE,
      Scandit.Symbology.QR,
      Scandit.Symbology.DataMatrix,
      Scandit.Symbology.Code39,
      Scandit.Symbology.Code128,
      Scandit.Symbology.InterleavedTwoOfFive,
    ]);
    this.settings.codeDuplicateFilter = 1000;
    this.barcodeSelection.applySettings(this.settings);

    this.barcodeSelection.addListener({
      didUpdateSelection: async (barcodeSelection, session, _) => {

        const barcode = session.newlySelectedBarcodes[0];

        console.log('barcode.data = '+barcode.data);
        if (!barcode) { return }
        const symbology = new Scandit.SymbologyDescription(barcode.symbology);

        this.captureViewElement.nativeElement.style.zIndex = '-1';
        this.barcodeSelection.isEnabled = false;
        session.getCount(barcode).then(count => {

          console.log('session.getCount', symbology, barcode);
          // showResult(`Scan Results<br>${symbology.readableName}: ${barcode.data}<br>Times: ${count}`);

            this.showResult(symbology);

        });

      }
    });

    this.context.setFrameSource(this.camera);
    this.camera.switchToDesiredState(Scandit.FrameSourceState.On);
    this.toggleBarcodeSelectionType(true);
  }

  ionViewDidEnter(): void {
    this.captureView.connectToElement(this.captureViewElement.nativeElement);
    this.isCaptureViewConnected = true;

    this.barcodeSelection.isEnabled = true;
  }

  ionViewWillLeave(): void {
    this.captureView.detachFromElement();
    this.isCaptureViewConnected = false;

    this.camera.switchToDesiredState(Scandit.FrameSourceState.Off);
    this.barcodeSelection.isEnabled = false;
  }

  ngOnDestroy() {
    this.context.dispose();
  }



  showResult(result) {
    if (document.querySelector('#result')) {
      document.querySelector('#result').parentElement.removeChild(document.querySelector('#result'));
    }

    const resultElement = document.createElement('div');
    resultElement.id = "result";
    // resultElement.classList = "result";
    resultElement.innerHTML = `<p>${result}</p>`;
    document.querySelector('.divFull').appendChild(resultElement);
    this.captureViewElement.nativeElement.style.zIndex = '-1';

    clearTimeout(window.timeout);
    window.timeout = setTimeout(window.continueScanning, 500);
  }

  toggleBarcodeSelectionType(forceIsTapSelection) {

    console.log('forceIsTapSelection = ' + forceIsTapSelection);

    if (forceIsTapSelection === true || this.settings.selectionType instanceof Scandit.BarcodeSelectionAimerSelection) {
      
      
      document.getElementById('tapToSelect').className = 'selected';
      document.getElementById('aimToSelect').className = '';
      this.settings.selectionType = Scandit.BarcodeSelectionTapSelection.tapSelection;
      this.barcodeSelection.applySettings(this.settings);
    } else {
      document.getElementById('tapToSelect').className = '';
      document.getElementById('aimToSelect').className = 'selected';
      this.settings.selectionType = Scandit.BarcodeSelectionAimerSelection.aimerSelection;
      this.barcodeSelection.applySettings(this.settings);


    }
  }


}

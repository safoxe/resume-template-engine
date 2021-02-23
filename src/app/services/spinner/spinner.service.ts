import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { InternalSpinner, Spinner } from './internal-spinner';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Injectable({ providedIn: 'root' })
export class SpinnerService {
  private spinnerRef: InternalSpinner;

  private configs: OverlayConfig = new OverlayConfig({
    scrollStrategy: this.overlay.scrollStrategies.block(),
    positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    backdropClass: 'spinner-backdrop',
    hasBackdrop: true,
  });

  constructor(private overlay: Overlay) {}

  show(): Spinner {
    if (this.spinnerRef) {
      this.spinnerRef.add();
    } else {
      const overlayRef = this.overlay.create(this.configs);
      const portal = new ComponentPortal(SpinnerComponent);
      overlayRef.attach(portal);

      this.spinnerRef = new InternalSpinner(overlayRef);
      this.spinnerRef.afterDisposed().subscribe(() => {
        this.spinnerRef = null;
      });
    }

    return this.spinnerRef;
  }
}

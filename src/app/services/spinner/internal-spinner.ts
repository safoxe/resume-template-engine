import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';

export interface Spinner {
  hide(): void;
}
export class InternalSpinner implements Spinner {
  private counter = 1;

  private disposedSubject: Subject<void> = new Subject<void>();

  constructor(private overlayRef: OverlayRef) {}

  hide(): void {
    this.counter -= 1;
    if (this.counter === 0) {
      this.overlayRef.dispose();
      this.disposedSubject.next();
    }
  }

  add(): void {
    this.counter += 1;
  }

  afterDisposed(): Observable<void> {
    return this.disposedSubject.asObservable();
  }
}

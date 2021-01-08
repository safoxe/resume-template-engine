import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {
  openPageAsPopup(pageUrl: string, projectName: string): void {
    const winFeatures = 'screenX=0,screenY=0,top=0,left=0,scrollbars,width=100,height=100';
    const winName = 'window';
    const win = window.open(`${pageUrl}?project=${projectName}`, winName, winFeatures);
    const extraWidth = win.screen.availWidth - win.outerWidth;
    const extraHeight = win.screen.availHeight - win.outerHeight;
    win.resizeBy(extraWidth, extraHeight);
  }
}

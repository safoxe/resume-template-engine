import { Inject, Injectable } from '@angular/core';
import { WINDOW_OBJ } from '../window/window.service';

export enum LocalStorageItems {
  gapiToken = 'gapiToken',
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(WINDOW_OBJ) private window: Window) {}

  private localStorage = this.window.localStorage;

  setItem(key: string, value: string): void {
    this.localStorage.setItem(key, value);
  }

  getItem(key: string): string {
    return this.localStorage.getItem(key);
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }
}

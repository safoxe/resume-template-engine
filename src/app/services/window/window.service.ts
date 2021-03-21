import { Injectable, InjectionToken } from '@angular/core';

export const WINDOW_OBJ = new InjectionToken('Window object', {
  providedIn: 'root',
  factory: () => window,
});

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResumeCoverService {
  updateResumeCoverPath = new BehaviorSubject<string>('/assets/cover-1.png');
}

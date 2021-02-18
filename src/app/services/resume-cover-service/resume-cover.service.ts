import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class ResumeCoverService {
  updateResumeCoverPath = new Subject<string>();
}

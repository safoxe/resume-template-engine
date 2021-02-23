import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PopUpService } from 'src/app/services/pop-up-service/pop-up.service';
import { environment } from 'src/environments/environment';
import { ResumeDataService } from 'src/app/services/resume-data/resume-data.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { timeout } from 'rxjs/operators';
import { PositionId, positionIds, PositionName, positions } from './types/position.type';
import {
  SeniorityId,
  seniorityIds,
  SeniorityName,
  seniorityTypes,
} from './types/seniority-level.type';
import { Resume } from './types/resume-data.type';

@Component({
  selector: 'app-scaffold-menu',
  templateUrl: './scaffold-menu.component.html',
  styleUrls: ['./scaffold-menu.component.css'],
})
export class ScaffoldMenuComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private popUpService: PopUpService,
    private resumeDataService: ResumeDataService,
    private spinner: SpinnerService,
  ) {}

  resumeForm = this.formBuilder.group({
    seniorityLevel: ['', Validators.required],
    positionType: ['', Validators.required],
  });

  ngOnInit(): void {}

  getPositionIds(): PositionId[] {
    return positionIds;
  }

  getSeniorityIds(): SeniorityId[] {
    return seniorityIds;
  }

  getPositionName(positionId: PositionId): PositionName {
    return positions[positionId];
  }

  getSeniorityName(seniorityId: SeniorityId): SeniorityName {
    return seniorityTypes[seniorityId];
  }

  async generateTemplate(): Promise<void> {
    const spinner = this.spinner.show();
    const resumeData: Resume = {
      positionType: this.resumeForm.get('positionType').value,
      seniorityLevel: this.resumeForm.get('seniorityLevel').value,
    };
    // TO-DO remove when testing the integration with mock company site
    const id = '60352dbe237e3896ef498a1f'; // await this.resumeDataService.setResumeData(resumeData).toPromise();
    spinner.hide();
    this.popUpService.openPageAsPopup(environment.siteUrl, id);
  }
}

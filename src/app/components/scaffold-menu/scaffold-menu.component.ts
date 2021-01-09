import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PopUpService } from 'src/app/services/pop-up-service/pop-up.service';
import { environment } from 'src/environments/environment';
import { ResumeDataService } from 'src/app/services/resume-data/resume-data.service';
import { PositionId, positionIds, PositionName, positions } from './types/position.type';
import {
  SeniorityId,
  seniorityIds,
  SeniorityName,
  seniorityTypes,
} from './types/seniority-level.type';
import { Resume, Domain } from './types/resume-data.type';

@Component({
  selector: 'app-scaffold-menu',
  templateUrl: './scaffold-menu.component.html',
  styleUrls: ['./scaffold-menu.component.css'],
})
export class ScaffoldMenuComponent implements OnInit {
  scaffoldedData = {
    projectName: 'Some Project',
    mainTechnology: 'C++',
    domain: 'domain',
  };

  constructor(
    private formBuilder: FormBuilder,
    private popUpService: PopUpService,
    private resumeDataService: ResumeDataService,
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
    const resumeData: Resume = {
      name: this.scaffoldedData.projectName,
      domain: this.scaffoldedData.domain as Domain,
      mainTechnology: this.scaffoldedData.mainTechnology,
      positionType: this.resumeForm.get('positionType').value,
      seniorityLevel: this.resumeForm.get('seniorityLevel').value,
    };
    const id = await this.resumeDataService.setResumeData(resumeData).toPromise();
    this.popUpService.openPageAsPopup(environment.siteUrl, id);
  }
}

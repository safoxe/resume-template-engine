import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PositionId, positionIds, PositionName, positions } from './types/position.type';
import {
  SeniorityId,
  seniorityIds,
  SeniorityName,
  seniorityTypes,
} from './types/seniority-level.type';

@Component({
  selector: 'app-scaffold-menu',
  templateUrl: './scaffold-menu.component.html',
  styleUrls: ['./scaffold-menu.component.css'],
})
export class ScaffoldMenuComponent implements OnInit {
  projectName = 'Some Project';

  mainTechnology = 'C++';

  domain = 'domain';

  constructor(private formBuilder: FormBuilder) {}

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

  generateTemplate(): void {}
}

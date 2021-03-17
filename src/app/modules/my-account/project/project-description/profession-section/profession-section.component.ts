import { Component, Input, OnInit } from '@angular/core';
import { PopUpService } from 'src/app/services/pop-up-service/pop-up.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profession-section',
  templateUrl: './profession-section.component.html',
  styleUrls: ['./profession-section.component.scss'],
})
export class ProfessionSectionComponent implements OnInit {
  constructor(private popUpService: PopUpService) {}

  @Input() professionType: string;

  @Input() resumes: string[];

  ngOnInit(): void {}

  openJobDescription(): void {
    this.popUpService.openPageAsPopup(environment.siteUrl, '6033f040a907ce87785b8250');
  }
}

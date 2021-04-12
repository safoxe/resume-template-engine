import { Component, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/components/base/base.component';
import { Project } from '../../types/project.type';
import { Resume } from '../../types/resume.type';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss'],
})
export class ProjectDescriptionComponent extends BaseComponent implements OnInit {
  constructor(private resumeService: ResumeService) {
    super();
  }

  @Input() project: Project;

  resumes: Resume[];

  categories: { category: string; resumes: Resume[] }[] = [];

  isCategoryAdded = false;

  categoryName = null;

  ngOnInit(): void {
    this.resumeService.resumes.pipe(takeUntil(this.unsubscribe$)).subscribe((resumes) => {
      this.resumes = resumes;
      if (resumes) {
        this.categories = [];
        this.sortResumeByCategories();
      }
    });
  }

  sortResumeByCategories(): void {
    this.resumes.forEach((resume) => {
      const foundCategory = this.categories.find(
        (category) => category.category === resume.professionType,
      );
      if (!foundCategory) {
        this.categories.push({ category: resume.professionType, resumes: [resume] });
      } else {
        foundCategory.resumes.push(resume);
      }
    });
  }

  addCategory(): void {
    this.isCategoryAdded = !this.isCategoryAdded;
  }

  async saveNewCategory(): Promise<void> {
    this.isCategoryAdded = !this.isCategoryAdded;
    this.categories.push({ category: this.categoryName, resumes: [] });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../base/base.component';
import { Layout } from './types/layout.type';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent extends BaseComponent implements OnInit {
  layoutTypes = Layout;

  layout = Layout.default;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((layout) => {
      if (layout instanceof NavigationEnd) {
        this.layout = this.activatedRoute.firstChild.snapshot.data.layout;
      }
    });
  }
}

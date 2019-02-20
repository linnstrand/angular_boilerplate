import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { trigger, animate, style, transition } from '@angular/animations';
import { AnimationService } from './core/services/animation.service';
import { Router, NavigationError } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('pagingAnimation', [
      transition('* => slideOutRight', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition('* => slideOutLeft', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  animationState: any;
  next: string;
  previous: any;

  constructor(private translateService: TranslateService,
    private animationService: AnimationService,
    private router: Router, ) {
    // Redirect to error page on errors
    this.router.events.pipe(filter(e => e instanceof NavigationError)).subscribe(() => {
      this.router.navigateByUrl('/error');
    });

    // set application default language
    this.translateService.setDefaultLang('sv');
    this.animationService.getAnimation().subscribe(state => {
      this.startAnimation(state);
    });
  }

  onSwipeLeft() {
    this.router.navigate([this.next]);
    this.animationService.startAnimation('slideOutRight');
  }

  onSwipeRight() {
    this.router.navigate([this.previous]);
    this.animationService.startAnimation('slideOutLeft');
  }

  ngOnInit() {
    if (location.hostname !== 'localhost') {
    }
  }
  startAnimation(state: string) {
    switch (state) {
      case 'slideOutRight':
      case 'slideOutLeft':
        this.animationState = state;
        break;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }
}

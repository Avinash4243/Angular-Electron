import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { MessageService } from './message.service';

@Component({
  templateUrl: './message.component.html',
  styles: [
    '.message-row { margin-bottom: 10px }'
  ]
})
export class MessageComponent implements OnInit, OnDestroy{
  visitedUrls: string[] = [];
  unsubscribe$: Subject<boolean> = new Subject();
  constructor(private router: Router) { }

  ngOnInit(): void {
   this.getEndPointLogged();
  }
  getEndPointLogged(): void {
    this.router.events.pipe(takeUntil(this.unsubscribe$), filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.visitedUrls.push(event.url);
      this.visitedUrls = [... this.visitedUrls];
      console.log('this.visitedUrls :>> ', this.visitedUrls);
    })
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

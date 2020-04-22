import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Question } from '@app/core';
import { PhpAnswerLabel, PhpHighlightingLanguage } from '@app/core/enum/config';

@Component({
  selector: 'app-question-checkbox',
  templateUrl: './question-checkbox.component.html',
  styleUrls: ['./question-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionCheckboxComponent implements OnInit, AfterViewInit {
  @Input() public question: Question;
  @Input() public wasValidated$: Observable<boolean>;
  public PhpAnswerLabel = PhpAnswerLabel;
  public PhpHighlightingLanguage = PhpHighlightingLanguage;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.wasValidated$.subscribe(value => {
      if (value) {
        this.cdr.detectChanges();
      }
    });
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterOverviewComponent } from './chapter-overview.component';

describe('ChapterOverviewComponent', () => {
  let component: ChapterOverviewComponent;
  let fixture: ComponentFixture<ChapterOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

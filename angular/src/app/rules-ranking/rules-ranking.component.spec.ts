import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesRankingComponent } from './rules-ranking.component';

describe('RulesRankingComponent', () => {
  let component: RulesRankingComponent;
  let fixture: ComponentFixture<RulesRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

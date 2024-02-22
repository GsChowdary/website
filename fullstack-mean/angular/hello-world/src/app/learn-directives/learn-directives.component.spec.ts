import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnDirectivesComponent } from './learn-directives.component';

describe('LearnDirectivesComponent', () => {
  let component: LearnDirectivesComponent;
  let fixture: ComponentFixture<LearnDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnDirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

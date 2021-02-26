import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesFormComponent } from './votes-form.component';

describe('VotesFormComponent', () => {
  let component: VotesFormComponent;
  let fixture: ComponentFixture<VotesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

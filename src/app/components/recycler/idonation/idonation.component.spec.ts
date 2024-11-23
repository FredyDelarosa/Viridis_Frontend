import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdonationComponent } from './idonation.component';

describe('IdonationComponent', () => {
  let component: IdonationComponent;
  let fixture: ComponentFixture<IdonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdonationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

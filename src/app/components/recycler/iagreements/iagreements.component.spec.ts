import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IagreementsComponent } from './iagreements.component';

describe('IagreementsComponent', () => {
  let component: IagreementsComponent;
  let fixture: ComponentFixture<IagreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IagreementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IagreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

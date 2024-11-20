import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrequestBusinessComponent } from './irequest-business.component';

describe('IrequestBusinessComponent', () => {
  let component: IrequestBusinessComponent;
  let fixture: ComponentFixture<IrequestBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrequestBusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrequestBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

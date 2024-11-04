import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrequestAdvertisementComponent } from './irequest-advertisement.component';

describe('IrequestAdvertisementComponent', () => {
  let component: IrequestAdvertisementComponent;
  let fixture: ComponentFixture<IrequestAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrequestAdvertisementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrequestAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

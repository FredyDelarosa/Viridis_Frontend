import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementstableComponent } from './agreementstable.component';

describe('AgreementstableComponent', () => {
  let component: AgreementstableComponent;
  let fixture: ComponentFixture<AgreementstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgreementstableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreementstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

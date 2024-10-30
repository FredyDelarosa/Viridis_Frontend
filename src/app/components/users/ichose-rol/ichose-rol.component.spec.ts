import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IchoseRolComponent } from './ichose-rol.component';

describe('IchoseRolComponent', () => {
  let component: IchoseRolComponent;
  let fixture: ComponentFixture<IchoseRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IchoseRolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IchoseRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

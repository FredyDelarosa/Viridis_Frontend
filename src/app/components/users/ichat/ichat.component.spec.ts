import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IchatComponent } from './ichat.component';

describe('IchatComponent', () => {
  let component: IchatComponent;
  let fixture: ComponentFixture<IchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IchatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

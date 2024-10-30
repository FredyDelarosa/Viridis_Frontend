import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogImaterialsRequestComponent } from './dialog-imaterials-request.component';

describe('DialogImaterialsRequestComponent', () => {
  let component: DialogImaterialsRequestComponent;
  let fixture: ComponentFixture<DialogImaterialsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogImaterialsRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogImaterialsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

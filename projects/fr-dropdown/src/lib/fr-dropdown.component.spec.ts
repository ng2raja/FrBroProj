import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrDropdownComponent } from './fr-dropdown.component';

describe('FrDropdownComponent', () => {
  let component: FrDropdownComponent;
  let fixture: ComponentFixture<FrDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

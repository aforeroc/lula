import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinformacionComponent } from './sinformacion.component';

describe('SinformacionComponent', () => {
  let component: SinformacionComponent;
  let fixture: ComponentFixture<SinformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

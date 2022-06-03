import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistazapatoComponent } from './vistazapato.component';

describe('VistazapatoComponent', () => {
  let component: VistazapatoComponent;
  let fixture: ComponentFixture<VistazapatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistazapatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistazapatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeterGriffin } from './peter-griffin';

describe('PeterGriffin', () => {
  let component: PeterGriffin;
  let fixture: ComponentFixture<PeterGriffin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeterGriffin],
    }).compileComponents();

    fixture = TestBed.createComponent(PeterGriffin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheamscardsComponent } from './theamscards.component';

describe('TheamscardsComponent', () => {
  let component: TheamscardsComponent;
  let fixture: ComponentFixture<TheamscardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheamscardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheamscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

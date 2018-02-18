import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheamfullviewComponent } from './theamfullview.component';

describe('TheamfullviewComponent', () => {
  let component: TheamfullviewComponent;
  let fixture: ComponentFixture<TheamfullviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheamfullviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheamfullviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommnetsformComponent } from './commnetsform.component';

describe('CommnetsformComponent', () => {
  let component: CommnetsformComponent;
  let fixture: ComponentFixture<CommnetsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommnetsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommnetsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheamlistComponent } from './theamlist.component';

describe('TheamlistComponent', () => {
  let component: TheamlistComponent;
  let fixture: ComponentFixture<TheamlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheamlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheamlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

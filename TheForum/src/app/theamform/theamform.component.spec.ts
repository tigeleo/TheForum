import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheamformComponent } from './theamform.component';

describe('TheamformComponent', () => {
  let component: TheamformComponent;
  let fixture: ComponentFixture<TheamformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheamformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheamformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

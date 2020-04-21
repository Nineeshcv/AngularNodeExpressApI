import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNpmrcConfigComponent } from './add-npmrc-config.component';

describe('AddNpmrcConfigComponent', () => {
  let component: AddNpmrcConfigComponent;
  let fixture: ComponentFixture<AddNpmrcConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNpmrcConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNpmrcConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

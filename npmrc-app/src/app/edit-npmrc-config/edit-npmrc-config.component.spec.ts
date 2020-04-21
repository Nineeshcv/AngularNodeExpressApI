import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNpmrcConfigComponent } from './edit-npmrc-config.component';

describe('EditNpmrcConfigComponent', () => {
  let component: EditNpmrcConfigComponent;
  let fixture: ComponentFixture<EditNpmrcConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNpmrcConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNpmrcConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

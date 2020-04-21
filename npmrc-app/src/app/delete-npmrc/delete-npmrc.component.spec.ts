import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNpmrcComponent } from './delete-npmrc.component';

describe('DeleteNpmrcComponent', () => {
  let component: DeleteNpmrcComponent;
  let fixture: ComponentFixture<DeleteNpmrcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteNpmrcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNpmrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

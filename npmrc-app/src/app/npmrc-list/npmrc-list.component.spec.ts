import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmrcListComponent } from './npmrc-list.component';

describe('NpmrcListComponent', () => {
  let component: NpmrcListComponent;
  let fixture: ComponentFixture<NpmrcListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmrcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmrcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodrequestComponent } from './foodrequest.component';

describe('FoodrequestComponent', () => {
  let component: FoodrequestComponent;
  let fixture: ComponentFixture<FoodrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

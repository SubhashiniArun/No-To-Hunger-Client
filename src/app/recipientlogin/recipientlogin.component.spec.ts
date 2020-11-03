import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientloginComponent } from './recipientlogin.component';

describe('RecipientloginComponent', () => {
  let component: RecipientloginComponent;
  let fixture: ComponentFixture<RecipientloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

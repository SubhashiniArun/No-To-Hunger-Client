import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientregisterComponent } from './recipientregister.component';

describe('RecipientregisterComponent', () => {
  let component: RecipientregisterComponent;
  let fixture: ComponentFixture<RecipientregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRestoFormComponent } from './reactive-resto-form.component';

describe('ReactiveRestoFormComponent', () => {
  let component: ReactiveRestoFormComponent;
  let fixture: ComponentFixture<ReactiveRestoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveRestoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveRestoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

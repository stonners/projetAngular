import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleModifComponent } from './console-modif.component';

describe('ConsoleModifComponent', () => {
  let component: ConsoleModifComponent;
  let fixture: ComponentFixture<ConsoleModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

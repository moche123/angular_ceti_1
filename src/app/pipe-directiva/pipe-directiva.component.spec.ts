import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDirectivaComponent } from './pipe-directiva.component';

describe('PipeDirectivaComponent', () => {
  let component: PipeDirectivaComponent;
  let fixture: ComponentFixture<PipeDirectivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeDirectivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

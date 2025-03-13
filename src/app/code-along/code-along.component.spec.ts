import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeAlongComponent } from './code-along.component';

describe('CodeAlongComponent', () => {
  let component: CodeAlongComponent;
  let fixture: ComponentFixture<CodeAlongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeAlongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeAlongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

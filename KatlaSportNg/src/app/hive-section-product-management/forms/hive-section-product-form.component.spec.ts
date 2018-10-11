import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiveSectionProductFormComponent } from './hive-section-product-form.component';

describe('HiveSectionProductFormComponent', () => {
  let component: HiveSectionProductFormComponent;
  let fixture: ComponentFixture<HiveSectionProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiveSectionProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiveSectionProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

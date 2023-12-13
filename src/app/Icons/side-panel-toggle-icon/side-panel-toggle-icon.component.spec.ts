import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelToggleIconComponent } from './side-panel-toggle-icon.component';

describe('SidePanelToggleIconComponent', () => {
  let component: SidePanelToggleIconComponent;
  let fixture: ComponentFixture<SidePanelToggleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidePanelToggleIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidePanelToggleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

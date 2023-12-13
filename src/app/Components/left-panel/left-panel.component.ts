import { Component } from '@angular/core';
import { SidePanelToggleIconComponent } from '../../Icons/side-panel-toggle-icon/side-panel-toggle-icon.component';

@Component({
  selector: 'app-left-panel',
  standalone: true,
  imports: [SidePanelToggleIconComponent],
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.css'
})
export class LeftPanelComponent {

}

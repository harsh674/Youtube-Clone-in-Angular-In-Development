import { Component } from '@angular/core';
import { YoutubeIconComponent } from '../../Icons/youtube-icon/youtube-icon.component';
import { SidePanelToggleIconComponent } from '../../Icons/side-panel-toggle-icon/side-panel-toggle-icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [YoutubeIconComponent, SidePanelToggleIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}

import { Component, OnInit } from '@angular/core';
import { UiService } from '../services/ui-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public screenWidth = window.innerWidth;

  constructor(private uiService:UiService) {

  }

  ngOnInit(): void {

  }

  toggleDrawer() {
    this.uiService.drawerOpen = !this.uiService.drawerOpen;
    console.log(this.screenWidth);
  }

}

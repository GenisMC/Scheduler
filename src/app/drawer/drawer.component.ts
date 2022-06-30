import { Component, OnInit } from '@angular/core';
import { UiService } from '../services/ui-service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent implements OnInit {
  constructor(public uiService: UiService) {}

  ngOnInit(): void {}
}

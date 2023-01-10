import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  gotoUsaData() {
    this.router.navigate(['/usa']);
  }

  gotoPersonalData() {
    this.router.navigate(['/personal']);
  }
}

import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth-service';
import { Router } from '@angular/router';
import { auth } from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'brqtravel';

  }


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth-service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor( public authService: AuthService ) { }

  ngOnInit() {
  }

  get GetUser(): string {
    const name = JSON.parse(localStorage.getItem('user'));
    name.email = name.email.substring(0, ((name.email).indexOf('@')));
    return (name.email);
  }

}

export class CollapseDemoAnimatedComponent {
  isCollapsed = false;
}

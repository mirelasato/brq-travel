import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth-service';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
  CurrentUser: any;

  constructor( public authService: AuthService,
               public API: ApiService ) { }

  ngOnInit() {
    this.API.getUser().subscribe((data) => {
      this.CurrentUser = data;
      // console.log(this.CurrentUser);
    });
  }

}

export class CollapseDemoAnimatedComponent {
  isCollapsed = false;
}

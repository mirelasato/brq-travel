import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth-service';
import { ApiService } from '../shared/services/api.service';
import { User } from '../shared/models/usuario';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  // animations: [
  //   trigger('cartAnimation', [
  //     state('disabled', style({
  //       marginRight: '-10px',
  //     })),
  //     state('enabled', style({
  //       display: 'block',
  //       marginRight: '0px'
  //     })),
  //     transition('disabled => enabled', [
  //       animate('1s')
  //     ]),
  //     transition('enabled => disabled', [
  //       animate('0.5s')
  //     ])
  //   ]),
  // ]
})
export class TopoComponent implements OnInit {
  CurrentUser: User;
  emailUser = this.authService.GetEmail;
  habilitado = false;
  constructor(public authService: AuthService,
              public API: ApiService) { }

  ngOnInit() {
    this.API.getUser(this.emailUser).subscribe((data) => {
      this.CurrentUser = data;
      // console.log(this.CurrentUser);
    });
  }
  disableCart() {
    if (this.habilitado) {
      setTimeout(() => {
        this.habilitado = false;
      }, 400);
    } else {
      this.habilitado = true;
    }
  }
}

export class CollapseDemoAnimatedComponent {
  isCollapsed = false;
}

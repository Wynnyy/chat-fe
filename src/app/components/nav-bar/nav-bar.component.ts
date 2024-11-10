import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {UserService} from '../../service/user.service';
import {Status} from '../../model/User';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  peoples: string [] = [];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.onlineUsers();

  }

  onlineUsers() {
    setInterval(() => {
      // code to be executed repeatedly
      this.userService.getAllUsers().subscribe(data => {
        data.filter(user => user.status == Status.ONLINE)
          .forEach(onlineUser => this.peoples.push(onlineUser.nickName))
      });
    }, 2000)
  }

}

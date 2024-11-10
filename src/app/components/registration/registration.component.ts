import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SharedService} from '../../service/shared.service';
import {UserService} from '../../service/user.service';
import {catchError, map, throwError} from 'rxjs';
import { ErrorDto } from '../../model/ErrorDto';
import {Status, User} from '../../model/User';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  nickName: string = '';

  user: User = {
    nickName: '',
    status: Status.ONLINE

  }


  constructor(private readonly router: Router, private readonly sharedService: SharedService,
              private readonly userService: UserService) {

  }

  loggin() {
    this.userService.getUserByName(this.nickName).pipe(catchError((err : any) => {
      return throwError(() => alert(err.error.message));
    })).subscribe(data => console.log(data))


    this.router.navigate(['/chat']);

  }

  createAccount(){
     //todo if nickname exist, alert!

    //this.userService.createUser().subscribe(data  => console.log(data)).unsubscribe();
    this.router.navigate(['/chat']);
  }

}

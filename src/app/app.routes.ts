import {Routes} from '@angular/router';
import {RegistrationComponent} from './components/registration/registration.component';
import {ChatWindowComponent} from './components/chat-window/chat-window.component';

export const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'chat', component: ChatWindowComponent }
];


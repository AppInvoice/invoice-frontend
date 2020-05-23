import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.scss'],
})
export class UserSelectorComponent implements OnInit {
  public users: User[];
  public user: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.findUsers().subscribe((usersRetrieved) => {
      this.users = usersRetrieved;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss'],
})
export class UserContainerComponent implements OnInit {
  public userBalance: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userBalance.subscribe((user) => (this.userBalance = user));
  }
}

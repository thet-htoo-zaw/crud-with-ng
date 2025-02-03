import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { timeStamp } from 'console';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  newUser: User = {id: Math.floor(Math.random() * 100) + 1, name: '', email:''};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  addUser() {
    this.userService.addUser(this.newUser).subscribe((user) => {
      this.users.push(user);
      this.newUser = {id: Math.floor(Math.random() * 100) + 1, name: '', email:''};
    })
  }


}

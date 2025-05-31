import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface UserListItem {
  id: string;
  name: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() users: UserListItem[] = [];
  @Input() selectedUserId?: string;
  @Output() userSelected = new EventEmitter<UserListItem>();

  isOpen = false;

  get selectedUser(): UserListItem | undefined {
    return this.users.find(u => u.id === this.selectedUserId);
  }

  selectUser(user: UserListItem) {
    this.userSelected.emit(user);
  }
} 
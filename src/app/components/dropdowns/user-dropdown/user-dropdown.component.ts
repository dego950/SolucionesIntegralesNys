import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { createPopper } from '@popperjs/core';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
})
export class UserDropdownComponent implements AfterViewInit {
  constructor(private userService: UsersService, private router: Router) {
  }
  dropdownPopoverShow = false;
  @ViewChild('btnDropdownRef', { static: false }) btnDropdownRef: ElementRef;
  @ViewChild('popoverDropdownRef', { static: false })
  popoverDropdownRef: ElementRef;
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: 'bottom-start',
      }
    );
  }
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  onClick(){
    this.userService.logout()
      .then(response => {
        this.router.navigate(['/auth/login']);
      })
      .catch(error => console.log(error));
  }
}

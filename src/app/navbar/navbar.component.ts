import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
  searchValue:string = '';

  @Output() clickEvent = new EventEmitter<string>();

  search(){
    this.clickEvent.emit(this.searchValue);
  }

}

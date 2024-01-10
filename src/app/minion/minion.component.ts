import { Component, Input, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-minion',
  standalone: true,
  imports: [NavbarComponent, CardComponent, CommonModule, FormsModule],
  templateUrl: './minion.component.html',
  styles: ``
})
export class MinionComponent implements OnInit{

  @Input() name:string = '';

  ngOnInit(): void {
    console.log('name: ', this.name);
  }

  search(name:string){
    this.name = name;    
  }

}

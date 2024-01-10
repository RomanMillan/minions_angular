import { Component, Input, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-minions',
  standalone: true,
  imports: [NavbarComponent, CardComponent, CommonModule, FormsModule],
  templateUrl: './minions.component.html',
  styles: ``
})
export class MinionsComponent implements OnInit{
  
  @Input() name:string = '';
  
  ngOnInit(): void {
    console.log('name: ', this.name);
    
  }


  search(name:string){
    this.name = name;    
  }



}

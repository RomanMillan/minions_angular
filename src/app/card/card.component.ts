import { Component, Input, OnInit } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MinionService } from '../services/minion.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit{
    
  constructor(private minionService: MinionService){}
  
  // creamos el array que contrendrá los minions
  minions:Minion[] = [];
  minion:Minion[] = [];
  nameMinion: string = 'Josua';
  
  ngOnInit(): void {
    // obtenemos todos los minions del servicio
    this.minions = this.minionService.getMinions();
  }


  // manejo de fav
  favoriteMinion: string[] = [];

  favorite(minionName:string){
    if(this.favoriteMinion.includes(minionName)){
      this.favoriteMinion.filter(minion => minion != minionName);
    }else{
      this.favoriteMinion.push(minionName);
    }
  }

  // input para buscar un minion específico
  @Input() name:string = ''




}

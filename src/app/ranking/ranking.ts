import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ranking',
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './ranking.html',
  styleUrl: './ranking.scss'
})
export class Ranking {

}

import { Component } from '@angular/core';
import { PrimeNGModule } from '../../primeng.module';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [PrimeNGModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}

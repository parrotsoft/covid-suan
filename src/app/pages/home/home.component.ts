import { CovidService } from './../../services/covid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.covidService.getData().subscribe((resp: any[]) => {
      console.table(resp);
    });
  }

}

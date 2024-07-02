import { Component, OnInit } from '@angular/core';
import { Box } from 'src/app/core/models/box';
import { BoxService } from 'src/app/core/services/box.service';

@Component({
  selector: 'app-list-boxs',
  templateUrl: './list-boxs.component.html',
  styleUrls: ['./list-boxs.component.scss']
})
export class ListBoxsComponent implements OnInit {

  constructor(private boxService: BoxService) { }

  boxs!: Box[];

  ngOnInit(): void {
    this.boxs = this.boxService.getAllBoxs();
  }

}

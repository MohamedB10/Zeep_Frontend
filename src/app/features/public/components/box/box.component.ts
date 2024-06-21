import { Component, OnInit } from '@angular/core';
import { Box } from 'src/app/core/models/box';
import { BoxService } from 'src/app/core/services/box.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  boxs!: Box[];
  constructor(private boxService: BoxService) { }

  ngOnInit(): void {
    this.boxs = this.boxService.getAllBoxs();
  }

}

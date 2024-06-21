import { Component, OnInit } from '@angular/core';
import { Stamp } from 'src/app/core/models/stamp';
import { StampService } from 'src/app/core/services/stamp.service';

@Component({
  selector: 'app-stamp',
  templateUrl: './stamp.component.html',
  styleUrls: ['./stamp.component.scss']
})
export class StampComponent implements OnInit {

  constructor(private stampService: StampService) { }

  stamps!: Stamp[];

  ngOnInit(): void {
    this.stamps = this.stampService.getAllStamps();
  }

}

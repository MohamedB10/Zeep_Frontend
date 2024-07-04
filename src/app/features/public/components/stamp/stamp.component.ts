import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stamp } from 'src/app/core/models/stamp';
import { StampService } from 'src/app/core/services/stamp.service';

@Component({
  selector: 'app-stamp',
  templateUrl: './stamp.component.html',
  styleUrls: ['./stamp.component.scss']
})
export class StampComponent implements OnInit {
  @Input() stamp!: Stamp;

  constructor(private stampService: StampService,
              private router: Router
  ) { }

  stamps!: Stamp[];

  ngOnInit(): void {
    this.stamps = this.stampService.getAllStamps();
  }
  onClickStamp() {
      this.router.navigateByUrl(`stamps/${this.stamp.id}`);
    }
}

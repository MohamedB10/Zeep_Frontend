import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  stamps$!: Observable<Stamp[]>;

  ngOnInit(): void {
    this.stamps$ = this.stampService.getAllStamps();
  }
  onClickStamp(id: number | undefined) {
      this.router.navigateByUrl(`zeep_frontend/public/stamps/${id}`);
  }
}

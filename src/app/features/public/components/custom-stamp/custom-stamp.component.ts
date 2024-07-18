import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Stamp } from 'src/app/core/models/stamp';
import { StampService } from 'src/app/core/services/stamp.service';

@Component({
  selector: 'app-custom-stamp',
  templateUrl: './custom-stamp.component.html',
  styleUrls: ['./custom-stamp.component.scss']
})
export class CustomStampComponent implements OnInit {

  stamp$!: Observable<Stamp>;
  
  constructor(private route: ActivatedRoute,
              private stampService: StampService
  ) { }

  ngOnInit(): void {
    const stampId = this.route.snapshot.paramMap.get('id');
    this.stamp$ = this.stampService.getStampById(stampId);
  }

}

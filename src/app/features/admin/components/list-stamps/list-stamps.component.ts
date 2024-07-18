import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stamp } from 'src/app/core/models/stamp';
import { StampService } from 'src/app/core/services/stamp.service';

@Component({
  selector: 'app-list-stamps',
  templateUrl: './list-stamps.component.html',
  styleUrls: ['./list-stamps.component.scss']
})
export class ListStampsComponent implements OnInit {

  constructor(private stampService: StampService) { }

  stamps$!: Observable<Stamp[]>;

  ngOnInit(): void {
    this.stamps$ = this.stampService.getAllStamps();
  }

}

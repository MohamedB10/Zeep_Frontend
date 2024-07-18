import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stamp } from 'src/app/core/models/stamp';

@Component({
  selector: 'app-edit-stamp',
  templateUrl: './edit-stamp.component.html',
  styleUrls: ['./edit-stamp.component.scss']
})
export class EditStampComponent implements OnInit {

  constructor() { }

  private stamp$!: Observable<Stamp>;

  ngOnInit(): void {
    
  }

}

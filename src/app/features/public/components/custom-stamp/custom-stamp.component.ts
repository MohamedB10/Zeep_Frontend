import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custom-stamp',
  templateUrl: './custom-stamp.component.html',
  styleUrls: ['./custom-stamp.component.scss']
})
export class CustomStampComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const stampId = this.route.snapshot.params['id'];
  }

}

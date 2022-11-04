import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conter',
  templateUrl: './conter.component.html',
  styleUrls: ['./conter.component.scss']
})
export class ConterComponent implements OnInit {
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  increase(): void {
    this.count += 1;
  }
}

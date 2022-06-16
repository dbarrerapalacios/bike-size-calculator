import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rider-size-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rider-size-form.component.html',
  styleUrls: ['./rider-size-form.component.scss']
})
export class RiderSizeFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("holis");
  }

}

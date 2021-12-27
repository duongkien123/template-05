import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main11',
  templateUrl: './main11.component.html',
  styleUrls: ['./main11.component.css']
})
export class Main11Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  abc(){
    this.router.navigate(['blogdetails'])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main6',
  templateUrl: './main6.component.html',
  styleUrls: ['./main6.component.css']
})
export class Main6Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  abc(){
    this.router.navigate(['shopdetails'])
  }
}

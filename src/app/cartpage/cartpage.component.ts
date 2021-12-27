import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  abc(){
    this.router.navigate(['checkout'])
  }
}

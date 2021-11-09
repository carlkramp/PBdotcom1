import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.css']
})
export class ComedyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onMusicClick() {
    this.router.navigate(['/music']);
  }

  onComedyClick() {
    this.router.navigate(['/comedy']);
  }

}

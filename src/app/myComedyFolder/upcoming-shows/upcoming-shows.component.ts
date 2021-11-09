import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upcoming-shows',
  templateUrl: './upcoming-shows.component.html',
  styleUrls: ['./upcoming-shows.component.css']
})
export class UpcomingShowsComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;

  constructor() { }

  ngOnInit(): void {
  }

}

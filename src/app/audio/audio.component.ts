import { Component, OnInit } from '@angular/core';
import * as RSSParser from 'rss-parser/dist/rss-parser';
import { Nzedb } from '../interface/nzedb';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  public data: Nzedb;

  constructor() {
    const parser: RSSParser = new RSSParser();
    const CORS = 'https://cors-anywhere.herokuapp.com/';
    const URL = 'http://176.79.3.203:8081/rss?t=3000&dl=1&i=1&r=25b01a2a137c0d48a8a9de404bb5a125';
    parser.parseURL(CORS + URL, (error, resp: Nzedb) => {
      if (!error) {
        this.data = resp;
        console.log(resp);
      }
    });
  }

  ngOnInit() {
  }

}
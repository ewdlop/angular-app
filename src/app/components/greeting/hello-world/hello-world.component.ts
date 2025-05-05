import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // 當組件初始化時執行的邏輯。
  }
}

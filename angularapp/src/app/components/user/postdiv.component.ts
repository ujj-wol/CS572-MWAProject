import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'postdiv',
  template: `
    <h5 class="mb-1">
      {{data.title}}
    </h5>
    <p class="mb-1">
      {{ data.body }}
    </p>
  `,
  styles: []
})
export class PostdivComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}

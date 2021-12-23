import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Select2OptionData } from 'ng-select2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public exampleData: Array<Select2OptionData>;
  
  public formControl = new FormControl();
  public value: string;
  constructor() { }

  ngOnInit(): void {
    this.exampleData = [
      {
        id: 'groupA',
        text: 'group A'
      },
      {
        id: 'groupB',
        text: 'group B'
      },
      {
        id: 'groupC',
        text: 'group C'
      },
      {
        id: 'groupD',
        text: 'group D'
      },
      {
        id: 'groupE',
        text: 'group E'
      },
      {
        id: 'groupF',
        text: 'group F'
      },
      {
        id: 'groupG',
        text: 'group G'
      },
      {
        id: 'groupH',
        text: 'group H'
      },
      {
        id: 'groupI',
        text: 'group I'
      },
      {
        id: 'groupJ',
        text: 'group J'
      }
    ];
  }

}

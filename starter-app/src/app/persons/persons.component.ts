import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons:Array<IPerson>;
  persons2: Array<any>;

  constructor() {
    this.persons = [
      { age: 23, name: "Kevin" },
      { age: 33, name: "Lady" },
      { age: 59, name: "Alejandra" },
      { age: 40, name: "Leo" }
    ];

    this.persons2 = [
      { age: 23, name: "Kevin" },
      { age: 33, name: "Lady" },
      { age: 59, name: "Alejandra" },
      { age: 40, name: "Leo" }
    ];
  }

  ngOnInit(): void {
  }

  filterAdultPersons(persons: any[]): any[] {
    return this.persons.filter(p => p.age > 30)
  }

  filterAdultPersons2(persons: any[]): any[] {
    return this.persons2.filter(p => p.age > 30)
  }
}



interface IPerson {
  age: number,
  name: string
}




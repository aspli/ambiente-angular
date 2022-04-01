import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    
    let peopleArray = [
        {
          firstName: 'Alexandre',
          lastName: 'Siqueira',
          age: 37
        },
        {
          firstName: 'Emily',
          lastName: 'Pereira',
          age: 13
        },
        {
          firstName: 'Jesuino',
          lastName: 'Alves',
          age: 61
        },
        {
          firstName: 'Narley',
          lastName: 'Siqueira',
          age: 40
        }
      ]

      return of(peopleArray)
  }

}

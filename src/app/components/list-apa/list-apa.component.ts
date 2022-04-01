import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-list-apa',
  templateUrl: './list-apa.component.html',
  styleUrls: ['./list-apa.component.css']
})
export class ListApaComponent implements OnInit {

  personagens: Array<any> = [];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.listService.getList().subscribe(result =>{
      this.personagens = result?.results;
    })

  }

}

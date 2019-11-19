import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from '../../service/service.service';
import { Edificio } from '../../dtos/Edificio';


@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {

  edificios:Edificio[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getEdificios().subscribe(data => {
      this.edificios=data;
    })
  }

  Editar(edificio: Edificio): void {
    localStorage.setItem("id", edificio.id.toString());
    this.router.navigate(["building-edit"]);
  }

  Eliminar(edificio: Edificio) {
    this.service.deleteEdificio(edificio).subscribe(data => {
      this.edificios=this.edificios.filter(e=>e!==edificio);
      alert("Edificio eliminado...")
    });
  }

}

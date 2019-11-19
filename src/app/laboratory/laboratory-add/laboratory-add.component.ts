import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Laboratorio } from 'src/app/dtos/Laboratorio';


@Component({
  selector: 'app-laboratory-add',
  templateUrl: './laboratory-add.component.html',
  styleUrls: ['./laboratory-add.component.css']
})
export class LaboratoryAddComponent implements OnInit {

  laboratorio:Laboratorio = new Laboratorio();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(laboratorio:String) {
    this.laboratorio.name=laboratorio;
    this.service.createLaboratorio(this.laboratorio).subscribe(data => {
      this.router.navigate(["laboratory-list"]);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Facultad } from 'src/app/dtos/Facultad';

@Component({
  selector: 'app-faculty-add',
  templateUrl: './faculty-add.component.html',
  styleUrls: ['./faculty-add.component.css']
})
export class FacultyAddComponent implements OnInit {

  facultad:Facultad = new Facultad();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(facultad:String) {
    this.facultad.name=facultad;
    this.service.createFacultades(this.facultad).subscribe(data => {
      alert("Facultad creada con exito!");
      this.router.navigate(["faculty-list"]);
    })
  }

}

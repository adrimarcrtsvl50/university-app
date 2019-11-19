import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Facultad } from '../dtos/Facultad';
import { Edificio } from '../dtos/Edificio';
import { Laboratorio } from '../dtos/Laboratorio';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  URL_F = 'http://localhost:8080/universidad/facultades';
  URL_E = 'http://localhost:8081/universidad/edificios';
  URL_L = 'http://localhost:8082/universidad/laboratorios';


  //Metodos para facultades

  getFacultades(): Observable<Facultad[]> {
    return this.http.get<Facultad[]>(this.URL_F);
  }

  createFacultades(facultad:Facultad): Observable<Facultad> {
    return this.http.post<Facultad>(this.URL_F, facultad);
  }

  getFacultadPorId(id:number): Observable<Facultad> {
    return this.http.get<Facultad>(this.URL_F+"/"+id);
  }

  updateFacultad(facultad: Facultad): Observable<Facultad> {
    return this.http.put<Facultad>(this.URL_F+"/"+facultad.id, facultad);
  }

  deleteFacultad(facultad: Facultad): Observable<Facultad> {
    return this.http.delete<Facultad>(this.URL_F+"/"+facultad.id);
  }


  //Metodos para edificios

  getEdificios(): Observable<Edificio[]> {
    return this.http.get<Edificio[]>(this.URL_E);
  }

  createEdificios(edificio:Edificio): Observable<Edificio> {
    return this.http.post<Edificio>(this.URL_E, edificio);
  }

  getEdificioPorId(id:number): Observable<Edificio> {
    return this.http.get<Edificio>(this.URL_E+"/"+id);
  }

  updateEdificio(edificio: Edificio): Observable<Edificio> {
    return this.http.put<Edificio>(this.URL_E+"/"+edificio.id, edificio);
  }

  deleteEdificio(edificio: Edificio): Observable<Edificio> {
    return this.http.delete<Edificio>(this.URL_E+"/"+edificio.id);
  }


  //Metodos para laboratorios

  getLaboratorios(): Observable<Laboratorio[]> {
    return this.http.get<Laboratorio[]>(this.URL_L);
  }

  createLaboratorio(laboratorio:Laboratorio): Observable<Laboratorio> {
    return this.http.post<Laboratorio>(this.URL_L, laboratorio);
  }

  getLaboratorioPorId(id:number): Observable<Laboratorio> {
    return this.http.get<Laboratorio>(this.URL_L+"/"+id);
  }

  updateLaboratorio(laboratorio: Laboratorio): Observable<Laboratorio> {
    return this.http.put<Laboratorio>(this.URL_L+"/"+laboratorio.id, laboratorio);
  }

  deleteLaboratorio(laboratorio: Laboratorio): Observable<Laboratorio> {
    return this.http.delete<Laboratorio>(this.URL_L+"/"+laboratorio.id);
  }  
}

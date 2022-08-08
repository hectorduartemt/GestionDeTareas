import { getLocaleCurrencyCode } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AppClienteService {

  constructor(
    private http: HttpClient
  ) 
  { }
//implementamos las funciones que van a llamar a los servicios en el api
  getAllTareas() {
    return this.http.get(`${API_URL}/tareas`);
  }

  createTarea(tarea: any) {
    return this.http.post(`${API_URL}/tareas`, tarea);
  }

  updateTarea(id: string, tarea: any) {
    return this.http.put(`${API_URL}/tareas/${id}`, tarea);
  }

  deleteTarea(id: string) {
    return this.http.delete(`${API_URL}/tareas/${id}`);
  }

}



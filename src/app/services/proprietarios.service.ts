import { Proprietario } from './../model/proprietario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProprietariosService {

  private url = "http://localhost:8080/proprietarios";
  private proprietarios: Proprietario[];

  constructor(
    private http: HttpClient
  ) { }

  getProprietariosPorNome( nome: string): Observable<Proprietario[]> {
    //console.log("Vai buscar");
    return this.http.get<Proprietario[]>(`${this.url}/nome/${nome}`);        
  }
}

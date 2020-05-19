import { Injectable } from '@angular/core';
import { Livro } from './../model/livro';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private url = "http://localhost:8080/livros";
  private livros: Livro[];

  constructor(
    private http: HttpClient
  ) { }

  getLivrosPorTitulo( nome: string): Observable<Livro[]> {
    //console.log("Vai buscar");
    return this.http.get<Livro[]>(`${this.url}/titulo/${nome}`);        
  }

}

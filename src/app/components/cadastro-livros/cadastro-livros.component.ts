import { Component, OnInit, Input } from '@angular/core';
import { LivrosService } from './../../services/livros.service';
import { Livro, LivroResponse } from './../../model/livro';

@Component({
  selector: 'cadastro-livros',
  templateUrl: './cadastro-livros.component.html',
  styleUrls: ['./cadastro-livros.component.css']
})
export class CadastroLivrosComponent implements OnInit {

  livroResponse: LivroResponse;
  //listaProprietarios: Proprietario[];
  @Input("livros") livros: Livro[];
  @Input("existeLivros") existeLivros : boolean;

  constructor(
    private livroService: LivrosService
  ) { }

  ngOnInit(): void {
  }

}

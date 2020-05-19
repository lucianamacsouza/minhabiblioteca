import { Component, OnInit } from '@angular/core';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';
import { Livro, LivroResponse } from './../../model/livro';
import { LivroModel } from './../../model/livro-model';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'pesq-livros',
  templateUrl: './pesq-livros.component.html',
  styleUrls: ['./pesq-livros.component.css']
})
export class PesqLivrosComponent implements OnInit {

  formLivro: FormGroup;
  livroResponse: LivroResponse;
  listaLivros: Livro[];  
  existeLivros: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private livroService: LivrosService
  ) { }

  ngOnInit(): void {
    this.createForm( new LivroModel() );
  }

  createForm(livro: LivroModel) {
    this.formLivro = this.formBuilder.group({
      titulo: [livro.titulo]
    })
  }  

  onSubmit() {
    this.livroService.getLivrosPorTitulo(this.formLivro.value.titulo)
      .subscribe( response => {
        this.listaLivros = response;
        this.existeLivros = ( this.listaLivros != null && this.listaLivros.length > 0 );

      })    
  }

}

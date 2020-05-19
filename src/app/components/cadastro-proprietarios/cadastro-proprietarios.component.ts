import { ProprietariosService } from './../../services/proprietarios.service';
import { Proprietario, ProprietarioResponse } from './../../model/proprietario';
import { Component, OnInit, Input } from '@angular/core';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';

@Component({
  selector: 'cadastro-proprietarios',
  templateUrl: './cadastro-proprietarios.component.html',
  styleUrls: ['./cadastro-proprietarios.component.css']
})

export class CadastroProprietariosComponent implements OnInit {

  proprietarioResponse: ProprietarioResponse;
  //listaProprietarios: Proprietario[];
  @Input("proprietarios") proprietarios: Proprietario[];
  @Input("existeProps") existeProps : boolean;

  constructor( 
    private proprietarioService: ProprietariosService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() { }

}

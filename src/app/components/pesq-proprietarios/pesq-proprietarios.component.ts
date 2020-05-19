import { ProprietariosService } from './../../services/proprietarios.service';
import { Proprietario, ProprietarioResponse } from './../../model/proprietario';
import { ProprietarioModel } from './../../model/proprietario-model';
import { Component, OnInit } from '@angular/core';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';

@Component({
  selector: 'pesq-proprietarios',
  templateUrl: './pesq-proprietarios.component.html',
  styleUrls: ['./pesq-proprietarios.component.css']
})
export class PesqProprietariosComponent implements OnInit {

  formProprietario: FormGroup;
  proprietarioResponse: ProprietarioResponse;
  listaProprietarios: Proprietario[];  
  existeProps: boolean = false;

  constructor( 
    private formBuilder: FormBuilder,
    private proprietarioService: ProprietariosService
  ) { }

  ngOnInit(): void {
    this.createForm( new ProprietarioModel() );
  }

  createForm(proprietario: ProprietarioModel) {
    this.formProprietario = this.formBuilder.group({
      nome: [proprietario.nome]
    })
  }  

  onSubmit() {
    this.proprietarioService.getProprietariosPorNome(this.formProprietario.value.nome)
      .subscribe( response => {
        this.listaProprietarios = response;
        this.existeProps = ( this.listaProprietarios != null && this.listaProprietarios.length > 0 );

      })    
  }


}

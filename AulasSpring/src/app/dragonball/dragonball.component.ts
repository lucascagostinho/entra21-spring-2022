import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { catchError, of } from 'rxjs';
import { PersonagemDragonballService } from '../personagem-dragonball.service';

@Component({
  selector: 'app-dragonball',
  templateUrl: './dragonball.component.html',
  styleUrls: ['./dragonball.component.css'],
})
export class DragonballComponent implements OnInit {
  personagens!: Array<any>;
  personagem!: any;
  cadastrando!: boolean;

  constructor(private personagemService: PersonagemDragonballService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.personagemService
      .getAll()
      .pipe(
        catchError((error) => {
          let personagens: Array<any> = new Array();
          personagens.push({ id: 1 });
          personagens.push({ id: 2 });
          personagens.push({ id: 3 });
          return of(personagens);
        })
      )
      .subscribe((response) => {
        console.log(response);

        this.personagens = response;
      });
  }

  openForm(): void {
    this.personagem = {};
    this.cadastrando = true;
  }

  closeForm(): void {
    this.personagem = {};
    this.cadastrando = false;
  }

  updateForm(personagem: any): void {
    this.personagem = personagem;
    this.cadastrando = true;
  }

  validForm(): boolean {
    let valid: boolean = true;
    if (!this.personagem.nome_heroi) {
      valid = false;
    }

    return valid;
  }

  create(): void {
    if(!this.validForm()){
      alert('Preencha os campos obrigatórios');
      return;
    }

    this.personagemService.create(this.personagem).pipe(catchError((error) =>{
      return of(error);
    })
    ).subscribe((response:any) =>{
      console.log(response);

      if(response){
        this.personagens.push(response);

        this.closeForm();
      }

    });

  }

  update(): void {
    if (!this.validForm()) {
      alert('Preencha os campos obrigatorios');

      return;
    }

    this.personagemService

      .update(this.personagem)

      .pipe(
        catchError((error) => {
          return of(error);
        })
      )

      .subscribe((response: any) => {
        console.log(response);

        if (response) {
          this.personagens[this.personagens.indexOf(this.personagem)] =
            response;

          this.closeForm();
        }
      });
  }

  delete(personagem: any): void {
    this.personagemService

      .delete(personagem)

      .pipe(
        catchError((error) => {
          return of(false);
        })
      )

      .subscribe((response: any) => {
        console.log(response);

        if (response) {
          this.personagens.splice(this.personagens.indexOf(this.personagem), 1);
        }
      });
  }
}

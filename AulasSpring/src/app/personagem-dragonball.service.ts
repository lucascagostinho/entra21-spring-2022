import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagemDragonballService {

  personagemUrl:string = "http://localhost:8080/personagens";

  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>(this.personagemUrl)
  }

  getById(personagem:any):Observable<any>{
    return this.http.get<any>(this.personagemUrl,personagem)
  }

  create(personagem:any):Observable<any>{
    return this.http.post<any>(this.personagemUrl, personagem)
  }

  update(personagem:any):Observable<any>{
    return this.http.put<any>(this.personagemUrl + "/" + personagem.id, personagem)
  }

  delete(personagem:any):Observable<any>{
    return this.http.delete<any>(this.personagemUrl + "/" +  personagem.id)
  }

}

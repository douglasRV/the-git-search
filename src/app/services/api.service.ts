import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class APIService {

  constructor(private http: HttpClient) {
  }

  detalhes(name?: any): Observable<any> {

    return this.http.get(environment.apiUrl + 'users/' + name);
  }

  listar(model?: any): Observable<any> {

    return this.http.get(environment.apiUrl + 'search/users?q=' + model.Nome + '&per_page=' + 8 + '&page=' + model.Page);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiURL = 'http://localhost:8080/ws/usuarios';

  constructor(
    private http: HttpClient,
  ) { }

  login(nombreDeUsuario: string, password: string) {
    const body = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
				  xmlns:gs="http://umg.com/soapservice">
      <soapenv:Body>
        <gs:loginRequest>
            <gs:nombreDeUsuario>kjohnson</gs:nombreDeUsuario>
            <gs:password>password101</gs:password>
        </gs:loginRequest>
      </soapenv:Body>
    </soapenv:Envelope>
    `;

    const respuesta =  this.http.post(`${this.apiURL}`, body);

    console.log(respuesta);
  }
}

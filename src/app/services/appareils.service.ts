import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Appareil } from '../models/appareil';
import { Observable, throwError, Subject } from 'rxjs';
import { Action } from '../models/action';
import { catchError, retry } from 'rxjs/operators';
import * as firebase from 'firebase';


const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'responseType': 'text'
    }
  )
};


//const chaconUrl: string = 'http://localhost:8080/switch';
const chaconUrl: string = 'http://192.168.0.28:8080/switch';

@Injectable({
  providedIn: 'root'
})
export class AppareilsService {

  appareils$ = new Subject<Appareil[]>();

  appareilsList: Appareil[] = [
    {
      name: 'Machine à laver',
      description: [
        'Volume: 6 litres',
        'Temps de lavage: 2 heures',
        'Consommation: 173 kWh/an'
      ],
      isOn: true,
      startTime: '',
      endTime: ''
    },
    {
      name: 'Télévision',
      description: [
        'Dimensions: 40 pouces',
        'Consommation: 22 kWh/an'
      ],
      isOn: true,
      startTime: '',
      endTime: ''
    },
    {
      name: 'Ordinateur',
      description: [
        'Marque: fait maison',
        'Consommation: 500 kWh/an'
      ],
      isOn: false,
      startTime: '',
      endTime: ''
    },
    {
      name: 'Lumière salon',
      description: [
        'Prise: 3',
        'Consommation: 500 kWh/an'
      ],
      isOn: false,
      startTime: '',
      endTime: ''
    }
  ];


  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  switchChacon(prise: string, isOn: boolean): Observable<string> {
    let action: Action  = new Action(prise);
    action.switchAction = isOn ? 'ON' : 'OFF';

    return this.http.post<string>(chaconUrl, action, httpOptions)
      .pipe(
        //catchError(err => throwError(new Error('switchChacon')))
        catchError(this.handleError)
      );
  }

  addAppareil(appareil: Appareil) {
    this.appareilsList.push(appareil);
    this.emitAppareils();
  }

  emitAppareils() {
    this.appareils$.next(this.appareilsList.slice());
  }

  saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('appareils').set(this.appareilsList).then(
        (data: firebase.database.DataSnapshot) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  retrieveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('appareils').once('value').then(
        (data: firebase.database.DataSnapshot) => {
          this.appareilsList = data.val();
          this.emitAppareils();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }

}

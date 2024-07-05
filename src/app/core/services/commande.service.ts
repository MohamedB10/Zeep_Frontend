import { Injectable } from '@angular/core';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor() { }

  private commandes: Commande[] = [
    {
      id: 1,
      stamp: 1,
      boitier: 1,
      ancrier: "Noir",
      nombre_ancrier: 2,
      nombre_boitier: 3,
      nombre_dateur: 4,
      etat: "En attente",
      createdDate: new Date(),
      updatedDate: new Date()
    },
    {
      id: 2,
      stamp: 1,
      boitier: 1,
      ancrier: "Bleu",
      nombre_ancrier: 2,
      nombre_boitier: 3,
      nombre_dateur: 4,
      etat: "En attente",
      createdDate: new Date(),
      updatedDate: new Date()
    },
    {
      id: 3,
      stamp: 4,
      boitier: 2,
      ancrier: "Rouge",
      nombre_ancrier: 2,
      nombre_boitier: 3,
      nombre_dateur: 4,
      etat: "En attente",
      createdDate: new Date(),
      updatedDate: new Date()
    },
    {
      id: 4,
      stamp: 1,
      boitier: 1,
      ancrier: "Noir",
      nombre_ancrier: 2,
      nombre_boitier: 3,
      nombre_dateur: 4,
      etat: "En attente",
      createdDate: new Date(),
      updatedDate: new Date()
    }
  ];

  getAllCommandes(): Commande[] {
    return this.commandes;
  }
}

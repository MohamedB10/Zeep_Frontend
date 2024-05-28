import { Injectable } from '@angular/core';
import { Stamp } from '../models/stamp';

@Injectable({
  providedIn: 'root'
})
export class StampService {

  constructor() { }

  private stamps: Stamp[] = [
    {
      id: 1,
      description: 'un stamp n°1 de qualité supérieur',
      imageUrl: "https://images.pexels.com/photos/9017613/pexels-photo-9017613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 2000,
      createdDate: new Date(),
      updatedDate: new Date()
    },

    {
      id: 1,
      description: 'un stamp n°2 de qualité supérieur',
      imageUrl: "https://images.pexels.com/photos/4830753/pexels-photo-4830753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 2000,
      createdDate: new Date(),
      updatedDate: new Date()
    },

    {
      id: 1,
      description: 'un stamp n°3 de qualité supérieur',
      imageUrl: "https://images.pexels.com/photos/4388469/pexels-photo-4388469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 2000,
      createdDate: new Date(),
      updatedDate: new Date()
    },

    {
      id: 1,
      description: 'un stamp n°4 de qualité supérieur',
      imageUrl: "https://images.pexels.com/photos/5874692/pexels-photo-5874692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 2000,
      createdDate: new Date(),
      updatedDate: new Date()
    }
  ]
}

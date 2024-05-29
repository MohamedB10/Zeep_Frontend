import { Injectable } from '@angular/core';
import { Box } from '../models/box';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  constructor() { }

  private boxs: Box[] = [
    {
      id: 1,
      description: 'un stamp n°1 de qualité supérieur',
      imageUrl: "https://images.pexels.com/photos/9017613/pexels-photo-9017613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 2000,
      createdDate: new Date(),
      updatedDate: new Date()
    },

    {
      id: 2,
      description: 'un stamp n°2 de qualité supérieur',
      imageUrl: "https://images.pexels.com/photos/4830753/pexels-photo-4830753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 2000,
      createdDate: new Date(),
      updatedDate: new Date()
    },

    {
      id: 3,
      description: 'un stamp n°3 de qualité supérieur',
      imageUrl: "https://images.pexels.com/photos/4388469/pexels-photo-4388469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 2000,
      createdDate: new Date(),
      updatedDate: new Date()
    },

    {
      id: 4,
      description: 'un stamp n°4 de qualité supérieur',
      imageUrl: "https://images.pexels.com/photos/5874692/pexels-photo-5874692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 2000,
      createdDate: new Date(),
      updatedDate: new Date()
    },

    {
      id: 5,
      description: 'un stamp n°5 de qualité supérieur',
      imageUrl: "https://images.pexels.com/photos/12127282/pexels-photo-12127282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 5000,
      createdDate: new Date(),
      updatedDate: new Date()
    },

    {
      id: 6,
      description: 'un stamp n°6 de qualité supérieur',
      imageUrl: "https://images.pexels.com/photos/8465232/pexels-photo-8465232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 6000,
      createdDate: new Date(),
      updatedDate: new Date()
    },

    {
      id: 7,
      description: 'un stamp n°7 de qualité supérieur',
      imageUrl: "https://images.pexels.com/photos/20664259/pexels-photo-20664259/free-photo-of-a-building-with-green-shutters-and-vines.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 3500,
      createdDate: new Date(),
      updatedDate: new Date()
    },

    {
      id: 8,
      description: 'un stamp n°8 de qualité supérieur',
      imageUrl: "https://images.pexels.com/photos/5547007/pexels-photo-5547007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 4000,
      createdDate: new Date(),
      updatedDate: new Date()
    }
  ];
  getAllBoxs(): Box[] {
    return this.boxs;
  }
}

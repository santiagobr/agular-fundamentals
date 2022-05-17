import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  name = 'Santiago';
  age = 20;
  img =
    'https://static.platzi.com/media/achievements/badge-fundamentos-angular-1e2e6052-abba-4c05-9233-03bba9866523.png';
  btnDisabled = true;

  person = {
    name: 'Santiago',
    age: 20,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  };

  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';

  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: '../assets/images/toy.jpg',
      category: 'Toys',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: '../assets/images/bike.jpg',
    },
    {
      name: 'Colección de albums',
      price: 34,
      image: '../assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: '../assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: '../assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: '../assets/images/glasses.jpg',
    },
  ];

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}

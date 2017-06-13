import {Restaurant} from './restaurant';

export class RestaurantList {
  data: Restaurant[];

  constructor() {
    this.data = [
      new Restaurant('La P\'tite Ardoise', 'Bd Vincent Gache'),
      new Restaurant('Les Prisons de Nantes', 'Place du Bouffay'),
      new Restaurant('L\'Ardoise', 'Rue Léon Blum'),
      new Restaurant('La Vache Nantaise', 'Rue Kervegan'),
      new Restaurant('Les jardins des Fonderies', 'Bd Vincent Gache'),
    ];
  }

  searchName(needle: string) {
    let result: Restaurant[] = [];
    for (let resto of this.data) {
      if (resto.name.toLowerCase().indexOf(needle.toLowerCase()) > -1) {
        result.push(resto);
      }
    }
    //console.log('search', result);
    return result;
  }
}

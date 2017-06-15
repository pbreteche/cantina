import {Restaurant} from '../model/restaurant';
import {InjectionToken} from '@angular/core';

export let RESTAURANT_DATA = new InjectionToken('restaurant_data');

export const RESTAURANT_FIXTURE = [
  new Restaurant(
    'La P\'tite Ardoise', 'Bd Vincent Gache',
    ['Sardines', 'Salade', 'Soupe']
  ),
  new Restaurant(
    'Les Prisons de Nantes', 'Place du Bouffay',
    ['Rumsteack', 'Bavette', 'Filet']
  ),
  new Restaurant(
    'L\'Ardoise', 'Rue Léon Blum',
    ['Huitre', 'Crevettes', 'Bulot']
  ),
  new Restaurant(
    'La Vache Nantaise', 'Rue Kervegan',
    ['Poireau', 'Patate']
  ),
  new Restaurant(
    'Les jardins des Fonderies', 'Bd Vincent Gache',
    ['Hiboux', 'Cailloux', 'Joujoux']
  ),
];

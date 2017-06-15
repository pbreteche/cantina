import { Agencies } from './agencies';

export class Restaurant {
  constructor(
    public name: string = '',
    public address: string = '',
    public dishes: string[] = [],
    public agency: Agencies = Agencies.Nantes
  ) { }

  get city():string {
    return Agencies[this.agency]
  }

  set city(agency: string) {
    this.agency = Agencies[agency]
  }
}

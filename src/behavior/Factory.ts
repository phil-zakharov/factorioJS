export class Factory {
  itemsPerMinutes: number;

  factoredItems = 0;

  constructor (itemsPerMinutes: number) {
    this.itemsPerMinutes = itemsPerMinutes;
  }
}
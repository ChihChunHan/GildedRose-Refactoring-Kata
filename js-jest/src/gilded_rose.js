class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  increaseQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
    }
  }
  decreaseQuality() {
    if (this.quality > 0) {
      this.quality = this.quality - 1;
    }
  }
  decreaseSellIn() {
    this.sellIn = this.sellIn - 1;
  }
  updateBrieQuality() {
    this.decreaseSellIn();
    this.increaseQuality();
    if (this.sellIn < 0) this.increaseQuality();
  }
  updateBackstagePassQuality() {
    this.decreaseSellIn();
    this.increaseQuality();
    if (this.sellIn < 10) this.increaseQuality();
    if (this.sellIn < 5) this.increaseQuality();
    if (this.sellIn < 0) this.quality = 0;
  }
  updateConjuredQuality() {
    this.updateDefaultItemQuality();
    this.updateDefaultItemQuality();
  }
  updateDefaultItemQuality() {
    this.decreaseSellIn();
    this.decreaseQuality();
    if (this.sellIn < 0) this.decreaseQuality();
  }
  updateItemQuality() {
    switch (this.name) {
      case "Sulfuras, Hand of Ragnaros":
        break;
      case "Aged Brie":
        this.updateBrieQuality();
        break;
      case "Backstage passes to a TAFKAL80ETC concert":
        this.updateBackstagePassQuality();
        break;
      case "Conjured Mana Cake":
        this.updateConjuredQuality();
        break;
      default:
        this.updateDefaultItemQuality();
        break;
    }
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      item.updateItemQuality();
    });

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};

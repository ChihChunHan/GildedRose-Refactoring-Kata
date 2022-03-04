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
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      switch (item.name) {
        case "Sulfuras, Hand of Ragnaros":
          break;
        case "Aged Brie":
          item.increaseQuality();
          item.decreaseSellIn();
          if (item.sellIn < 0) {
            item.increaseQuality();
          }
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          item.increaseQuality();
          if (item.sellIn < 11) {
            item.increaseQuality();
          }
          if (item.sellIn < 6) {
            item.increaseQuality();
          }
          item.decreaseSellIn();
          if (item.sellIn < 0) {
            item.quality = item.quality - item.quality;
          }
          break;
        default:
          item.decreaseQuality();
          item.decreaseSellIn();
          if (item.sellIn < 0) {
            item.decreaseQuality();
          }
          break;
      }
    });

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};

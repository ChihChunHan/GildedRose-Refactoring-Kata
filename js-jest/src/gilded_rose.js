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
  updateItemQuality() {
    switch (this.name) {
      case "Sulfuras, Hand of Ragnaros":
        break;
      case "Aged Brie":
        this.increaseQuality();
        if (this.sellIn < 1) {
          this.increaseQuality();
        }
        break;
      case "Backstage passes to a TAFKAL80ETC concert":
        this.increaseQuality();
        if (this.sellIn < 11) {
          this.increaseQuality();
        }
        if (this.sellIn < 6) {
          this.increaseQuality();
        }
        if (this.sellIn < 1) {
          this.quality = 0;
        }
        break;
      default:
        this.decreaseQuality();
        if (this.sellIn < 1) {
          this.decreaseQuality();
        }
        break;
    }
    this.decreaseSellIn();
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

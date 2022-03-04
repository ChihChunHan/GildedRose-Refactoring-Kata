class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  increaseQuality(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }
  decreaseQuality(item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }
  updateQuality() {
    this.items.forEach((item) => {
      if (
        item.name != "Aged Brie" &&
        item.name != "Backstage passes to a TAFKAL80ETC concert" &&
        item.name != "Sulfuras, Hand of Ragnaros"
      ) {
        this.decreaseQuality(item);
      } else {
        this.increaseQuality(item);
        if (
          item.name == "Backstage passes to a TAFKAL80ETC concert" &&
          item.sellIn < 11
        ) {
          this.increaseQuality(item);
        }
        if (
          item.name == "Backstage passes to a TAFKAL80ETC concert" &&
          item.sellIn < 6
        ) {
          this.increaseQuality(item);
        }
      }
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != "Aged Brie") {
          if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
            if (item.name != "Sulfuras, Hand of Ragnaros") {
              this.decreaseQuality(item);
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          this.increaseQuality(item);
        }
      }
    });

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};

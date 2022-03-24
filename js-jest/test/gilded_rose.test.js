const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  const items = [
    new Item("+5 Dexterity Vest", 10, 20),
    new Item("Aged Brie", 2, 0),
    new Item("Elixir of the Mongoose", 5, 7),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

    // This Conjured item does not work properly yet
    new Item("Conjured Mana Cake", 3, 6),
  ];
  const gildedRose = new Shop(items);
  const tenDaysAnswer = [
    [19, 1, 6, 80, 80, 21, 50, 50],
    [18, 2, 5, 80, 80, 22, 50, 50],
    [17, 4, 4, 80, 80, 23, 50, 50],
    [16, 6, 3, 80, 80, 24, 50, 50],
    [15, 8, 2, 80, 80, 25, 50, 50],
    [14, 10, 0, 80, 80, 27, 50, 0],
    [13, 12, 0, 80, 80, 29, 50, 0],
    [12, 14, 0, 80, 80, 31, 50, 0],
    [11, 16, 0, 80, 80, 33, 50, 0],
    [10, 18, 0, 80, 80, 35, 50, 0],
  ];
  tenDaysAnswer.forEach((answers, index) => {
    it(`day ${index + 1}`, function () {
      const items = gildedRose.updateQuality();
      answers.forEach((answer, index) => {
        expect(items[index].quality).toBe(answer);
      });
    });
  });
});

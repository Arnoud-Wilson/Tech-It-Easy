// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//////////////////////////// Opdracht èèn /////////////////////////////////////

const televisionNames = inventory.map((television) => {
  return television.name;
});

console.log(televisionNames);

//

const televisionsInStock = inventory.filter((stock) => {
  return stock.originalStock === stock.sold;
});

console.log(televisionsInStock);

//

const withAmbilight = inventory.filter((ambilight) => {
  return ambilight.options.ambiLight;
});

console.log(withAmbilight);

//

const pricingOrder = inventory.sort((a, b) => {
  if (a.price >= b.price) {
    return 1;
  }
    else if (a.price <= b.price) {
      return -1
    }
      else return 0
});

console.log(pricingOrder);

////////////////////////////// Opdracht twee////////////////////////////////////

function totalAmountSold(inventory) {
  let totalOut = 0;
  for (let i = 0; i < inventory.length; i++){
    totalOut = totalOut + inventory [i].sold;
  }
  return totalOut;
};

console.log(totalAmountSold(inventory));

//

const totalSold = document.getElementById("total-amount-out");

totalSold.textContent = "Totaal aantal verkochte televisies is: " + totalAmountSold(inventory);

//

function totalAmountPurchased(inventory) {
  let totalIn = 0;
  for (let i = 0; i < inventory.length; i++) {
    totalIn = totalIn + inventory [i].originalStock;
  }
  return totalIn;
};

console.log(totalAmountPurchased(inventory));

//

const totalPurchased = document.getElementById("total-amount-in");

totalPurchased.textContent = "Totaal aantal ingekochte televisies is: " + totalAmountPurchased(inventory);

//

const totalGoal = document.getElementById("total-goal");

totalGoal.textContent = "We hebben er nog " + (totalAmountPurchased(inventory) - totalAmountSold(inventory)) + " om te verkopen!";

////////////////////////////// Opdracht drie/////////////////////////////////////



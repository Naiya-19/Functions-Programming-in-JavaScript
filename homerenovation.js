let addfloorCoverings = parseInt(prompt("Enter the cost for floor coverings:"))
if (addfloorCoverings > 100)
  addfloorCoverings *= 1.1;
const floorCoveringsArea = document.querySelector(".floorCoverings");
floorCoveringsArea.innerHTML = `FloorCoverings $ ${addfloorCoverings}`;


let furniture = parseInt(prompt("Enter the cost for the furniture:"))
if (furniture > 100)
  furniture *= 1.1;
const furnitureArea = document.querySelector(".furniture");
furnitureArea.innerHTML = `Furniture $ ${furniture}`;


function addPaintAndSupplies(totalCost, callback) {

  let cost = prompt("Enter the cost for the paint and supplies :");
  cost = parseFloat(cost);

  if (cost > 100)
    cost *= 1.1;
  let paintArea = document.querySelector(".paint");
  paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;
  callback(totalCost + cost);
  return (totalCost + cost);
}

const updateTotals = (cost) => {
  let totalsArea = document.querySelector(".totalCost");
  totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;
}
let totalCost = 0;
totalCost = addPaintAndSupplies(totalCost, updateTotals);






















let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function orderReceipt(order) {
  console.log("QTY".padEnd(10) + "Item".padEnd(20) + "Total");
  let costOfAllOrders = 0;
  order.forEach((product) => {
    let { itemName, quantity, unitPrice } = product;
    let total = quantity * unitPrice;
    costOfAllOrders += total;
    console.log(
      `${quantity.toString().padEnd(10)}${itemName.padEnd(20)}${total}`
    );
  });
  console.log(`\nTotal: ${costOfAllOrders}`);
}
orderReceipt(order);

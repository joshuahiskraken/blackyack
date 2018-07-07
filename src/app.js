let products = [
    { name: 'Running shoes', price: 75 },
    { name: 'Golf shoes',    price: 85 },
    { name: 'Dress shoes',   price: 95 },
    { name: 'Walking shoes', price: 65 },
    { name: 'Sandals',       price: 55 }
  ];

  products.forEach((product) => {
    product.forEach((size) => {
      console.log(size);
    });
  });
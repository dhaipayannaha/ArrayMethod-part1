

const sales = [
    { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
    { category: "Electronics", item: "Mouse", price: 25, quantity: 5 },
    { category: "Clothing", item: "Shirt", price: 50, quantity: 10 },
    { category: "Electronics", item: "Keyboard", price: 75, quantity: 3 },
    { category: "Clothing", item: "Pants", price: 100, quantity: 7 },
    { category: "Electronics", item: "Monitor", price: 300, quantity: 2 },
    { category: "Clothing", item: "Jacket", price: 150, quantity: 4 },
    { category: "Electronics", item: "Headphones", price: 100, quantity: 6 },
    { category: "Clothing", item: "Shoes", price: 200, quantity: 3 },
    { category: "Electronics", item: "Tablet", price: 400, quantity: 2 },
];


const totalsalesByCategory = sales.reduce((table, sale) => {
    const { category, price, quantity } = sale;
    table[category] = {
        totalRevenue: 0,
        itemCount: 0
    };
    return table;
}, {})

console.log(totalsalesByCategory);
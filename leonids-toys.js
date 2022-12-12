const toys = [
    {
    id: 1,
    name: "Remote Control Racecar",
    price: 24.99,
    brand: "Force1",
    stock: 40,
    },
    {
    id: 2,
    name: "Pogo Stick",
    price: 39.99,
    brand: "Flybar",
    stock: 15,
    },
    {
    id: 3,
    name: "Monopoly",
    price: 21.99,
    brand: "Hasbro",
    stock: 20,
    }
]
const legoSet = {
    id: 3,
    name: "Star Wars AT-TE Walker",
    price: 139.99,
    brand: "LEGO",
    stock: 10
}
const basketball = {
    id:4,
    name: "NBA Official Game Ball",
    price: 38.86,
    brand: "Wilson",
    stock: 26
}
toys.push(legoSet)
toys.push(basketball)

for (const toy of toys) {
    toy.price = toy.price*1.05 
    console.log(`The ${toy.brand} ${toy.name} costs $${toy.price} and there are ${toy.stock} in stock.`)
}
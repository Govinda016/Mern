let products = [
                {
                    Name: "iphone 11",
                    price: 2000000,
                    discount: 10,
                    brand: "apple",
                    category: "mobile"
                },
                {
                    Name: "iphone 12",
                    price: 2000000,
                    discount: 10,
                    brand: "apple",
                    category: "mobile"
                },
                {
                    Name: "iphone 13",
                    price: 2000000,
                    discount: 10,
                    brand: "apple",
                    category: "mobile"
                },
                {
                    Name: "iphone 13Pro",
                    price: 2000000,
                    discount: 10,
                    brand: "apple",
                    category: "mobile"
                },
                 {
                    Name: "phone 11",
                    price: 11000,
                    discount: 10,
                    brand: "samsung",
                    category: "mobile"
                },
                {
                    Name: "phone 12",
                    price: 10000,
                    discount: 10,
                    brand: "samsung",
                    category: "mobile"
                },
                {
                    Name: "phone 13",
                    price: 500,
                    discount: 10,
                    brand: "samsung",
                    category: "mobile"
                },
                {
                    Name: "phone 13Pro",
                    price: 2000000,
                    discount: 10,
                    brand: "apple",
                    category: "mobile"
                },
]



products.map(function (o, i) {
    if (o.price >= 1000) {
        filterlist.push(o);
    }
})
let filterlist = [];
filterlist = products.filter(function (item, index) {
    return (item.price>=1000)
})


console.log(filterlist);
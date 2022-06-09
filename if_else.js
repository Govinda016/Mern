
            var products = [
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
            ]

            if (products[0].discount > 0) {
                products[0].after_discount = products[0].price - products[0].price * products[0].discount / 100;
            }
            else {
                products[0].after_discount = products[0].price;
}
              if (products[1].discount > 0) {
                products[1].after_discount = products[1].price - products[1].price * products[1].discount / 100;
            }
            else {
                products[1].after_discount = products[1].price;
}
            
console.log(products)
            console.log("")
        

    



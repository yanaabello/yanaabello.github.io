var products = [
    {
        "category": "Pasta",
        "contents": [
            {
                "isAvailable": true,
                "name": "Truffle Cream Pasta",
                "code": "TRFL PST",
                "price": 220,
                "img": "assets/img/truffle.png"
            },
            {
                "isAvailable": true,
                "name": "Oven Fresh Lasagna",
                "code": "LSGNA",
                "price": 190,
                "img": "assets/img/lasagna.png"
            },
            {
                "isAvailable": true,
                "name": "Tuna Pasta",
                "code": "TNA PST",
                "price": 180,
                "img": "assets/img/tuna.png"
            },
            {
                "isAvailable": true,
                "name": "Cheesy Spaghetti",
                "code": "CHSY SPAG",
                "price": 170,
                "img": "assets/img/spaghetti.png"
            },
            {
                "isAvailable": true,
                "name": "Fettuccine Carbonara",
                "code": "FTCN CARB",
                "price": 175,
                "img": "assets/img/carbonara.png"
            }
        ]
    },
    {
        "category": "Pizza",
        "contents": [
            {
                "isAvailable": true,
                "name": "Ham & Cheese",
                "code": "H&C",
                "img": "assets/img/ham&cheese.png",
                "sizes": [
                    {
                        "name": "personal",
                        "code": "PS",
                        "price": 60
                    },
                    {
                        "name": "small",
                        "code": "SM",
                        "price": 120
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 180
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 240
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Pepperoni",
                "code": "PPRONI",
                "img": "assets/img/pepperoni.png",
                "sizes": [
                    {
                        "name": "personal",
                        "code": "PS",
                        "price": 80
                    },
                    {
                        "name": "small",
                        "code": "SM",
                        "price": 140
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 200
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 260
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Hawaiian",
                "code": "HWN",
                "img": "assets/img/hawaiian.png",
                "sizes": [
                    {
                        "name": "personal",
                        "code": "PS",
                        "price": 80
                    },
                    {
                        "name": "small",
                        "code": "SM",
                        "price": 140
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 200
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 260
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Four Cheese & Bacon",
                "code": "C&B",
                "img": "assets/img/cheese&bacon.png",
                "sizes": [
                    {
                        "name": "personal",
                        "code": "PS",
                        "price": 100
                    },
                    {
                        "name": "small",
                        "code": "SM",
                        "price": 180
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 240
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 300
                    }
                ]
            }
        ]
    },
    {
        "category": "Chicken",
        "contents": [
            {
                "isAvailable": true,
                "name": "1 PC Fried Chicken w/ Rice",
                "code": "1PC CKN",
                "price": 110,
                "img": "assets/img/c1.png"
            },
            {
                "isAvailable": true,
                "name": "2 PC Fried Chicken w/ Rice",
                "code": "2PC CKN",
                "price": 180,
                "img": "assets/img/c2.png"
            },
            {
                "isAvailable": true,
                "name": "Spaghetti and Fried Chicken",
                "code": "SPAG & CKN",
                "price": 240,
                "img": "assets/img/c3.png"
            },
            {
                "isAvailable": true,
                "name": "Pork BBQ and Fried Chicken",
                "code": "BBQ & CKN ",
                "price": 200,
                "img": "assets/img/c4.png"
            }

        ]
    },
    {
        "category": "Fruit Soda",
        "contents": [
            {
                "isAvailable": true,
                "name": "Strawberry Soda",
                "code": "STRW SOD",
                "img": "assets/img/f1.png",
                "sizes": [
                    {
                        "name": "regular",
                        "code": "RG",
                        "price": 60
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 80
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 100
                    },
                    {
                        "name": "pitcher",
                        "code": "PT",
                        "price": 150
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Mixed Berries Soda",
                "code": "MXBR SOD",
                "img": "assets/img/f2.png",
                "sizes": [
                    {
                        "name": "regular",
                        "code": "RG",
                        "price": 60
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 80
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 100
                    },
                    {
                        "name": "pitcher",
                        "code": "PT",
                        "price": 150
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Strawberry Yakult",
                "code": "STRW YAK",
                "img": "assets/img/f3.png",
                "sizes": [
                    {
                        "name": "regular",
                        "code": "RG",
                        "price": 80
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 100
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 120
                    },
                    {
                        "name": "pitcher",
                        "code": "PT",
                        "price": 180
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Lemon Yakult",
                "code": "LEMN YAK",
                "img": "assets/img/f4.png",
                "sizes": [
                    {
                        "name": "regular",
                        "code": "RG",
                        "price": 80
                    },
                    {
                        "name": "medium",
                        "code": "MD",
                        "price": 100
                    },
                    {
                        "name": "large",
                        "code": "LG",
                        "price": 120
                    },
                    {
                        "name": "pitcher",
                        "code": "PT",
                        "price": 180
                    }
                ]
            }
        ]
    },
    {
        "category": "Add Ons",
        "contents": [
            {
                "isAvailable": true,
                "name": "Gravy",
                "code": "Gravy",
                "price": 20,
                "img": "assets/img/gravy.png"
            },
            {
                "isAvailable": true,
                "name": "Fried Egg",
                "code": "FRD EGG",
                "price": 20,
                "img": "assets/img/egg.png"
            },
            {
                "isAvailable": true,
                "name": "Rice",
                "code": "RICE",
                "price": 30,
                "img": "assets/img/rice.png"
            },
            {
                "isAvailable": true,
                "name": "Mashed Potato",
                "code": "MSH POT",
                "price": 50,
                "img": "assets/img/potato.jpg"
            }

        ]
    }

];
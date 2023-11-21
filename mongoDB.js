//Products
//cteating of database
  //creating collections of products
  db.createCollection("products")
  //Inserting of products
  db.products.insertMany([
    {
        "id": "1",
        "product_name": "Intelligent Fresh Chips",
        "product_price": 655.00,
        "product_material": "Concrete",
        "product_color": "mint green"
    },
    {
        "id": "2",
        "product_name": "Practical Fresh Sausages",
        "product_price": 911.0,
        "product_material": "Cotton",
        "product_color": "indigo"
    },
    {
        "id": "3",
        "product_name": "Refined Steel Car",
        "product_price": 690.00,
        "product_material": "Rubber",
        "product_color": "gold"
    },
    {
        "id": "4",
        "product_name": "Gorgeous Plastic Pants",
        "product_price": 492.00,
        "product_material": "Soft",
        "product_color": "plum"
    },
    {
        "id": "5",
        "product_name": "Sleek Cotton Chair",
        "product_price": 33.00,
        "product_material": "Fresh",
        "product_color": "black"
    },
    {
        "id": "6",
        "product_name": "Awesome Wooden Towels",
        "product_price": 474.00,
        "product_material": "Plastic",
        "product_color": "orange"
    },
    {
        "id": "7",
        "product_name": "Practical Soft Shoes",
        "product_price": 500.00,
        "product_material": "Rubber",
        "product_color": "pink"
    },
    {
        "id": "8",
        "product_name": "Incredible Steel Hat",
        "product_price": 78.00,
        "product_material": "Rubber",
        "product_color": "violet"
    },
    {
        "id": "9",
        "product_name": "Awesome Wooden Ball",
        "product_price": 28.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "10",
        "product_name": "Generic Wooden Pizza",
        "product_price": 84.00,
        "product_material": "Frozen",
        "product_color": "indigo"
    },
    {
        "id": "11",
        "product_name": "Unbranded Wooden Cheese",
        "product_price":26.00,
        "product_material": "Soft",
        "product_color": "black"
    },
    {
        "id": "12",
        "product_name": "Unbranded Plastic Salad",
        "product_price": 89.00,
        "product_material": "Wooden",
        "product_color": "pink"
    },
    {
        "id": "13",
        "product_name": "Gorgeous Cotton Keyboard",
        "product_price": 37.00,
        "product_material": "Concrete",
        "product_color": "sky blue"
    },
    {
        "id": "14",
        "product_name": "Incredible Steel Shirt",
        "product_price": 54.00,
        "product_material": "Metal",
        "product_color": "white"
    },
    {
        "id": "15",
        "product_name": "Ergonomic Cotton Hat",
        "product_price": 43.00,
        "product_material": "Rubber",
        "product_color": "mint green"
    },
    {
        "id": "16",
        "product_name": "Small Soft Chair",
        "product_price": 47.00,
        "product_material": "Cotton",
        "product_color": "teal"
    },
    {
        "id": "17",
        "product_name": "Incredible Metal Car",
        "product_price":36.00,
        "product_material": "Fresh",
        "product_color": "indigo"
    },
    {
        "id": "18",
        "product_name": "Licensed Plastic Bacon",
        "product_price":88.00,
        "product_material": "Steel",
        "product_color": "yellow"
    },
    {
        "id": "19",
        "product_name": "Intelligent Cotton Chips",
        "product_price": 46.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "20",
        "product_name": "Handcrafted Wooden Bacon",
        "product_price": 36.00,
        "product_material": "Concrete",
        "product_color": "lime"
    },
    {
        "id": "21",
        "product_name": "Unbranded Granite Chicken",
        "product_price": 90.00,
        "product_material": "Metal",
        "product_color": "gold"
    },
    {
        "id": "22",
        "product_name": "Ergonomic Soft Hat",
        "product_price": 99.00,
        "product_material": "Rubber",
        "product_color": "black"
    },
    {
        "id": "23",
        "product_name": "Intelligent Steel Pizza",
        "product_price": 95.00,
        "product_material": "Cotton",
        "product_color": "azure"
    },
    {
        "id": "24",
        "product_name": "Tasty Rubber Cheese",
        "product_price":47.00,
        "product_material": "Frozen",
        "product_color": "orchid"
    },
    {
        "id": "25",
        "product_name": "Licensed Steel Car",
        "product_price":20.00,
        "product_material": "Cotton",
        "product_color": "indigo"
    },
])
//1.Find all the information about each products
db.products.find()
//output:
guvi> db.products.find()
[
  {
    _id: ObjectId("655b83837cd3e6dab8f6a813"),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a814"),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a815"),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a816"),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a817"),
    id: '5',
    product_name: 'Sleek Cotton Chair',
    product_price: 33,
    product_material: 'Fresh',
    product_color: 'black'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a818"),
    id: '6',
    product_name: 'Awesome Wooden Towels',
    product_price: 474,
    product_material: 'Plastic',
    product_color: 'orange'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a819"),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a81a"),
    id: '8',
    product_name: 'Incredible Steel Hat',
    product_price: 78,
    product_material: 'Rubber',
    product_color: 'violet'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a81b"),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a81c"),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a81d"),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a81e"),
    id: '12',
    product_name: 'Unbranded Plastic Salad',
    product_price: 89,
    product_material: 'Wooden',
    product_color: 'pink'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a81f"),
    id: '13',
    product_name: 'Gorgeous Cotton Keyboard',
    product_price: 37,
    product_material: 'Concrete',
    product_color: 'sky blue'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a820"),
    id: '14',
    product_name: 'Incredible Steel Shirt',
    product_price: 54,
    product_material: 'Metal',
    product_color: 'white'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a821"),
    id: '15',
    product_name: 'Ergonomic Cotton Hat',
    product_price: 43,
    product_material: 'Rubber',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a822"),
    id: '16',
    product_name: 'Small Soft Chair',
    product_price: 47,
    product_material: 'Cotton',
    product_color: 'teal'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a823"),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a824"),
    id: '18',
    product_name: 'Licensed Plastic Bacon',
    product_price: 88,
    product_material: 'Steel',
    product_color: 'yellow'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a825"),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a826"),
    id: '20',
    product_name: 'Handcrafted Wooden Bacon',
    product_price: 36,
    product_material: 'Concrete',
    product_color: 'lime'
  }
]
// Type "it" for more
guvi> it
[
  {
    _id: ObjectId("655b83837cd3e6dab8f6a827"),
    id: '21',
    product_name: 'Unbranded Granite Chicken',
    product_price: 90,
    product_material: 'Metal',
    product_color: 'gold'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a828"),
    id: '22',
    product_name: 'Ergonomic Soft Hat',
    product_price: 99,
    product_material: 'Rubber',
    product_color: 'black'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a829"),
    id: '23',
    product_name: 'Intelligent Steel Pizza',
    product_price: 95,
    product_material: 'Cotton',
    product_color: 'azure'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a82a"),
    id: '24',
    product_name: 'Tasty Rubber Cheese',
    product_price: 47,
    product_material: 'Frozen',
    product_color: 'orchid'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a82b"),
    id: '25',
    product_name: 'Licensed Steel Car',
    product_price: 20,
    product_material: 'Cotton',
    product_color: 'indigo'
  }
]


//2.Find the product price which are between 400 to 800
db.products.find({product_price : { $gt: 400, $lt: 800 } })
//output:
guvi> db.products.find({product_price : { $gt: 400, $lt: 800 } })
[
  {
    _id: ObjectId("655b83837cd3e6dab8f6a813"),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a815"),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a816"),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a818"),
    id: '6',
    product_name: 'Awesome Wooden Towels',
    product_price: 474,
    product_material: 'Plastic',
    product_color: 'orange'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a819"),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  }
]
//3.Find the product price which are not between 400 to 600
db.products.find({product_price:{$not:{$gt:400,$lt:600}}});
//output:
guvi> db.products.find({product_price:{$not:{$gt:400,$lt:600}}});
[
  {
    _id: ObjectId("655b83837cd3e6dab8f6a813"),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a814"),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a815"),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a817"),
    id: '5',
    product_name: 'Sleek Cotton Chair',
    product_price: 33,
    product_material: 'Fresh',
    product_color: 'black'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a81a"),
    id: '8',
    product_name: 'Incredible Steel Hat',
    product_price: 78,
    product_material: 'Rubber',
    product_color: 'violet'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a81b"),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a81c"),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a81d"),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a81e"),
    id: '12',
    product_name: 'Unbranded Plastic Salad',
    product_price: 89,
    product_material: 'Wooden',
    product_color: 'pink'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a81f"),
    id: '13',
    product_name: 'Gorgeous Cotton Keyboard',
    product_price: 37,
    product_material: 'Concrete',
    product_color: 'sky blue'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a820"),
    id: '14',
    product_name: 'Incredible Steel Shirt',
    product_price: 54,
    product_material: 'Metal',
    product_color: 'white'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a821"),
    id: '15',
    product_name: 'Ergonomic Cotton Hat',
    product_price: 43,
    product_material: 'Rubber',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a822"),
    id: '16',
    product_name: 'Small Soft Chair',
    product_price: 47,
    product_material: 'Cotton',
    product_color: 'teal'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a823"),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a824"),
    id: '18',
    product_name: 'Licensed Plastic Bacon',
    product_price: 88,
    product_material: 'Steel',
    product_color: 'yellow'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a825"),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a826"),
    id: '20',
    product_name: 'Handcrafted Wooden Bacon',
    product_price: 36,
    product_material: 'Concrete',
    product_color: 'lime'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a827"),
    id: '21',
    product_name: 'Unbranded Granite Chicken',
    product_price: 90,
    product_material: 'Metal',
    product_color: 'gold'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a828"),
    id: '22',
    product_name: 'Ergonomic Soft Hat',
    product_price: 99,
    product_material: 'Rubber',
    product_color: 'black'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a829"),
    id: '23',
    product_name: 'Intelligent Steel Pizza',
    product_price: 95,
    product_material: 'Cotton',
    product_color: 'azure'
  }
]
//Type "it" for more
guvi> it
[
  {
    _id: ObjectId("655b83837cd3e6dab8f6a82a"),
    id: '24',
    product_name: 'Tasty Rubber Cheese',
    product_price: 47,
    product_material: 'Frozen',
    product_color: 'orchid'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a82b"),
    id: '25',
    product_name: 'Licensed Steel Car',
    product_price: 20,
    product_material: 'Cotton',
    product_color: 'indigo'
  }
]
//4.List the four product which are grater than 500 in price
db.products.find({product_price:{$gt:500}}).limit(4);
//output:
guvi> db.products.find({product_price:{$gt:500}}).limit(4);
[
  {
    _id: ObjectId("655b83837cd3e6dab8f6a813"),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a814"),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a815"),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  }
]
//5.Find the product name and product material of each products
db.products.find().forEach(function (prod) {print("Product_Name: " + prod.product_name),print("product_material: "+prod.product_material)})
//output:
guvi> db.products.find().forEach(function (prod) {print("Product_Name: " + prod.product_name),print("product_material: "+prod.product_material)})
Product_Name: Intelligent_Fresh_Chips
product_material: Concrete
Product_Name: Practical_Fresh_Sausages
product_material: Cotton
Product_Name: Refined_Steel_Car
product_material: Rubber
Product_Name: Gorgeous_Plastic_Pants
product_material: Soft
Product_Name: Sleek_Cotton_Chair
product_material: Fresh
Product_Name: Awesome_Wooden_Towels
product_material: Plastic
Product_Name: Practical_Soft_Shoes
product_material: Rubber
Product_Name: Incredible_Steel_Hat
product_material: Rubber
Product_Name: Awesome_Wooden_Ball
product_material: Soft
Product_Name: Generic_Wooden_Pizza
product_material: Frozen
Product_Name: Unbranded_Wooden_Cheese
product_material: Soft
Product_Name: Unbranded_Plastic_Salad
product_material: Wooden
Product_Name: Gorgeous_Cotton_Keyboard
product_material: Concrete
Product_Name: Incredible_Steel_Shirt
product_material: Metal
Product_Name: Ergonomic_Cotton_Hat
product_material: Rubber
Product_Name: Small_Soft_Chair
product_material: Cotton
Product_Name: Incredible_Metal_Car
product_material: Fresh
Product_Name: Licensed_Plastic_Bacon
product_material: Steel
Product_Name: Intelligent_Cotton_Chips
product_material: Soft
Product_Name: Handcrafted_Wooden_Bacon
product_material: Concrete
Product_Name: Unbranded_Granite_Chicken
product_material: Metal
Product_Name: Ergonomic_Soft_Hat
product_material: Rubber
Product_Name: Intelligent_Steel_Pizza
product_material: Cotton
Product_Name: Tasty_Rubber_Cheese
product_material: Frozen
Product_Name: Licensed_Steel_Car
product_material: Cotton

//6.Find the product with a row id of 10
db.products.find({id:"10"})
//output:
guvi> db.products.find({id:"10"})
[
  {
    _id: ObjectId("655b83837cd3e6dab8f6a81c"),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  }
]
//7.Find only the product name and product material
db.products.find().limit(1).forEach(function (prod) {print("Product_Name: " + prod.product_name),print("product_material: "+prod.product_material)})
//output:
guvi> db.products.find().limit(1).forEach(function (prod) {print("Product_Name: " + prod.product_name),print("product_material: "+prod.product_material)})
Product_Name: Intelligent_Fresh_Chips
product_material: Concrete
//8.Find all products which contain the value of soft in product material 
db.products.find({product_material:"Soft"})
//output:
guvi> db.products.find({product_material:"Soft"})
[
  {
    _id: ObjectId("655b83837cd3e6dab8f6a816"),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a81b"),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a81d"),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId("655b83837cd3e6dab8f6a825"),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  }
]
//9.Find products which contain product color indigo  and product price 492.00
db.products.find({ $and: [{ product_color: "indigo" }, { product_price: 492.00 }] });
//output:
// no contents

//10.Delete the products which product price value are same
db.products.aggregate([{$group:{_id:"$product_price",duplicate:{$addToSet:"$_id"},TotalCount:{$sum:1},},},{$match:{TotalCount:{$gt:1}},},]).forEach((doc)=>{doc.duplicate.shift();db.products.deleteMany({_id:{$in:doc.duplicate}});});
//output:
//deleted  
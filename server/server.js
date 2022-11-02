const express = require("express");
const inventoryDB = require("./InventoryDB");
const orderDB = require("./OrderDB");
const app = express();
const port = 7000;
const cors = require("cors");
const axios = require("axios");
const crypto = require("crypto");

const corsOptions = {
    origin:"*",
    credentials:true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.json())
app.listen(port, () => {
    console.log("RUN http://localhost:7000")
})

const dropTable = "DROP TABLE IF EXISTS Item"
const createTable = "CREATE TABLE Item (id int NOT NULL AUTO_INCREMENT, title varchar(255), img varchar(255), price int, quantity int, description varchar(2000), PRIMARY KEY (id) );"

const dropTableOrder = "DROP TABLE IF EXISTS Orders"
const createTableOrder = "CREATE TABLE Orders (id int NOT NULL AUTO_INCREMENT, buy_quantity varchar(255), " +
    "credit_card_number varchar(255), expir_date varchar(255), cvvCode varchar(255), card_holder_name varchar(255)," +
    " address_1 varchar(255), address_2 varchar(255), city varchar(255), state varchar(255), zip varchar(255)," +
    " expedited BOOL, PRIMARY KEY (id) );"


const items = [{id: 1, img: "/Cheesecake-Danish.jpg", title: "Cheesecake Danish", price: "1", quantity: 20,
    description: "This delicious breakfast pastry features a classic flaky Danish pastry crust filled with cream cheese and topped with a drizzle of icing for savory-sweet taste in every bite."},
    {id: 2, img: "/Strawberry-Danish.jpg", title: "Strawberry Danish", price: "1", quantity: 30,
        description: "These Danish rolls are made with a croissant dough shaped into coils, filled with fresh strawberries, and drizzled with a hot glaze"},
    {id: 3, img: "/Apple-Danish.jpg", title: "Apple Danish", price: "1", quantity: 40, description: "A pastry that combines layers of buttery, flaky, yeast-leavened dough with apple filling drizzled with a powdered sugar icing."},
    {id: 4, img: "/Cherry-Danish.jpg", title: "Cherry Danish", price: "1", quantity: 50, description: "This fruity, fun breakfast danish has layers of cream cheese, cherry pie filling and  a crumble topping."},
    {id: 5, img: "/Peach-Danish.jpg", title: "Peach Danish", price: "1", quantity: 50, description: "A danish with ripe peach and milky custard on top. The blend of the sweetness of fruit and cream makes a rich, irresistible treat"}]
const inserts = []

items.forEach(function (item, index) {
    inserts.push("INSERT INTO Item (title, price, quantity, img, description) VALUES ("
        + "'" + item.title + "', "
        + item.price + ", "
        + item.quantity + ", "
        + "'" + item.img + "', "
        + "'" + item.description + "')")
});
console.log(inserts[0])
console.log(dropTable)
console.log(createTable)
app.get("/", function(req, res) {
    res.send("Hello World!")
})

app.get("/set_table", function(req, res) {
    inventoryDB.query(dropTable)
    inventoryDB.query(createTable)
    orderDB.query(dropTableOrder)
    orderDB.query(createTableOrder)
    for (let i = 0; i < inserts.length; i++) {
        inventoryDB.query(inserts[i])
    }
    const result = inventoryDB.query("SELECT * FROM Item");
    return res.send(result);
})

app.get("/get_item", function(req, res) {
    const result = inventoryDB.query("SELECT * FROM Item");
    return res.send(result);
})

app.get("/get_order", function(req, res) {
    const result = orderDB.query("SELECT * FROM Orders");
    return res.send(result);
})

app.post("/update_quantity", function (req, res) {
    let IDS = req.body.title;
    let quantity = req.body.quantity;

    IDS.forEach((id, index) => {
        const quan = quantity[index];
        const result1 = inventoryDB.query("UPDATE Item SET quantity = quantity - " + (quan) + " WHERE id = " + (id+1) + ";")
    })

    return res.send('');
})

app.post("/add_order", function (req, res) {
    let order = req.body.order;
    const result = inventoryDB.query("SELECT quantity FROM Item").map(({quantity})=>quantity);
    console.log(result)
    console.log(order.buyQuantity)
    const quantities = new Array();
    const ids = new Array()
    for (let i = 0;i<result.length;i++) {
        if (result[i] < order.buyQuantity[i]) {
            return res.send('ERROR');
        }
        if (order.buyQuantity[i] > 0) {
            quantities.push(order.buyQuantity[i])
            ids.push(i)
        }
    }
    orderDB.query("INSERT INTO orders (buy_quantity, credit_card_number, expir_date, cvvCode," +
        " card_holder_name, address_1, address_2, city, state, zip, expedited) VALUES ("
        + "'" + order.buyQuantity + "', "
        + "'" + order.credit_card_number + "', "
        + "'" + order.expir_date + "', "
        + "'" + order.cvvCode + "', "
        + "'" + order.card_holder_name + "', "
        + "'" + order.address_1 + "', "
        + "'" + order.address_2 + "', "
        + "'" + order.city + "', "
        + "'" + order.state + "', "
        + "'" + order.zip + "', "
        + order.expedited + ")")
    axios
        .post('http://localhost:7000/update_quantity', {title: ids, quantity: quantities})
        .then(() => console.log('Quantity updated'))
        .catch(err => {
            console.error(err);
        })

    return res.send('' + crypto.randomInt(1000000, 10000000));
})
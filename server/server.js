const express = require("express");
const db = require("./db");
const app = express();
const port = 7000;
const cors = require("cors");

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
    db.query(dropTable)
    db.query(createTable)
    for (let i = 0; i < inserts.length; i++) {
        db.query(inserts[i])
    }
    const result = db.query("SELECT * FROM Item");
    return res.send(result);
})

app.get("/get_item", function(req, res) {
    const result = db.query("SELECT * FROM Item");
    return res.send(result);
})

app.post("/update_quantity", function (req, res) {
    let IDS = req.body.title;
    let quantity = req.body.quantity;

    IDS.forEach((id, index) => {
        const quan = quantity[index];
        const result1 = db.query("UPDATE Item SET quantity = " + quan + " WHERE Id = " + id + ";")
    })

    return res.send('');
})
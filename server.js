const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8080;

const dataFile = path.join(__dirname, "data", "foods.json");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

// Read foods from JSON
function getFoods() {
    const data = fs.readFileSync(dataFile, "utf8");
    return JSON.parse(data);
}

// Save foods to JSON
function saveFoods(foods) {
    fs.writeFileSync(dataFile, JSON.stringify(foods, null, 2));
}

// Home - View all foods
app.get("/", (req, res) => {
    const foods = getFoods();
    res.render("index", { foods });
});

// Add food page
app.get("/add", (req, res) => {
    res.render("add");
});

// Add food
app.post("/add", (req, res) => {
    const foods = getFoods();

    const newFood = {
        id: foods.length > 0 ? foods[foods.length - 1].id + 1 : 1,
        name: req.body.name,
        category: req.body.category,
        price: Number(req.body.price),
        available: req.body.available === "true"
    };

    foods.push(newFood);
    saveFoods(foods);

    res.redirect("/");
});

// Edit food page
app.get("/edit/:id", (req, res) => {
    const foods = getFoods();

    const food = foods.find(
        item => item.id === Number(req.params.id)
    );

    if (!food) {
        return res.status(404).send("Food not found");
    }

    res.render("edit", { food });
});

// Update food
app.post("/edit/:id", (req, res) => {
    const foods = getFoods();

    const id = Number(req.params.id);

    const food = foods.find(item => item.id === id);

    if (!food) {
        return res.status(404).send("Food not found");
    }

    food.name = req.body.name;
    food.category = req.body.category;
    food.price = Number(req.body.price);
    food.available = req.body.available === "true";

    saveFoods(foods);

    res.redirect("/");
});

// Delete food
app.post("/delete/:id", (req, res) => {
    let foods = getFoods();

    const id = Number(req.params.id);

    foods = foods.filter(item => item.id !== id);

    saveFoods(foods);

    res.redirect("/");
});

// Order page
app.get("/order/:id", (req, res) => {
    const foods = getFoods();

    const food = foods.find(
        item => item.id === Number(req.params.id)
    );

    if (!food) {
        return res.status(404).send("Food not found");
    }

    res.render("order", { food });
});

// Place order
app.post("/order/:id", (req, res) => {
    const foods = getFoods();

    const food = foods.find(
        item => item.id === Number(req.params.id)
    );

    if (!food) {
        return res.status(404).send("Food not found");
    }

    const customerName = req.body.customerName;
    const quantity = Number(req.body.quantity);

    const total = food.price * quantity;

    res.send(`
        <html>
        <head>
            <title>Order Successful</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="container">
                <div class="card">
                    <h1>Order Successful!</h1>

                    <p><strong>Customer:</strong> ${customerName}</p>
                    <p><strong>Food:</strong> ${food.name}</p>
                    <p><strong>Quantity:</strong> ${quantity}</p>
                    <p><strong>Price:</strong> ₱${food.price}</p>

                    <h2>Total: ₱${total}</h2>

                    <a href="/" class="button">
                        Back to Menu
                    </a>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Food Ordering System running at http://localhost:${PORT}`);
});
var categories = [];
var products = [];

const getAllCategories = async () => {
    fetch('http://localhost/School/WD/yanaabello.github.io/APPDEV/A06/A06_BE/categories.php')
        .then(response => response.json())
        .then(data => {
            categories = data;
            loadCategories();
        });
}

const getAllProducts = async (categoryID) => {
    const categoryData = {
        categoryID: categoryID
    };

    fetch('http://localhost/School/WD/yanaabello.github.io/APPDEV/A06/A06_BE/products.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
        .then(response => response.json())
        .then(data => {
            products = data;
            loadProducts();
        });
}

getAllCategories();


var total = 0;
var receiptItems = {};


function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    categories.forEach((category) => {
        categoriesContainer.innerHTML += `
            <span onclick="getAllProducts('` + category.categoryID + `')" class="mx-1 custom-button p-2" style="color: #4b6043; font-weight: bold; font-family: Poppins, sans-serif;"}>
                `+ category.categoryName + `
            </span>
        `;
    });
}

function loadProducts() {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    products.forEach(product => {
        if (product.sizeCode) {
            maincontainer.innerHTML += `
              <div onclick="addToReceipt('` + product.sizePrice + `','` + product.productCode + product.sizeCode + `')" class="card mx-2 my-2 productContainer p-3 text-center shadow">
                  <div class="productImage">
                      <img src="assets/img/` + product.img + `" alt="` + product.productName + `" style="width:100%; height:150px; object-fit:cover; border-radius: 10px;">
                  </div>
                  <small style="margin-top: 12px; display: block;">` + product.productName + ' ' + product.sizeCode + `</small>
                  <div class="quantityContainer">
                      <button class="btnDecrease" onclick="updateQuantity('` + product.productCode + product.sizeCode + `', 'decrease')">-</button>
                      <div class="quantity-number" id="quantity-` + product.productCode + product.sizeCode + `">1</div>
                      <button class="btnIncrease" onclick="updateQuantity('` + product.productCode + product.sizeCode + `', 'increase')">+</button>
                  </div>
              </div>
            `;
        } else {
            maincontainer.innerHTML += `
            <div onclick="addToReceipt('` + product.productPrice + `','` + product.productCode + `')" class="card mx-2 my-2 productContainer p-3 text-center cardBorder shadow">
                <div class="productImage">
                    <img src="assets/img/` + product.img + `" alt="` + product.productName + `" style="width:100%; height:150px; object-fit:cover; border-radius: 10px;">
                </div>
                <small style="margin-top: 12px; display: block;">` + product.productName + `</small>
                <div class="quantityContainer">
                    <button class="btnDecrease" onclick="updateQuantity('` + product.productCode + `', 'decrease')">-</button>
                    <div class="quantity-number" id="quantity-` + product.productCode + `">1</div>
                    <button class="btnIncrease" onclick="updateQuantity('` + product.productCode + `', 'increase')">+</button>
                </div>
            </div>
           `;
        }
    });
}

function updateQuantity(productId, updateType) {
    var quantityLabel = document.getElementById('quantity-' + productId);
    var quantity = parseInt(quantityLabel.innerText);

    if (updateType == 'increase') {
        quantity++;
    } else if (updateType == 'decrease' && quantity > 0) {
        quantity--;
    }

    quantityLabel.innerText = quantity;

    if (quantity == 0) {
        delete receiptItems[productId];
    } else if (receiptItems[productId]) {
        receiptItems[productId].quantity = quantity;
    }

    updateReceipt();
}


function updateReceipt() {
    var receiptItemsContainer = document.getElementById("receiptItems");
    var totalSummary = document.getElementById("totalValue");

    receiptItemsContainer.innerHTML = "";
    var total = 0;

    for (var code in receiptItems) {
        var item = receiptItems[code];
        var itemTotal = item.price * item.quantity;
        total += itemTotal;

        receiptItemsContainer.innerHTML += `
    <div class="d-flex flex-row justify-content-between mx-2 px-4 orderItem">
        <div><small>` + code + ' x ' + item.quantity + `</small></div>
        <div><small>` + itemTotal.toFixed(2) + `</small></div>
    </div>
`;
    }

    totalSummary.innerText = total.toFixed(2);
}

function addToReceipt(price, code) {
    var quantityLabel = document.getElementById('quantity-' + code);
    var quantity = parseInt(quantityLabel.innerText);

    if (quantity > 0) {
        receiptItems[code] = { quantity: quantity, price: parseFloat(price) };
    } else {
        delete receiptItems[code];
    }

    updateReceipt();
}


function showReceiptModal() {
    var modalReceiptContent = document.getElementById("modalReceiptContent");

    var modalContent = `
    <div class="text-center mb-3">
        <h4><strong style="font-family: Righteous, sans-serif;">Bella Tavola</strong></h4>
    </div>
    <div class="text-center receiptInfo">
        <p>Loc: Loc: Talisay Batangas</p>
        <p>Phone: (123) 456-7890</p>
    </div>
    <div class="header d-flex justify-content-between">
        <span class="item">Item</span>
        <span class="amount">Amount</span>
    </div>
    `;

    var total = 0;

    for (var code in receiptItems) {
        var item = receiptItems[code];
        var itemTotal = item.price * item.quantity;
        total += itemTotal;

        modalContent += `
        <div class="d-flex flex-row justify-content-between mx-2 px-4 orderItem">
            <div><small>` + code + ' x ' + item.quantity + `</small></div>
            <div><small>` + itemTotal.toFixed(2) + `</small></div>
        </div>
        `;
    }

    modalContent += `
    <div class="d-flex flex-row justify-content-between mx-2 px-4">
        <div><b>Total</b></div>
        <div><b>` + total.toFixed(2) + `</b></div>
    </div>
    `;

    modalReceiptContent.innerHTML = modalContent;

    const receiptModal = new bootstrap.Modal(document.getElementById('receiptModal'));
    receiptModal.show();
}

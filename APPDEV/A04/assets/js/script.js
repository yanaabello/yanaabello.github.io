var total = 0;
var receiptItems = {};

function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    products.forEach((product, index) => {
        categoriesContainer.innerHTML += `
            <span onclick="loadProducts('` + index + `')" class="mx-1 custom-button p-2" style="color: #4b6043; font-weight: bold; font-family: Poppins, sans-serif;">
                ` + product.category + `
            </span>
        `;
    });
}

function loadProducts(categoryIndex) {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    if (categoryIndex == 1 || categoryIndex == 3) {
        products[categoryIndex].contents.forEach(content => {
            content.sizes.forEach(size => {
                maincontainer.innerHTML += `
              <div onclick="addToReceipt('` + size.price + `','` + content.code + size.code + `')" class="card mx-2 my-2 productContainer p-3 text-center shadow">
                <div class="productImage">
                  <img src="` + content.img + `" alt="` + content.name + `" style="width:100%; height:150px; object-fit:cover; border-radius: 10px;">
                </div>
                <small style="margin-top: 12px; display: block;">` + content.name + ' ' + size.code + `</small>
                <div class="quantityContainer">
                    <button class="btnDecrease" onclick="event.stopPropagation(); updateQuantity('` + content.code + size.code + `', 'decrease', '` + size.price + `')">-</button>
                    <div class="quantityNumber" id="quantity-` + content.code + size.code + `">1</div>
                    <button class="btnIncrease" onclick="event.stopPropagation(); updateQuantity('` + content.code + size.code + `', 'increase', '` + size.price + `')">+</button>
                </div>
              </div>
            `;
            });
        });
    } else {
        products[categoryIndex].contents.forEach(content => {
            maincontainer.innerHTML += `
            <div onclick="addToReceipt('` + content.price + `','` + content.code + `')" class="card mx-2 my-2 productContainer p-3 text-center cardBorder shadow">
                <div class="productImage">
                    <img src="` + content.img + `" alt="` + content.name + `" style="width:100%; height:150px; object-fit:cover; border-radius: 10px;">
                </div>
                <small style="margin-top: 12px; display: block;">` + content.name + `</small>
                <div class="quantityContainer">
                    <button class="btnDecrease" onclick="event.stopPropagation(); updateQuantity('` + content.code + `', 'decrease', '` + content.price + `')">-</button>
                    <div class="quantityNumber" id="quantity-` + content.code + `">1</div>
                    <button class="btnIncrease" onclick="event.stopPropagation(); updateQuantity('` + content.code + `', 'increase', '` + content.price + `')">+</button>
                </div>
            </div>
          `;
        });
    }
}

function updateQuantity(productId, updateType, price) {
    var quantityLabel = document.getElementById('quantity-' + productId);
    var quantity = parseInt(quantityLabel.innerText);

    if (updateType == 'increase') {
        quantity++;
    } else if (updateType == 'decrease' && quantity > 0) {
        quantity--;
    }

    quantityLabel.innerText = quantity;

    if (quantity > 0) {
        receiptItems[productId] = {
            quantity: quantity,
            price: parseFloat(price)
        };
    } else {
        delete receiptItems[productId];
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
    if (!receiptItems[code]) {
        receiptItems[code] = { quantity: 1, price: parseFloat(price) };
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
        <p>Loc: Talisay Batangas</p>
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

loadCategories();

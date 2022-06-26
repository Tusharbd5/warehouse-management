// use local storage to manage cart data
const addToDb = id => {
    let inventoryCart = {};

    //get the inventory cart from local storage
    const storedCart = localStorage.getItem('inventory-cart');
    if (storedCart) {
        inventoryCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = inventoryCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        inventoryCart[id] = newQuantity;
    }
    else {
        inventoryCart[id] = 1;
    }
    localStorage.setItem('inventory-cart', JSON.stringify(inventoryCart));
}

const getStoredCart = () => {
    let inventoryCart = {};

    //get the inventory cart from local storage
    const storedCart = localStorage.getItem('inventory-cart');
    if (storedCart) {
        inventoryCart = JSON.parse(storedCart);
    }
    return inventoryCart;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('inventory-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
}
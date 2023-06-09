var cartItems = []
var container = document.getElementById('container')

getItemsFromLocalStorage()
getFvItemsFromLocalStorage() 
var favouriteitems = []

function getFvItemsFromLocalStorage() {
    var item = localStorage.getItem('fvItems')
    if (item) {
        item = JSON.parse(item)
        console.log('item from JSON.parse=>', item)

        favouriteitems = item
        fv.innerText = `Favourites (${item.length})`
    }
}
function getItemsFromLocalStorage() {
    var item = localStorage.getItem('cartItems')
    if (item) {
        item = JSON.parse(item)

        cartItems = item
        cart.innerText = `Cart (${item.length})`
    }
}

for (var i = 0; i < cartItems.length; i++) {
    var foodObj = cartItems[i]
    var card = `<div class='cartCard'">
      <div>
        <h5 class="card-title">${foodObj.title}</h5>
        <p class="card-text">
        ${foodObj.description}
        </p>
      </div>
    </div>
  </div>`

    container.innerHTML += card
}

function clearCart() {
    cartItems = []
    localStorage.removeItem("cartItems");
    cart.innerText = `Cart`
    container.innerHTML = ''
}


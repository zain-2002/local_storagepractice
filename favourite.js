var favouriteitems = []
var container = document.getElementById('container')
getItemsFromLocalStorage()
function getItemsFromLocalStorage() {
    var item = localStorage.getItem('cartItems')
    if (item) {
        item = JSON.parse(item)

        cartItems = item
        cart.innerText = `Cart (${item.length})`
    }
}
getFvItemsFromLocalStorage()

function getFvItemsFromLocalStorage() {
    var item = localStorage.getItem('fvItems')
    if (item) {
        item = JSON.parse(item)

        favouriteitems = item
        fv.innerText = `Favourites (${item.length})`
    }
}

for (var i = 0; i < favouriteitems.length; i++) {
    var foodObj = favouriteitems[i]
    var card = `<div class='cartCard'">
      <div>
        <h5 class="card-title">${foodObj.title}</h5>
        <p class="card-text">
        ${foodObj.description}
        </p>
        <button onclick= "Removeitm(this)" class="btn btn-primary" >Remove this</button>
      </div>
    </div>
  </div>`

    container.innerHTML += card
}
container
function Removeitm(btn) {
    btn.parentNode.parentNode.remove()
    let dindex=0;
 for (let index = 0; index < favouriteitems.length; index++){
if (favouriteitems[index].title===btn.previousElementSibling.previousElementSibling.innerText) {
    dindex=index;
}
 }
favouriteitems.splice(dindex,1)
    localStorage.setItem('fvItems', JSON.stringify(favouriteitems))
    getFvItemsFromLocalStorage()
}
function clearCart() {
    favouriteitems = []
    localStorage.removeItem('fvItems')
    fv.innerText = `Favourites`
    container.innerHTML = ''
}


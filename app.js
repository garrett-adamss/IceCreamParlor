const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}]

let orders = []

function drawIceCream(){
    let template = '' 
    iceCream.forEach(item => { template += `                    
    <div class="col-5 ice-cream-item p-0 m-2" onclick="order('${item.name}')">
    <img class="img-fluid" src="${item.image}"alt="">
    <p class="text-dark p-2 ice-cream-name mb-0">${item.name}</p>
    <p class="text-dark p-2 price">${item.price}</p>
  </div>`});
    let itemElm = document.getElementById("item-list")
    itemElm.innerHTML = template
}
 drawIceCream()


function drawOrder(){
    let template = ''
    orders.forEach((order, i) => {template += `
    <div class="col-5 text-end mt-1 mb-1"><b>${order.name}</b></div>
    <div class="col-1 mt-1 mb-1"><b>:</b></div>
    <div class="col-3 mt-1 mb-1"><b>${order.price}</b></div>
    <button class="col-2 btn btn-outline-danger btn-sm mt-1 mb-1" onclick="deleteItem(${i})">DELETE</button>              
   `})
   console.log(template)
    let orderElm = document.getElementById("cart")
    orderElm.innerHTML = template
}

function order(itemName){
    console.log("ordering", itemName)
    let iceCreamOrder = iceCream.find(iceCream => iceCream.name == itemName)
    console.log(iceCreamOrder)
    orders.push(iceCreamOrder)
    console.log('current orders', orders)
    drawOrder()
}
function pay(){
    orders = []
    drawOrder()
}

function deleteItem(index){
    console.log("deleting", index)
    let order = orders[index]
    orders.splice(index, 1)
    drawOrder()
}
let item = document.querySelector('.items')
console.log(item);
let cart = document.querySelector('.container-right')
let order = []
 
item.addEventListener('click', function (event){
    console.log(event);
    if(event.srcElement.tagName === 'BUTTON'){
        console.dir(event.srcElement);
        let item = event.srcElement.value
        console.log('item', item)
        order.push(`${item}`)
        localStorage.setItem('order_list', JSON.stringify(order))
        cart.innerHTML += `<p>${item}</p>`
    }
})

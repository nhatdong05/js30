localStorage.setItem('text','value')

let drink = ['cafe','nước ép','sinh tố']
let movie = [
    {
        name: 'Batman'   
    }, {
        name:'Wakanda'
    }
]
localStorage.setItem('drink',JSON.stringify(drink))
localStorage.setItem('movie',JSON.stringify(movie))
let get_test = localStorage
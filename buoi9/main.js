let posts = document.querySelector('.posts')
fetch (' https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
.then(Response => {
    console.log(Response)
    return Response.json()
}
    
)
.then(data => {
    console.log(data)
        for (let post of data){
            console.log(post)
            posts.innerHTML += `
            <div class ="post"
            <h1>${post.name}</h1>
            <p>${post.price}</p>
            <img scr"${post.image_link}"alt"">
         `
        }
        
})
// .catch (err => {
//     console.log(err)
// })
let num = [1 ,2 ,3]
let get_num = num.map((value,index) =>{
    return value*2
})
console.log(num)
console.log(get_num)
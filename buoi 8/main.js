fetch('https://jsonplaceholder.typicode.com/todos/1')
then(Response =>
    console.log(Response)
    return Response.json
})
then(data => {
    console.log(data){
        for (post of data)
        console.log(post)
        posts.innerHTML += `
        <div class ="posts"
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    } `

})
catch (err => {
    console.log(err)
})
let num = [1 ,2 ,3]
let get_num = num.map((value,index) =>{
    return value*2
})
console.log(num)
console.log(get_num)
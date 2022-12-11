const es6_message = (param) => {
    console.log(param)

}
message([1,2,3])
message({key: 'value'})
message('hello')

// biến toàn cục: được khai báo ngoài hàm
// biến cục bộ : được khai báo ở trong thân hàm

function sum(a,b) {
    console.log(a+b)
    return a + b;
}

sum (1,3)
console.log('Hàm không có return',message('hello'))
console.log('Hàm có return',sum(1,3))
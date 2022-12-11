function Student() {
    this.name = 'Đông';
    this.gender = 'Male';
}

Student.prototype.age = 17;


var stu_Obj1 = new Student();
console.log(stu_Obj1.age); 

var stu_Obj2 = new Student();
console.log(stu_Obj2.age); 



const es6_message = (x,y,z) => {
    console.log(x,y,z);
}
message([x,y,z])
message({key: 'value'})
message('hello')

 const foo = (a,b) => {
    let m = a+b*100
    return m
}



var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
];
console.log;smartPhones.map(function(smartPhone){
    return smartPhone.price;
});
console.log(smartPhones.map(smartPhone => smartPhone.price));
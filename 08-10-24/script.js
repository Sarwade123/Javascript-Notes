let hof = (cbf, num1, num2)=>{
    console.log("Addition function");
    cbf(num1, num2)
    
}
let add = (a, b)=>{
    console.log(a+b);
    
}
hof(add, 100, 200)



let hof1 = (sub1, num1, num2)=>{
    console.log("Subtraction function");
    sub1(num1, num2)
    
}
let sub = (a, b)=>{
    console.log(a-b);
    
}
hof1(sub, 300, 200)


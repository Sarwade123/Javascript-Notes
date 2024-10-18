let operation =(opt, num1, num2){
    console.log(opt, num1, num2);
    opt(num1, num2)
}

let add =(a, b)=>{
    console.log(`sum ${a+b}`);
    
}
let sub =()=>{}
let mul =()=>{}
let div =()=>{}

operation(add,200, 300);
operation(sub,200, 300);
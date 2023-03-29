

function prime(num){
    for(let i=0;i<=num;i++){
        if(num%i){
            return true;
        }
    }
    return false;
}

let ans=prime(13);

if(ans){
    console.log("prime")
}else{
    console.log("not a prime")
}
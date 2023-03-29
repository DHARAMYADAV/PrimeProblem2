// prime day-3 code

function prime(number){
    let counter=0;
    for(let i=2;i<=number;i++){
        if(number%i==0){
            counter++;
        }
    }
    if(counter==1){
        return true;
    }
    return false;
}

let ans=prime(13);

if(ans){
    console.log("Prime Number")
}else{
    console.log("Not a Prime Number")
}
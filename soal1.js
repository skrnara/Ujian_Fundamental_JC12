const faktorial=(num)=>{
    if(num===0){return 0}
    else{
        
        yo=[]
        sum=1

        for(var i=1;i<=num;i++){
            yo.push(i)
        }

        for(var x=0;x<yo.length;x++){
            sum=sum*yo[x]
        }
        
        return sum  
    }  
}

console.log(faktorial(5))
console.log(faktorial(4))
console.log(faktorial(10))
console.log(faktorial(2))
console.log(faktorial(0))
console.log(faktorial(3))
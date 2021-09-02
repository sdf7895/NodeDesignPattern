function* interatorGenerator(arr) {
    for(let i in arr){
        yield arr[i];
    }
}

const iterator = interatorGenerator(['apple','orange','watermelon']);
/*
    {
        value :  
        done : 
    }

    반환
*/
let currentItem = iterator.next();
while(!currentItem.done){
    console.log(currentItem.value);
    currentItem = iterator.next();
}
/*
    yield 의 값을 다 반환하고 나서야 
    done 은 true 반환함

    yield 값이 반환할게 더 있다면 done 은 false
*/
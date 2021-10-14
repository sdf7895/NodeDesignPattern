/*
    자바스크립트에서 호출을 표현하는 객체를 만드는 가장 쉬운 방법은 클로저를 만드는 것!
*/

function createTask(target,args){
    return () => {
        target.apply(null,args)
    }
}
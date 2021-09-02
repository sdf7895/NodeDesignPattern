function* makeGenerator() {
    /*
        Hello World 라는 문자열을 반환하는 곳에서 yield(값을 반환하거나 주입 받음)합니다.
        제너레이터가 다시 시작되면 console.log('Re-entered')에서 실행이 계속됩니다.
    */
    yield 'Hello World';
    console.log('Re-entered');
}

/*
    아래의 함수는 본질적으로 호출될 때 새로운 제너레이터 객체를 반환하는 팩토리 입니다.
*/
const get = makeGenerator()

/*
    제너레이터 객체의 가장 중요한 메소드는 next()
    next()는 제너레이터의 실행을 시작/재시작하는데 사용, 다음과 같은 형식의 객체를 반환.
*/

{
    value: '<yield시 반환값>'
    done : '<제너레이터가 끝났는지 여부>'
}

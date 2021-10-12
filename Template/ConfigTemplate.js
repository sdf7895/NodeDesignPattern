/*

    템플릿(Template)라고 불리며 , 전략(Strategy) 패턴과 공통점이많다
    템플릿은 알고리즘의 골격을 나타내는 추상 의사 클래스 를 정의하는 것으로 구성
    이 클래스의 일부 단계는 정의되지 않은 채로 있습니다

    서브 클래스는 템플릿 메소드라는 누락된 단계를 구현하여 알고리즘의 비어있는
    부분을 채울 수 있습니다
    abstract or pure virtual = templateMethod()

    템플릿과 전략의 목적은 매우 유사하지만 두 가지의 주요 차이점!
    구조와 구현에 있다

    전략 : 동적으로 런타임에 알고리즘의 일부분을 변경
    템플릿 : 미리 패키지화된 알고리즘의 변형을 만들어야 하는 상황에 더 적합
*/

const fs = require('fs');
const objectPath = require('object-path');

class ConfigTemplate {
    
    read(file){
        console.log(`Deserializing from ${file}`)
        this.data = this._deserialize(fs.readFileSync(file, 'utf-8'))
    }

    save(file){
        console.log(`Serializing to ${file}`)
        fs.writeFileSync(file, this._serialize(this.data))
    }

    get(path){
        return objectPath.get(this.data, path)
    }

    set(path, value){
        return objectPath.set(this.data, path, value)
    }

    _serialize() {
        throw new Error('_serialize() must be implemented')
    }

    /*
        밑줄은 내부에서만 사용할 수 있는 보호된(protect) 메소드를 표시하기위한
        간편한방법
        
        자바스크리븥에서는 메소드를 추상적으로 선언할 수 없기 때문에
        메소드를 단순히 스텁(내용 없는 메소드)으로 정의하고 호출될 때 예외를 던진다
    */
    _deserialize() {
        throw new Error('_deserialize() must be implemented')
    }
}

module.exports = ConfigTemplate;


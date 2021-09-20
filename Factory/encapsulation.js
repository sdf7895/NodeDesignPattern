/* encapsulation : 외부코드가 내부 세부 정보에 대해 직접 조작하지 못하게 하여 객체의 접근을 제어하는 기술 */

function createPerson(name){
    const privateProperties = {};

    const person = {

        setName : name =>{
            if(!name) throw new Error('A person must have a name');
            privateProperties.name = name;
        },
        getName: () =>{
            return privateProperties.name;
        }

    }

    person.setName(name);

    return person;
}
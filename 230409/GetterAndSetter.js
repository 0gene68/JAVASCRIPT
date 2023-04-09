//Getter, Setter(접근자, 설정자)

//Getter : 객체의 속성 값을 반환하는 메소드
//Setter : 객체의 속성 값을 설정, 변경하는 메소드

const person = {
    name : 'Tom',
    age : 23,
    gender : 'M',

    //Getter : Setter가 선언되지 않으면 에러가 발생함
    getAge(){
        return person.age;
    },

    //Setter
    setAge(value) {
        if(value > 120) {
            console.error('나이는 120을 초과할 수 없습니다.');
            return;
        }

        person.age = value;
    }

};

//ES2015부터는 메소드 앞에 get, set을 붙이면 알아서 Getter, Setter 로서 동작하게 됨
//이 때 메소드로 선언한 Getter와 Setter의 이름이 같을 경우 Setter의 무한 루프에 빠져버리게 됨
const dog = {
    type : 'Animal',
    name : '멍멍이',
    sound : '멍멍',
    get dogName(){
        return dog.name;
    },

    // (!) 무한루프에 빠지게 되어 에러가 발생함
    // set dogName(value) {
    //     dog.name = value;
    // }

    set dogNamae(value){
        dog.name = value;
    }

};





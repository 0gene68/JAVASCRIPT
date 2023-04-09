//class (클래스) : ES6(ES2015)부터 추가
class employee {
    constructor(name, rank, salary) {
        this.name = name;
        this.rank = rank;
        this.salary = salary;
    }
    introduce() {
        console.log('[이름 : ' + this.name + ', 직급 : ' + this.rank + ', 월급 : ' + this.salary + '만원]');
    }
}

//상속, super()

//extends 키워드를 이용하여 클래스의 변수와 함수를 상속받을 수 있음
//super() 함수를 이용하여 상속받은 클래스의 생성자를 이용할 수 있음
class director extends employee {
    constructor(name, salary){
        super(name, '부장', salary);
    }
}

class intern extends employee {
    constructor(name, salary) {
        super(name, '인턴', salary);
    }
}

const director1 = new director('Matsuda', 600);
const intern1 = new intern('Tom', 200);

director1.introduce();
intern1.introduce();


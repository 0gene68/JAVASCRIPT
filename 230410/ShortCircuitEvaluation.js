//Short Circuit Evaluation(단락 회로 평가)
//논리 연산에서 피연산자 중 뒤에 위치한 피연산자를 볼 필요없이 연산을 끝내버리는 것

console.log(false && true); 
//앞의 피연산자가 false이므로 앞의 피연산자만으로 결과값은 false임을 알 수 있음

console.log(true || false);
//앞의 피연산자가 true이므로 앞의 피연산자만으로 결과값은 true임을 알 수 있음

let x = 4;
let y = 10;

// && 연산자에서 왼쪽 피연산자가 false이므로 오른쪽 피연산자는 평가하지 않음
if (x < 3 && y > 9) {
  console.log("실행되지 않습니다.");
}

// || 연산자에서 왼쪽 피연산자가 true이므로 오른쪽 피연산자는 평가하지 않음
if (x < 3 || y > 9) {
  console.log("하나 이상의 조건이 참입니다.");
}

const getName = (person) => {
    const name = person && person.name; 
    return name || "객체가 아닙니다";
  };

let person = { name : "Tom" };
const name = getName(person); 
//person과 person.name이 모두 주어졌으므로 name의 값은 true
//return 문에서 name이 true이므로 뒤의 피연산자는 확인하지 않고 name을 반환함
console.log(name); //Tom
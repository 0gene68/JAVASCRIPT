const asyncFulfilled = async () => {
    let promiseFulfilled = new Promise((resolve, reject) => {
        setTimeout(() => resolve("성공!"), 3000)
    }); // Promise 객체가 성공 상태가 됨

    let resultFulfilled = await promiseFulfilled; 
    //Promise 객체가 처리될 때까지 기다림

    alert('성공 시 성공 메시지 / 실패 시 에러');
    alert(resultFulfilled); 
}

asyncFulfilled();



const asyncRejected = async () => {
    let promiseRejected = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error()), 3000);
    }); // Promise 객체가 실패 상태가 됨

    let resultRejected = await promiseRejected;
    // Promise 객체가 처리될 때까지 기다림
    
    alert(resultRejected);
}

asyncRejected();

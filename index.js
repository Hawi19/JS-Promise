//1
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
//2
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            resolve(randomNumber);
        }, 2000);
    });
}

    //3
    function processData(data) {
        
        return new Promise((resolve) => {
            setTimeout(() => {
               console.log(data);
                resolve(data * 2);
            }, 1000);
        });
    }
    //4
    fetchData()
    .then(data => processData(data))
    .then(result => {
        console.log(`Processed result: ${result}`);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
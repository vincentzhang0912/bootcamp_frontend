function getUserInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userInfo = { id: 1, name: 'John' };
            resolve(userInfo);
        }, 1000);
    });
}

function getOrderInfo(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderInfo = { id: 101, total: 50 };
            resolve(orderInfo);
        }, 1000);
    });
}

getUserInfo()
    .then(userInfo => getOrderInfo(userInfo.id))
    .then(orderInfo => {
        console.log('User Info:', userInfo);
        console.log('Order Info:', orderInfo);
    })
    .catch(error => {
        console.error('Error:', error);
    });

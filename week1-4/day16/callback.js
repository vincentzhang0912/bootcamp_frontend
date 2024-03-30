function getUserInfo(callback) {
    setTimeout(() => {
        const userInfo = { id: 1, name: 'John' };
        callback(userInfo);
    }, 1000);
}

function getOrderInfo(userId, callback) {
    setTimeout(() => {
        const orderInfo = { id: 101, total: 50 };
        callback(orderInfo);
    }, 1000);
}

getUserInfo(userInfo => {
    getOrderInfo(userInfo.id, orderInfo => {
        console.log('User Info:', userInfo);
        console.log('Order Info:', orderInfo);
    });
});
//假设我们有一个需要从服务器获取用户信息的函数，并且在获取用户信息后需要根据用户信息获取相关订单信息。首先看一下使用传统回调函数的方式：
//The functions in getUserInfo and getOrderInfo are all arrow function。 arr.map(e=>{}),the userInfo and orderInfo same as e
//process:
//1.call getUserInfo ,get userInfo 
//2.then userInfo.id as parameter pass into getOrderInfo function
//3.call getOrder function,get orderInfo ,then  orderInfo as parameter pass into the arrow function e={console.log...}
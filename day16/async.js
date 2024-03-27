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

async function fetchUserInfoAndOrderInfo() {
    try {
        const userInfo = await getUserInfo();
        const orderInfo = await getOrderInfo(userInfo.id);
        console.log('User Info:', userInfo);
        console.log('Order Info:', orderInfo);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchUserInfoAndOrderInfo();

const processOrder = (customer, callback) => {
    console.log(`processing order for ${customer}`);

    setTimeout(() => {
        console.log(`Cooking Completed`);
        console.log(`order processed for ${customer}`);
        callback(customer);
    }, 5000);   
};

const takingOrder = (customer, callback) => {
    console.log(`take order for ${customer}`);
    callback(customer);
};

const completedOrder = (customer) => {
    console.log(`completed order for ${customer}`);
}

takingOrder(`Customer-1`, (customer) => {
    processOrder(customer, (customer) => {
        completedOrder(customer);
    });
});

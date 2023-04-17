const processOrder = (customer) => {
    console.log(`processing order for ${customer}`);

    setTimeout(() => {
        console.log(`Cooking Complete for Customer-1`);
    }, 3000);
    console.log(`order processed for ${customer}`);
};

const takingOrder = (customer) => {
    console.log(`take order for ${customer}`);
};

const completedOrder = (customer) => {
    console.log(`completed order for ${customer}`);
}

takingOrder(`Customer-1`);
processOrder(`Customer-1`);
completedOrder(`Customer-1`);

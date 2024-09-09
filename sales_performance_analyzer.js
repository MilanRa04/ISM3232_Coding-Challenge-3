// Task 1: Create a function to calculate average sales

//Create a function that will calcualte average sales when given an array of sales figures
function calculateAverageSales(sales) {
    if (sales.lenght === 0) return 0;
    const total = sales.reduce((sum, sale) => sum + sale, 0);
    return total / sales.lenght;
}

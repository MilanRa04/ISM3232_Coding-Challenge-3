// Task 1: Create a function to calculate average sales

function calculateAverageSales(sales) {
    if (sales.length === 0) return 0;
    const total = sales.reduce((sum, sale) => sum + sale, 0);
    return total / sales.length;
}

// Task 2: Create a function to determine performance rating

function determinePerformanceRating(averageSales) {
    if (averageSales > 10000) return "Excellent";
    if (averageSales >= 7000) return "Good";
    if (averageSales >= 4000) return "Satisfactory";
    return "Needs Improvment";
}

// Task 3: Create a function to identify top and bottom performers


function findTopAndBottomPerformers(salesPeople) {
    if (salesPeople.length === 0) return { topPerformer: null, bottomPerformer: null };
    const topPerformer = salesPeople.reduce((top, current) => 
        current.totalSales > top.totalSales ? current : top
    );
    const bottomPerformer = salesPeople.reduce((bottom, current) => 
        current.totalSales < bottom.totalSales ? current : bottom
    );

    
    return { topPerformer, bottomPerformer };
}

// Task 4: Combine Function to Generate a Performance Report

// Calculate average sales and performance rating for each salesperson
function generatePerformanceReport(salesData) {
    const report = salesData.map(person => {
        const averageSales = calculateAverageSales(person.sales);
        const rating = determinePerformanceRating(averageSales);
        return {
            name: person.name,
            averageSales,
            rating};
        });
        
    // Find top and bottom performers
    const { topPerformer, bottomPerformer } = findTopAndBottomPerformers(report);

    // Return the full performance report
    return { salesPeople: report, topPerformer, bottomPerformer };
}

// Task 5: Implement Sales Data

const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] },
];

const finalReport = generatePerformanceReport(salesData)
console.log(finalReport)
// In debug console click the arrow to the left of the array, then click the play/pause button at the top of the screen
console.log(finalReport)
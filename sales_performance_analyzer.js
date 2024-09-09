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
    if (salesPeople.length === 0), return {topPerformer: null, bottomPerformer: null };
    const topPerformer = salesPeople.reduce((top, current) => 
        current.totalsales > top.totalsales ? current : top
    );
    const bottomPerformer = salesPeople.reduce((bottom, current) => 
        current.totalsales < bottom.totalsales ? current : bottom
    );
    return { topPerformer, bottomPerformer};
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
    return {
        salesPeople: report,
        topPerformer,
        bottomPerformer
    };
}
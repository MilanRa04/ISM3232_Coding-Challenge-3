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

function findTopAndBottomPerformers(salespeople) {
    if (salespeople.length === 0), return {topPerformer: null, bottomPerformer: null };
    const topPerformer = salespeople.reduce((top, current) => 
        current.totalsales > top.totalsales ? current : top
    );
    const bottomPerformer = salespeople.reduce((bottom, current) => 
        current.totalsales < bottom.totalsales ? current : bottom
    );
    return { topPerformer, bottomPerformer};
}

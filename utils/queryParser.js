exports.parse = (query) => {
    query = query.toLowerCase().trim();
    
    const queryMap = {
        "show all users": "SELECT * FROM users",
        "show all sales": "SELECT * FROM sales",
        "total sales": "SELECT COUNT(*) AS total_sales FROM sales"
    };

    if (queryMap[query]) {
        return queryMap[query];
    } else {
        throw new Error(`Invalid query format: "${query}"`);
    }

};

exports.explain = (query) => {
    query = query.toLowerCase().trim();
    
    if (query === "show all users") {
        return {
            operation: "SELECT",
            table: "users",
            description: "Retrieves all records from the 'users' table."
        };
    }
    
    if (query === "show all sales") {
        return {
            operation: "SELECT",
            table: "sales",
            description: "Retrieves all records from the 'sales' table."
        };
    }

    if (query === "total sales") {
        return {
            operation: "AGGREGATE (COUNT)",
            column: "sales",
            description: "Counts the total number of sales entries."
        };
    }

    return { error: "Unable to explain query" };
};

exports.validate = (query) => {
    const validQueries = [
        "show all users",
        "show all sales",
        "total sales"
    ];

   return validQueries.includes(query.toLowerCase().trim());
};

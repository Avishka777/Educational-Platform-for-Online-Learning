// Function to generate an error object with a specified status code and message
const errorHandler = (statusCode, message) => {
    const error = new Error()
    // Setting the status code and message for the error object
    error.statusCode = statusCode
    error.message = message
    // Returning the error object
    return error
}

module.exports = errorHandler

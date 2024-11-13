export function successResponse(result) {
    return {
        success: true,
        status: 200,
        data: result
    };
}

export function errorResponse(error) {
    return {
        success: false,
        status: error.status || 500,
        data: error.message
    };
}
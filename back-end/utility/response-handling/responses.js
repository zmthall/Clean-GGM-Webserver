export async function successResponse(result) {
    return {
        success: true,
        status: result.status || 200,
        data: result
    };
}

export async function errorResponse(error) {
    return {
        success: false,
        status: error.status || 500,
        data: error.message
    };
}
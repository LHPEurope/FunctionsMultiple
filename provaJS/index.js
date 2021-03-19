module.exports = async (context, req) => {
    const responseMessage = "Hello from JS";
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
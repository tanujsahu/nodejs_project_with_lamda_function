
exports.parseBody = (event) => {
    let data = {};
    if (event.body !== null && event.body !== undefined) {
        let body;
        try {
            body = JSON.parse(event.body)
        } catch (e) {
            body = event.body
            // console.log(e)
        }
        data = body;
    }
    if (data) {
        try {
            data._user_date_time = getUserLocalDateTime(event.headers.tz);
            data._tz = event.headers.tz || '+00:00';

        } catch (e) {
        }
    }
    return data;
}
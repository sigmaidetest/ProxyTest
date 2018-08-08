let AWS = require('aws-sdk');

exports.handler = function (event, context, callback) {

    console.log(event);

    let response = {
        "name": "Mick",
        "age": 25
    };
    callback(null, {
        "isBase64Encoded": true,
        "statusCode": 200,
        "headers": {
            "myHeader": "foo"
        },
        "body": JSON.stringify(response);
    });
}
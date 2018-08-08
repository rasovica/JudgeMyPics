import {APIGatewayEvent, Callback, Context} from 'aws-lambda';

export function getProfile(event: APIGatewayEvent, context: Context, cb: Callback) {
  cb(null, {statusCode: 200, body: JSON.stringify(event), headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    }});
}

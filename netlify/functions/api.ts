import serverless from "serverless-http";
import app from "../../src/app";
import type { Handler, APIGatewayProxyEvent } from "aws-lambda";

export const handler: Handler = serverless(app, {
  request: (request: any, event: APIGatewayProxyEvent) => {
    request.headers = event.headers ?? {};
    request.method = event.httpMethod;
    request.url = event.path;
  },
});

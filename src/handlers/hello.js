/* eslint-disable no-unused-vars */
async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Serverless Framework' }),
  }
}

export const handler = hello

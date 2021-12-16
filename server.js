const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync("calculator.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const calculatorPackage = grpcObject.calculatorPackage;

const server = new grpc.Server();

//server implements the methods declared in todo.proto

server.bind('localhost:9000', grpc.ServerCredentials.createInsecure());
server.addService(calculatorPackage.Calculator.service,
    {
        'add' : add,
        'multiply':multiply,
        'substract':substract,
    });

    server.start();
    let result=0;

    function add(call, callback) {
        const params = {
            'a' : call.request.a,
            'b' : call.request.b
        }
        result=params.a+params.b;
        callback(null,{
            'result':result
       });
    }

    function multiply(call, callback) {
        const params = {
            'a' : call.request.a,
            'b' : call.request.b
        }
         result=params.a*params.b;
        callback(null, {
            'result':result
       });
    }

    function substract(call, callback) {
        const params = {
            'a' : call.request.a,
            'b' : call.request.b
        }
        result=params.a-params.b;
        callback(null, {
            'result':result
       });
    }


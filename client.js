const grpc=require('grpc');
const protoLoader= require('@grpc/proto-loader');
const packageDef=protoLoader.loadSync("calculator.proto",{});
const grpcObject=grpc.loadPackageDefinition(packageDef);
const calculatorPackage=grpcObject.calculatorPackage


const client=new calculatorPackage.Calculator('localhost:9000',grpc.credentials.createInsecure());

client.add({ 
    'a':1.1,
    'b':2.1,
},(err,response)=>{ 
    console.log('ADD : Received from server '+JSON.stringify(response));
})

client.substract({ 
    'a':1.1,
    'b':2.1,
},(err,response)=>{ 
    console.log('SUBSTRACT : Received from server '+JSON.stringify(response));
})

client.multiply({ 
    'a':1.1,
    'b':2.1,
},(err,response)=>{ 
    console.log('MULTIPLY : Received from server '+JSON.stringify(response));
})


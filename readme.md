# Mosca is not maintained anymore. Please move to Aedes

# at the moment this example is only working on local mqtt broker


## this project will not run until you do this heck: 

# 1) install specific version of jsonschema

run `npm i jsonschema@1.2.6 --save` then goto packege.json remove cap sign from packege version and run `npm install` again.
your packege.json should look like this: 
```
"dependencies": {
    "jsonschema": "1.2.6", // <<=== 
    "mosca": "^2.8.3"
}
```

## OR

comment this line in validator.js (\node_modules\jsonschema\lib\validator.js:111):
```
if((typeof schema !== 'boolean' && typeof schema !== 'object') || schema === null){
     throw new SchemaError('Expected `schema` to be an object or boolean');
}
```


read more here: https://stackoverflow.com/questions/64189045/node-js-mosca-broker-error-expected-schema-to-be-an-object-or-boolean




REFERENCES: 
https://medium.com/@alifabdullah/setting-up-private-mqtt-broker-using-mosca-in-node-js-c61a3c74f952
https://medium.com/@alifabdullah/using-mqtt-protocol-with-node-js-f0eb8065b5b6
https://www.npmjs.com/package/mqtt#client
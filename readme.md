# Mosca is not maintained anymore. Please move to Aedes

# at the moment this example is only working on local mqtt broker
mqtt brokers can not be hosted on heroku because it simply doesnt open the necessary port to run mqtt broker, other ways are available such as you run http server and when mqtt tries to connect you proxy it to mqtt but thats not something practical since heroku is not officially allowing to deploy that kind of thing someday you gona face a problem and you wil not get the solution anywhere, then where to host mqtt brokers? you can host your own broker only if you have your own dedicated server or a cloud instance running somewhere, for normal use cases just use brokers-as-service lots of companies are providing ready to use brokers such as cloudmqtt and I must say some of those are cheaper then having your own cloud instance and some of those are wellknown and reliable so they are charging more:

#### mqtt hosting providers:

1) Cloudmqtt - ( https://www.cloudmqtt.com/plans.html )(no free plans)

2) flespi - ( https://flespi.com/pricing )(have 1 FREE plan)

3) myqtthub - ( https://www.mypthub.net/pricing/ )(have 1 FREE plan)

4) beebotte - ( https://beebotte.com/plans )(have 1 FREE plan)

see more here: https://en.wikipedia.org/wiki/Comparison_of_MQTT_implementations )


---
# This project will not run until you do this heck: 

## 1) install specific version of jsonschema

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

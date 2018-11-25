
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var HttpStatus = require('http-status-codes');
var url=require('url');

var primeNumber=function(req,res){
//var n=Number(req.body.prime);

//**taking Input number from url**********************/
var q = (url.parse(req.url, true));
var x=String(q.pathname);
var arr=x.split('number=');
var n=Number(arr[1]);


var prime=new Array(n);
var resPrime=[];
prime.fill(true);
console.log('Intial',prime);
    for(var p=2;p*p<=n;p++)
      {
          if(prime[p]==true)
          for(var i=p*p;i<=n;i+=p)
            prime[i]=false;
        }
        for(var p=2;p<=n;p++)
          if(prime[p]) resPrime.push(p);
  return res.send({status:200,message:"Prime Number",data:resPrime})
}
exports.primeNumber=primeNumber;

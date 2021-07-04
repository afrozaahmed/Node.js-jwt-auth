var cluster = require('cluster');

if(cluster.isWorker){
    console.log("child thread");
}else{
    console.log("parent thread");
    cluster.fork();
    cluster.fork();
}
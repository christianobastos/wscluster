const cluster = require("cluster");
const os = require("os");

const threadCluster = true;

var cpus = os.cpus();
// console.log(cpus);

if (threadCluster) {
    if (cluster.isMaster) {
        console.log("Iniciando a Master Thread no Cluster...");
        cpus.forEach(function () {
            cluster.fork();
        });
        cluster.on('listening', worker => {
            console.log("Slave Thread de PID %d conectada ao cluster", worker.process.pid);
        });
        cluster.on('exit', worker => {
            console.log("Slave Thread de PID %d desconectada do Cluster", worker.process.pid)
            cluster.fork();
        });
    } else {
        console.log("Criando Slave Thread...");
        require(__dirname + "/cluster.js");
    }
} else {
    console.log("Executando via Thread única...");
    require(__dirname + "/www");
}
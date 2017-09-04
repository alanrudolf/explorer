var
  rpc = require('./jsonrpc'),
  settings = require('./settings');

  retorno = '?';

module.exports = {
  masternodesCount: "$",

  getMasternodesCount : function() {
      retorno = "!";

      this.rpc = new rpc.Client({
        "host": settings.wallet.host,
        "port": settings.wallet.port,
        "user": settings.wallet.user,
        "pass": settings.wallet.pass
      });

      var args = function (err, response){
        if(err){console.log(err); res.send("There was an error. Check your console.");}
        else{
          if(typeof response === 'object'){
            res.send(response);
          }
          else{
            res.send(""+response);
          }
        }
      };

      this.rpc.call(
        [ { method: 'masternode', params: ["count"] } ],
        args,
        function(){
          var args = [].slice.call(arguments);
          retorno = args.toString();
          masternodesCount: retorno;
        }, function(err){
           //global.retorno = "error: "+response;
        }
      );

        console.log(retorno);
      return retorno;
  }
}

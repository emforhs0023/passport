var pool = require("../services/database").pool;

module.exports.signinAdmin = function(id, pwd, callback){
    pool.getConnection(function(err, connection){
        if(err){
            console.log(err);
            callback(false);
            return
        }
        var query = "SELECT auth, approve_state FROM tbl_user WHERE tag_id = ? AND password= ?"
        connection.query(query,[id, pwd],
            function(err, result){
                connection.release()

                if(err){
                    console.log(err);
                    callback(false, null, null)
                }

                var rows = result.length;
                
                if(rows>0){
                    if(result[0]["approve_state"] == 1){
                        callback(true, result[0]["auth"], result[0]["approve_state"]);       
                    } else {
                        callback(true, null, result[0]["approve_state"]);
                    }
                } else {
                   callback(false, null, null) 
                }
            })
    })
}
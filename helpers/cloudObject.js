var customHelperACL = require('./ACL.js');
module.exports = { 
    newCloudObject : function(type) { //constructor for ACL class
        var document = {};
        document.ACL = customHelperACL.newACL(); //ACL(s) of the document
        document._type = type;
        document.expires = null;
        document._version = 0;
        return document;
    }
};


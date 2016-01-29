var tabs = require("sdk/tabs");

exports.main = function (options, callbacks){
    if (options.loadReason == "startup") {
        for (let tab of tabs)
            tab.pin();
    };
};

const userSettings = (req, res, next) => {
    const userSettings = req.session.userSettings || {orderBy: "createDate", orderDirection: -1, style: "light", hideFinished: 1};
    const {orderBy, orderDirection, style, hideFinished} = req.query;
    if (orderBy) {
        userSettings.orderBy = orderBy;
        userSettings.orderDirection = userSettings.orderDirection * (-1);
    }

    if (style) {
        if(userSettings.style==='light'){
            userSettings.style='dark';
        }
        else {
            userSettings.style='light';
        }
    }
    if (hideFinished) {
        userSettings.hideFinished = userSettings.hideFinished * (-1);
    }

    req.userSettings = req.session.userSettings = userSettings;

    next();
};

module.exports = userSettings;
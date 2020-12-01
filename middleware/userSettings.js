const userSettings = (req, res, next) => {
    const userSettings = req.session.userSettings || {orderBy: "createDate", orderDirection: -1, style: "light", hideFinished: 1};
    const {orderBy, orderDirection, style, hideFinished} = req.query;
    //res.redirect('/');

    if (orderBy) {
        userSettings.orderBy = orderBy;
        userSettings.orderDirection = userSettings.orderDirection * (-1);
        res.redirect('/');
    }

    if (style) {
        if(userSettings.style==='light'){
            userSettings.style='dark';
        }
        else {
            userSettings.style='light';
        }
      res.redirect('/');
    }
    if (hideFinished) {
        userSettings.hideFinished = userSettings.hideFinished * (-1);
        res.redirect('/');
    }
    req.userSettings = req.session.userSettings = userSettings;
    next();

};

module.exports = userSettings;
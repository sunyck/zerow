const status = require("./lib/status");

module.exports = (args, msg, app) => {
    const statusCurrent = status.get(app);
    const scoreCurrent = score.get(app);
    const statusText = stringify.status(statusCurrent, scoreCurrent);

    return statusText;
};

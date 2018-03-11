const _default = () => {
    return {
        water: 100,
        happiness: 100,
        isAlive: true,
        killer: null,
        deathBy: "something",
        birth: Date.now(),
        death: 0
    };
};

const get = app => {
    const lisa = app.dataPersisted.lisa;
    const statusCurrent = lisa.getKey("status") || _default();

    return statusCurrent;
};

const set = (app, statusCurrent) => {
    const lisa = app.dataPersisted.lisa;

    updateExternal(app, statusCurrent);

    lisa.setKey("status", statusCurrent);
    lisa.save(true);
};

const updateExternal = (app, statusCurrent) => {
    app.bot.user.setActivity(stringify.floof(statusCurrent));
};

const modify = function(app, statusCurrent, modifier, user) {
    let statusNew = statusCurrent;
    let deathBy = null;

    if (statusNew.isAlive) {
        if (modifier.water) {
            statusNew.water += modifier.water;

            if (statusNew.water > 150) {
                statusNew.happiness = 150;
                deathBy = "drowning";
            } else if (statusNew.water <= 0) {
                statusNew.happiness = 0;
                deathBy = "dehydration";
            }
        }

        if (modifier.happiness) {
            statusNew.happiness += modifier.happiness;

            if (statusNew.happiness <= 0) {
                statusNew.happiness = 0;
                deathBy = "loneliness";
            } else if (statusNew.happiness > 100) {
                statusNew.happiness = 100;
            }
        }

        if (deathBy !== null) {
            statusNew = kill(app, statusNew, deathBy, user);
        }

        set(app, statusNew);
    }

    return statusNew;
};

const kill = (app, statusCurrent, deathBy, killer) => {
    const scoreCurrent = score.get(app);
    const statusNew = Object.assign({}, statusCurrent);
    let scoreNew;

    statusNew.death = Date.now();
    statusNew.isAlive = false;
    statusNew.deathBy = deathBy;
    statusNew.killer = killer;

    scoreNew = statusNew.death - statusNew.birth;

    if (scoreNew > scoreCurrent.highscore) {
        scoreCurrent.highscore = scoreNew;
        score.set(app, scoreCurrent);
    }

    return statusNew;
};

module.exports = {
    _default,
    get,
    set,
    updateExternal,
    modify,
    kill
};

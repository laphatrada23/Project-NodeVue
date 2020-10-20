const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')
const QueueController = require('./controllers/QueueController')
module.exports = (app) => {
    /* RESFUL Api for users management */
    // create user
    app.post('/user',
        UserController.create
    )
    // edit user, suspend, active
    app.put('/user/:userId',
        UserController.put
    )
    // delete user
    app.delete('/user/:userId',
        UserController.remove
    )
    // get user by id
    app.get('/user/:userId',
        UserController.show
    )
    // get all user
    app.get('/users',
        isAuthenController,
        UserController.index
    )
    //login
    app.post('/login',
        UserAuthenController.login
    )
    // create queue
    app.post('/queue',
        QueueController.create
    )
    // edit queue, suspend, active
    app.put('/queue/:queueId',
        QueueController.put
    )
    // delete queue
    app.delete('/queue/:queueId',
        QueueController.remove
    )
    // get queue by id
    app.get('/queue/:queueId',
        QueueController.show
    )
    // get all queue
    app.get('/queues',
        QueueController.index
    )
}

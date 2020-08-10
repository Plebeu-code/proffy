const database = require('sqlite-async')

database.open(__dirname + '/database.sqlite').then(execute)

function execute(db) {
    db.exec()
}
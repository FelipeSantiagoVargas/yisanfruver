require('./database')
const app = require('./app')

console.clear()

app.listen(app.get('port'));

console.log('Server on port ' + app.get('port'));
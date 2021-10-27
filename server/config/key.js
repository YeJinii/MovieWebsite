//로컬에서 작업을 하고 있는지 아니면 deploy 이후에 production 모드로 작업을 하고 있는지

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');

} else {

    module.exports = require('./dev');
}
const os = require('os')
const user = os.userInfo()
console.log(user)
console.log(os.uptime())

const os_detail = {
    osname :os.type(),
    release : os.release(),
    totalmem :os.totalmem(),
    freem :os.freemem(),
}
console.log(os_detail)
const EventEmmter = require('events')

class Users extends EventEmmiter{
    userLogged(data){
        setTimeout(() => {
            this.emit('User logged', data)
        }, 2000);
    }
}

const emmiter = new EventEmmiter()

emmiter.once('User logged', data => {
    console.log(data)
})

Users.userLogged({user: 'Bruno Sohara'})

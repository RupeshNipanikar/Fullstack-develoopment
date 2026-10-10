function notifyUser(notificationFn){
    notificationFn()
}

const emailFn = () => console.log('Email sent');
const smsFn = () => console.log('sms sent');

notifyUser(emailFn)
notifyUser(smsFn)
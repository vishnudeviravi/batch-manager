const notificationService = require('../../services/notificationService')

let ntf;

exports.startNotification = ()=>{
    // when server starts getting notifications from database and schedule it 
}

const scheduleNotification = (body, id)=>{
    ntf[id] = notificationService.scheduleNotification(body)
}

exports.addNotification = (req, res)=>{
try {

    const id = '31234&34h'
    // saving notification to database and getting its id as response
    scheduleNotification(req.body, id)
    return res.status(200).send("success")
} catch (error) {
    return res.status(510).send("some problem")
}}

exports.deleteNotification = (req, res)=>{

    const id = req.body.id
    try {
        ntf[id].cancel()
        return res.status(200).send("deleted")
    } catch (error) {
        return res.status(510).send("some problem")
    }}
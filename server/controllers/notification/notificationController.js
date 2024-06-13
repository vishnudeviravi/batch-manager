const notificationService = require('../../services/notificationService')

let l;

exports.scheduleNotification = (req, res)=>{
try {
    l = notificationService.scheduleNotification(req.body)
    return res.status(200).send("success")
} catch (error) {
    return res.status(510).send("some problem")
}}

exports.deleteNotification = (req, res)=>{
    try {
        l.cancel()
        return res.status(200).send("deleted")
    } catch (error) {
        return res.status(510).send("some problem")
    }}
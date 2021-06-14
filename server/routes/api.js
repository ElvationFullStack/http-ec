const express = require('express')
const router = express.Router()
const empty_array = []
const adminArray = ["Yones"]
const searchArray = ["google", "apple"]
//=======================Client errors (400–499)  ========================

router.get('/getData/:admin', function (req, res) {
    console.log(" ------------admins ", adminArray)
    const admin = req.params.admin
    //================need admin authority======================
    if (!adminArray.includes(admin)) {
        res.statusCode = 401;// we detrmin what status is 
        res.send('no accsess right')
    }

    res.send(` user ${admin} has accsess right her are your users 1 2 3 `)// this will not reach 
})
router.post('/addAdmin/:admin', function (req, res) {// 201 
    const NewAdmin = req.params.admin
    res.status(201)
    adminArray.push(NewAdmin)
    res.send(`congrats ${NewAdmin} you are now an admin`)
})
//======================Server errors (500)->(599) ==================
router.get('/getDataFromArray', function (req, res) {
    //=========some error in the server===========
    const arr = undefined
    let item = arr[0];
    //=====================================================
    res.sent(item)
})


///===================dho eror 404 not found ================================



//================================homeWork==========================
// try to read the url 
router.get('/clientError1', function (req, res) {
    const url = "http://thisUrlIsSoDamnLongForMeToParsePleaseGivmeSomtingLess"

})
//this route can handle max 5 request 
//what should you do if cliend send yo more than 5 request ?
router.get('/clientError2/:requstNumber', function (req, res) {

})

////////////////////you are trying to acsess the next url ////
const someUrl = "changedForKnow.com"
router.get('/redirectError1', function (req, res) {
    ///the rquste change has benn temporarily  check after two hour 

})

const someUrl2 = "changedForAlways.com"

router.get('/redirectError2', function (req, res) {

})

















//==========================================================================================================
//==========================================================================================================
//======================================Optional some routes i added  ======================================
//No, the WebSocket clients sends the HTTP request asking for a WebSocket connection, then the server responds with an HTTP 101 Switching protocols, meaning that it accepts the connection, and then the client can start to send and receive data in binary format.
// first we inclode in headers Upradge =websocket
// then we check without header 
router.get('/101', function (req, res) {
    if (req.headers.upgrade) {
        // check to What Upradge 
        res.statusCode = 101
        // swithing portocols 
    }
    res.send(' accept portocol change ')
})
//=========================Successful responses (200–299)  ==========================
router.get('/204', function (req, res) {// response no content
    if (empty_array.length === 0) {
        res.statusCode = 204;// we detrmin what status is 
    }
    res.send('affter adding somthing you have content ')// this will not be send 

})
//=======================Redirects (300–399)==========================
const redirect = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"
router.get('/303/:http', function (req, res) {// refer to othe  
    const search = req.params.http
    if (!searchArray.includes(search)) {
        res.status(303)
        res.send(redirect)
    }
    let str = "<div><ul>"
    const send = () => { searchArray.forEach(e => { str += `<li><a href=" link to ">${e}</a></li>` }) }
    send()
    str += '</ul></div>'
    console.log(str)
    res.send(`${str}`)

})



module.exports = router
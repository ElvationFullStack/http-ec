const express = require('express')
const router = express.Router()
const empty_array = []
let video_complete_counter = 0 // /we will do it three part
const adminArray = ["Yones"]
const searchArray=["google","apple"]
//=============Informational responses 100-199 =================

//==============ask Lotem or Lior ============
router.post('/100', function (req, res) {
    console.log("----------", req.headers.expect)
    if (req.headers.expect === "100-continue") {
        console.log("__________________________100")
        if (video_complete_counter >= 3) {
            res.send(" video is complete ")
        } else {

            video_complete_counter++
            console.log("counter ", video_complete_counter)

            res.status(101)
            res.send('send rest')

        }
    }



})

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

router.post('/204', function (req, res) {
    empty_array.push("NewItemAdde");
    res.send("added successfuly ")
})




//=======================Redirects (300–399)==========================
// go to http://example.com/ 
const redirect = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"
router.get('/303/:http', function (req, res) {// refer to othe  
    const search = req.params.http
if(!searchArray.includes(search)){
    res.status(303)
    res.send(redirect)
}
let str="<div><ul>"
const send=()=>{searchArray.forEach(e=>{ str +=`<li><a href=" link to ">${e}</a></li>`})}
send()
str+='</ul></div>'
console.log(str)
res.send(`${str}`)

})


//=======================Client errors (400–499)  ========================

router.get('/403/:admin', function (req, res) {
    console.log(" ------------admins ", adminArray)
    const admin = req.params.admin
    //================need admin authority======================
    if (!adminArray.includes(admin)) {
        res.statusCode = 403;// we detrmin what status is 
        res.send('no accsess right')
    }

    res.send(` user ${admin} has accsess right`)// this will not reach 
})
router.post('/403/:admin', function (req, res) {
    const NewAdmin = req.params.admin
    adminArray.push(NewAdmin)
    res.send(`congrats ${NewAdmin} you are now an admin`)
})


//======================Server errors (500)->(599) ==================


router.get('/500', function (req, res) {
    //=========some error in the server===========
    const arr = undefined
    arr[0];
    //=====================================================

})

//================================homeWork==========================




// try to read the url 
router.get('/clientError1',function(req,res){
    const url="http://thisUrlIsSoDamnLongForMeToParsePleaseGivmeSomtingLess"

})
//this route can handle max 5 request 
//what should you do if cliend send yo more than 5 request ?
router.get('/clientError2/:requstNumber',function(req,res){
})

////////////////////you are trying to acsess the next url ////
const someUrl="changedForKnow.com"
router.get('/redirectError1',function(req,res){
    ///the rquste change has benn temporarily  check after two hour 
    
})

const someUrl2="changedForAlways.com"

router.get('/redirectError2',function(req,res){
    
})






module.exports = router
// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
    channelId: '2000821914',
    channelSecret: 'a8b739d8cde33a41695cba1f4dd10874',
    channelAccessToken: 'SsFHOJ2tIJdw224CnW2JWhpFL+vfk40b7hqfeApXrpPY3CgkXgDImuICXl5qN/zJd3o3NOKgUXbudKajW7Pm0qDPeebgmQSEvvA1W1g13+88R4ziWByqVYicn2NEDCezmY8t7/s4YMpQIb4ZbF13gQdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
    // event.message.text是使用者傳給bot的訊息
    // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
    event.reply(event.message.text).then(function (data) {
        // 當訊息成功回傳後的處理
    }).catch(function (error) {
        // 當訊息回傳失敗後的處理
    });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});
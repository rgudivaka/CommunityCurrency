const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


exports.chartData = functions.https.onCall(async (data, context) => {
  const resp =  await admin.database().ref('volume_info').child(data.id).limitToLast(50).once('value');
  return resp.val();
});

exports.boxData = functions.https.onCall(async (data, context) => {
    const box_info =  await admin.database().ref('box_info').once('value');
    const chart_resp =  await admin.database().ref('volume_info').once('value');
    var box_info_result = box_info.val();
    const chart_data = chart_resp.val();
    chart_data.map((data, index) => {
        box_info_result[index].chartData = data;
    });
    
    
    return box_info_result;
});

exports.updateChartData = functions.https.onCall(async (data, context) => {
    console.log(data);
    const ref = await admin.database().ref('volume_info').child(data.id.toString()).push();
    const ref2 = await admin.database().ref('box_info').child(data.id);
    const update_val = Math.floor(Math.random() * 100);
    ref.child('volume').set(update_val);
    ref2.child('volume').set(update_val);
})



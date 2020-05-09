const functions = require('firebase-functions');
const admin = require('firebase-admin');
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
    console.log(box_info);
    return box_info.val();
});

exports.updateChartData = functions.https.onCall(async (data, context) => {
    console.log(data);
    const ref = await admin.database().ref('volume_info').child(data.id.toString()).push();
    
    ref.child('volume').set(Math.floor(Math.random() * 100));
})



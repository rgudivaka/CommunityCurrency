const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


exports.chartData = functions.https.onCall((data, context) => {
  return {
    data: [
        {
            boxId: 1,
            timeStamps: [1, 2, 3, 4, 5],
            boxVolume: [0, 3, 3, 6, 11]
        }
    ]
  }
});

exports.boxData = functions.https.onCall((data, context) => {
    return {
        data: [
            {
                boxId: 1,
                volume: 11,
                size: "Large",
                name: "O'Hare #1",
                locDescription: "Can be found next to gate C9"
            },
            {
                boxId: 2,
                volume: 4,
                size: "Medium",
                name: "O'Hare #2",
                locDescription: "Can be found next to gate B12"
            }
        ]
    }
});



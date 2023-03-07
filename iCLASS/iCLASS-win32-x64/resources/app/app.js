const path = require('path')
const notifier = require('node-notifier')
const remote = require('electron').remote

/**question */
var firebase;
var config = {
    apiKey: "AIzaSyDB1g-yrAS_nw4wkz-gp6nElrFgTrKV9c4",
    authDomain: "test-b994b.firebaseapp.com",
    databaseURL: "https://test-b994b.firebaseio.com",
    projectId: "test-b994b",
    storageBucket: "test-b994b.appspot.com",
    messagingSenderId: "805447214225",
    appId: "1:805447214225:web:96f001edc07986ea"
};

firebase.initializeApp(config);
var database = firebase.database().ref('/qna/');
//catch firebase value
database.once('value', function(snapshot) {
    //clear div
document.getElementById('show').innerHTML = ""; 
    for(var i in snapshot.val()){
    //print value in div
    var span=document.createElement('span');
    var b=document.createElement('b');
    var br=document.createElement('br');
        var cText=document.createTextNode(snapshot.val()[i].發問者);
        var cText2=document.createTextNode("："+snapshot.val()[i].question);
        b.appendChild(cText);
        span.appendChild(cText2);
        var obj=document.getElementById('show');
        obj.appendChild(b);
        obj.appendChild(span);
        obj.appendChild(br);
    }
    
});


database.limitToLast(1).on('value', function(snapshot) { 

    for(var i in snapshot.val()){
    //print value in div
    var span=document.createElement('span');
    var b=document.createElement('b');
    var br=document.createElement('br');
        var cText=document.createTextNode(snapshot.val()[i].發問者);
        var cText2=document.createTextNode("："+snapshot.val()[i].question);
        b.appendChild(cText);
        span.appendChild(cText2);
        var obj=document.getElementById('show');
        obj.appendChild(b);
        obj.appendChild(span);
        obj.appendChild(br);
    }
    
    // alert(snapshot.val()[i].發問者+"問你 : "+snapshot.val()[i].question)
    notice(snapshot.val()[i].發問者+"問你 : "+snapshot.val()[i].question)

    
});

/** Flower */
  
  //firebase.initializeApp(config);
  var database = firebase.database().ref('/like/');
  //catch firebase value
  database.once('value', function(snapshot) {
    //clear div
  // document.getElementById('show').innerHTML = ""; 
  var flowers = ["./pic/F1.ico","./pic/F2.ico","./pic/F3.ico","./pic/F4.ico","./pic/F5.ico","./pic/F6.ico","./pic/F7.ico","./pic/F8.ico"];
  for(var i in snapshot.val()){
    //print value in div
    var span=document.createElement('span');
    var b=document.createElement('b');
    var br=document.createElement('br');
    var img=document.createElement('img');
    var pic=flowers[Math.floor((Math.random()*8))]
    img.src=pic;
    var cText=document.createTextNode(snapshot.val()[i].發問者);
    var cText2=document.createTextNode("對你灑了一朵");
    b.appendChild(cText);
    span.appendChild(cText2);
    var obj=document.getElementById('show');
    obj.appendChild(b);
    obj.appendChild(span);
    obj.appendChild(img); 
    obj.appendChild(br);
  }  
});
  database.limitToLast(1).on('value', function(snapshot) { 
    var flowers = ["./pic/F1.ico","./pic/F2.ico","./pic/F3.ico","./pic/F4.ico","./pic/F5.ico","./pic/F6.ico","./pic/F7.ico","./pic/F8.ico"];
    for(var i in snapshot.val()){
      //print value in div
      var span=document.createElement('span');
      var b=document.createElement('b');
      var br=document.createElement('br');
      var img=document.createElement('img');
      var pic=flowers[Math.floor((Math.random()*8))]
      img.src=pic;
      var cText=document.createTextNode(snapshot.val()[i].發問者);
      var cText2=document.createTextNode("對你灑了一朵");
      b.appendChild(cText);
      span.appendChild(cText2);
      var obj=document.getElementById('show');
      obj.appendChild(b);
      obj.appendChild(span);
      obj.appendChild(img); 
      obj.appendChild(br);
    }

     notice1("你收到來自"+snapshot.val()[i].發問者+"的一朵花")

  });
    


  /**PageTurning */

  document.getElementById("irs").onclick=function(){

    if(document.getElementById('qua').style.display=='none') {
    
    document.getElementById('ask').style.display='none';
    document.getElementById('qua').style.display='block';
    }
    else{
    document.getElementById('ask').style.display='block';
    document.getElementById('qua').style.display='none';
    }
  }

   

    /**IRS */
    // 監聽答題狀況
    firebase
    .database()
    .ref("ans/")
    .on("value", function(snapshot) {
      console.log(snapshot.val().答題狀況);
      if (snapshot.val().答題狀況 == true) {
        alert("學生已答題!");
        firebase
          .database()
          .ref("ans/")
          .set({
            答題狀況: false
          });
      }
    });

    document.getElementById('q1').addEventListener('click', () => {
      if(document.getElementById('a1').style.display='none'){
        document.getElementById('a1').style.display='block';
        document.getElementById('a2').style.display='none';
        document.getElementById('a3').style.display='none';
      }else{
        document.getElementById('a1').style.display='none';
      }
    })
    document.getElementById('q2').addEventListener('click', () => {
      if(document.getElementById('a2').style.display='none'){
        document.getElementById('a2').style.display='block';
        document.getElementById('a1').style.display='none';
        document.getElementById('a3').style.display='none';
      }else{
        document.getElementById('a2').style.display='none';
      }
    })
    document.getElementById('q3').addEventListener('click', () => {
      if(document.getElementById('a3').style.display='none'){
        document.getElementById('a3').style.display='block';
        document.getElementById('a1').style.display='none';
        document.getElementById('a2').style.display='none';
      }else{
        document.getElementById('a3').style.display='none';
      }
    })

    const submit1 = document.getElementById('qua1')
    submit1.addEventListener('click', (event) => {
      firebase
        .database()
        .ref("irs/")
        .push({
          question: '在專案管理中，若要選擇趕工的活動（Activity to Crash），下列敘述何者正確？',
          a: '選擇要徑上的活動進行趕工',
          b: '針對所有有寬裕時間（SLACK TIME）的活動進行趕工',
          c: '針對作業時間最長的活動進行趕工',
          d: '選擇成本最低的活動進行趕工',
          ans: 'a',
          題號: true
        })
    })
  const submit2 = document.getElementById('qua2')
  submit2.addEventListener('click', (event) => {
    firebase
      .database()
      .ref("irs/")
      .push({
        question: '下列哪些是專案人力資源規劃的手法（或方法）？',
        a: '以上皆是',
        b: '人力需求分析',
        c: '關係人分析',
        d: '組織理論',
        ans: 'c',
        題號: true
    })
  })
  const submit3 = document.getElementById('qua3')
  submit3.addEventListener('click', (event) => {
    firebase
      .database()
      .ref("irs/")
      .push({
        question: '專案團隊運作過程下列哪個時期顯得最為混亂？',
        a: '規範期',
        b: '審查期',
        c: '完成期',
        d: '組成期',
        ans: 'b',
        題號: true
    })
    
  })




 /** ScreenShot */

const {desktopCapturer, shell} = require('electron')
const {screen} = require('electron').remote
const ipc = require('electron').ipcRenderer;
const fs = require('fs')
const os = require('os')
//const path = require('path')
// const screenshot = document.getElementById('screen-shot')
const screenshotMsg = document.getElementById('screenshot-path')

var database = firebase.database().ref('/screenshot/');
database.limitToLast(1).on('value', function(snapshot) { 
  for(var i in snapshot.val()){
  var r=confirm(snapshot.val()[i].發問者+"請求截圖");
  if (r==true){
     shot()
    }else{
    alert("版權問題,不能截圖!");
    }
  }
})

// screenshot.addEventListener('click', (event) => {
function shot(){
  ipc.send('window-min');
  // screenshotMsg.textContent = '正在截取螢幕...'
  const thumbSize = determineScreenShotSize()
  let options = { types: ['screen'], thumbnailSize: thumbSize }

  desktopCapturer.getSources(options, (error, sources) => {
    if (error) return console.log(error)

    sources.forEach((source) => {
      if (source.name === 'Entire screen' || source.name === 'Screen 1') {
        const screenshotPath = path.join(os.tmpdir(), 'screenshot.png')
        fs.writeFile(screenshotPath, source.thumbnail.toPNG(), (error) => {
          if (error) return console.log(error)
          // shell.openExternal(`file://${screenshotPath}`)
          ipc.send('window-max');

          const metadata = {
            contentType: "image/png"
          };
          console.log(source)
          console.log(`file://${screenshotPath}`)

          sendImage()
          function sendImage() {
            // const userName = document.querySelector("#js-userName");
            // 取得上傳檔案的資料
            const date = new Date()
            const fileName = time = date.getTime()+ 'screenshot.png';
            // 上傳資訊設定
            const uploadTask = firebase
              .storage()
              .ref("images/")
              .child(fileName)
              .put(source.thumbnail.toPNG(),metadata);
            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on(
              "state_changed",
              function(snapshot) {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                  case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log("Upload is paused");
                    break;
                  case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log("Upload is running");
                    break;
                }
              },
              function(error) {
                switch (error.code) {
                  case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
              
                  case 'storage/canceled':
                    // User canceled the upload
                    break;

              
                  case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
                }
              },
              function() {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                  console.log("File available at", downloadURL);
                  var picurl=downloadURL
                firebase.database().ref("screenshoturl").push({
                  圖片連結: picurl
                })
                });
              }
            )
            }
          // const message = `截圖保存到: ${screenshotPath}`
          // console.log(screenshotPath)
          // screenshotMsg.textContent = message
        })
      }
    })
  })
}

function determineScreenShotSize () {
  const screenSize = screen.getPrimaryDisplay().workAreaSize
  const maxDimension = Math.max(screenSize.width, screenSize.height)
  return {
    width: maxDimension * window.devicePixelRatio,
    height: maxDimension * window.devicePixelRatio
  }
}
    

/**
 * System Notification
 * @param {string} msg
 */
function notice(msg) {
  /** Show Form */
  const window = remote.getCurrentWindow()
  window.restore()
  window.show()

  /** https://github.com/mikaelbr/node-notifier */
  notifier.notify({
      title: '發問',
      message: msg,
      icon: path.join(__dirname, 'question.ico'),
      sound: true,
  })
}

function notice1(msg) {
  /** Show Form */
  const windowf = remote.getCurrentWindow()
  windowf.restore()
  windowf.show()

  /** https://github.com/mikaelbr/node-notifier */
  notifier.notify({
      title: '發問',
      message: msg,
      icon: path.join(__dirname, 'flower.ico'),
      sound: true,
  })
}


/**視窗關閉 */
document.getElementById('closebt').addEventListener('click', () => {
  ipc.send('window-close');

})
document.getElementById('minbt').addEventListener('click', () => {
  ipc.send('window-min');
})
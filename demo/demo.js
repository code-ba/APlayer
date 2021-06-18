let ap1 = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: false,
    lrcType: false,
    mutex: true,
    preload: 'metadata',
    audio: [{
        name: '添加夜空中最亮的星',
        artist: '逃跑计划',
        url: 'http://static.allapi.cc/music/ykzzldx.mp3',
        cover: 'http://static.allapi.cc/music/ykzzldx.jpg',
        lrc: 'http://static.allapi.cc/music/ykzzldx.lrc',
        theme: '#ebd0c2'
    },{
        name: '我的梦',
        artist: '张靓颖',
        url: 'http://static.allapi.cc/music/wdm.mp3',
        cover: 'http://static.allapi.cc/music/wdm.jpg',
        lrc: 'http://static.allapi.cc/music/wdm.lrc',
        theme: '#ebd0c2'
    }]
});

// const ap2 = new APlayer({
//     element: document.getElementById('player2'),
//     mini: true,
//     autoplay: false,
//     lrcType: false,
//     mutex: true,
//     audio: [{
//         name: '添加夜空中最亮的星',
//         artist: '逃跑计划',
//         url: 'http://static.allapi.cc/music/music.mp3',
//         cover: 'http://static.allapi.cc/music/cover.jpg',
//         lrc: 'http://static.allapi.cc/music/music.lrc',
//         theme: '#ebd0c2'
//     }]
// });

// const ap3 = new APlayer({
//     element: document.getElementById('player3'),
//     mini: false,
//     autoplay: false,
//     lrcType: 3,
//     mutex: true,
//     audio: [{
//         name: '添加夜空中最亮的星',
//         artist: '逃跑计划',
//         url: 'http://static.allapi.cc/music/music.mp3',
//         cover: 'http://static.allapi.cc/music/cover.jpg',
//         lrc: 'http://static.allapi.cc/music/music.lrc',
//         theme: '#ebd0c2'
//     }]
// });

// const ap4 = new APlayer({
//     element: document.getElementById('player4'),
//     mini: false,
//     autoplay: false,
//     lrcType: false,
//     mutex: true,
//     theme: '#ad7a86',
//     order: 'random',
//     audio: [{
//         name: '添加夜空中最亮的星',
//         artist: '逃跑计划',
//         url: 'http://static.allapi.cc/music/music.mp3',
//         cover: 'http://static.allapi.cc/music/cover.jpg',
//         lrc: 'http://static.allapi.cc/music/music.lrc',
//         theme: '#ebd0c2'
//     }]
// });

// const ap5 = new APlayer({
//     element: document.getElementById('player5'),
//     mini: false,
//     autoplay: false,
//     lrcType: 3,
//     mutex: true,
//     theme: '#e9e9e9',
//     listFolded: false,
//     listMaxHeight: 80,
//     audio: [{
//         name: '添加夜空中最亮的星',
//         artist: '逃跑计划',
//         url: 'http://static.allapi.cc/music/music.mp3',
//         cover: 'http://static.allapi.cc/music/cover.jpg',
//         lrc: 'http://static.allapi.cc/music/music.lrc',
//     }]
// });
// const colorThief = new ColorThief();
// const image = new Image();
// const xhr = new XMLHttpRequest();
// const setTheme = (index) => {
//     if (!ap5.list.audios[index].theme) {
//         xhr.onload = function(){
//             let coverUrl = URL.createObjectURL(this.response);
//             image.onload = function(){
//                 let color = colorThief.getColor(image);
//                 ap5.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
//                 URL.revokeObjectURL(coverUrl)
//             };
//             image.src = coverUrl;
//         }
//         xhr.open('GET', ap5.list.audios[index].cover, true);
//         xhr.responseType = 'blob';
//         xhr.send();
//     }
// };
// setTheme(ap5.list.index);
// ap5.on('listswitch', (data) => {
//     setTheme(data.index);
// });

// const ap6 = new APlayer({
//     element: document.getElementById('player6'),
//     mutex: true,
//     audio: [{
//         name: '添加夜空中最亮的星',
//         artist: '逃跑计划',
//         url: 'http://static.allapi.cc/music/music.mp3',
//         cover: 'http://static.allapi.cc/music/cover.jpg',
//         lrc: 'http://static.allapi.cc/music/music.lrc',
//     }]
// });
// const ap7 = new APlayer({
//     element: document.getElementById('player7'),
//     mutex: true,
//     audio: [{
//         name: '添加夜空中最亮的星',
//         artist: '逃跑计划',
//         url: 'http://static.allapi.cc/music/music.mp3',
//         cover: 'http://static.allapi.cc/music/cover.jpg',
//         lrc: 'http://static.allapi.cc/music/music.lrc',
//         theme: '#ebd0c2',
//         type: 'customHls',
//     }],
//     customAudioType: {
//         'customHls': function (audioElement, audio, player) {
//             if (Hls.isSupported()) {
//                 const hls = new Hls();
//                 hls.loadSource(audio.url);
//                 hls.attachMedia(audioElement);
//             }
//             else if (audioElement.canPlayType('application/x-mpegURL') || audioElement.canPlayType('application/vnd.apple.mpegURL')) {
//                 audioElement.src = audio.url;
//             }
//             else {
//                 player.notice('Error: HLS is not supported.');
//             }
//         }
//     }
// });

// const ap8 = new APlayer({
//     element: document.getElementById('player8'),
//     mutex: true,
//     theme: '#ad7a86',
//     order: 'random',
//     lrcType: 3,
//     fixed: true,
// });
// $.ajax({
//     url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=35798529',
//     success: function (list) {
//         ap8.list.add(JSON.parse(list));
//     }
// });
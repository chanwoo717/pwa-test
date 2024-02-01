self.addEventListener('install',(a)=>{
    console.log('설치완료');
})
self.addEventListener('activate',(a)=>{
    console.log('서비스워커 동작 시작되고 있음...');
})
self.addEventListener('fetch',(a)=>{
    console.log('데이터 요청시 처리...');
})
self.addEventListener('message',(event)=>{

    console.log('allahu akbar',event.data);
    const option = {
        body:event.data.message,
        icon:'./Spider dunk.jpg',
        image:'./2624869_avatar_bounty hunter_droid_space suit_icon.png',
        badge:'./cw-logo.png',
        vibrate:[200,1000,3000],
        actions:[
            {action:'open', title:'자세히보기'},
            {action:'close', title:'닫기'}
        ]
    }
    self.registration.showNotification('title', option);
})
self.addEventListener('notificationclick',(event)=>{
    console.log(event);
    console.log(clients);
    if(event.action == 'open'){
        //자세히보기
        clients.openWindow('https://naver.com');
    }else{
        //닫기
        event.notification.close();
    }
})
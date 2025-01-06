document.addEventListener('visibilitychange',()=>{
  let v=document.querySelector('video');
  if(!v)return;
  if(document.hidden){
    if(document.pictureInPictureElement!==v){
      v.requestPictureInPicture().catch(()=>{});
    }
  }else{
    if(document.pictureInPictureElement){
      document.exitPictureInPicture().catch(()=>{});
    }
  }
});

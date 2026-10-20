'use strict';
const fs=require('node:fs/promises');const path=require('node:path');const {execFile}=require('node:child_process');const {promisify}=require('node:util');const execute=promisify(execFile);
async function renderClip(directory){
 const dir=path.resolve(directory);await fs.mkdir(dir,{recursive:true});
 const texts={'brand.txt':'ExampleSite','hook.txt':'Before you buy,\ncheck the details.','compare.txt':'Same model?\nSame capacity?\nSame condition?','confirm.txt':'Confirm the price\non the retailer page.','footer.txt':'www.example.com'};
 for(const [name,text]of Object.entries(texts))await fs.writeFile(path.join(dir,name),text);
 await fs.copyFile('C:/Windows/Fonts/arial.ttf',path.join(dir,'font.ttf'));
 const draw=(file,size,y,extra='')=>`drawtext=fontfile=font.ttf:textfile=${file}:expansion=none:fontcolor=white:fontsize=${size}:line_spacing=25:x=(w-text_w)/2:y=${y}${extra}`;
 const filter=["drawbox=x=0:y=0:w=1080:h=28:color=0x7159ff:t=fill","drawbox=x=75:y=320:w=930:h=1050:color=0x192342:t=fill",draw('brand.txt',70,160),draw('hook.txt',72,650,":enable='lt(t,5)'"),draw('compare.txt',70,590,":enable='between(t,5,10)'"),draw('confirm.txt',70,650,":enable='gte(t,10)'"),draw('footer.txt',48,1550),"fade=t=in:st=0:d=0.5,fade=t=out:st=14.5:d=0.5"].join(',');
 await execute(process.env.BOTCORP_FFMPEG||'ffmpeg',['-hide_banner','-loglevel','error','-y','-f','lavfi','-i','color=c=0x090d1a:s=1080x1920:r=30:d=15','-f','lavfi','-i','anullsrc=channel_layout=stereo:sample_rate=48000','-vf',filter,'-t','15','-c:v','libx264','-preset','ultrafast','-crf','22','-pix_fmt','yuv420p','-c:a','aac','-b:a','128k','-movflags','+faststart','ExampleSite-short.mp4'],{cwd:dir,timeout:120000,maxBuffer:1024*1024,windowsHide:true});
 await fs.writeFile(path.join(dir,'social-caption.txt'),'Check the exact model, capacity and condition before comparing listings. Confirm the current price and terms on the retailer page. Explore supported listings at https://example.com/ #OnlineShopping #ShoppingTips #Shorts\n');
 await fs.writeFile(path.join(dir,'publishing-status.json'),JSON.stringify({status:'not_published',targets:['instagram_reels','youtube_shorts'],format:{width:1080,height:1920,durationSeconds:15,video:'H.264',audio:'AAC silence'},reason:'Official account authorization and publishing configuration are required. No post was sent.'},null,2));
 return ['ExampleSite-short.mp4','social-caption.txt','publishing-status.json'];
}
module.exports={renderClip};

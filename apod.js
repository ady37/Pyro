"use strict"
//returns date string in YYYY-MM-DD format
const getDateString=date=>
    `${date.getFullYear()}-${date.getMonth()+1}-${(date.getDate)}`;
const displayPicture=>{
    let html="";
    if(data.error){
        html+=`<span class="error">${data.error.msg}</span>`;

    }
    else if(data.code){
        html+=`<span class="error">${data.msg}</span>`;

    }
    else{
        html+='<h3>${data.title}</h3>';
        const width=700;
        switch(data.media_type){
            case "image":
                html+=`<img src="${data.url}" width="${width}"
                alt="NASA photo">`;
                break;
            case "video":
                html+=`<iframe src="${data.url}"
                frameborder="0" allowfullscreen></iframe>`;
                break;
            default:
                html+=`<img src="images/notavailable.png" 
                width="${width}" alt="NASA photo">`;
        }
        html+=`<div>${data.date}`;
        if(data.copyright){
            html+=`<span class="right">&copy;${data.copyright}</span>`;
        }
        html+="</div>";
        html+=`<p>${data.explanation}</p>`;
    }
    $("#display").html(html);
};
const displayError=error=>{
    let html=`<span class="error">${error.message}</span>`;
    $("#display").html(html);
};
$(document).ready()=>{
const today=new Date();
let dataStr=getDateString(today);
const dateTextbox=$("#date");
dateTextbox.val(dateStr);
dateTextbox.focus();

};
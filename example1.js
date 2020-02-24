var i = 1;
var div = document.getElementById("box");
var btn = document.getElementById('btn');
var data = () => {
    return new Promise((resolve, reject) => {
        var ourReq = new XMLHttpRequest();
        ourReq.open('GET', `https://learnwebcode.github.io/json-example/animals-${i}.json`);
        ourReq.onload = () => {
            var ourData = JSON.parse(ourReq.responseText);
            rehtml(ourData);
            // console.log(ourData);
        };

        ourReq.onerror = () => { reject("Error") };
        ourReq.send();
        i++;
        div.classList.add("box1");
        if (i > 3) {
            //btn.classList.add("hide"); 
            btn.style.display = "none";
        }
    })
}

btn.addEventListener("click",function(){      
    data().then(res => {
        console.log(res);
    }).catch(err => console.log(err));
});



function rehtml(data)
{
    var str="";
    for(i1=0;i1<data.length;i1++){
        str += "<p .text>" + data[i1].name + " is a " + data[i1].species + data[i1].name+".</p><hr>";
    }
    div.insertAdjacentHTML('beforeend',str);
}

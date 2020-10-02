console.log('%c ajax request','color: green; font-size: 20px;');

    // ! Ajax Request
    function getData(){
        return new Promise((resolve,reject)=>{
            var http = new XMLHttpRequest();
            http.onreadystatechange = function(){
                if(http.readyState == 4 && http.status == 200){
                    const data = JSON.parse(http.response);
                    resolve(data);
                }else if(http.readyState == 4){
                    reject('get error');
                }
            }
            http.open("GET","https://jsonplaceholder.typicode.com/posts/",true);
            http.send();
        });
    }
    getData().then(response => {
        console.log(response);
        console.log('hello after getting data')
    }).catch(err => {
        console.log(err)
    })
    //end

    // ! Fetch API (return promise)
    fetch("https://jsonplaceholder.typicode.com/posts/").then(res => {
        return res.json(); // this will return a Promise
    }).then(data => {
        console.log('resolved: ',data);
    }).catch(err => {   
        console.log(err)
    });
   
    




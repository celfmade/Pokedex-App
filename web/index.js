
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        console.log(this.state);
    }
    
}
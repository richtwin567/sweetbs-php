function showSpinner(id="") {
    if (id){
        var s = document.getElementById(id);
        s.classList.remove("hidden");
    }else{
        var spns = document.getElementsByClassName("spinner-div");
        for (var s of spns){
            s.classList.remove("hidden");
        }
    }
}

function hideSpinner(id="") {
    if (id){
        var s = document.getElementById(id);
        s.classList.add("hidden");
    }else{
        var spns = document.getElementsByClassName("spinner-div");
        for (var s of spns){
            s.classList.add("hidden");
        }
    }
}

export {hideSpinner,showSpinner};
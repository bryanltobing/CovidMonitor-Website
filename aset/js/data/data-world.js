let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 & xhr.status == 200) {
        let covid = JSON.parse(this.responseText);
        var data = document.getElementById('confirmed');
        var data2 = document.getElementById('recovered');
        var data3 = document.getElementById('deaths');
        var data4 = document.getElementById('active-case');
        data.innerHTML = covid.confirmed.value;
        data2.innerHTML = covid.recovered.value;
        data3.innerHTML = covid.deaths.value;
        data4.innerHTML = covid.confirmed.value - covid.recovered.value - covid.deaths.value;
        
        
    }
}

xhr.open('GET','https://covid.mathdro.id/api', true);
xhr.send();
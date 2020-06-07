function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 & xhr.status == 200) {
        let covid = JSON.parse(this.responseText);
        var data = document.getElementById('confirmed');
        var data2 = document.getElementById('recovered');
        var data3 = document.getElementById('deaths');
        var data4 = document.getElementById('active-case');
        data.innerHTML = `${numberWithCommas(covid.confirmed.value)} people`;
        data2.innerHTML = `${numberWithCommas(covid.recovered.value)} people`;
        data3.innerHTML = `${numberWithCommas(covid.deaths.value)} people`;
        var activeCase = covid.confirmed.value - covid.recovered.value - covid.deaths.value;
        data4.innerHTML = ` ${numberWithCommas(activeCase)} people`;
        
        
    }
}

xhr.open('GET','https://covid.mathdro.id/api', true);
xhr.send();
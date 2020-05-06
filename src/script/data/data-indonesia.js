let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 & xhr.status == 200) {
        let covidId = JSON.parse(this.responseText);
        var dataId = document.getElementById('confirmedId');
        var data2Id = document.getElementById('recoveredId');
        var data3Id = document.getElementById('deathsId');
        dataId.innerText = `${covidId.confirmed.value} orang`;
        data2Id.innerText = `${covidId.recovered.value} orang`;
        data3Id.innerText = `${covidId.deaths.value} orang`;
        
        
    }
}

xhr.open('GET','https://covid19.mathdro.id/api/countries/Indonesia', true);
xhr.send();
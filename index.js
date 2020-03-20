$('#getStats').click();
$('#getCountries').click();

function getStats() {
  $.ajax({
    url:'https://corona.lmao.ninja/all',
    type: "get",
    data: {},
    success: function (response) {
                 var dateUpdated= new Date(response.updated).toUTCString(); 
                 document.querySelector('#confirmed').innerHTML = response.cases;
                 document.querySelector('#recovered').innerHTML = response.recovered;
                 document.querySelector('#deaths').innerHTML = response.deaths;
                 document.querySelector('#updatedAt').innerHTML = `Last Updated At ${dateUpdated}`;
    },
    error: function (xhr) {
      stopLoading();
      alert('Internal Server Error..')
    }
  });
}
function getCountries() {
  $.ajax({
    url:'https://corona.lmao.ninja/countries',
    type: "get",
    data: {},
    success: function (response) {
      let sectionsContent = `<table class="table table-striped table-bordered" >
              <tr>
             <th>S.No</th>
            <th>Country</th>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Recovered</th> 
            <th>Today Reported</th>
            <th>Today Deaths</th>
            </tr>`
                         for(let i = 0; i <response.length; i++) {
                             sectionsContent += `<tr>
                             <td>${i+1}</td>
                            <td>${response[i].country}</td>
                            <td>${response[i].cases}</td>
                            <td>${response[i].deaths}</td>
                            <td>${response[i].recovered}</td>
                            <td>${response[i].todayCases}</td>
                           <td>${response[i].todayDeaths}</td>
                        </tr>`
                    }
                 let content= sectionsContent+`</table>` 
                 document.querySelector('#getCountries').innerHTML = content
    },
    error: function (xhr) {
      stopLoading();
      alert('Internal Server Error..')
    }
  });
}


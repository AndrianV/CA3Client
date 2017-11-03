const URL = require("../../package.json").serverURL;

class NicePlacesData {

  getAllPlacesData()  {
    fetch(URL + "api/niceplace/all")
      .then(res => {
        console.log("fetch from", "api/niceplaces/all");
        return res.json();
      }).then(data => { console.log(data[0].lName); return data[0].lName;} );
  }
}

let nicePlacesData = new NicePlacesData();
export default nicePlacesData;
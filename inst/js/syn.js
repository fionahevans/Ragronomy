

/*
 * Select Your Nitrogen Model
 * 
 * Author: Fiona Evans (fiona.evans@graduate.uwa.edu.au)
 */
 
 

function tanh (arg) {
    // sinh(number)/cosh(number)
    return (Math.exp(arg) - Math.exp(-arg)) / (Math.exp(arg) + Math.exp(-arg));
}


var soils = [ 
  {"name":"Clay","fieldCapacity":0.35,"wiltingPoint":0.16,"gravelContent":0,
      "rootHospitality":"Normal","initDepthOfWettingFront":1},
  {"name":"Clay Loam","fieldCapacity":0.28,"wiltingPoint":0.12,"gravelContent":0,
      "rootHospitality":"Normal","initDepthOfWettingFront":1},
  {"name":"Loam","fieldCapacity":0.2,"wiltingPoint":0.09,"gravelContent":0,
      "rootHospitality":"Normal","initDepthOfWettingFront":0},
  {"name":"Sandy Loam","fieldCapacity":0.15,"wiltingPoint":0.06,"gravelContent":0,
      "rootHospitality":"Normal","initDepthOfWettingFront":1},
  {"name":"Loamy Sand","fieldCapacity":0.12,"wiltingPoint":0.06,"gravelContent":0,
      "rootHospitality":"Normal","initDepthOfWettingFront":1},
  {"name":"Loamy Sand ripped","fieldCapacity":0.12,"wiltingPoint":0.06,"gravelContent":0,
      "rootHospitality":"Ripped","initDepthOfWettingFront":0},
  {"name":"Loamy Sand acid","fieldCapacity":0.12,"wiltingPoint":0.06,"gravelContent":0,
      "rootHospitality":"Acid","initDepthOfWettingFront":0},
  {"name":"Loamy Sand 60% gravel","fieldCapacity":0.11,"wiltingPoint":0.05,"gravelContent":0.6,
      "rootHospitality":"Normal","initDepthOfWettingFront":0},
  {"name":"Sand","fieldCapacity":0.1,"wiltingPoint":0.05,"gravelContent":0.6,
      "rootHospitality":"Normal","initDepthOfWettingFront":0},
  {"name":"Copy of Loamy Sand 60% gravel","fieldCapacity":0.11,"wiltingPoint":0.05,"gravelContent":0.6,
      "rootHospitality":"Normal","initDepthOfWettingFront":0}
];




var cropData = [
  {"name":"Wheat","type":"wheat"},
  {"name":"Barley","type":"barley"},
  {"name":"Canola","type":"canola"},
  {"name":"Oats","type":"oats"},
  {"name":"Premium White wheat","type":"wheat","index":1,"protein":7,"price":-40},
  {"name":"Premium White wheat","type":"wheat","index":2,"protein":8,"price":-29},
  {"name":"Premium White wheat","type":"wheat","index":3,"protein":9,"price":-14},
  {"name":"Premium White wheat","type":"wheat","index":4,"protein":10,"price":0},
  {"name":"Premium White wheat","type":"wheat","index":5,"protein":11.5,"price":10.5},
  {"name":"Premium White wheat","type":"wheat","index":6,"protein":12,"price":14.5},
  {"name":"Premium White wheat","type":"wheat","index":7,"protein":13,"price":20.5},
  {"name":"Premium White wheat","type":"wheat","index":8,"protein":14,"price":20.5},
  {"name":"ASW","type":"wheat","index":1,"protein":6,"price":-32},
  {"name":"ASW","type":"wheat","index":2,"protein":7,"price":-29},
  {"name":"ASW","type":"wheat","index":3,"protein":8,"price":-14},
  {"name":"ASW","type":"wheat","index":4,"protein":9,"price":0},
  {"name":"ASW","type":"wheat","index":5,"protein":10,"price":9},
  {"name":"ASW","type":"wheat","index":6,"protein":11.5,"price":12.5},
  {"name":"ASW","type":"wheat","index":7,"protein":12,"price":12.5},
  {"name":"ASW","type":"wheat","index":8,"protein":13,"price":12.5},
  {"name":"Hard wheat","type":"wheat","index":1,"protein":8,"price":-40},
  {"name":"Hard wheat","type":"wheat","index":2,"protein":10,"price":-11},
  {"name":"Hard wheat","type":"wheat","index":3,"protein":11,"price":-4},
  {"name":"Hard wheat","type":"wheat","index":4,"protein":11.5,"price":0},
  {"name":"Hard wheat","type":"wheat","index":5,"protein":12.5,"price":9.5},
  {"name":"Hard wheat","type":"wheat","index":6,"protein":13,"price":13},
  {"name":"Hard wheat","type":"wheat","index":7,"protein":14,"price":20},
  {"name":"Hard wheat","type":"wheat","index":8,"protein":16,"price":20},
  {"name":"Durum premium","type":"wheat","index":1,"protein":10,"price":-26},
  {"name":"Durum premium","type":"wheat","index":2,"protein":11,"price":-18},
  {"name":"Durum premium","type":"wheat","index":3,"protein":13,"price":0},
  {"name":"Durum premium","type":"wheat","index":4,"protein":14,"price":9},
  {"name":"Durum premium","type":"wheat","index":5,"protein":16,"price":19},
  {"name":"Durum general","type":"wheat","index":1,"protein":10,"price":0},
  {"name":"Durum general","type":"wheat","index":2,"protein":11,"price":6},
  {"name":"Durum general","type":"wheat","index":3,"protein":13,"price":20},
  {"name":"Durum general","type":"wheat","index":4,"protein":14,"price":23},
  {"name":"Durum general","type":"wheat","index":5,"protein":16,"price":23},
  {"name":"Soft wheat","type":"wheat","index":1,"protein":8.5,"price":0},
  {"name":"Soft wheat","type":"wheat","index":2,"protein":9,"price":-3.5},
  {"name":"Soft wheat","type":"wheat","index":3,"protein":9.5,"price":-7},
  {"name":"Noodle wheat","type":"wheat","index":1,"protein":9.2,"price":-19.5},
  {"name":"Noodle wheat","type":"wheat","index":2,"protein":9.5,"price":-7.5},
  {"name":"Noodle wheat","type":"wheat","index":3,"protein":10,"price":0},
  {"name":"Noodle wheat","type":"wheat","index":4,"protein":10.5,"price":0},
  {"name":"Noodle wheat","type":"wheat","index":5,"protein":11,"price":3.5},
  {"name":"Noodle wheat","type":"wheat","index":6,"protein":11.5,"price":7.5},
  {"name":"Noodle wheat","type":"wheat","index":7,"protein":11.8,"price":11.4},
  {"name":"Malting barley","type":"barley","index":1,"protein":8.5,"price":-7.5},
  {"name":"Malting barley","type":"barley","index":2,"protein":9,"price":-2.5},
  {"name":"Malting barley","type":"barley","index":3,"protein":9.5,"price":0},
  {"name":"Malting barley","type":"barley","index":4,"protein":11.5,"price":0},
  {"name":"Malting barley","type":"barley","index":5,"protein":12,"price":-1.75},
  {"name":"Malting barley","type":"barley","index":6,"protein":12.5,"price":-6.75},
  {"name":"Malting barley","type":"barley","index":7,"protein":13,"price":-15},
  {"name":"Malting barley","type":"barley","index":8,"protein":13.1,"price":-18},
  {"name":"Canola (Oil)","type":"canola","index":1,"protein":30,"price":0.85},
  {"name":"Canola (Oil)","type":"canola","index":2,"protein":34,"price":0.91},
  {"name":"Canola (Oil)","type":"canola","index":3,"protein":36,"price":0.94},
  {"name":"Canola (Oil)","type":"canola","index":4,"protein":38,"price":0.97},
  {"name":"Canola (Oil)","type":"canola","index":5,"protein":40,"price":1},
  {"name":"Canola (Oil)","type":"canola","index":6,"protein":42,"price":1.03},
  {"name":"Canola (Oil)","type":"canola","index":7,"protein":46,"price":1.09},
  {"name":"Canola (Oil)","type":"canola","index":8,"protein":50,"price":1.15}
]; 




var fertiliserData = [
  {"name":"Agflow","urea":0,"nh4n":0.13,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.3,"cost":432,"fractionCost":0.2},
  {"name":"Agras","urea":0,"nh4n":0.175,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.25,"cost":340,"fractionCost":0.45},
  {"name":"Agras and Manganese","urea":0,"nh4n":0.145,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.25,"cost":386,"fractionCost":0.4},
  {"name":"Agrich","urea":0,"nh4n":0.12,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.3,"cost":411,"fractionCost":0.25},
  {"name":"Agstar","urea":0,"nh4n":0.149,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.3,"cost":397,"fractionCost":0.3},
  {"name":"Agyield","urea":0,"nh4n":0.175,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.3,"cost":432,"fractionCost":0.25},
  {"name":"Amsul TE","urea":0,"nh4n":0.205,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.3,"cost":247,"fractionCost":1},
  {"name":"CAN","urea":0,"nh4n":0.135,"no3n":0.135,"ammonificationRate":0,"nitrificationRate":0.3,"cost":385,"fractionCost":1},
  {"name":"Cropras","urea":0,"nh4n":0.158,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.3,"cost":300,"fractionCost":0.45},
  {"name":"Dairy","urea":0,"nh4n":0.114,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.3,"cost":419,"fractionCost":0.3},
  {"name":"DAP","urea":0,"nh4n":0.18,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.35,"cost":470,"fractionCost":0.3},
  {"name":"Flexi N","urea":0.18,"nh4n":0.07,"no3n":0.07,"ammonificationRate":0.9,"nitrificationRate":0.3,"cost":280,"fractionCost":1},
  {"name":"Hay","urea":0,"nh4n":0.126,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.3,"cost":361,"fractionCost":1},
  {"name":"MAP","urea":0,"nh4n":0.11,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.35,"cost":480,"fractionCost":0.2},
  {"name":"NPK Blue Special","urea":0,"nh4n":0.102,"no3n":0.018,"ammonificationRate":0,"nitrificationRate":0.3,"cost":568,"fractionCost":0.45},
  {"name":"Potato E","urea":0,"nh4n":0.04,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.3,"cost":304,"fractionCost":0.2},
  {"name":"Springburst","urea":0,"nh4n":0.137,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.3,"cost":310,"fractionCost":0.65},
  {"name":"Sulphate Ammonia","urea":0,"nh4n":0.21,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.3,"cost":180,"fractionCost":1},
  {"name":"Topyield 3","urea":0,"nh4n":0.275,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.3,"cost":100,"fractionCost":1},
  {"name":"Turf Special","urea":0,"nh4n":0.123,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.3,"cost":363,"fractionCost":0.8},
  {"name":"Urea","urea":0.46,"nh4n":0,"no3n":0,"ammonificationRate":0.9,"nitrificationRate":0.4,"cost":340,"fractionCost":1},
  {"name":"Urea Plus","urea":0.37,"nh4n":0,"no3n":0,"ammonificationRate":0.9,"nitrificationRate":0.4,"cost":332,"fractionCost":1},
  {"name":"Vigour","urea":0,"nh4n":0.05,"no3n":0,"ammonificationRate":0.9,"nitrificationRate":0.3,"cost":468,"fractionCost":0.15},
  {"name":"Urea 1000","urea":0.46,"nh4n":0,"no3n":0,"ammonificationRate":0.9,"nitrificationRate":0.4,"cost":1000,"fractionCost":1},
  {"name":"DAP 1800","urea":0,"nh4n":0.18,"no3n":0,"ammonificationRate":0,"nitrificationRate":0.35,"cost":1800,"fractionCost":0.3},
  {"name":"nitrate","urea":0,"nh4n":0,"no3n":1,"ammonificationRate":0,"nitrificationRate":0,"cost":0.1,"fractionCost":1}
];



var rainfallProfiles = [ 
      { name: 'Default rain - leaching',  description: '', data: []  },
      { name: 'Default rain - no leaching', description: '', data: []  },
      { name: 'Dryland rain - leaching',  description: '', data: []  },
      { name: 'Dryland rain - no leaching',  description: '', data: []  },
      { name: 'Dryland summer rain - leaching', description: '', data: [] },
      { name: 'Dryland summer rain - no leaching', description: '',data: []  },
      { name: 'Summer rain - leaching', description: '', data: []  },
      { name: 'Summer rain - no leaching', description: '', data: [] }];
    
    // Default rain - leaching
    var week = seq(-14, 15);
    var rain = [0, 0, 0, 0, 0, 0, 0, 0, 0,
                10, 0, 3, 3, 3, 3, 
                10, 20, 75, 20, 5,
                10, 10, 0, 10, 
                0, 5, 0, 0, 0, 0, 0];          
     
    for (var i=0; i<week.length; i++) {
     rainfallProfiles[0].data[i] = {
        week: week[i],
        rain: rain[i]
      }
    }
    
    // Default rain - no leaching
    var rain = [0, 0, 0, 0, 0, 0, 0, 0, 0,
                10, 0, 3, 3, 3, 3, 
                10, 20, 15, 20, 5,
                10, 10, 0, 10, 
                0, 5, 0, 0, 0, 0, 0];          
     
    for (var i=0; i<week.length; i++) {
     rainfallProfiles[1].data[i] = {
        week: week[i],
        rain: rain[i]
      }
    }
    
    // Dryland rain - leaching
    var rain = [0, 0, 0, 0, 0, 0, 0, 0, 0,
                10, 0, 3, 3, 3, 3, 
                8, 8, 8, 75, 5,
                8, 8, 8, 0, 
                0, 0, 0, 0, 0, 0, 0];          
     
    for (var i=0; i<week.length; i++) {
     rainfallProfiles[2].data[i] = {
        week: week[i],
        rain: rain[i]
      }
    }
    
    // Dryland rain - no leaching
    var rain = [0, 0, 0, 0, 0, 0, 0, 0, 0,
                10, 0, 3, 3, 3, 3, 
                8, 8, 8, 8, 5,
                8, 8, 8, 0, 
                0, 0, 0, 0, 0, 0, 0];          
     
    for (var i=0; i<week.length; i++) {
     rainfallProfiles[3].data[i] = {
        week: week[i],
        rain: rain[i]
      }
    }
    
    // Dryland summer rain - leaching
    var rain = [100, 0, 0, 0, 0, 0, 0, 0, 0,
                10, 0, 3, 3, 3, 3, 8, 8, 8, 75, 8, 8, 8, 8, 
                0, 0, 0, 0, 0, 0, 0];       
     
    for (var i=0; i<week.length; i++) {
      rainfallProfiles[4].data[i] = {
        week: week[i],
        rain: rain[i]
      }
    }
    
    // Dryland summer rain - no leaching
    var rain = [100, 0, 0, 0, 0, 0, 0, 0, 0,
                10, 0, 3, 3, 3, 3, 8, 8, 8, 8, 8, 8, 8, 8, 
                0, 0, 0, 0, 0, 0, 0];       
     
    for (var i=0; i<week.length; i++) {
      rainfallProfiles[5].data[i] = {
        week: week[i],
        rain: rain[i]
      }
    }
    
    // Summer rain - leaching
    var rain = [100, 0, 0, 0, 0, 0, 0, 0, 0,
                10, 0, 3, 3, 3, 3, 
                10, 20, 75, 20, 5,
                10, 10, 0, 10, 
                0, 5, 0, 0, 0, 0, 0];          
     
    for (var i=0; i<week.length; i++) {
     rainfallProfiles[6].data[i] = {
        week: week[i],
        rain: rain[i]
      }
    }
    
    // Summer rain - no leaching
    var rain = [100, 0, 0, 0, 0, 0, 0, 0, 0,
                10, 0, 3, 3, 3, 3, 
                10, 20, 15, 20, 5,
                10, 10, 0, 10, 
                0, 5, 0, 0, 0, 0, 0];          
     
    for (var i=0; i<week.length; i++) {
     rainfallProfiles[7].data[i] = {
        week: week[i],
        rain: rain[i]
      }
    }


    function seq(min, max, len) {
    // Return a sequence of numbers
      var r = [];
      var indx = 0;
      var by = 1
      if (len > 0) by = (max - min + 1)/len;

      for (var i=min; i<=max; i+=by) {
        r[indx] = i;
        indx++;
        }

      return(r);
    }

    function array(val, len) {
    // Return an array filled with the given value
      var r = [];

      for (var i=0; i<len; i++) {
        r[i] = val;
        }

      return(r);
    }
    
    
    /**
     * Add fertilisers N rate and netRate.
     */
    function addFertilisers(fertilisersAdded, fertiliserData) {
      var fertiliserNames = fertiliserData.map(function(a) {return a.name;});
      for (var i=0; i<fertilisersAdded.length; i++) {
        // matching fertiliserData row
        for (var j=0; j<fertiliserData.length; j++) {
          if (fertiliserData[j].name == fertilisersAdded[i].name) break;
        }
        var tmp = fertiliserData[j];
        // rate
        fertilisersAdded[i].rate = Math.round(100 / (tmp.urea + tmp.nh4n + tmp.no3n) *
          fertilisersAdded[i].netRate / 100);
        // cost
        fertilisersAdded[i].cost =  round2(tmp.cost / (tmp.urea + tmp.nh4n + tmp.no3n) * tmp.fractionCost / 1000);
      }
      return fertilisersAdded;
    }


    function round1(x) {
    // Round to one decimal place
      return Math.round(x * 10) / 10;
    }

    function round2(x) {
    // Round to two decial places
      return Math.round(x * 100) / 100;
    }
    
     function round3(x) {
    // Round to 3 decial places
      return Math.round(x * 1000) / 1000;
    }
    
    

    function nitrogen_in_legume(i, paddockHistory) {
    // Calculate residual organic nitrogen (RON) for the i-th element in paddockHistory

      var hi = 0;

      if (paddockHistory[i].harvestIndex == 'very low') {
        hi = 0.15;
      }
      else if (paddockHistory[i].harvestIndex == 'low') {
        hi = 0.2;
      }
      else if (paddockHistory[i].harvestIndex == 'medium') {
        hi = 0.25;
      }
      else if (paddockHistory[i].harvestIndex == 'high') {
        hi = 0.3;
      }
      else if (paddockHistory[i].harvestIndex == 'very high') {
        hi = 0.4;
      }

      var NC_LUPINS_NB = 0.0275;
      var NC_LUPINS_NS = 0.05;

      var RONproduced = paddockHistory[i].yield * 1000 * (NC_LUPINS_NB / hi - NC_LUPINS_NS);

      return(RONproduced);
    }

    function nitrogen_in_pasture(i, paddockHistory) {
    // Calculate residual organic nitrogen (RON) for the i-th element in paddockHistory

      var N_LEGUME = 2.5/100;
      var N_NONLEGUME = 1.4/100;

      var RONproduced = 0;
      if (paddockHistory[i].legumeContent > 0) RONproduced = 2/3*(paddockHistory[i].yield*1000)*
        (N_LEGUME*paddockHistory[i].legumeContent/100 + N_NONLEGUME*(1-paddockHistory[i].legumeContent/100));

     return(RONproduced);
    }

    function nitrogen_in_greenManure(i, paddockHistory) {
    // Calculate residual organic nitrogen (RON) for the i-th element in paddockHistory

      var N_LEGUME = 2.5/100;
      var N_NONLEGUME = 1.4/100;

      var RONproduced = 0;
      if (paddockHistory[i].legumeContent > 0) RONproduced = 2/3*(year.yield*1000)*
        (N_LEGUME*year.legumeContent/100 + N_NONLEGUME*(1-year.legumeContent/100));

      var yr =  paddockHistory[i].year;
      var CurrentYear = paddockHistory[0].year;

      if( (CurrentYear-1) == yr){
        // if last year
        RONproduced = RONproduced/2
        AmmoniumProduced = RONproduced/2
      }

     return(RONproduced);
    }

    function nitrogen_in_nonLegume(i, paddockHistory) {
    // Calculate residual organic nitrogen (RON) for the i-th element in paddockHistory
     var RONproduced = 0;
     return(RONproduced);
    }

    function calculateRON(paddockHistory){

      var RON = {
          RONproduced: [0,0,0,0],
          ammoniumProduced: [0,0,0,0],
          totalRonCarried: [0,0,0,0]
        }

      for (var i=paddockHistory.length-1; i>=0; i--){

        if (paddockHistory[i].cropPasture == 'green manure') {
          RON.RONproduced[i] = nitrogen_in_greenManure(i, paddockHistory)

          if (i == 0) { // half RON produced
            RON.RONproduced[i] = RON.RONproduced[i]/2;

            // Ammonium produced Only produced by green manure. 
            // Ammonium and RON together make up total green manure nitrogen.
            // Only separated into RON and ammonium in the last year. Years prior to the previous all green manure
            // nitrogen is assumed to go to RON.
            RON.ammoniumProduced[i] = RON.RONproduced[i]/2;
          }
          // calc total Ron carried
          if (i == paddockHistory.length-1){
            RON.totalRonCarried[i] = RON.RONproduced[i];
          }
          else{ // constant is NOT different between till & not till
            RON.totalRonCarried[i] = RON.totalRonCarried[i+1]*0.66 + RON.RONproduced[i];
          }
        }

        if (paddockHistory[i].cropPasture == 'legume crop'){
          RON.RONproduced[i] = nitrogen_in_legume(i, paddockHistory);
          
          // calc total Ron carried
          if (i == paddockHistory.length-1){
            RON.totalRonCarried[i]= RON.RONproduced[i];
          }
          else {
            if (paddockHistory[i].till == true) RON.totalRonCarried[i] = RON.totalRonCarried[i+1]*0.5 + RON.RONproduced[i];
            else RON.totalRonCarried[i] = RON.totalRonCarried[i+1]*0.66 + RON.RONproduced[i];
          }
          
        }

        if (paddockHistory[i].cropPasture == 'non-legume crop'){
          RON.RONproduced[i] = nitrogen_in_nonLegume(i, paddockHistory);

          // calc total Ron carried
          if (i == paddockHistory.length-1){
            RON.totalRonCarried[i]= RON.RONproduced[i];

          }
          else {
            if (paddockHistory[i].till == true) RON.totalRonCarried[i] = RON.totalRonCarried[i+1]*0.33 +
                  RON. RONproduced[i];
            else RON.totalRonCarried[i] = RON.totalRonCarried[i+1]*0.5 + RON.RONproduced[i];
          }
        }

        if (paddockHistory[i].cropPasture == 'pasture') {
          RON.RONproduced[i] = nitrogen_in_pasture(i, paddockHistory)


          // calc total Ron carried
          if (i == paddockHistory.length-1){
            RON.totalRonCarried[i] = RON.RONproduced[i];
          }
          else{ // constant is NOT different between till & not till
            RON.totalRonCarried[i] = RON.totalRonCarried[i+1]*0.66 + RON.RONproduced[i];
          }
        }
        
      }

       return(RON);
    }

    function SON_RON_week_added(weeklyRain) {
    // Calculates whether the week rainfall is > 50mm, which is needed for Soil Organic Nitrogen
    // (SON) and Residual Organic Nitrogen (RON) calculations

      var rainData = 50;
      var rainDataAweekAdded = 60;
      var rainData2weeksAdded = 70;

      var week = seq(-12, -4, 9);
      var greater50 = [];
      var weekAdded = [];

      var wWeeks = weeklyRain.map(function(a) {return a.week;});
      var wRain = weeklyRain.map(function(a) {return a.rain;});

      // default week -4 >=50 is True
      // see SYN excel "RON CALCULATIONS" tab, SON and RON Week Added Calculations (R68:T80)
      greater50[8] = true;

      for (var i=-12; i<=-5; i++){
        var row = wWeeks.indexOf(i);
        if (i == -12) {
          var w2 = wRain[row-2];
          var w1 = wRain[row-1];
          var w0 = wRain[row];
          var w21 = wRain[row-2] + weeklyRain[row-1];
          var w10 = wRain[row-1] + weeklyRain[row];
          var w210 = wRain[row-2] + weeklyRain[row-1] + weeklyRain[row];
          if (w2 >= rainData || w1 >= rainData || w0 >= rainData ||
              w21 >= rainDataAweekAdded || w10 >= rainDataAweekAdded || w210 >= rainData2weeksAdded){
                greater50[week.indexOf(i)] = true;
              }
          else greater50[week.indexOf(i)] = false;
        }
        else if (w0 >= rainData || w10 >= rainDataAweekAdded || w210 >= rainData2weeksAdded) {
          greater50[week.indexOf(i)] = true;
        }
        else greater50[week.indexOf(i)] = false;
      }
      
      for (var j=0; j<greater50.length; j++){
        if (greater50[j] == true) break;
      }

      weekAdded[0] = week[j];

      var ret = [];
      for (var i=0; i<=week.length; i++){
        ret[i] = {
          week: week[i],
          greater50:greater50[i],
          weekAdded: weekAdded[i]
        }
      }

       return(ret);
    }
    
    function getCol(matrix, col){
       var column = [];
       for(var i=0; i<matrix.length; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }

    function calculateNitrogenSources(till, soil, soilOrganicCarbon, weeklyRain,
        fertilisersAdded, totalRonCarried, fertiliserData){
        // Calculates the various nitrogen sources weekly and total for each fertiliser

      // Wetting front shift (cm per mm rainfall) = 0.416
      var wettingFrontShift = (1/soil.fieldCapacity /10*(1+soil.wiltingPoint/soil.fieldCapacity ));
      var initDepthWettingFront = 0;


      // Effective rainfall (mm) = weeks -14 to 15
      var effective = weeklyRain.filter(function (el) {
        return el.week > -15 && el.week <= 16
        });
        

      var effectiveWeeks = effective.map(function(a) {return a.week;});
      var effectiveRain = effective.map(function(a) {return a.rain;});

      // Wetting front depth (cm) by week
      var wetFrontDepth = array(0, effectiveWeeks.length);
      wetFrontDepth[0] = initDepthWettingFront + effectiveRain[0] * wettingFrontShift;
      for (var i=1; i<wetFrontDepth.length; i++){
        wetFrontDepth[i] = wetFrontDepth[i-1] + effectiveRain[i] * wettingFrontShift;
      }

      // Kone = Maximum rate of root penetration (cm/week)#
      // Ktwo = Affects initial rate of root penetration
      // Kthree = Affects transition delay
      var Kone = 0;
      var Ktwo = 0;
      var Kthree = 0;
      if (soil.rootHospitality == "Ripped"){
        Kone = 15;
        Ktwo = 20;
        Kthree = 1;
      }
      else {
        if (soil.rootHospitality == "Acid"){
          Kone = 10;
          Ktwo = 1;
          Kthree = 5;
        }
        else {
        Kone = 15;
        Ktwo = 1;
        Kthree = 7;
        }
      }

      // Rootdepth by week
      var rootDepth = {
        b: array(0, effectiveWeeks.length),
        unimpededRoots: array(0, effectiveWeeks.length),
        x: array(0, effectiveWeeks.length),
        rootDepth: array(0, effectiveWeeks.length)
      };

      var week1row = effectiveWeeks.indexOf(1);

      var thicknessActiveLayer = 5;

      for (var i=week1row; i<effectiveWeeks.length; i++){
        var ii = i-week1row + 1;
        rootDepth.b[i] = (Kthree*Ktwo + 1 - Ktwo*ii)/Ktwo;
        rootDepth.unimpededRoots[i] = (thicknessActiveLayer + Kone*(-rootDepth.b[i] +
          Math.sqrt(rootDepth.b[i] * rootDepth.b[i] + 4*ii/Ktwo))/2);
        rootDepth.x[i] = rootDepth.unimpededRoots[i];
        if (rootDepth.unimpededRoots[i] > wetFrontDepth[i]) rootDepth.x[i] = wetFrontDepth[i];
        rootDepth.rootDepth[i] = rootDepth.x[i-1] + rootDepth.unimpededRoots[i] - rootDepth.unimpededRoots[i-1];
        if (rootDepth.x[i-1] + rootDepth.unimpededRoots[i] - 
          rootDepth.unimpededRoots[i-1]  > wetFrontDepth[i]) rootDepth.rootDepth[i] = wetFrontDepth[i];
      }

      // Peak shift (cm per mm rainfall)
      var peakShift = 1/soil.fieldCapacity/10;
      var peakDepth = [];
      peakDepth[0] = seq(0, 30, 31);

      for (var i=1; i<=effectiveRain.length; i++) { // columns
        peakDepth[i] = array(0, effectiveRain.length);
        for (var j=1; j<effectiveRain.length; j++) { // rows = Age.week
          peakDepth[i][j] = peakDepth[i-1][j-1] + effectiveRain[i-1] * peakShift;
        }
      }

      // diagonal & bottom triangle is empty thus remove values from above
      for (var i=1; i<=effectiveRain.length; i++) { // columns
        for (var j=1; j<effectiveRain.length; j++) { // rows = Age.week
          if (i <= j) peakDepth[i][j] = null;
        }
      }



      // Bottom of distribution (cm)
      var bottomDist = [];
      bottomDist[0] = seq(0, 30, 31);

      for (var i=1; i<=effectiveRain.length; i++) { // columns
        bottomDist[i] = array(0, effectiveRain.length);
        for (var j=0; j<effectiveRain.length; j++) { // rows = Age.week
          if (peakDepth[i][j] != null){
            if (2*peakDepth[i][j] > wetFrontDepth[i-1]) bottomDist[i][j] = wetFrontDepth[i-1];
            else bottomDist[i][j] = 2*peakDepth[i][j];
          }
        }
      }

      // diagonal & bottom triangle is empty thus remove values from above
      for (var i=1; i<=effectiveRain.length; i++) { // columns
        for (var j=1; j<effectiveRain.length; j++) { // rows = Age.week
          if (i <= j) bottomDist[i][j] = null;
        }
      }


      // Peak Concentration ((mg N/l)/(kg N /ha))
      var peakConcentration = [];
      peakConcentration[0] = seq(0, 30, 31);

      for (var i=1; i<=effectiveRain.length; i++) { // columns
        peakConcentration[i] = array(0, effectiveRain.length);
        for (var j=0; j<effectiveRain.length; j++) { // rows = Age.week
          if (bottomDist[i][j] != null){
            if (bottomDist[i][j] == 0) peakConcentration[i][j] = bottomDist[i][j];
            else peakConcentration[i][j] = 20/bottomDist[i][j];
          }
        }
      }

      // diagonal & bottom triangle is empty thus remove values from above
      for (var i=1; i<=effectiveRain.length; i++) { // columns
        for (var j=1; j<effectiveRain.length; j++) { // rows = Age.week
          if (i <= j) peakConcentration[i][j] = null;
        }
      }



      // Fraction root zone
      var fractionRootZone = [];
      fractionRootZone[0] = seq(0, 30, 31);

      for (var i=1; i<week1row; i++) {
        fractionRootZone[i] = array(0, effectiveRain.length);
      }
      for (var i=week1row; i<=effectiveRain.length; i++) { // columns
        fractionRootZone[i] = array(0, effectiveRain.length);
        for (var j=0; j<effectiveRain.length; j++) { // rows = Age.week
          if (peakDepth[i][j] != null){
            if (rootDepth.rootDepth[i-1] < peakDepth[i][j]) {
              fractionRootZone[i][j] = Math.pow(rootDepth.rootDepth[i-1], 2) / (peakDepth[i][j] * bottomDist[i][j]);
            }
            else if (rootDepth.rootDepth[i-1] < bottomDist[i][j]) {
              fractionRootZone[i][j] = 1 - Math.pow(bottomDist[i][j] - rootDepth.rootDepth[i-1], 2) /
                (bottomDist[i][j] * (bottomDist[i][j] - peakDepth[i][j]));
            }
            else fractionRootZone[i][j] = 1;
          }
        }
      }

      // diagonal & bottom triangle is empty thus remove values from above
      for (var i=1; i<=effectiveRain.length; i++) { // columns
        for (var j=1; j<effectiveRain.length; j++) { // rows = Age.week
          if (i <= j) fractionRootZone[i][j] = null;
        }
      }


      // Fraction active layer
      var fractionActiveLayer = []
      fractionActiveLayer[0] = seq(0, 30, 31);

      for (var i=1; i<=effectiveRain.length; i++) { // columns
        fractionActiveLayer[i] = array(0, effectiveRain.length);
        for (var j=0; j<effectiveRain.length; j++) { // rows = Age.week
          if (thicknessActiveLayer < peakDepth[i][j]) {
            fractionActiveLayer[i][j] = Math.pow(thicknessActiveLayer, 2) / (peakDepth[i][j] * bottomDist[i][j]);
          }
          else if (thicknessActiveLayer < bottomDist[i][j]) {
            fractionActiveLayer[i][j] = 1 - Math.pow(bottomDist[i][j] - thicknessActiveLayer, 2) /
              (bottomDist[i][j] * (bottomDist[i][j] - peakDepth[i][j]));
          }
          else fractionActiveLayer[i][j] = 1;
        }
      }

      // Diagonal & bottom triangle is empty thus remove values from above
      for (var i=1; i<=effectiveRain.length; i++) { // columns
        for (var j=1; j<effectiveRain.length; j++) { // rows = Age.week
          if (i <= j) fractionActiveLayer[i][j] = null;
        }
      }
      
      
      
      // Nitrogen matrix
      var nitrogen = {
        name: ["Soil Organic Nitrogen", "Residue Organic Nitrogen"],
        weekAddedSensitivity: [null, null],
        weekAdded: [-12, -12], // [-4, -4]
        organicNitrogen: [],
        ammoniumNitrogen: [],
        nitrateNitrogen: [0, 0],
        ammonificationRate: [],
        nitrificationRate: [0.3, 0.3]
      };

      var sonronWeekAdded = SON_RON_week_added(weeklyRain);

      // Organic nitrogen
      var adjustedOC =  0.04 * tanh(soilOrganicCarbon/100/0.04); 
      var MarvelMysteryNumber = 200000;
     
      nitrogen.organicNitrogen[0] = adjustedOC * MarvelMysteryNumber * (1 - soil.gravelContent);
      
      // Residue organic nitrogen
      nitrogen.organicNitrogen[1] = totalRonCarried;

      // Ammonium nitrogen
      nitrogen.ammoniumNitrogen[0] = 0;

      // Residue ammonium nitrogen
      nitrogen.ammoniumNitrogen[1] = 0;

      // Nitrate nitrogen
      nitrogen.nitrateNitrogen = [0, 0];

      // Ammonification rate (/week)
      nitrogen.ammonificationRate[0] = 0.002;

      // if (paddockHistory[0].cropPasture == "green manure") ammonificationRate[1] = 0.04; 
      // delete reference to paddockHistory for simplified inputs
      if (till == true) nitrogen.ammonificationRate[1] = 0.04;
      else nitrogen.ammonificationRate[1] = 0.03;

      nitrogen.nitrificationRate = [0.3, 0.3];

      var fertiliserNames = fertiliserData.map(function(a) {return a.name;});

      // Add fertiliser nitrogen to Nitrogen matrix
      for (var i=0; i<fertilisersAdded.length; i++) {
        var fertiliser = fertilisersAdded[i];
        var indx = fertiliserNames.indexOf(fertiliser.name);
        nitrogen.name.push(fertiliser.name);
        nitrogen.weekAdded.push(fertiliser.weekApplied);
        nitrogen.weekAddedSensitivity.push(fertiliser.weekApplied);
        nitrogen.organicNitrogen.push(fertiliserData[indx].urea * fertiliser.rate); 
        nitrogen.ammoniumNitrogen.push(fertiliserData[indx].nh4n * fertiliser.rate);
        nitrogen.nitrateNitrogen.push(fertiliserData[indx].no3n * fertiliser.rate);
        //nitrogen.organicNitrogen.push(Math.round(fertiliserData[indx].urea * fertiliser.rate)); 
        //nitrogen.ammoniumNitrogen.push(Math.round(fertiliserData[indx].nh4n * fertiliser.rate));
        //nitrogen.nitrateNitrogen.push(Math.round(fertiliserData[indx].no3n * fertiliser.rate));
        nitrogen.ammonificationRate.push(fertiliserData[indx].ammonificationRate);
        nitrogen.nitrificationRate.push(fertiliserData[indx].nitrificationRate);
      }
      


      // Nitrogen sources: soil organic nitrogen, residue organic nitrogen, added fertilisers

      var Nsources = []; // columns are effectiveRain weeks

      var rateRelease = 0.2; // rate.release.nitrogen.by.microbes
      var rateCapture = 0.15;  // rate.capture.nitrate.by.microbes
      
      // Transpose fractionRootZone for use in calculating nitrogen sources later
      var frz = [];
      var tmp;
      for (var i=0; i<effectiveRain.length-1; i++) {
        frz[i] = getCol(fractionRootZone, i); 
        frz[i].shift();
      }
      

      for (var j=0; j<2+fertilisersAdded.length; j++){
        
        if (j==0) name = "SON";
        if (j==1) name = "RON";
        if (j > 1) name = fertilisersAdded.name;

        var newsource = {
          name: name,
          Organic: array(0, effectiveRain.length),
          NH4: array(0, effectiveRain.length),
          fromNH4: array(0, effectiveRain.length),
          BugDemand: array(0, effectiveRain.length),
          LeachDemand: array(0, effectiveRain.length),
          BugN: array(0, effectiveRain.length),
          NO3total: array(0, effectiveRain.length),
          NO3pulse: array(0, effectiveRain.length),
          NO3rootzone: array(0, effectiveRain.length),
          NAvail: array(0, effectiveRain.length),
          NAvailFraction: array(0, effectiveRain.length),
          Total: array(0, effectiveRain.length)
        }

        newsource.BugDemand[0] = rateCapture;

        for (var i=0; i<effectiveRain.length-1; i++){

          newsource.BugDemand[i] = rateCapture;
          newsource.LeachDemand[i] = (1 - fractionActiveLayer[i+2][1]);
          if (i == 0) {
            newsource.fromNH4[i] = 0;
            newsource.BugN[i] = 0;
            if ((1 - fractionActiveLayer[i+2][1] + rateCapture) > 1) {
              newsource.BugDemand[i] = rateCapture / (rateCapture + 1 - fractionActiveLayer[i+2][1]);
              newsource.LeachDemand[i] = (1 - fractionActiveLayer[i+2][1]) /
                (rateCapture + 1 - fractionActiveLayer[i+2][1]);
            }
           
            
            newsource.Organic[i] = 0;
            newsource.NH4[i] = 0;
            newsource.NO3pulse[i] = 0;
            
            if (effectiveWeeks[i] == nitrogen.weekAdded[j]){
              newsource.Organic[i] = nitrogen.organicNitrogen[j];
              newsource.NH4[i] = nitrogen.ammoniumNitrogen[j];
              newsource.NO3pulse[i] = nitrogen.nitrateNitrogen[j];
            }
            
            newsource.NO3total[i] = newsource.NO3pulse[i];
            if (effectiveWeeks[i] == nitrogen.weekAdded[j]){
              newsource.NO3rootzone[i] = fractionRootZone[i+1][0] * newsource.NH4[i] + nitrogen.nitrateNitrogen[j];
            }
            else newsource.NO3rootzone[i] = fractionRootZone[i+1][0] * newsource.NH4[i] + 0;
            if (rootDepth.x[i] == 0) newsource.NAvail[i] = 0;
            else newsource.NAvail[i] = newsource.NO3rootzone[i] + newsource.NH4[i];
            newsource.Total[i] = newsource.NO3total[i] + newsource.BugN[i] + newsource.NH4[i] + newsource.Organic[i];
            if (newsource.Total[i] > 0) newsource.NAvailFraction[i] = newsource.NAvail[i] / newsource.Total[i];
         }
        else { // i > 0
          newsource.fromNH4[i] = newsource.NH4[i-1] * nitrogen.nitrificationRate[j];
          newsource.BugN[i] = newsource.BugN[i-1] + newsource.BugDemand[i-1] * newsource.fromNH4[i-1] -
            rateRelease * newsource.BugN[i-1];
            if ((1 - fractionActiveLayer[i+2][1] + rateCapture) > 1) {
              newsource.BugDemand[i] = rateCapture / (rateCapture + 1 - fractionActiveLayer[i+2][1]);
              newsource.LeachDemand[i] = (1 - fractionActiveLayer[i+2][1]) /
                (rateCapture + 1 - fractionActiveLayer[i+2][1]);
            }
            else {
              newsource.BugDemand[i] = rateCapture;
              newsource.LeachDemand[i] = (1 - fractionActiveLayer[i+2][1]);
            }
            if (effectiveWeeks[i] < nitrogen.weekAdded[j]){
              newsource.Organic[i] = 0;
              newsource.NH4[i] = 0;
              newsource.NO3pulse[i] = 0;
            }
            else if (effectiveWeeks[i] == nitrogen.weekAdded[j]){
              newsource.Organic[i] = nitrogen.organicNitrogen[j];
              newsource.NH4[i] = nitrogen.ammoniumNitrogen[j];
              newsource.NO3pulse[i] = nitrogen.nitrateNitrogen[j];
            }
            else {
              newsource.Organic[i] =  newsource.Organic[i-1] - nitrogen.ammonificationRate[j] * newsource.Organic[i-1] ;
              newsource.NH4[i] = newsource.NH4[i-1] + nitrogen.ammonificationRate[j] * newsource.Organic[i-1] -
                nitrogen.nitrificationRate[j] * newsource.NH4[i-1] +
                rateRelease * newsource.BugN[i-1];
              newsource.NO3pulse[i] = newsource.fromNH4[i] - newsource.fromNH4[i] * newsource.BugDemand[i];
            }


            // Equation for newsource.NO3rootzone[i]
            // i = 2, F302:
            // =F$225*F296  +F$226*E301+F$227*D301+ IF(F$100=$E47,$H47,0)
            // F$225 = fractionRootZone[i][0], F296 =  newsource.fromNH4[i]
            // F$266 = fractionRootZone[i][1], E301 = newsource.NO3pulse[i-1]
            // F$227 = fractionRootZone[i][i], D301 = newsource.NO3pulse[0]
            
            // i = 3, G302:
            // =G$225*G296  +G$226*F301+G$227*E301+G$228*D301+ IF(G$100=$E47,$H47,0)
            // G$225 = fractionRootZone[i][0], G296 = newsource.fromNH4[i]
            // G$226 = fractionRootZone[i][1], F301 = newsource.NO3pulse[i-1]
            // G$227 = fractionRootZone[i][2], E301 = newsource.NO3pulse[1]
            // G$228 = fractionRootZone[i][i=3], D301 = newsource.NO3pulse[0]
            
            // i = 15, S302 
            // =S$225*S296  +S$226*R301+S$227*Q301+S$228*P301+S$229*O301+S$230*N301+S$231*M301+S$232*L301+S$233*K301+S$234*J301+S$235*I301+S$236*H301+S$237*G301+S$238*F301+S$239*E301+S$240*D301+ IF(S$100=$E47,$H47,0)
            

            var frac = fractionRootZone[i+1].slice(1, i+1);
            var no3pulse = newsource.NO3pulse.slice(0, i).reverse();
            
            

            var sum = 0; for (var k=0; k<frac.length; k++) {
              sum += frac[k] * no3pulse[k];
            }
            
            newsource.NO3rootzone[i] = fractionRootZone[i+1][0] * newsource.fromNH4[i] + sum;
            
            if (effectiveWeeks[i] == nitrogen.weekAdded[j]){
              newsource.NO3total[i] = newsource.NO3pulse[i];
              newsource.NO3rootzone[i] += nitrogen.nitrateNitrogen[j];
            }
            else {
              newsource.NO3total[i] = newsource.NO3total[i-1] + newsource.fromNH4[i] -
                newsource.BugDemand[i-1] * newsource.fromNH4[i-1]
            }
            
            
            newsource.NAvail[i] = 0;
            if (rootDepth.x[i] != 0) newsource.NAvail[i] = newsource.NO3rootzone[i] + newsource.NH4[i];
            
            newsource.Total[i] = newsource.NO3total[i] + newsource.BugN[i] + newsource.NH4[i] + newsource.Organic[i];
            if (newsource.Total[i] > 0) newsource.NAvailFraction[i] = newsource.NAvail[i] / newsource.Total[i];
            
            
          }
          newsource.NO3rootzone[0] = 0;
        }
      Nsources[j] = newsource;
      
      
      }
      
//console.log(JSON.stringify(Nsources[0].Organic));console.log('\n'); // ok
//console.log('NH4 = ' + JSON.stringify(Nsources[0].NH4));console.log('\n'); // ok
//console.log(JSON.stringify(Nsources[0].fromNH4));console.log('\n'); // ok
//console.log(JSON.stringify(Nsources[0].BugDemand));console.log('\n'); // ok
//console.log(JSON.stringify(Nsources[0].LeachDemand));console.log('\n'); // ok
//console.log(JSON.stringify(Nsources[0].BugN));console.log('\n'); // ok
//console.log(JSON.stringify(Nsources[0].NO3total));console.log('\n'); // ok
//console.log('NO3pulse = ' + JSON.stringify(Nsources[0].NO3pulse));console.log('\n'); // ok
//console.log('NO3rootzone = ' + JSON.stringify(Nsources[0].NO3rootzone));console.log('\n');
//console.log('Navail = ' + JSON.stringify(Nsources[0].NAvail));console.log('\n');
//console.log(nitrogen.nitrateNitrogen);

      // CALCULATE N FROM TOTAL OF SOURCES

      var Ntotal = {
          Organic: array(0, effectiveRain.length),
          NH4: array(0, effectiveRain.length),
          fromNH4: array(0, effectiveRain.length),
          BugDemand: array(0, effectiveRain.length),
          LeachDemand: array(0, effectiveRain.length),
          BugN: array(0, effectiveRain.length),
          NO3total: array(0, effectiveRain.length),
          NO3pulse: array(0, effectiveRain.length),
          NO3rootzone: array(0, effectiveRain.length),
          NAvail: array(0, effectiveRain.length),
          NAvailFraction: array(0, effectiveRain.length),
          Total: array(0, effectiveRain.length)
        }

      for (var j=0; j<2+fertilisersAdded.length; j++){
        for (var i=0; i<effectiveRain.length-1; i++){
          Ntotal.Organic[i] += Nsources[j].Organic[i];
          Ntotal.NH4[i] += Nsources[j].NH4[i];
          Ntotal.fromNH4[i] += Nsources[j].fromNH4[i];
          Ntotal.BugDemand[i] += Nsources[j].BugDemand[i];
          Ntotal.LeachDemand[i] += Nsources[j].LeachDemand[i];
          Ntotal.BugN[i] += Nsources[j].BugN[i];
          Ntotal.NO3total[i] += Nsources[j].NO3total[i];
          Ntotal.NO3pulse[i] += Nsources[j].NO3pulse[i];
          Ntotal.NO3rootzone[i] += Nsources[j].NO3rootzone[i];
          Ntotal.NAvail[i] += Nsources[j].NAvail[i];
          Ntotal.NAvailFraction[i] += Nsources[j].NAvailFraction[i];
          Ntotal.Total[i] += Nsources[j].Total[i];
        }
      }
      
      

      // What do I need to return??
      var ret = {
        effectiveWeeks: effectiveWeeks,
        nitrogen: nitrogen,
        Nsources: Nsources,
        Ntotal: Ntotal
      };

      return(ret);
    }

    function availability_index(fertilisersAdded, nitrogenSources){
    // Calculates the availability index (Kn) for soil organic nitrogen,
    // residue organic nitrogen and user added fertilisers.
      
      var effectiveWeeks = nitrogenSources.effectiveWeeks;
      var nitrogen = nitrogenSources.nitrogen;
      var Nsources = nitrogenSources.Nsources;
      
      var kn = array(0, 2+fertilisersAdded.length);
      var availe = array(0, 2+fertilisersAdded.length);
      var startNAvail = 4;
      var endNAvail = 15;
      var val1;
      //=IF($G$61-$G$60<0,0,IF(SUM(F47:H47)=0,0,(IF($G$61-$G$60<2,0,SUM(OFFSET(R303,0,$G$60+1,1,$G$61-$G$60-1)))+(OFFSET(R303,0,$G$60)+OFFSET(R303,0,$G$61))/2)/IF($G$61-$G$60=0,1,$G$61-$G$60)/SUM(F47:H47)))
         
      for (var j=0; j<2+fertilisersAdded.length; j++) {
        // availe = SUM(F47:H47)
        availe[j] = nitrogen.organicNitrogen[j] + nitrogen.ammoniumNitrogen[j] + nitrogen.nitrateNitrogen[j]; 

        var w0col = effectiveWeeks.indexOf(0);
       
        if (endNAvail - startNAvail < 0 || availe[j] == 0) kn[j] = 0;
        else {
          if (endNAvail - startNAvail < 2) val1 = 0;
          else {
            val1 = 0;
            // val1 = SUM(OFFSET(R303,0,$G$60+1,1,$G$61-$G$60-1))  
            // OFFSET(val, rows, cols, [height], [width])
            for (var k=startNAvail + 1; k<endNAvail; k++){ 
              val1 += Nsources[j].NAvail[w0col + k];
            }  
          //console.log('val1= ' + val1);
          
          // val2 = OFFSET(R303,0,$G$60)
          //var val2 = Nsources[j].NAvail[w0col + startNAvail - 1];
           var val2 = Nsources[j].NAvail[w0col + startNAvail];
          
          // val3 = OFFSET(R303,0,$G$61)
          var val3 = Nsources[j].NAvail[w0col + endNAvail - 1];
          
          //console.log('val2= ' + val2);
          //console.log('val3= ' + val3);
 
          var val4 = val1 + (val2 + val3)/2;
          if (endNAvail - startNAvail == 0) var val5 = 1;
          else var val5 = endNAvail - startNAvail;

          kn[j] = val4/val5/availe[j];
          }
        }
        
      }

      var ret = {
        kn: kn,
        availe: availe
      }
      
      
      
      return(ret);
    }


    function total_available_nitrogen(fertilisersAdded, nitrogenSources, aIndex){
    // Calculates the total available nitrogen for soil organic nitrogen, residue organic
    // nitrogen, user added fertilisers and total nitrogen availability.
      var nitrogen = nitrogenSources.nitrogen;
      var kn = aIndex.kn;
      var availe = aIndex.availe;

      var ret = {
        name: nitrogen.name,
        totalAvailableNitrogen: [],
        aIndex: []
      }

      var sum = 0;
      for (var j=0; j<2+fertilisersAdded.length; j++) {
        ret.totalAvailableNitrogen[j] = Math.round(kn[j] * availe[j]);
        ret.aIndex[j] = Math.round(kn[j] * 100);
        sum += ret.totalAvailableNitrogen[j];
      }

      ret.name.push("Total");
      ret.totalAvailableNitrogen.push(sum);

      return(ret);
    }

    function protein_oil_yield(currentPotentialYield, TON) {
    // Calculates the protein oil and yield for wheat and canola.

      var ret = [
        {
          name: "wheat",
          z: 0.06,
          g: 0.04,
          NHI: 0.8,
          Knhi: 0.07,
          magicProteinYield: 5.07,
          rubbishCanola: null,
          potentialYield: currentPotentialYield * 1000,
          Navail: TON.totalAvailableNitrogen[TON.totalAvailableNitrogen.length-1],
          Nuptake: 0,
          yield: 0,
          proteinYield: 0,
          percentProtein: 0,
          percentOil: null
        },
        {
           name: "canola",
           z: 0.07,
           g: 0.07,
           NHI: 0.9,
           Knhi: 0.20,
           magicProteinYield: null,
           rubbishCanola: 62.4,
           potentialYield: currentPotentialYield * 1000,
           Navail: TON.totalAvailableNitrogen[TON.totalAvailableNitrogen.length-1],
           Nuptake: 0,
           yield: 0,
           proteinYield: 0,
           percentProtein: 0,
           percentOil: 0
        },
        {
          name: "barley",
          yield: 0,
          percentProtein: 0
        },
        {
          name: "oats",
          yield: 0,
          percentProtein: 0
        }
      ];

      var magic = ret[0].magicProteinYield;

      for (var i=0; i<2; i++) {

        ret[i].Nuptake = ret[i].z * ret[i].potentialYield *
          tanh(ret[i].Navail / ret[i].z / ret[i].potentialYield);

        ret[i].yield = ret[i].potentialYield *
          (2 * ret[i].Nuptake / ret[i].g / ret[i].potentialYield -
          Math.pow(ret[i].Nuptake / ret[i].g / ret[i].potentialYield, 2));

        ret[i].proteinYield = magic * ret[i].Nuptake *
          ret[i].NHI * ret[i].potentialYield * ret[i].Knhi /
          (ret[i].Knhi * ret[i].potentialYield + ret[i].Nuptake);


        ret[i].percentProtein = ret[i].proteinYield / ret[i].yield * 100;
      }

      ret[1].percentOil = ret[1].rubbishCanola - ret[1].percentProtein;

      ret[2].yield = ret[0].yield;
      if (ret[0].percentProtein < 6) ret[2].percentProtein = ret[0].percentProtein;
      else if (ret[0].percentProtein < 10) ret[2].percentProtein = ret[0].percentProtein +
        (ret[0].percentProtein - 6) * 0.4;
      else if (ret[0].percentProtein < 15) ret[2].percentProtein = 10 +
        (10 - 6) * 0.4 + (ret[0].percentProtein - 10) * 0.6;
      else ret[2].percentProtein = ret[0].percentProtein;

      ret[3].yield = ret[0].yield;
      ret[3].percentProtein = ret[0].percentProtein * (6.25/5.7);

      return(ret);
    }

    function protein_premium(currentCrop, currentPotentialYield, percentProtein, cropData) {
    // Calculates the protein premium/discount
    
      // Get the current crop
      var crop = cropData.filter(function(cropData) { return cropData.name == currentCrop; });
      
      // Get the index of matching protein
      var proteins = crop.map(function(a) {return a.protein;});   
       
      var row = 0;
      for (var i=0; i<proteins.length; i++) {
        if (percentProtein > proteins[i]) row = i;
      }

      var nextProteinLess = crop[row].protein;
      var indexNextProteinLess = crop[row].index;
      var nextPriceLess = crop[row].price;

      var nextProteinMore  = 0;
      var nextPriceMore = 0;
      

      if (row < crop.length - 1){
        var nextProteinMore  = crop[row+1].protein;
        var nextPriceMore = crop[row+1].price;
      }

      var price = nextPriceLess + (percentProtein - nextProteinLess) /
        (nextProteinMore - nextProteinLess) * (nextPriceMore - nextPriceLess);

      if (percentProtein < crop[0].protein) price = crop[0].price;
      if (percentProtein > crop[crop.length-1].protein) price = crop[crop.length-1].price;
     
     return price;
    }





    function select_your_nitrogen(currentCrop, currentTill, currentPotentialYield, currentCropBasePrice,
      soil, soilOrganicCarbon, weeklyRain, fertilisersAdded, paddockHistory, fertiliserData, cropData){
    // Run a SYN scenario

      var ronCalc = calculateRON(paddockHistory);

      return simpleSYN(currentCrop, currentPotentialYield, currentCropBasePrice,
      soil, soilOrganicCarbon, weeklyRain, fertilisersAdded, RONcarried, fertiliserData, cropData);
      }


    function simpleSYN(currentCrop, currentPotentialYield, currentCropBasePrice,
      soil, soilOrganicCarbon, weeklyRain, fertilisersAdded, RONcarried, fertiliserData, cropData){
      // Run a SYN scenario
    
      soil = soil[0]; // Need this because R sends the soil object as an array
    
      //console.log(JSON.stringify(soil));
    
      var nitrogenSources = calculateNitrogenSources(false, soil, soilOrganicCarbon,
        weeklyRain, fertilisersAdded, RONcarried, fertiliserData);

      var aIndex = availability_index(fertilisersAdded, nitrogenSources);

      var TON = total_available_nitrogen(fertilisersAdded, nitrogenSources, aIndex);

      var proteinOilYield = protein_oil_yield(currentPotentialYield, TON);

      // Get the current crop type
      for (var j=0; j<cropData.length; j++) {
        if (cropData[j].name == currentCrop) break;
      }
      var cropType = cropData[j].type;

      // Get the actual yield and percent protein
      for (var j=0; j<proteinOilYield.length; j++) {
        if (proteinOilYield[j].name == cropType) break;
      }
      var thisProteinOilYield = proteinOilYield[j];

      var actualYield = thisProteinOilYield.yield/1000;
      var percentProtein = thisProteinOilYield.percentProtein;

      var price = protein_premium(currentCrop, currentPotentialYield, percentProtein, cropData);

      var grossReturn = 0;
      if (cropType == "canola"){
        if (price == 0) grossReturn = actualYield * currentCropBasePrice;
        else grossReturn = actualYield * currentCropBasePrice * price;
      }
      else grossReturn = actualYield * (currentCropBasePrice + price);
      
      var costs = 0;
      for (var i=0; i<fertilisersAdded.length; i++) 
        costs += fertilisersAdded[i].cost * fertilisersAdded[i].netRate;

      var netReturn = grossReturn - costs;
      
      return({actualYield: round2(actualYield),
              percentProtein: round1(percentProtein),
              price: round2(currentCropBasePrice + price),
              netReturn: Math.round(netReturn),
              TON: TON}); //,
              //effectiveWeeks: nitrogenSources.effectiveWeeks,
              //nitrogenSources: nitrogenSources});
      }
      
      
 

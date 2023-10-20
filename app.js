const cams = [
  { name: "A2 - Tillysburn", id: "44", camId: "3260" },
  { name: "A2 - Holywood Esplanade", id: "45", camId: "3261" },
  { name: "A12 Clifton Street", id: "9", camId: "8" },
  { name: "A12 Roden Street", id: "10", camId: "4" },
  { name: "M1 - Stockmans Lane", id: "171", camId: "106" },
  { name: "Saintfield Road - Primrose Hill", id: "43", camId: "3259" },
  { name: "Upper Knockbreda Rd - Cregagh Rd", id: "191", camId: "404" },
  { name: "East Bridge Street - Central Station", id: "156", camId: "21" },
  { name: "M1 Broadway", id: "11", camId: "3" },
  { name: "Ballygowan Road - Knock Road", id: "190", camId: "402_1" },
  { name: "Union Bridge, Lisburn", id: "16", camId: "10" },
  { name: "Boucher Road - Tates Avenue", id: "54", camId: "3270" },
  { name: "Shaftesbury Square", id: "3", camId: "16" },
  { name: "Durham St - College Sq Nth", id: "201", camId: "10_1" },
  { name: "M2 - Fortwilliam North (1B16)", id: "208", camId: "207" },
  { name: "Upp K'Breda - Milltown Rd", id: "211", camId: "407" },
  { name: "Knock Road - Upper Newtownards Road", id: "48", camId: "3264" },
  { name: "Falls Road - Donegall Road", id: "28", camId: "3244" },
  { name: "M2 - Greencastle - Jct 2", id: "36", camId: "3252" },
  { name: "Ormeau AV - Linehall ST", id: "204", camId: "30" },
  { name: "Oxford Street - Ann Street", id: "151", camId: "2_1" },
  { name: "Falls Road - Grosvenor Road", id: "162", camId: "40_1" },
  { name: "M1 Sprucefield", id: "4", camId: "6" },
  { name: "University Road - Stranmillis Road", id: "160", camId: "33" },
  { name: "Victoria Street - High Street", id: "153", camId: "5_1" },
  {
    name: "Belvoir C'way - Newtownbreda Rd - Tesco's",
    id: "50",
    camId: "3266",
  },
  { name: "M1 - Blacks Rd - Jct 3", id: "33", camId: "3249" },
  { name: "Finaghy Crossroads", id: "53", camId: "3269" },
  { name: "Lisburn Road - Eglantine Avenue", id: "161", camId: "35" },
  { name: "Beersbridge Road - Castlereagh Street", id: "157", camId: "23" },
  { name: "Dock Street - Garmoyle Street", id: "154", camId: "7_1" },
  { name: "Westlink - Hospital", id: "214", camId: "590" },
  { name: "Malone Road - Old Stranmillis Road", id: "51", camId: "3267" },
  { name: "Malone Road - Balmoral Avenue", id: "52", camId: "3268" },
  { name: "N'ards RD - Albertbridge RD", id: "203", camId: "24" },
  { name: "Upper Newtownards Rd - Eastlink", id: "25", camId: "3241" },
  { name: "M1 Stockmans Lane", id: "12", camId: "12" },
  { name: "M3 - Dee Street", id: "188", camId: "303" },
  { name: "Chichester Street", id: "1", camId: "5" },
  {
    name: "Stewartstown Road / Michael Ferguson Roundabout",
    id: "164",
    camId: "44_1",
  },
  { name: "Upper Newtownards Rd - Dunlady Rd", id: "26", camId: "3242" },
  { name: "Westlink - Divis", id: "213", camId: "505" },
  { name: "Ormeau Road - Annadale Embankment", id: "42", camId: "3258" },
  { name: "Saintfield Road - School Rd", id: "185", camId: "246" },
  { name: "Upper Newtownards Rd - Stoney Rd", id: "158", camId: "26" },
  { name: "Upper Knockbreda Rd - Upper Galwally", id: "49", camId: "3265" },
  { name: "Ormeau Road - Ravenhill Road", id: "183", camId: "244" },
  { name: "Saintfield Road - Upper Galwally", id: "184", camId: "245" },
  { name: "M1 - Kennedy Way - Jct 2", id: "170", camId: "105" },
  { name: "Castlereagh Rd - Grand Parade/ Ladas Dr", id: "27", camId: "3243" },
  { name: "Westlink - York Street", id: "55", camId: "3271" },
  { name: "M2 - Duncrue St North (0B14)", id: "207", camId: "202" },
  { name: "Peters Hill - Millfield", id: "155", camId: "8_1" },
  { name: "Andersonstown Rd - Finaghy Rd Nth", id: "163", camId: "43" },
  { name: "M2 Sandyknowes", id: "6", camId: "13" },
  { name: "Milltown - Hospital Rd", id: "212", camId: "408" },
  { name: "Howard Street", id: "2", camId: "14" },
  { name: "Dublin Rd - Bruce Street", id: "159", camId: "31_1" },
  { name: "Ballynahinch Road - Carryduff", id: "186", camId: "249" },
  { name: "Sandy Row - Hope Street", id: "202", camId: "11" },
  { name: "M2 Duncrue Street", id: "5", camId: "7" },
  { name: "M3 - Lagan Bridge East", id: "187", camId: "301" },
  { name: "M3 Lagan Bridge", id: "7", camId: "9" },
  { name: "Albertbridge Road - Woodstock Link", id: "24", camId: "3240" },
  { name: "Oxford Street - Lanyon Place", id: "152", camId: "3_1" },
  { name: "Donegall Square South-Adelaide Street", id: "41", camId: "3257" },
  { name: "A2 Shore Rd - Trooperslane, Carrick", id: "165", camId: "55" },
  { name: "M22 - Dunsilly Roundabout", id: "210", camId: "226" },
  { name: "Strand Rd Coleraine", id: "64", camId: "3280" },
  { name: "A6 Toome", id: "40", camId: "3256" },
  { name: "Dublin Road, Antrim", id: "193", camId: "824" },
  { name: "Lodge Rd R'bout Lodge Coleraine", id: "62", camId: "3278" },
  { name: "M2 Templepatrick", id: "17", camId: "15" },
  { name: "M2 - Antrim Hospital", id: "209", camId: "225" },
  { name: "Old Bridge Coleraine", id: "66", camId: "3282" },
  { name: "M2 - Browns Rd", id: "38", camId: "3254" },
  { name: "Greenmount Coleraine", id: "65", camId: "3281" },
  { name: "Lodge Rd R'bout Newbridge Coleraine", id: "60", camId: "3276" },
  { name: "Kilowen St Coleraine", id: "67", camId: "3283" },
  { name: "Scullions Rd", id: "37", camId: "3253" },
  { name: "A6 Randalstown", id: "39", camId: "3255" },
  { name: "A2 Beeches Road", id: "30", camId: "3246" },
  { name: "A2 Station Road", id: "31", camId: "3247" },
  { name: "Buncrana Road", id: "70", camId: "3286" },
  { name: "Caw Roundabout", id: "71", camId: "3287" },
  { name: "Ballykelly", id: "68", camId: "3284" },
  { name: "Strand Road", id: "79", camId: "3295" },
  { name: "Craigavon Bridge", id: "72", camId: "3288" },
  { name: "A37 Coleraine Mountain", id: "23", camId: "1" },
  { name: "Greenhaw", id: "77", camId: "3293" },
  { name: "Glenshane Rd – Drumahoe", id: "75", camId: "3291" },
  { name: "Great James Street", id: "76", camId: "3292" },
  { name: "Foyle Bridge", id: "20", camId: "1" },
  { name: "Belt Road", id: "69", camId: "3285" },
  { name: "A6 Glenshane Pass", id: "22", camId: "1" },
  { name: "Rossdowney Road", id: "78", camId: "3294" },
  {
    name: "Dales Corner/A6 Glendermott Rd - A2 ColumbraTerrace",
    id: "74",
    camId: "3290",
  },
  { name: "A6 Randalstown", id: "39", camId: "3255" },
  { name: "Culmore Roundabout", id: "73", camId: "3289" },
  { name: "A6 Toome", id: "40", camId: "3256" },
  { name: "Saintfield Road - Primrose Hill", id: "43", camId: "3259" },
  { name: "A2 Rathgael, Bangor", id: "14", camId: "0" },
  { name: "Saintfield Rd Roundabout Lisburn", id: "34", camId: "3250" },
  { name: "A2 - Bangor Rd - Old Station Rd ", id: "46", camId: "3262" },
  {
    name: "Prince William Rd - Lisburn North Feeder Rd",
    id: "32",
    camId: "3248",
  },
  { name: "A1 - B10 Overbridge Junction", id: "58", camId: "3274" },
  { name: "A3 Moira Road - Halftown Road", id: "168", camId: "66" },
  { name: "A1 Banbridge", id: "15", camId: "2" },
  { name: "A1 - Hillsborough Road Roundabout", id: "57", camId: "3273" },
  { name: "A28 Markethill", id: "21", camId: "1" },
  { name: "A2 - Ballyrobert", id: "47", camId: "3263" },
  { name: "M1 - Blaris - Jct 8 ", id: "35", camId: "3251" },
  { name: "Belsize Rd - North Feeder Rd", id: "166", camId: "61" },
  { name: "M1 Sprucefield", id: "4", camId: "6" },
  { name: "A1 Newry", id: "18", camId: "1" },
  { name: "A1 - Cloghoge - Newry", id: "59", camId: "3275" },
  { name: "Union Bridge, Lisburn", id: "16", camId: "10" },
  { name: "M3 Lagan Bridge", id: "7", camId: "9" },
  { name: "M1 - Blacks Rd - Jct 3", id: "33", camId: "3249" },
  { name: "A1 - Blaris", id: "56", camId: "3272" },
  { name: "A24 Carryduff", id: "19", camId: "1" },
  { name: "M1 Tamnamore", id: "13", camId: "17" },
  { name: "Dromore Road at Asda, Omagh", id: "195", camId: "782" },
  { name: "Orritor Street/William Street, Cookstown", id: "199", camId: "786" },
  {
    name: "Great Northern Road , Tamlaght Road (Homebase), Omagh",
    id: "196",
    camId: "783",
  },
  {
    name: "Dublin Road at Great Northern Road, Omagh",
    id: "194",
    camId: "781",
  },
  { name: "Gortmerron Link Road, Dungannon", id: "197", camId: "784" },
  { name: "Market Square, Dungannon", id: "198", camId: "785" },
  { name: "Gaol Square, Enniskillen", id: "200", camId: "787" },
];

const pad = (num) => String(num).padStart(2, "0");

const create = (obj, i) => {
  const el = document.createElement("option");
  el.innerHTML = obj.name;
  el.value = i;
  return el;
};

let camIndex = 0;

cams.forEach((el, i) =>
  document.querySelector("select").appendChild(create(el, i))
);
document.querySelector("select").onchange = () =>
  (camIndex = document.querySelector("select").value);

setInterval(() => {
  const date = new Date();
  document.getElementById("time").innerHTML = `${pad(date.getHours())}:${pad(
    date.getMinutes()
  )}:${pad(date.getSeconds())}`;
}, 1000);

setInterval(() => {
  document
    .getElementById("cam")
    .setAttribute(
      "src",
      ` https://cctv.trafficwatchni.com/${
        cams[camIndex].camId
      }.jpg?cache=${new Date().getTime()}`
    );
}, 1000);

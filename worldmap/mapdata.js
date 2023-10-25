  var simplemaps_worldmap_mapdata={
  main_settings:{
		//General settings
		width: '700', //or 'responsive'
		background_color: '#FFFFFF',	
		background_transparent: 'yes',
		popups: 'detect', //on_click, on_hover, or detect
	
		//State defaults
    state_description: "",
    state_color: "#b5d781",
    state_hover_color: "#8bae54",
		state_url: '',
		border_size: 1.5,		
		border_color: '#ffffff',
		all_states_inactive: 'no',
		all_states_zoomable: 'no',		
		
		//Location defaults
    location_description: "",
    location_color: "#de6667",
    location_opacity: ".3",
		location_hover_opacity: 1,
		location_url: '',
		location_size: 25,
    location_type: "triangle",
		location_border_color: '#FFFFFF',
		location_border: 2,
		location_hover_border: 2.5,				
		all_locations_inactive: 'no',
		all_locations_hidden: 'no',
		
		//Labels
		label_color: '#ffffff',	
		label_hover_color: '#ffffff',		
		label_size: 22,
		label_font: 'Arial',
		hide_labels: 'no',
    hide_eastern_labels: false,
		
		//Zoom settings
    manual_zoom: 'no',
    back_image: 'no',
    arrow_box: 'no',
    navigation_size: '40',
    navigation_color: '#f7f7f7',
    navigation_border_color: '#636363',
		initial_back: 'no', //Show back button when zoomed out and do this JavaScript upon click		
		initial_zoom: -1,  //-1 is zoomed out, 0 is for the first continent etc	
		initial_zoom_solo: 'no', //hide adjacent states when starting map zoomed in
		region_opacity: 1,
		region_hover_opacity: .6,
		zoom_out_incrementally: 'yes',  // if no, map will zoom all the way out on click
		zoom_percentage: .99,
		zoom_time: .5, //time to zoom between regions in seconds
		
		//Popup settings
		popup_color: 'white',
		popup_opacity: .9,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'no', //use your own css	
		
		//Advanced settings
		div: 'map',
		auto_load: 'yes',		
    rotate: '0',
		url_new_tab: 'yes', 
		images_directory: 'default', //e.g. 'map_images/'
    import_labels: 'no',
		fade_time:  .1, //time to fade out		
		link_text: 'View Website'  //Text mobile browsers will see for links	
		
	},
  state_specific: {
    AE: {
      name: "United Arab Emirates",
      inactive: "no",
      hide: "no"
    },
    AF: {
      name: "Afghanistan",
      hide: "no",
      inactive: "no"
    },
    AL: {
      name: "Albania",
      hide: "no",
      inactive: "no"
    },
    AM: {
      name: "Armenia",
      hide: "no",
      inactive: "no"
    },
    AO: {
      name: "Angola",
      hide: "no",
      inactive: "no"
    },
    AR: {
      name: "Argentina",
      hide: "no",
      inactive: "no"
    },
    AT: {
      name: "Austria",
      hide: "no",
      inactive: "no"
    },
    AU: {
      name: "Australia",
      hide: "no",
      inactive: "no"
    },
    AZ: {
      name: "Azerbaidjan",
      hide: "no",
      inactive: "no"
    },
    BA: {
      name: "Bosnia-Herzegovina",
      hide: "no",
      inactive: "no"
    },
    BD: {
      name: "Bangladesh",
      hide: "no",
      inactive: "no"
    },
    BE: {
      name: "Belgium",
      hide: "no",
      inactive: "no"
    },
    BF: {
      name: "Burkina Faso",
      hide: "no",
      inactive: "no"
    },
    BG: {
      name: "Bulgaria",
      hide: "no",
      inactive: "no"
    },
    BH: {
      name: "Bahrain",
      hide: "no",
      inactive: "no"
    },
    BI: {
      name: "Burundi",
      hide: "no",
      inactive: "no"
    },
    BJ: {
      name: "Benin",
      hide: "no",
      inactive: "no"
    },
    BN: {
      name: "Brunei Darussalam",
      hide: "no",
      inactive: "no"
    },
    BO: {
      name: "Bolivia",
      hide: "no",
      inactive: "no"
    },
    BR: {
      name: "Brazil",
      hide: "no",
      inactive: "no"
    },
    BS: {
      name: "Bahamas",
      hide: "no",
      inactive: "no"
    },
    BT: {
      name: "Bhutan",
      hide: "no",
      inactive: "no"
    },
    BW: {
      name: "Botswana",
      hide: "no",
      inactive: "no"
    },
    BY: {
      name: "Belarus",
      hide: "no",
      inactive: "no"
    },
    BZ: {
      name: "Belize",
      hide: "no",
      inactive: "no"
    },
    CA: {
      name: "Canada",
      hide: "no",
      inactive: "no"
    },
    CD: {
      name: "Congo",
      hide: "no",
      inactive: "no"
    },
    CF: {
      name: "Central African Republic",
      hide: "no",
      inactive: "no"
    },
    CG: {
      name: "Congo",
      hide: "no",
      inactive: "no"
    },
    CH: {
      name: "Switzerland",
      hide: "no",
      inactive: "no"
    },
    CI: {
      name: "Ivory Coast",
      hide: "no",
      inactive: "no"
    },
    CL: {
      name: "Chile",
      hide: "no",
      inactive: "no"
    },
    CM: {
      name: "Cameroon",
      hide: "no",
      inactive: "no"
    },
    CN: {
      name: "China",
      hide: "no",
      inactive: "no"
    },
    CO: {
      name: "Colombia",
      hide: "no",
      inactive: "no"
    },
    CR: {
      name: "Costa Rica",
      hide: "no",
      inactive: "no"
    },
    CU: {
      name: "Cuba",
      hide: "no",
      inactive: "no"
    },
    CV: {
      name: "Cape Verde",
      hide: "no",
      inactive: "no"
    },
    CY: {
      name: "Cyprus",
      hide: "no",
      inactive: "no"
    },
    CZ: {
      name: "Czech Republic",
      hide: "no",
      inactive: "no"
    },
    DE: {
      name: "Germany",
      hide: "no",
      inactive: "no"
    },
    DJ: {
      name: "Djibouti",
      hide: "no",
      inactive: "no"
    },
    DK: {
      name: "Denmark",
      hide: "no",
      inactive: "no"
    },
    DO: {
      name: "Dominican Republic",
      hide: "no",
      inactive: "no"
    },
    DZ: {
      name: "Algeria",
      hide: "no",
      inactive: "no"
    },
    EC: {
      name: "Ecuador",
      hide: "no",
      inactive: "no"
    },
    EE: {
      name: "Estonia",
      hide: "no",
      inactive: "no"
    },
    EG: {
      name: "Egypt",
      hide: "no",
      inactive: "no"
    },
    EH: {
      name: "Western Sahara",
      hide: "no",
      inactive: "no"
    },
    ER: {
      name: "Eritrea",
      hide: "no",
      inactive: "no"
    },
    ES: {
      name: "Spain",
      hide: "no",
      inactive: "no"
    },
    ET: {
      name: "Ethiopia",
      hide: "no",
      inactive: "no"
    },
    FI: {
      name: "Finland",
      hide: "no",
      inactive: "no"
    },
    FJ: {
      name: "Fiji",
      hide: "no",
      inactive: "no"
    },
    FK: {
      name: "Falkland Islands",
      hide: "no",
      inactive: "no"
    },
    FR: {
      name: "France",
      hide: "no",
      inactive: "no"
    },
    GA: {
      name: "Gabon",
      hide: "no",
      inactive: "no"
    },
    GB: {
      name: "Great Britain",
      hide: "no",
      inactive: "no"
    },
    GE: {
      name: "Georgia",
      hide: "no",
      inactive: "no"
    },
    GF: {
      name: "French Guyana",
      hide: "no",
      inactive: "no"
    },
    GH: {
      name: "Ghana",
      hide: "no",
      inactive: "no"
    },
    GL: {
      name: "Greenland",
      hide: "no",
      inactive: "no"
    },
    GM: {
      name: "Gambia",
      hide: "no",
      inactive: "no"
    },
    GN: {
      name: "Guinea",
      hide: "no",
      inactive: "no"
    },
    GQ: {
      name: "Equatorial Guinea",
      hide: "no",
      inactive: "no"
    },
    GR: {
      name: "Greece",
      hide: "no",
      inactive: "no"
    },
    GS: {
      name: "S. Georgia & S. Sandwich Isls.",
      hide: "no",
      inactive: "no"
    },
    GT: {
      name: "Guatemala",
      hide: "no",
      inactive: "no"
    },
    GW: {
      name: "Guinea Bissau",
      hide: "no",
      inactive: "no"
    },
    GY: {
      name: "Guyana",
      hide: "no",
      inactive: "no"
    },
    HN: {
      name: "Honduras",
      hide: "no",
      inactive: "no"
    },
    HR: {
      name: "Croatia",
      hide: "no",
      inactive: "no"
    },
    HT: {
      name: "Haiti",
      hide: "no",
      inactive: "no"
    },
    HU: {
      name: "Hungary",
      hide: "no",
      inactive: "no"
    },
    IC: {
      name: "Canary Islands",
      hide: "no",
      inactive: "no"
    },
    ID: {
      name: "Indonesia",
      hide: "no",
      inactive: "no"
    },
    IE: {
      name: "Ireland",
      hide: "no",
      inactive: "no"
    },
    IL: {
      name: "Israel",
      hide: "no",
      inactive: "no"
    },
    IN: {
      name: "India",
      hide: "no",
      inactive: "no"
    },
    IQ: {
      name: "Iraq",
      hide: "no",
      inactive: "no"
    },
    IR: {
      name: "Iran",
      hide: "no",
      inactive: "no"
    },
    IS: {
      name: "Iceland",
      hide: "no",
      inactive: "no"
    },
    IT: {
      name: "Italy",
      hide: "no",
      inactive: "no"
    },
    JM: {
      name: "Jamaica",
      hide: "no",
      inactive: "no"
    },
    JO: {
      name: "Jordan",
      hide: "no",
      inactive: "no"
    },
    JP: {
      name: "Japan",
      hide: "no",
      inactive: "no"
    },
    KE: {
      name: "Kenya",
      hide: "no",
      inactive: "no"
    },
    KG: {
      name: "Kyrgyzstan",
      hide: "no",
      inactive: "no"
    },
    KH: {
      name: "Cambodia",
      hide: "no",
      inactive: "no"
    },
    KP: {
      name: "North Korea",
      hide: "no",
      inactive: "no"
    },
    KR: {
      name: "South Korea",
      hide: "no",
      inactive: "no"
    },
    KW: {
      name: "Kuwait",
      hide: "no",
      inactive: "no"
    },
    KZ: {
      name: "Kazakhstan",
      hide: "no",
      inactive: "no"
    },
    LA: {
      name: "Laos",
      hide: "no",
      inactive: "no"
    },
    LK: {
      name: "Sri Lanka",
      hide: "no",
      inactive: "no"
    },
    LR: {
      name: "Liberia",
      hide: "no",
      inactive: "no"
    },
    LS: {
      name: "Lesotho",
      hide: "no",
      inactive: "no"
    },
    LT: {
      name: "Lithuania",
      hide: "no",
      inactive: "no"
    },
    LU: {
      name: "Luxembourg",
      hide: "no",
      inactive: "no"
    },
    LV: {
      name: "Latvia",
      hide: "no",
      inactive: "no"
    },
    LY: {
      name: "Libya",
      hide: "no",
      inactive: "no"
    },
    MA: {
      name: "Morocco",
      hide: "no",
      inactive: "no"
    },
    MD: {
      name: "Moldavia",
      hide: "no",
      inactive: "no"
    },
    ME: {
      name: "Montenegro",
      hide: "no",
      inactive: "no"
    },
    MG: {
      name: "Madagascar",
      hide: "no",
      inactive: "no"
    },
    MK: {
      name: "Macedonia",
      hide: "no",
      inactive: "no"
    },
    ML: {
      name: "Mali",
      hide: "no",
      inactive: "no"
    },
    MM: {
      name: "Myanmar",
      hide: "no",
      inactive: "no"
    },
    MN: {
      name: "Mongolia",
      hide: "no",
      inactive: "no"
    },
    MR: {
      name: "Mauritania",
      hide: "no",
      inactive: "no"
    },
    MW: {
      name: "Malawi",
      hide: "no",
      inactive: "no"
    },
    MX: {
      name: "Mexico",
      hide: "no",
      inactive: "no"
    },
    MY: {
      name: "Malaysia",
      hide: "no",
      inactive: "no"
    },
    MZ: {
      name: "Mozambique",
      hide: "no",
      inactive: "no"
    },
    NA: {
      name: "Namibia",
      hide: "no",
      inactive: "no"
    },
    NC: {
      name: "New Caledonia (French)",
      hide: "no",
      inactive: "no"
    },
    NE: {
      name: "Niger",
      hide: "no",
      inactive: "no"
    },
    NG: {
      name: "Nigeria",
      hide: "no",
      inactive: "no"
    },
    NI: {
      name: "Nicaragua",
      hide: "no",
      inactive: "no"
    },
    NL: {
      name: "Netherlands",
      hide: "no",
      inactive: "no"
    },
    NO: {
      name: "Norway",
      hide: "no",
      inactive: "no"
    },
    NP: {
      name: "Nepal",
      hide: "no",
      inactive: "no"
    },
    NZ: {
      name: "New Zealand",
      hide: "no",
      inactive: "no"
    },
    OM: {
      name: "Oman",
      hide: "no",
      inactive: "no"
    },
    PA: {
      name: "Panama",
      hide: "no",
      inactive: "no"
    },
    PE: {
      name: "Peru",
      hide: "no",
      inactive: "no"
    },
    PG: {
      name: "Papua New Guinea",
      hide: "no",
      inactive: "no"
    },
    PH: {
      name: "Philippines",
      hide: "no",
      inactive: "no"
    },
    PK: {
      name: "Pakistan",
      hide: "no",
      inactive: "no"
    },
    PL: {
      name: "Poland",
      hide: "no",
      inactive: "no"
    },
    PR: {
      name: "Puerto Rico",
      hide: "no",
      inactive: "no"
    },
    PS: {
      name: "Palestine",
      hide: "no",
      inactive: "no"
    },
    PT: {
      name: "Portugal",
      hide: "no",
      inactive: "no"
    },
    PY: {
      name: "Paraguay",
      hide: "no",
      inactive: "no"
    },
    QA: {
      name: "Qatar",
      hide: "no",
      inactive: "no"
    },
    RO: {
      name: "Romania",
      hide: "no",
      inactive: "no"
    },
    RS: {
      name: "Serbia",
      hide: "no",
      inactive: "no"
    },
    RU: {
      name: "Russia",
      hide: "no",
      inactive: "no"
    },
    RW: {
      name: "Rwanda",
      hide: "no",
      inactive: "no"
    },
    SA: {
      name: "Saudi Arabia",
      hide: "no",
      inactive: "no"
    },
    SB: {
      name: "Solomon Islands",
      hide: "no",
      inactive: "no"
    },
    SD: {
      name: "Sudan",
      hide: "no",
      inactive: "no"
    },
    SE: {
      name: "Sweden",
      hide: "no",
      inactive: "no"
    },
    SI: {
      name: "Slovenia",
      hide: "no",
      inactive: "no"
    },
    SK: {
      name: "Slovak Republic",
      hide: "no",
      inactive: "no"
    },
    SL: {
      name: "Sierra Leone",
      hide: "no",
      inactive: "no"
    },
    SN: {
      name: "Senegal",
      hide: "no",
      inactive: "no"
    },
    SO: {
      name: "Somalia",
      hide: "no",
      inactive: "no"
    },
    SR: {
      name: "Suriname",
      hide: "no",
      inactive: "no"
    },
    SS: {
      name: "South Sudan",
      hide: "no",
      inactive: "no"
    },
    SV: {
      name: "El Salvador",
      hide: "no",
      inactive: "no"
    },
    SY: {
      name: "Syria",
      hide: "no",
      inactive: "no"
    },
    SZ: {
      name: "Swaziland",
      hide: "no",
      inactive: "no"
    },
    TD: {
      name: "Chad",
      hide: "no",
      inactive: "no"
    },
    TG: {
      name: "Togo",
      hide: "no",
      inactive: "no"
    },
    TH: {
      name: "Thailand",
      hide: "no",
      inactive: "no"
    },
    TJ: {
      name: "Tadjikistan",
      hide: "no",
      inactive: "no"
    },
    TL: {
      name: "East Timor",
      hide: "no",
      inactive: "no"
    },
    TM: {
      name: "Turkmenistan",
      hide: "no",
      inactive: "no"
    },
    TN: {
      name: "Tunisia",
      hide: "no",
      inactive: "no"
    },
    TR: {
      name: "Turkey",
      hide: "no",
      inactive: "no"
    },
    TT: {
      name: "Trinidad and Tobago",
      hide: "no",
      inactive: "no"
    },
    TW: {
      name: "Taiwan",
      hide: "no",
      inactive: "no"
    },
    TZ: {
      name: "Tanzania",
      hide: "no",
      inactive: "no"
    },
    UA: {
      name: "Ukraine",
      hide: "no",
      inactive: "no"
    },
    UG: {
      name: "Uganda",
      hide: "no",
      inactive: "no"
    },
    US: {
      name: "United States",
      inactive: "no",
      hide: "no"
    },
    UY: {
      name: "Uruguay",
      hide: "no",
      inactive: "no"
    },
    UZ: {
      name: "Uzbekistan",
      hide: "no",
      inactive: "no"
    },
    VE: {
      name: "Venezuela",
      hide: "no",
      inactive: "no"
    },
    VN: {
      name: "Vietnam",
      hide: "no",
      inactive: "no"
    },
    VU: {
      name: "Vanuatu",
      hide: "no",
      inactive: "no"
    },
    YE: {
      name: "Yemen",
      hide: "no",
      inactive: "no"
    },
    ZA: {
      name: "South Africa",
      hide: "no",
      inactive: "no"
    },
    ZM: {
      name: "Zambia",
      hide: "no",
      inactive: "no"
    },
    ZW: {
      name: "Zimbabwe",
      hide: "no",
      inactive: "no"
    }
  },
  locations: {
"0": {
name: "Singapore", lat: "1.3000", lng: "103.8000", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"1": {
name: "Hamburg", lat: "53.5500", lng: "10.0000", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"2": {
name: "Szombathely", lat: "47.2351", lng: "16.6219", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"3": {
name: "Budapest", lat: "47.4925", lng: "19.0514", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"4": {
name: "Prague", lat: "50.0875", lng: "14.4214", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"5": {
name: "Chicago", lat: "41.8375", lng: "-87.6866", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"6": {
name: "New York", lat: "40.6943", lng: "-73.9249", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"7": {
name: "Phuket", lat: "7.8881", lng: "98.3975", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"8": {
name: "Bangkok", lat: "13.7525", lng: "100.4942", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"9": {
name: "Kuala Lumpur", lat: "3.1478", lng: "101.6953", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"10": {
name: "Puerto del Rosario", lat: "28.5000", lng: "-13.8667", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"11": {
name: "Arrecife", lat: "28.9625", lng: "-13.5506", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"12": {
name: "Bad Gastein", lat: "47.11411", lng: "13.13205", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"13": {
name: "Wagrain", lat: "47.33348", lng: "13.29626", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"14": {
name: "Zell am See", lat: "47.3233", lng: "12.7981", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"15": {
name: "Obertauern", lat: "47.2483", lng: "13.55772", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"16": {
name: "Avoriaz", lat: "46.18823", lng: "6.775103", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"17": {
name: "Grindelwald", lat: "46.62438", lng: "8.03455", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"18": {
name: "Valletta", lat: "35.8983", lng: "14.5125", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"19": {
name: "Belle Plagne", lat: "45.506459", lng: "6.706905", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"20": {
name: "Paris", lat: "48.8567", lng: "2.3522", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"21": {
name: "Val Thorens", lat: "45.298184", lng: "6.582426", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"22": {
name: "Rome", lat: "41.8931", lng: "12.4828", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"23": {
name: "Venice", lat: "45.4397", lng: "12.3319", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"24": {
name: "Trysil", lat: "61.31315", lng: "12.26671", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"25": {
name: "Oslo", lat: "59.9133", lng: "10.7389", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"26": {
name: "Reykjavík", lat: "64.1467", lng: "-21.9400", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"27": {
name: "Mykines", lat: "62.110161", lng: "-7.63977100", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"28": {
name: "Nuuk", lat: "64.1814", lng: "-51.6942", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"29": {
name: "Malmö", lat: "55.6058", lng: "13.0358", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"30": {
name: "Oradea", lat: "47.0722", lng: "21.9211", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"31": {
name: "Pula", lat: "44.8703", lng: "13.8456", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"32": {
name: "Rijeka", lat: "45.3272", lng: "14.4411", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"33": {
name: "Boston", lat: "42.3188", lng: "-71.0852", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"34": {
name: "Vienna", lat: "48.2083", lng: "16.3725", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"35": {
name: "Saksun", lat: "62.245299", lng: "-7.164652", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"36": {
name: "Tjørnuvík", lat: "62.28896", lng: "7.14874", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"37": {
name: "Phi Phi", lat: "7.740738", lng: "98.77841", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"38": {
name: "Bled", lat: "46.3688", lng: "14.1140", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"39": {
name: "Munich", lat: "48.1375", lng: "11.5750", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"40": {
name: "Ljubljana", lat: "46.0514", lng: "14.5061", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
},
"41": {
name: "Kuala Tahan", lat: "4.3818998", lng: "102.401583", size: "10", type: "circle", opacity: "1", hover_opacity: "1"
}
},
  regions: {
    "0": {
      name: "North America",
      states: [
        "MX",
        "CA",
        "US",
        "GL"
      ]
    },
    "1": {
      name: "South America",
      states: [
        "EC",
        "AR",
        "VE",
        "BR",
        "CO",
        "BO",
        "PE",
        "BZ",
        "CL",
        "CR",
        "CU",
        "DO",
        "SV",
        "GT",
        "GY",
        "GF",
        "HN",
        "NI",
        "PA",
        "PY",
        "PR",
        "SR",
        "UY",
        "JM",
        "HT",
        "BS"
      ]
    },
    "2": {
      name: "Europe",
      states: [
        "IT",
        "NL",
        "NO",
        "DK",
        "IE",
        "GB",
        "RO",
        "DE",
        "FR",
        "AL",
        "AM",
        "AT",
        "BY",
        "BE",
        "LU",
        "BG",
        "CZ",
        "EE",
        "GE",
        "GR",
        "HU",
        "IS",
        "LV",
        "LT",
        "MD",
        "PL",
        "PT",
        "RS",
        "SI",
        "HR",
        "BA",
        "ME",
        "MK",
        "SK",
        "ES",
        "FI",
        "SE",
        "CH",
        "TR",
        "CY",
        "UA"
      ]
    },
    "3": {
      name: "Africa and the Middle East",
      states: [
        "QA",
        "SA",
        "AE",
        "SY",
        "OM",
        "KW",
        "PK",
        "AZ",
        "AF",
        "IR",
        "IQ",
        "IL",
        "PS",
        "JO",
        "LB",
        "YE",
        "TJ",
        "TM",
        "UZ",
        "KG",
        "NE",
        "AO",
        "EG",
        "TN",
        "GA",
        "DZ",
        "LY",
        "CG",
        "GQ",
        "BJ",
        "BW",
        "BF",
        "BI",
        "CM",
        "CF",
        "TD",
        "CI",
        "CD",
        "DJ",
        "ET",
        "GM",
        "GH",
        "GN",
        "GW",
        "KE",
        "LS",
        "LR",
        "MG",
        "MW",
        "ML",
        "MA",
        "MR",
        "MZ",
        "NA",
        "NG",
        "ER",
        "RW",
        "SN",
        "SL",
        "SO",
        "ZA",
        "SD",
        "SS",
        "SZ",
        "TZ",
        "TG",
        "UG",
        "EH",
        "ZM",
        "ZW"
      ]
    },
    "4": {
      name: "South Asia",
      states: [
        "TW",
        "AU",
        "MY",
        "IN",
        "NZ",
        "TH",
        "BN",
        "JP",
        "VN",
        "LK",
        "SB",
        "FJ",
        "BD",
        "BT",
        "KH",
        "LA",
        "MM",
        "NP",
        "KP",
        "PG",
        "PH",
        "KR",
        "ID",
        "CN"
      ]
    },
    "5": {
      name: "North Asia",
      states: [
        "MN",
        "RU",
        "KZ"
      ]
    }
  },
  labels: {}
};
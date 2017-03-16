/* Date */
let date = document.getElementById('date');
let dateObj = new Date;
date.innerHTML = dateObj.toDateString("en-us");

/* Time
window.setInterval(function(){
  document.getElementById('time').innerHTML = (new Date).toLocaleTimeString("en-us");
}, 1000)
*/

// Clock

class Clock {
  constructor() {
    this._clockEl = document.getElementById('js-clock');
    this._dateEl = document.getElementById('js-date');
    this._setTime = this._setTime.bind(this);
    this._start();
  }
  _pad(num) {
    return (`0${num.toString()}`).slice(-2);
  }
  _setTime() {
    const date = new Date();
    const hours = this._pad(date.getHours());
    const minutes = this._pad(date.getMinutes());
    this._clockEl.innerHTML = `${hours} : ${minutes}`;
    const year = date.getFullYear();
    const month = this._pad(date.getMonth());
    const day = date.getDate();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var months = new Array(12);
    months['00'] = "January";
    months['01'] = "February";
    months['02'] = "March";
    months['03'] = "April";
    months['04'] = "May";
    months['05'] = "June";
    months['06'] = "July";
    months['07'] = "August";
    months['08'] = "September";
    months['09'] = "October";
    months['10'] = "November";
    months['11'] = "December";
    var weekday   = weekdays[date.getDay()];
    var fullMonth = months[month];
    this._dateEl.innerHTML = weekday + ', ' + fullMonth + ' ' + ordinal_suffix_of(day) + ' ' + year;
  }
  _start() {
    this._setTime();
    setInterval(this._setTime, 3000);
  }
}
const clock = new Clock();

















/* Random quote */

let motdObj = document.getElementById('motd');
let quotes = [
  "You have power over your mind - not outside events. Realize this, and you will find strength.",
  "If I don't have to do it, I won't. If I have to do it, I'll make it quick.",
  "If it doesn’t suck, we don’t do it.",
  "You look nice today.",
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

motdObj.innerHTML = quotes[getRandomInt(0,quotes.length)];

/* Search functions ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––*/

var sitesUrl = ["https://news.ycombinator.com/",
  "http://pt.stackoverflow.com/", "https://habitica.com/", "https://nixers.net",
  "https://bbs.archlinux.org/"
];

var sitesNames = ["hn", "so", "habitica", "nixers", "bbs"];

var sitesSearch = ["http://pt.stackoverflow.com/search?q=",
  "https://www.youtube.com/results?search_query=",
  "https://github.com/search?&q=",
  "https://thepiratebay.se/search/",
  "http://www.dicio.com.br/pesquisa.php?q=",
  "https://duckduckgo.com/?q=",
  "http://caniuse.com/#search=",
  "https://wiki.archlinux.org/index.php?search=",
  "http://gen.lib.rus.ec/search.php?req="
];

var sitesNIDSearch = ["stack-ov", "youtube", "github", "pirate-bay", "dicio",
  "duckduckgo", "caniuse", "archwiki", "libgen"
];

var sitesNSearch = ["Stack Overflow", "Youtube", "GitHub", "The Pirate Bay",
  "Dicio", "DuckDuckGo", "Can I Use", "ArchWiki", "Library Genesis"
];

var conLink = document.getElementById('container-links');
for (i = 0; i < sitesNames.length; i++) {
  var link = document.createElement('a');
  link.setAttribute('href', sitesUrl[i]);
  link.setAttribute('class', 'link');
  link.text = sitesNames[i];
  conLink.appendChild(link);
}
var conSearch = document.getElementById('container-search');
for (var i = 0; i < sitesNSearch.length; i++) {
  var searchBox = document.createElement('input');
  searchBox.setAttribute('placeholder', sitesNSearch[i]);
  searchBox.id = sitesNIDSearch[i];
  conSearch.appendChild(searchBox);
}

document.body.setAttribute('class', 'load');

var input = document.getElementsByTagName("input");
for (var i = 0; i < input.length; i++) {
  input[i].addEventListener('keydown', function(event) {
    var tecla = event.keyCode;
    if (tecla == 13) {
      var pos = sitesNIDSearch.indexOf(this.id);
      window.location = sitesSearch[pos] + this.value;
    }
  });
}

/* https://www.google.com/search?q='
    https://duckduckgo.com/?q=
    https://www.reddit.com/r/
    https://www.youtube.com/results?search_query=
    https://smile.amazon.com/s/?field-keywords=
    https://www.wikipedia.org/w/index.php?title=Special:Search&search=
    https://www.wolframalpha.com/input/?i=
    https://www.imdb.com/find?s=all&q=
    https://www.netflix.com/search?q=
    https://www.google.com/search?tbm=isch&q=
    https://keep.google.com/#search/text=

    */

var softwareSkills = [
{name: "Javascript", level: 5},
{name: "Node.js", level: 5},
{name: "HTML(5)", level: 5},
{name: "CSS(3)", level: 5},
{name: "Python", level: 5},
{name: "Heroku", level: 5},
{name: "Object Oriented Programming", level: 5},
{name: "Java", level: 4},
{name: "C", level: 4},
{name: "Vim", level: 4},
{name: "Bash", level: 4},
{name: "Wix", level: 4},
{name: "SEO", level: 3},
{name: "MySQL", level: 3},
{name: "RabbitMQ", level: 3},
{name: "Racket", level: 3},
{name: "Web Scraping", level: 3}
];
var ITSkills = [
{name: "CompTIA Security+ Certified", level:5},
{name: "Linux CLI", level: 5},
{name: "Raspberry Pi", level: 5},
{name: "IoT", level: 5},
{name: "Nmap", level: 4},
{name: "Buffer Overflow Expoitation", level: 4},
{name: "Burp Suite", level: 3},
];
var languageSkills = [
{name: "English (Native)", level: 5},
{name: "Russian (Advanced)", level: 4},
{name: "Spanish (Heritage Speaker)", level: 4},
{name: "Japanese (Beginner)", level: 1},
];
function loadSkills(elem, skills) {
	let skillDiv = elem;
	let ul = document.createElement("ul");
	addOneClass(ul, "no-bullets");
	skillDiv.appendChild(ul);
	skills.forEach( skill => {
		//create li for a skill and level
		let li = document.createElement("li");

		//create skill name
		let skillName = document.createElement("span");
		let txt = document.createTextNode(skill.name);
		skillName.appendChild(txt);

		//create stars based on level
		let skillLevel = document.createElement("span");
		addOneClass(skillLevel, "w3-right");
		for (var i = 0; i < 5; i++) {
			let star = document.createElement("i");
			addOneClass(star, "fa-star");
			if (i < skill.level) {
				addOneClass(star, "fas"); //filled in star
			} else {
				addOneClass(star, "far"); //empty star
			}
			skillLevel.appendChild(star); //add empty or filled in star to skillLevel span
		}
		//append name then stars to li
		li.appendChild(skillName);
		li.appendChild(skillLevel);
		//append li to ul
		ul.appendChild(li);
	});
}
//input: DOMElement elem, string name (of css class)
function addOneClass(element, name) {
  var arr;
  arr = element.className.split(" ");
  if (arr.indexOf(name) == -1) {
    element.className += " " + name;
  }
} 

window.onload = () => {
	loadSkills(document.getElementById("softwareSkills"), softwareSkills);
	loadSkills(document.getElementById("ITSkills"), ITSkills);
	loadSkills(document.getElementById("languageSkills"), languageSkills);
}
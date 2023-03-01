
let sidemenu = document.getElementById("SideBar");

const openMenu = () => {
	sidemenu.style.right = "0";
}

const closeMenu = () => {
	sidemenu.style.right = "-200px";
}

 
  
  const skills = () => {

    return `<div class="row">
    
    <h1 class="heading"> <span>My</span>Skills</h1>
    <div class="Myslills">
      <ul class="Thechical">
        <li><img src="./img/Reactlogo.png" class="project__logo" alt="React" /></li>
        <li><img src="./img/spring.png" class="project__logo" alt="Springboot" /></li>
        <li><img src="./img/mysql.png" class="project__logo" alt="MySql" /></li>
        <li><img src="./img/hibernate.png" class="project__logo" alt="Hibernate" /></li>
        <li><img src="./img/js-logo.png" class="project__logo" alt="JavaScript" /></li>
        <li><img src="./img/dsa.webp" class="project__logo" alt="DSA" /></li>
        <li><img src="./img/HTML5_Logo_512.png" class="project__logo" alt="HTML" /></li>
        <li><img src="./img/css-3-logo-png-transparent.png" class="project__logo" alt="CSS" /></li>
        <li><img src="./img/git.png" class="project__logo" alt="Git" /></li>
        <p></p>
      </ul>
    </div>
  </div>`
  
  }
  document.querySelector("#Skills").innerHTML = skills();

  const root = document.documentElement;
  const Elements = getComputedStyle(root).getPropertyValue("--Myslills-elements-displayed");
  const MySkills = document.querySelector("ul.Thechical");
  
  root.style.setProperty("--Myslills-elements", MySkills.children.length);
  
  for (let i = 0; i < Elements; i++) {
    MySkills.appendChild(MySkills.children[i].cloneNode(true));
  }

document.getElementById("resume_button_1").addEventListener("click", () => {

	window.open("https://drive.google.com/file/d/1wpB4xqCoIRlumqVN95RXQl6OEbWncXKe/view?usp=sharing", "_blank");

})

document.getElementById("resume_button_2").addEventListener("click", () => {

	window.open("https://drive.google.com/file/d/1wpB4xqCoIRlumqVN95RXQl6OEbWncXKe/view?usp=sharing", "_blank");

})

  const Href = () => {
    let Src = [
      "./img/Reactlogo.png",
      "./img/js-logo.png",
      "./img/spring.png",
      "./img/hibernate.png",
      "./img/mysql.png",
      "./img/dsa.webp",
      "./img/HTML5_Logo_512.png",
      "./img/css-3-logo-png-transparent.png",
      "./img/git.png",
    ];
    return Src;
  };
  
  const TechStack = () => {
    let skills = ["React", "Mysql", "Spring boot", "JavaScript", "DSA", "Hibernate", "HTML", "CSS", "Git",]
    return skills;
  }
  const len = TechStack();
  
  const Src = Href();

const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

const container = document.getElementById("card-container");

for (let member of team) {
  console.log("Nome: ", member.name);
  console.log("Ruolo: ", member.role);
  console.log("Image: ", member.image);
  // MILESTONE 2  messagehtml = member.name + " " + member.role + " " + member.image + "<br>";
  messagehtml = `
  <div class="col-4">
  <div class="card text-secondary">
    <img src="./img/${member.image}" alt="" />
    <h6 class="mt-3 mb-0">${member.name}</h6>
    <p class="role">${member.role}</p>
  </div>`;
  container.innerHTML += messagehtml;
}

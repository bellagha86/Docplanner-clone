import React from "react";
import NavBar from "./components/navBar";
import Intro from "./components/main/intro";
import Pres from "./components/main/pres"
import Localsites from"./components/main/localsites"
import Statspresentation from "./components/main/statspresentation"
import Officespres from "./components/main/Offices"
import Footer from "./components/Footer"
import "./App.css";
const listArray = [
  {
    text: "About Us",
    name: "aboutus",
    isActive: false,
    link: "#",
    subMenu: null
  },

  {
    text: "Careers",
    name: "navbuttons",
    isActive: false,
    link: "#",
    subMenu: null
  },
  {
    text: "Departments",
    isActive: false,
    name: "navbuttons",
    link: "#",
    hover: "drop",
    subMenu: [
      "Marketing & PR",
      "Customer Sucess & Sales",
      "IT, product,desing & UX",
      "Finance & Administration",
      "Finance & Administration",
      "Finance & Administration"
    ]
  }
];
const introArray = [
  {
    class:"titledescription",
    type: 'h2',
    content:'Making the healthcare experience more human '

  },
  {
    class:"sectiondescription",
    type: 'paragraph',
    content:
      "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",
    },
    {
      class:"sectiondescription",
      type:'paragraph',
      content:"We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."

    },
];
const presArray= [
  {
class:"patientspresentation",
paragraph: "For patients",
title:"Find a doctor, book a visit and solve any health-related doubt",
button: 'y',
classSelect:"choosecountry",
select:["Choose country"," Argentina","Australia","Brazil","Chile","Colombia","Czech","France","Italy","Mexico","Peru","Poland","Portugal","Spain","Turkey","UK"],
source:"https://www.docplanner.com/img/screen-marketplace@2x.png",
classImg:"userinterface2"
},
{
  class:"doctorspresentation",
  paragraph: "For doctors",
  title:"Save time managing visits and cut no-shows by half",
  button: null,
  source:"https://www.docplanner.com/img/screen-saas@2x.png",
  classImg:"userinterface2"
  }
]
const statsArray=[{
  class:"itemsblock1",
  source:"https://www.docplanner.com/img/flag.png",
  title:"Leader in 10 countries",
  stats:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
},
{
  class:"itemsblock",
source:"https://www.docplanner.com/img/visits.png",
title:"1.5 million appointments",
stats:"booked last month"
},
{class:"itemsblock2",
  source:"https://www.docplanner.com/img/patients.png",
  title:"30 million unique patients",
  stats:"visit us every month ",
},
{class:"itemsblock",
  source:"https://www.docplanner.com/img/doctors.png",
  title:"2 million active doctors"
}]
const officesArray=[
  {
    source:"https://www.docplanner.com/images/warsaw.png",
    cityName:"Warsaw",
  },
  {
    source:"https://www.docplanner.com/images/barcelona.png",
    cityName:"Barcelona",
  },
  {
    source:"https://www.docplanner.com/images/istanbul.png",
    cityName:"Istanbul",
  },
  {
    source:"https://www.docplanner.com/images/rome.png",
    cityName:"Rome",
  },
  {
    source:"https://www.docplanner.com/images/mexico-city.png",
    cityName:"Mexico City",
  },
  {
    source:"https://www.docplanner.com/images/curitiba.png",
    cityName:"Curitiba",
  },
]
const footerArray=["Poland", "Turkey", "Spain", "Italy", "Czech Republic","Mexico","Colombia", "Brazil", "Argentina","Chile"
]
function App() {
  return (
    <div className="App">
      <NavBar navItems={listArray} />
      <Intro introItems={introArray}/>
      <Pres presItems={presArray}/>
      <Localsites/>
      <Statspresentation statsItems={statsArray}/>
      <Officespres officesItems={officesArray}/>
      <hr/>
      <Footer footerItems={footerArray}/>

    </div>
  );
}

export default App;


const classData = [
    {
        id : 1,
        name: "Chae Won",
        age: 30,
        eyeColor: "Brown",
        hobby: "Hiking",
        image: "https://ca.slack-edge.com/T1S5R6LJ3-U05N97PTYUT-ad87467badd0-512",
        additionalinformation: "1",
    },
    {
        id : 2,
        name: "Kadir Ozturk",
        age: 35,
        eyeColor: "BlueBrown",
        hobby: "Painting",
        image: "https://ca.slack-edge.com/T1S5R6LJ3-U05N9AJHGGJ-183e0e4e4699-512",
        additionalinformation: "2",
    },
    {
        id : 3,
        name: "Sema Istek",
        age: 35,
        eyeColor: "BlueBrown",
        hobby: "Painting",
        image: "https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ4SLBZ-602e37b8467b-512",
        additionalinformation: "3",
    },
    {
        id : 4,
        name: "Olena Andriushchenko",
        age: 35,
        eyeColor: "BlueBrown",
        hobby: "Painting",
        image: "https://ca.slack-edge.com/T1S5R6LJ3-U05N6D01C77-d0c457f3a8c2-512",
        additionalinformation: "4",
    },
    {
        id : 5 ,
        name: "Vladimir Rakov",
        age: 35,
        eyeColor: "BlueBrown",
        hobby: "Painting",
        image: "https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ5RECF-b8dc4db3cdc1-512",
        additionalinformation: "5",
    },
    {
        id : 6,
        name: "Anastasiia Protsenko",
        age: 35,
        eyeColor: "BlueBrown",
        hobby: "Painting",
        image: "https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ641JT-ff1a9417160c-512",
        additionalinformation: "6",
    },
    {
        id : 7,
        name: "Daniel Urribarri",
        age: 35,
        eyeColor: "BlueBrown",
        hobby: "Painting",
        image: "https://ca.slack-edge.com/T1S5R6LJ3-U05PLMHN25C-1ff3b2830e73-512",
        additionalinformation: "7",
    },{
        id : 8,
        name: "Yidnekachew Mahteme",
        age: 35,
        eyeColor: "BlueBrown",
        hobby: "Painting",
        image: "https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ3DZU7-f8a343d32017-512",
        additionalinformation: "8",
    },

    
];

const classPage = document.getElementById("class-page");


function createProfileCard(profile) {
    const profileCard = document.createElement("div");
    profileCard.className = "profile-card";

    profileCard.innerHTML = `
        <img src="${profile.image}" alt="${profile.name}" />
        <h3>${profile.name}</h3>
        <p>Age: ${profile.age}</p>
        <p>Eye Color: ${profile.eyeColor}</p>
        <p >Hobby: ${profile.hobby}</p>
        <p class="additional-information" style="display: none;">Additional Information: ${profile.additionalinformation}</p>
    `;

   
    

    
    profileCard.addEventListener("click", (event) => {
        var clickedProfileCard = event.currentTarget;
        var additionalInfo = clickedProfileCard.querySelector(".additional-information");

        
        if (additionalInfo.style.display === "none" || additionalInfo.style.display === "") {
            additionalInfo.style.display = "block";
        } else {
            additionalInfo.style.display = "none";
        }
    });

    classPage.appendChild(profileCard);
}


classData.forEach(createProfileCard);

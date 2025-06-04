var zodiacList = [
    {
        name: "Aries",
        symbol: "The Ram",
        dates: "March 21 – April 19",
        keywords: ["Courageous", "Determined", "Confident"],
        image: "assets/img/aries.png",
    },
    {
        name: "Taurus",
        symbol: "The Bull",
        dates: "April 20 – May 20",
        keywords: ["Reliable", "Patient", "Practical"],
        image: "assets/img/taurus.png",
    },
    {
        name: "Gemini",
        symbol: "The Twins",
        dates: "May 21 – June 20",
        keywords: ["Adaptable", "Outgoing", "Intelligent"],
        image: "assets/img/gemini.png",
    },
    {
        name: "Cancer",
        symbol: "The Crab",
        dates: "June 21 – July 22",
        keywords: ["Tenacious", "Imaginative", "Loyal"],
        image: "assets/img/cancer.png",
    },
    {
        name: "Leo",
        symbol: "The Lion",
        dates: "July 23 – August 22",
        keywords: ["Creative", "Passionate", "Generous"],
        image: "assets/img/leo.png",
    },
    {
        name: "Virgo",
        symbol: "The Maiden",
        dates: "August 23 – September 22",
        keywords: ["Loyal", "Analytical", "Kind"],
        image: "assets/img/virgo.png",
    },
    {
        name: "Libra",
        symbol: "The Scales",
        dates: "September 23 – October 22",
        keywords: ["Cooperative", "Diplomatic", "Gracious"],
        image: "assets/img/libra.png",
    },
    {
        name: "Scorpio",
        symbol: "The Scorpion",
        dates: "October 23 – November 21",
        keywords: ["Resourceful", "Brave", "Passionate"],
        image: "assets/img/scorpio.png",
    },
    {
        name: "Sagittarius",
        symbol: "The Archer",
        dates: "November 22 – December 21",
        keywords: ["Generous", "Idealistic", "Humorous"],
        image: "assets/img/sagittarius.png",
    },
    {
        name: "Capricorn",
        symbol: "The Goat",
        dates: "December 22 – January 19",
        keywords: ["Responsible", "Disciplined", "Self-Control"],
        image: "assets/img/capricorn.png",
    },
    {
        name: "Aquarius",
        symbol: "The Water Bearer",
        dates: "January 20 – February 18",
        keywords: ["Progressive", "Original", "Independent"],
        image: "assets/img/aquarius.png",
    },
    {
        name: "Pisces",
        symbol: "The Fish",
        dates: "February 19 – March 20",
        keywords: ["Compassionate", "Artistic", "Intuitive"],
        image: "assets/img/pisces.png",
    },
];

function loadZodiacButtons() {
    var buttonContainer = document.getElementById("zodiacButtons");
    buttonContainer.innerHTML = "";

    zodiacList.forEach((sign, index) => {
        buttonContainer.innerHTML += `
  <button class="imageButton" onclick="loadZodiacInfo('` + index + `')">
    <img src="` + sign.image + `" alt="` + sign.name + `" title="` + sign.name + `" class="zodiacButtonImg" />
    <span>` + sign.name + `</span>
  </button>
`;

    });
}

function loadZodiacInfo(index) {
    var sign = zodiacList[index];

    document.getElementById("zodiacName").innerHTML = sign.name;
    document.getElementById("zodiacSymbol").innerHTML = sign.symbol;
    document.getElementById("zodiacDates").innerHTML = sign.dates;
    document.getElementById("zodiacTraits").innerHTML = sign.keywords.join(", ");


    zodiacSelection.style.display = "none";
    zodiacInfo.style.display = "block";
}

function backButton() {
    zodiacInfo.style.display = "none";
    zodiacSelection.style.display = "block";
}

document.getElementById("backButton").addEventListener("click", backButton);

loadZodiacButtons();
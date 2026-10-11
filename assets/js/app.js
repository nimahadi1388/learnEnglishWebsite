const words = [
  {
    id: 1,
    nameWord: "Narrator",
    meaning: "راوی",
    description: "A person who tells a story or describes events.",
    type: "noun",
    example: "The narrator tells us a story.",
  },
  {
    id: 2,
    nameWord: "Decide",
    meaning: "تصمیم گرفتن",
    description: "To choose what to do after thinking about it.",
    type: "verb",
    example: "I need to decide what to eat.",
  },
  {
    id: 3,
    nameWord: "Solve",
    meaning: "حل کردن",
    description: "To find an answer to a problem.",
    type: "verb",
    example: "I can solve this problem.",
  },
  {
    id: 4,
    nameWord: "Effort",
    meaning: "تلاش",
    description: "The physical or mental energy used to do something.",
    type: "noun",
    example: "Learning English takes effort.",
  },
  {
    id: 5,
    nameWord: "Inflation",
    meaning: "تورم",
    description: "A general increase in the prices of goods and services.",
    type: "noun",
    example: "Inflation makes food more expensive.",
  },
  {
    id: 6,
    nameWord: "Stall",
    meaning: "دکه",
    description: "A small shop or stand where goods are sold.",
    type: "noun",
    example: "I bought some fruit at the stall.",
  },
  {
    id: 7,
    nameWord: "Encourage",
    meaning: "تشویق کردن",
    description: "To give someone confidence or support.",
    type: "verb",
    example: "My teacher encourages me to study.",
  },
  {
    id: 8,
    nameWord: "Support",
    meaning: "حمایت",
    description: "To help someone or something.",
    type: "verb",
    example: "My family supports me.",
  },
  {
    id: 9,
    nameWord: "Foreign",
    meaning: "خارجی",
    description: "Belonging to or coming from another country.",
    type: "adjective",
    example: "She speaks a foreign language.",
  },
  {
    id: 10,
    nameWord: "Junk food",
    meaning: "هله‌هوله",
    description:
      "Food that is often high in fat, sugar, or salt and has little nutritional value.",
    type: "noun",
    example: "I sometimes eat junk food.",
  },
  {
    id: 11,
    nameWord: "Mind your own business",
    meaning: "به تو ربطی نداره",
    description:
      "An expression telling someone not to interfere in other people's affairs.",
    type: "phrase",
    example: "Please mind your own business.",
  },
  {
    id: 12,
    nameWord: "Formal",
    meaning: "رسمی",
    description: "Suitable for official or professional situations.",
    type: "adjective",
    example: "He wears formal clothes at work.",
  },
  {
    id: 13,
    nameWord: "Informal",
    meaning: "غیررسمی",
    description: "Relaxed and not following formal rules.",
    type: "adjective",
    example: "We had an informal meeting.",
  },
  {
    id: 14,
    nameWord: "Casual",
    meaning: "معمولی",
    description: "Relaxed, comfortable, and not formal.",
    type: "adjective",
    example: "I wear casual clothes at home.",
  },
  {
    id: 15,
    nameWord: "Pay contactless",
    meaning: "پرداخت غیرنقدی",
    description:
      "To pay using a contactless card or phone without inserting the card or using cash.",
    type: "phrase",
    example: "You can pay contactless with your phone.",
  },
  {
    id: 16,
    nameWord: "Try on",
    meaning: "پرو کردن",
    description: "To put on clothes to see if they fit.",
    type: "phrase",
    example: "Can I try on these jeans?",
  },
  {
    id: 17,
    nameWord: "Borrow",
    meaning: "قرض گرفتن",
    description:
      "To take something from someone for a short time and return it later.",
    type: "verb",
    example: "Can I borrow your pen?",
  },
  {
    id: 18,
    nameWord: "Lend",
    meaning: "قرض دادن",
    description:
      "To give something to someone temporarily, expecting it to be returned.",
    type: "verb",
    example: "Can you lend me your book?",
  },
  {
    id: 19,
    nameWord: "Give me a lift",
    meaning: "منو برسون",
    description:
      "An expression asking someone to take you somewhere in their vehicle.",
    type: "phrase",
    example: "Can you give me a lift to school?",
  },
  {
    id: 20,
    nameWord: "Resort",
    meaning: "تفریحگاه",
    description: "A place where people stay for holidays or relaxation.",
    type: "noun",
    example: "We stayed at a beach resort.",
  },
  {
    id: 21,
    nameWord: "Advertisement",
    meaning: "آگهی",
    description:
      "A public message designed to promote a product, service, or idea.",
    type: "noun",
    example: "I saw an advertisement on TV.",
  },
  {
    id: 22,
    nameWord: "Bonfire",
    meaning: "آتش بزرگ",
    description: "A large open fire, usually built outdoors.",
    type: "noun",
    example: "We sat around the bonfire.",
  },
  {
    id: 23,
    nameWord: "Enormous",
    meaning: "خیلی بزرگ",
    description: "Extremely large in size or amount.",
    type: "adjective",
    example: "They live in an enormous house.",
  },
  {
    id: 24,
    nameWord: "Scarecrow",
    meaning: "مترسک",
    description: "A figure made to frighten birds away from crops.",
    type: "noun",
    example: "The scarecrow stands in the field.",
  },
  {
    id: 25,
    nameWord: "Barrel",
    meaning: "بشکه",
    description:
      "A large cylindrical container used for storing liquids or other materials.",
    type: "noun",
    example: "The water is in a wooden barrel.",
  },
  {
    id: 26,
    nameWord: "Led",
    meaning: "رهبری کرد",
    description: "Past tense of lead; guided or directed a person or group.",
    type: "verb",
    example: "She led the team to victory.",
  },
  {
    id: 27,
    nameWord: "Lead",
    meaning: "رهبری کردن",
    description: "To guide or direct a person, group, or organization.",
    type: "verb",
    example: "He will lead the team.",
  },
  {
    id: 28,
    nameWord: "Blow it up",
    meaning: "منفجر کردن",
    description: "To cause something to explode.",
    type: "phrase",
    example: "The movie shows a building blowing up.",
  },
  {
    id: 29,
    nameWord: "Suspicious",
    meaning: "مشکوک",
    description: "Making you think that something is wrong or dishonest.",
    type: "adjective",
    example: "The man looked suspicious.",
  },
  {
    id: 30,
    nameWord: "Arrest",
    meaning: "دستگیر کردن",
    description:
      "To take someone into police custody because they may have committed a crime.",
    type: "verb",
    example: "The police arrested the thief.",
  },
  {
    id: 31,
    nameWord: "Torture",
    meaning: "شکنجه",
    description:
      "To cause someone severe physical or mental pain deliberately.",
    type: "noun",
    example: "Torture is a serious human rights violation.",
  },
  {
    id: 32,
    nameWord: "Hanged",
    meaning: "به دار آویخته شد",
    description: "Past tense of hang when referring to execution by hanging.",
    type: "verb",
    example: "The prisoner was hanged many years ago.",
  },
  {
    id: 33,
    nameWord: "Illegal",
    meaning: "غیرقانونی",
    description: "Not allowed by law.",
    type: "adjective",
    example: "It is illegal to steal.",
  },
  {
    id: 34,
    nameWord: "Mustache",
    meaning: "سبیل",
    description: "Hair that grows above the upper lip.",
    type: "noun",
    example: "My grandfather has a mustache.",
  },
  {
    id: 35,
    nameWord: "Beard",
    meaning: "ریش",
    description: "Hair that grows on the chin, cheeks, and jaw.",
    type: "noun",
    example: "He has a long beard.",
  },
  {
    id: 36,
    nameWord: "Victim",
    meaning: "قربانی",
    description:
      "A person who is harmed, injured, or affected by a crime or event.",
    type: "noun",
    example: "The victim called the police.",
  },
  {
    id: 37,
    nameWord: "Murderer",
    meaning: "قاتل",
    description: "A person who commits murder.",
    type: "noun",
    example: "The murderer was arrested.",
  },
  {
    id: 38,
    nameWord: "Handsome",
    meaning: "خوش‌تیپ",
    description: "Attractive in appearance, especially when describing a man.",
    type: "adjective",
    example: "He is a handsome young man.",
  },
  {
    id: 39,
    nameWord: "Hammer",
    meaning: "چکش",
    description: "A tool with a heavy head used for hitting nails or objects.",
    type: "noun",
    example: "I used a hammer to fix the chair.",
  },
  {
    id: 40,
    nameWord: "Murder",
    meaning: "قتل",
    description: "The unlawful killing of another person intentionally.",
    type: "noun",
    example: "The police are investigating the murder.",
  },
  {
    id: 41,
    nameWord: "Competition",
    meaning: "رقابت",
    description:
      "An event or situation in which people try to be more successful than others.",
    type: "noun",
    example: "She won the English competition.",
  },
  {
    id: 42,
    nameWord: "Attend",
    meaning: "شرکت کردن",
    description: "To be present at an event, class, meeting, or place.",
    type: "verb",
    example: "I attend English classes every week.",
  },
  {
    id: 43,
    nameWord: "Freshman",
    meaning: "دانشجوی سال اول",
    description: "A student in the first year of high school or university.",
    type: "noun",
    example: "My brother is a college freshman.",
  },
  {
    id: 44,
    nameWord: "Sophomore",
    meaning: "دانشجوی سال دوم",
    description: "A student in the second year of high school or university.",
    type: "noun",
    example: "She is a sophomore at university.",
  },
  {
    id: 45,
    nameWord: "Junior",
    meaning: "دانش‌آموز سال سوم",
    description:
      "A student in the third year of high school or university in the US.",
    type: "noun",
    example: "He is a high school junior.",
  },
  {
    id: 46,
    nameWord: "Senior",
    meaning: "دانشجوی سال آخر",
    description:
      "A student in the final year of high school or university in the US.",
    type: "noun",
    example: "My sister is a senior in college.",
  },
  {
    id: 47,
    nameWord: "Producer",
    meaning: "تهیه‌کننده",
    description:
      "A person responsible for organizing or supervising a film, television program, or music production.",
    type: "noun",
    example: "The producer is making a new film.",
  },
  {
    id: 48,
    nameWord: "Scholarship",
    meaning: "بورسیه",
    description:
      "Financial support given to a student to help pay for education.",
    type: "noun",
    example: `She received a scholarship to study abroad.`,
  },
];
const searchFilter = document.getElementById("search-filter");
const containerBox = document.querySelector("#container-box");
const filterBox = document.getElementById("filter-box");
const filterBtn = document.getElementById("filter-btn");
const typeWord = document.querySelectorAll("#type-word button");
function search(e) {
  const val = e.target.value;
  const filteredWords = words.filter((item) => item.nameWord.includes(val));
  showItems(filteredWords);
}

filterBtn.addEventListener("click", () => {
  filterBox.classList.toggle("active");
  filterBtn.classList.toggle("ri-filter-fill");
  filterBtn.classList.toggle("ri-filter-line");
});

searchFilter.addEventListener("input", search);
function showItems(list) {
  containerBox.innerHTML = list
    .map(
      (item) => `
        <div class="box">
          <p class='id-box'>${item.id}</p>
          <h2>${item.nameWord}</h2>
          <h3>${item.meaning}</h3>
          <div class='learn-more'>
            <p class='notice'>${item.description}</p>
            <p class='notice'>example: <span>${item.example}</span></p>
          </div>
          <div class="tage">
            <span>${item.type}</span>
          </div>
        </div>
      `,
    )
    .join("");
}
showItems(words);
typeWord.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let selected = e.currentTarget.textContent.trim();
    let filterWord = words.filter((word) => {
      if (selected == "all") {
        return word;
      }else{
        return word.type === selected
      }
    });
    showItems(filterWord);
  });
});

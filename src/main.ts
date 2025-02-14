/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

  function getLength(jumpings: number[]): number {
  
    return jumpings.reduce(
      (jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump, 0
    );
  }

  
  /*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */
  
  class Student {
    constructor(
      public name: string,
      public handedInOnTime: boolean
    ) {}
  }
  
  function getStudentStatus(student: Student): string {
  
    if (student.name == "Michael") {
      return student.handedInOnTime ? "VG" : "IG";
    }

    return "IG";
  }
  
  /*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */
  
  class TemperatureRecord {
    constructor(public city: string, public timestamp: Date, public temperature: number) {}
  }
  
  function calcAvgWeeklyTemperature(tempRecordsLastWeek: TemperatureRecord[]) {
    let totalTempLastWeek = 0;
  
    for (let recordIndex = 0; recordIndex < tempRecordsLastWeek.length; recordIndex++) {
      const record = tempRecordsLastWeek[recordIndex]
      const oneWeek = 604800000
      
      if (record.city === "Stockholm") {
        if (record.timestamp.getTime() > Date.now() - oneWeek) {
          totalTempLastWeek += record.temperature;
        }
      }
    }
  
    return totalTempLastWeek / 7;
  }
  
  /*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
  
   type Product {
      name: string,
      price: number,
      amount: number,
      description: string,
      image: string,
    };

  function showProduct(product: Product,parent: HTMLElement)
   {
    const container = document.createElement("div");

    const title = document.createElement("h4");
    title.innerHTML = product.name
    
    const imageTag = document.createElement("img");
    imageTag.src = product.image;
    imageTag.alt = product.name;

    const pris = document.createElement("strong");
    pris.innerHTML = product.price.toString();
  
    container.append(title, imageTag, pris);
    parent.appendChild(container);
  }
  
  /*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
  function presentStudents(students: Student[]) {
    const passedList = document.querySelector("ul#passedstudents");
    const failedList = document.querySelector("ul#failedstudents");
    
    if (!passedList || !failedList) return;

    const passedFragment = document.createDocumentFragment();
    const failedFragment = document.createDocumentFragment();

    students.forEach(student => {
      const studentContainer = document.createElement("div");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox"
      checkbox.checked = student.handedInOnTime;

      studentContainer.appendChild(checkbox)

      if (student.handedInOnTime) {
        passedFragment.appendChild(studentContainer);
      } else {
        failedFragment.appendChild(studentContainer)
      }
    });

    passedList.appendChild(passedFragment);
    failedList.appendChild(failedFragment);
  }
  
  /*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
  function concatenateStrings() {
    return ["Lorem", "ipsum", "dolor", "sit", "amet"].join("");
  }
  
  /* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */

  interface User {
    name: string,
    birthday: Date,
    email: string,
    password: string,
    address: string
  }

  function createUser(user: User): string {
    if (user.birthday > new Date()) {
      return "Invald birthdate";
    }
  
    let ageDiff = Date.now() - user.birthday.getTime();
    let ageDate = new Date(ageDiff);
    let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  
    if (userAge < 20) {
      return "You need to be over 20 years old!";
  }
  
  console.log("User created:", user);

  return "User created successfully!";
}

export function main(dtoIn) {
    const dtoOut = generateEmployee(dtoIn);
    return dtoOut;
}

export function generateEmployee(dtoIn) {

    const dtoOut = [];

    const mNames = ["Jan", "Petr", "Tomáš", "Standa", "Pavel", "Jirka", "Martin", "Michal"];
    const fNames = ["Jana", "Petra", "Lenka", "Zdena", "Pavla", "Jirina", "Martina", "Michaela"];
    const mSurnames = ["Novák", "Petrovický", "Beran", "Malý", "Velký", "Hák", "Hašek", "Kovář"];
    const fSurnames = ["Nováková", "Petrovická", "Beranová", "Malá", "Velká", "Novotná", "Levá", "Kovářová"];
    const workloads = [10, 20, 30, 40];
    const genders = ["male", "female"];

    for(let i = 0; i < dtoIn.count; i++) {
        const gender = genders[Math.floor(Math.random()*genders.length)];

        let name;
        let surname;

        if(gender === "male"){
            name = mNames[Math.floor(Math.random()*mNames.length)];
            surname = mSurnames[Math.floor(Math.random()*mSurnames.length)];
        }else{
            name = fNames[Math.floor(Math.random()*fNames.length)];
            surname = fSurnames[Math.floor(Math.random()*fSurnames.length)];
        }
        const workload = workloads[Math.floor(Math.random()*workloads.length)];
        const birthDate = generateBirthDate(dtoIn.age.min, dtoIn.age.max);

        dtoOut.push({name, surname, gender, birthDate, workload});
    }
    return dtoOut;
}

export function generateBirthDate(minAge, maxAge){
    const today = new Date();
    const yearMs = 365.25*24*60*60*1000;

    const minDate = new Date(today.getTime() - (maxAge*yearMs));
    const maxDate = new Date(today.getTime() - (minAge*yearMs));

    const randomTime = minDate.getTime()+Math.floor(Math.random()*(maxDate.getTime()-minDate.getTime()+1));
    const randomDate = new Date(randomTime);

    return randomDate.toISOString();
}

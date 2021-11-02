document.getElementById("submit").addEventListener("click", function(){
    let person = calculate();
    if (person != null) {
        document.getElementById("answer").innerHTML = `The price for your bride ${person.name} is ${person.price} $.  Love letter: "${person.letter}"`;
    } else {
        document.getElementById("answer").innerHTML = "Please, enter the data.";
    }
});

class Person{
    constructor(name, price, letter){
        this.name = name;
        this.price = price;
        this.letter = letter;
    }
}

calculate = () => {
    let name = document.getElementById("name").value
    let starting_bid = document.getElementById("starting_bid").value
    let letter = document.getElementById("love_letter").value
    
    if(name != "" && starting_bid != ""){
        let price = Number(starting_bid);

        var education = document.getElementById("education");
        var education_value = Number(education.value);
        console.log(education_value);
        if (education_value != "blank") {
            price *= education_value;
        }

        var networth = document.getElementById("networth");
        let networth_value = Number(networth.value);
        if(networth_value != "blank"){
            price *= networth_value;
        }

        var caste = document.getElementById("caste");
        let caste_value = Number(caste.value);
        if(caste_value != "blank"){
            price += caste_value;
        }
    
        var skills = Array.from(document.getElementsByClassName("skills")).filter((index) => index.checked).map((index) => Number(index.value));
        if(skills.lengh != 0){
            var skills_price = skills.reduce((accumulator, skills_value) => accumulator + skills_value, 0);
            price += skills_price;
        }

        const age = document.getElementsByName("age");
        age.forEach(item => {
            if(item.checked){
                price *= Number(item.value);
            }
        })
        var reputation = Array.from(document.getElementsByClassName("reputation")).filter((index) => index.checked).map((index) => Number(index.value));
        for(let i = 0; i < reputation.length; i++){
            if(typeof Number(reputation[i]) == "number"){
                price -= reputation[i];
            }
            else price *= reputation[i];
        }
        return new Person(name, price, letter);
    }
    return null;
}

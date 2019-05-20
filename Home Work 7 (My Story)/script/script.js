getId = x => document.getElementById(x);

getId('enter').addEventListener('click', function(){
    let value = getId('age').value;

    if(value == ""){
        getId('info').innerHTML = "Введіть рік з проміжку 1979-2019";
        getId('age').value = "";
    }
    else if(value<1979 || value>2019){
        getId('info').innerHTML = "Я тоді ще не жив )";
        getId('age').value = "";
    }
    else if(value>=1979 && value<1983){
        getId('info').innerHTML = `<b>${babyYears}</b> <br> ${IBaby.events().baby}`;
        getId('age').value = "";
    }
    else if(value>=1983 && value<1986){
        getId('info').innerHTML = `<b>${childYears}</b> <br> ${IChild.events().child}`;
        getId('age').value = "";
    }
    else if(value>=1986 && value<1992){
        getId('info').innerHTML = `<b>${elemSchoolYears}</b> <br> ${IElemSchool.events().elemSchool}`;
        getId('age').value = "";
    }
    else if(value>=1992 && value<1999){
        getId('info').innerHTML = `<b>${teenagerYears}</b> <br> ${ITeenager.events().teenager}`;
        getId('age').value = "";
    }
    else if(value>=1999 && value<2004){
        getId('info').innerHTML = `<b>${youthYears}</b> <br> ${IYouth.events().youth}`;
        getId('age').value = "";
    }
    else if(value>=2004 && value<=2019){
        getId('info').innerHTML = `<b>${adultYears}</b> <br> ${IAdult.events().adult}`;
        getId('age').value = "";
    }
});

// --------------------- Age Prototype ----------------------------------------------

function Age(){}
Age.prototype.events = function(){
    let age = {
        baby: "Народився у Полтаві. З трьох років жив у Черкасах. Ці роки пам’ятаю найменше за все. " +
        "По слухам, багацько хворів, але нічого сказати з цього приводу не можу.",
        child: "Безтурботні роки, декілька переїздів з одного житла в інше, розбив собі око качеллю, але воно дивом вижило. " +
        "Єдине, що добре пам’ятаю, як ходив з пов’язкою на оці.",
        elemSchool: "Тут все просто і банально – початок навчання і все з ним пов’язане. Складно згадати щось цікаве." +
        "Завжди був найменшим за зростом, стояв останнім, постійно діставалось від більших хлопців.",
        teenager: "Тут вже стає цікавіше. Перші закоханості, музика, протести, самоствердження, інститут. Взяв до рук гітару, " +
        "почав складати перші вірші. І хоч до музичної школи мене не взяли, бо сказали, що вже пізно, але мене це не зупинило.",
        youth: "Період становлення: перша робота (до речі, працював програмістом на мові Assembler, але не склалося " +
        "з ряду причин(( ). Намагання знайти себе у творчості, перші оповідання, яких у мене вдома й досі десь ціла збірка лежить, " +
        "перші власні пісні... Це був гарний спокійний і плідний творчий період.",
        adult: "Найбільш кардинальні зміни в житті. Переїзд з Черкас до Києва 2004 року, постійні зміни роботи, одруження, розлучення," + 
        "спроби знайти себе у творчості, створення музичного гурту, але потім переїзд до Львова 2009 року. І знову все спочатку. " +
        "Створення нового гурту <a href='https://soundcloud.com/illusionslviv'>Illusions</a>, з яким ми випустили два альбоми, " +
        "але розійшлись своїми дорогами. Вже близько десяти років працюю дизайнером у видавництві, та дізнаватись для себе щось нове " +
        "завжди цікаво. Так само як і рухатись вперед. І надалі не полишаю творчість, бо без неї ніяк не виходить. 2018 року випустив свій " +
        "власний альбом <a href='https://soundcloud.com/andriybochko/sets/colours'>Кольори</a> та намагаюся вдруге потоваришувати з програмуванням.",
        old: "Пенсія, старість, подорожі, можливість насолоджуватися останніми роками, переосмислення життя та що зробив.",
    }
    return age;
};

Age.prototype.years = function(){
    let years = [
        1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,
        1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,
        2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,
        2012,2013,2014,2015,2016,2017,2018,2019
    ];
    return years;
};

// -------------------------- Baby ------------------------------------------------

function Baby(age,years){
    this.age = age;
    this.years = years;
}

Baby.prototype = Age.prototype;

let IBaby = new Baby(`1979-1982`);

Baby.prototype.year = function(){
    let babyFilter = Baby.prototype.years().filter(year => year>=1979 && year<1983);
    return babyYears = babyFilter.join("-");
}

IBaby.events();
IBaby.year();

// --------------------------- Child ------------------------------------------------

function Child(age,years){
    this.age = age;
    this.years = years;
}

Child.prototype = Age.prototype;
let IChild = new Child(`1983-1985`);

Child.prototype.year = function(){
    let childFilter = Child.prototype.years().filter(year => year>=1983 && year<1986);
    return childYears = childFilter.join("-");
}

IChild.events();
IChild.year();

// ------------------------ Elementary School ----------------------------------------

function ElemSchool(age,years){
    this.age = age;
    this.years = years;
}

ElemSchool.prototype = Age.prototype;
let IElemSchool = new ElemSchool(`1986-1991`);

ElemSchool.prototype.year = function(){
    let elemSchoolFilter = ElemSchool.prototype.years().filter(year => year>=1986 && year<1992);
    return elemSchoolYears = elemSchoolFilter.join("-");
}

IElemSchool.events();
IElemSchool.year();

// ---------------------------- Teenager ---------------------------------------------

function Teenager(age,years){
    this.age = age;
    this.years = years;
}

Teenager.prototype = Age.prototype;
let ITeenager = new Teenager(`1992-1998`);

Teenager.prototype.year = function(){
    let teenagerFilter = Teenager.prototype.years().filter(year => year>=1992 && year<1999);
    return teenagerYears = teenagerFilter.join("-");
}

ITeenager.events();
ITeenager.year();

// ----------------------------- Youth ------------------------------------------------

function Youth(age,years){
    this.age = age;
    this.years = years;
}

Youth.prototype = Age.prototype;
let IYouth = new Youth(`1999-2003`);

Youth.prototype.year = function(){
    let youthFilter = Youth.prototype.years().filter(year => year>=1999 && year<2004);
    return youthYears = youthFilter.join("-");
}

IYouth.events();
IYouth.year();

// ------------------------------- Adult --------------------------------------------------

function Adult(age,years){
    this.age = age;
    this.years = years;
}

Adult.prototype = Age.prototype;
let IAdult = new Adult(`2004-2019`);

Adult.prototype.year = function(){
    let adultFilter = Adult.prototype.years().filter(year => year>=2004 && year<=2019);
    return adultYears = adultFilter.join("-");
}

IAdult.events();
IAdult.year();
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// -----------------ForEach---------------------
for(let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}
console.log('\n')

companies.forEach( function(company, index, companies) {
    console.log(company);
    // console.log(companies[index]);
});

console.log('\nForEach shortcut')
companies.forEach( company=> console.log(company) );


// --------------------Filter--------------------------------
let canDrink = [];
for(let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21) {
        canDrink.push( ages[i] );
    }
}
console.log('canDrink[] = ['+canDrink+']');

canDrink = [];
canDrink = ages.filter( function(age) {
    if(age>=21) {
        return true;
    }
});
console.log(canDrink);

canDrink = ages.filter( (age) => (age>=21) );
console.log(canDrink);


const retailCompanies = companies.filter( company=> company.category==='Retail' );
console.log(retailCompanies);

const eightiesCompanies = companies.filter( company=> (company.start >= 1980 && company.end < 1990) );
console.log(eightiesCompanies);

const lastedTenYears = companies.filter( company=> (company.end-company.start >= 10));
console.log(lastedTenYears);


// --------------------Map-------------------
let testMap = companies.map( function(company) {
    return `${company.name}: [${company.start}-${company.end}]`;
});
console.log(testMap);

testMap = companies.map(company=> `${company.name}: [${company.start}-${company.end}]` );
console.log(testMap);

// in ages array for root(each age)*2 
const ageSquareRootTimesTwo = ages
    .map(age => Math.sqrt(age))
    .map(age => age*2);
console.log(ageSquareRootTimesTwo);


// --------------Sort-----------------------
let sortedCompanies = companies.sort( function(c1, c2) {
    if(c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortedCompanies);

sortedCompanies = companies.sort( (a,b)=> (a.start > b.start ? 1: -1) );
console.log(sortedCompanies);

// const sortAges = ages.sort(); --> will show wrong ans --> compare only leftmost letter 1st then next
const sortedAges = ages.sort( (a,b)=> a-b );
console.log(sortedAges);


// ----------------Reduce-------------------------
let ageSum = 0;
for(let i=0; i< ages.length; i++){
    ageSum += ages[i];
}
console.log(ageSum);

ageSum = ages.reduce( function(total, age) {
    return total+age;
}, 0);
console.log(ageSum);

ageSum = ages.reduce( (total, ageEach) => total+ageEach, 0); // initial value of total = 0;
console.log(ageSum);


let totalYears = companies.reduce( function(total, company) {
    return total+(company.end-company.start);
}, 0);
console.log(totalYears);

totalYears = companies.reduce( (total, company) => total+(company.end-company.start) ,0);
console.log(totalYears);

totalYears = 0;
for(let i=0; i < companies.length ; i++) {
    totalYears += companies[i].end-companies[i].start;
}
console.log(totalYears);


// -----------------Map, Filter, Sort, Reduce--------------
const combined = ages
    .map( age => age*2 )
    .filter( age=> age=>40 )
    .sort( (a,b)=> a-b )
    .reduce( (a,b)=> a+b, 0);
console.log(combined);


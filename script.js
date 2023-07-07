let tripToParse = "Perdita 8 10 8"

let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"];

const parseTrip = (trip) => {
	const tab = trip.split(" ");
    //console.log(tab);

    let result = {
    client: tab[0],
    start: parseInt(tab[1]),
    duration: parseInt(tab[2]),
    price: parseInt(tab[3]),
    }
    return result;
}

parseTrip(tripToParse)

let parseTrips = (trips) => {
	const result = []
    for (let i = 0; i < trips.length; i++) {
    result.push(parseTrip(trips[i]));
    }
    return result;
}

parseTrips(tripsToParse);

const getTripsPrice = (voyages) => {
    let sum = 0;
    for (let i = 0; i < voyages.length; i++){
    sum += voyages[i].price;
    } return sum
// methode reduce :
// sum = 0
// let sum = voyages.reduce(acc,obj) => acc + parseInt(obj.price),0)
}
const tripList = parseTrips(tripsToParse)

console.log(getTripsPrice(tripList));

const checkCompatibility = (tripA, tripB) => {
    if ((tripA.start + tripA.duration) < tripB.start){
        return true
    } return false
}

console.log(checkCompatibility(tripList[0],tripList[1]));

const findCompatibilities = (trips) => {
    const compatibility = [];
    for (let i = 0; i < trips.length; i++)
    compatibility.push([trips[i]])

    console.log(compatibility);

    for (let i = 0; i < trips.length-1; i++){
        for (let j = i + 1; j < trips.length; j++){
            if (checkCompatibility(trips[i],trips[j]) === true) {
                compatibility.push([trips[i],trips[j]])
            }
        }
    }
    return compatibility;
}

console.log(findCompatibilities(tripList));

const combo = findCompatibilities(tripList);

const findBestPrice = (trips) => {
    let result = [];
    for (let i = 0; i < trips.length; i++) {
        result.push(getTripsPrice(trips[i]));
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i] === Math.max(...result)) {
            return trips[i]
        }
    }
}

console.log(findBestPrice(combo));
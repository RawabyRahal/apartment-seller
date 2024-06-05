//Only start playing with this file if you're done with all the basics

const must = (radio) => radio.filter(rb => rb.checked).length

const findRelevantApts = function (address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking) {
    let relevantApts = apartments.filter(a =>
        a.address.toLowerCase().includes(address.toLowerCase() || "") &&
        a.price >= (minPrice || 0) &&
        a.price <= (maxPrice || a.price) &&
        a.rooms >= (minRooms || 0) &&
        a.rooms <= (maxRooms || a.rooms)
    )

    // immediate = !(immediate[0].checked) ==> to check this out, again!
    immediate = (immediate)
    // return((immediate ? relevantApts : relevantApts.filter(a => (a.immediate)))

    parking = (parking)
    // return ((parking ? relevantApts : relevantApts.filter(a => (a.parking)))

    if (parking && !immediate) {
        return relevantApts.filter(a => (a.parking) && !(a.immediate))
    }
    else if (immediate && !parking) {
        return relevantApts.filter(a => (a.immediate) && !(a.parking))
    }
    else if(parking && immediate){
        return relevantApts.filter(a => ((a.immediate) && (a.parking)))
    }
    else {
        // where there is no parking && immidiate
        return relevantApts;
    }
    

}

$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const source = $('#apartments-template').html();
const template = Handlebars.compile(source);

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render

    const newHTML = template({apartments : apartments});
    $('#results').append(newHTML);
}
renderApts(apartments) //renders apartments when page loads


/**
 * 
 * var classData = {
    classmates: [
        {name: "That on gal", description: "Always has the ansswer"},
        {name: "The weird dude", description: "Quick with a smile"},
        {name: "Taylor", description: "Just Taylor"}
    ]
}

const source = $('#classmates-template').html();
const template = Handlebars.compile(source);
const newHTML = template(classData);

$('.classmates').append(newHTML);
 * 
 */
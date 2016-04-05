// business logic
function ticket(movie,time,age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}
ticket.prototype.price = function() {
  if (this.age <= 18) {
    this.price = "$" + 5
  } else if (this.age >= 65){
    this.price = "$" + 6
  } else {
    this.price = "$" + 10
  }
  return this.price;
}




// // end business logic
//
// user user logic
$(document).ready(function() {


$("form.choices").submit(function(event) {
   event.preventDefault();

    var inputMovie =$("#movie").val();
    var inputTime = $('#time').val();
    var inputAge = parseInt($("input#age").val());
    var newTicket = new ticket(inputMovie, inputTime, inputAge);
    $("#output").append("<p>" + newTicket.price() + "</p>");
    
console.log(inputMovie);
  });
});

// end user logic

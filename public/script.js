
$(".submit").on("click", (event) => {
    event.preventDefault();
    const newReservation = {
        name: $("#reserve_name").val().trim(),
        phone: $("#reserve_phone").val().trim(),
        email: $("#reserve_email").val().trim(),
        id: $("#reserve_uniqueID").val().trim(),
    };

    $.post("/api/reservations", newReservation).then((data) => {
        console.log("added " + data);
        if (data) {
            alert("you got a table")
        } else {
            alert("you are on the waitlist")
        }
        $("#reserve_name").val("");
        $("#reserve_phone").val("");
        $("#reserve_email").val("");
        $("#reserve_uniqueID").val("");

    })
})

$("#view").on("click", (event) => {
    event.preventDefault();
    $.get("/api/reservations", (data) => {
        const list = $("<ul>")
        for (const table of tables) {

            $("<li class= li>").text(data.name);
            $("<li class= li>").text(data.phone);
            $("<li class= li>").text(data.email);
            $("<li class= li>").text(data.uniqueID);
            list.append(table)
        }

        $("#tableSection").append(list);
    })


})



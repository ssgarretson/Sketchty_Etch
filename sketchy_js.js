//Function to build grid in "container"
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for(var cols = 0; cols < x; cols++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

//Function to clear out the grid
function clearGrid() {
    $(".grid").remove();
};

function refreshGrid() {
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};

$(document).ready(function() {
    createGrid(16);

    $(".grid").mouseover(function() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var color = "rgb("+r+","+g+", "+b+")"
        $(this).css("background-color", color);
    });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
            $(this).css("background-color", "black");
        });
    });
});
require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        // do something
        console.log("map map map")
    });

    gitbook.events.bind("exercise.submit", function() {
        // do something
    });
});
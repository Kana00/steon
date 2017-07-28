Template.statistique.onRendered(function() {

    var ctx  = document.getElementById("chats-last-5-day").getContext("2d");
    
    var data = {
        labels: ["j-0", "j-1", "j-2", "j-3", "j-4", "j-5"],
        datasets: [{
            data: [80.9, 70, 120, 100, 85, 83],
            fillColor : "rgba(0,116,217, 0.3)",
            strokeColor : "rgba(0,116,217, 1)"
        }]
    }
    var option = {
        scales: {
            yAxes: [{
                ticks: {
                    min: 10
                }
                
            }]
        }
    }

    var myLineChart = new Chart(ctx).Bar(data, option);
});
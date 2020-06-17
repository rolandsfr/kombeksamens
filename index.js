
let stats = "";
let code;
let statArray = [], mediumResult, mediumAnalysis;



$("#getStats").click(() => {
    stats = $("#statsEntry").val();

    if(stats === "") {
        $(".error-msg").css("display", "block");
        $(".general-stats").css("display", "none");
        statArray = [];
    } else {
        $(".error-msg").css("display", "none");
        $(".general-stats").css("display", "block");

    }

    const regexProc = /[0-9]{1,4}\%/g;

    let array1;

    

    const arrAvg = arr => statArray.reduce((a,b) => a + b, 0) / statArray.length;




    while ((array1 = regexProc.exec(stats)) !== null) {
        statArray.push(parseInt(array1[0]));
    }


    mediumResult =  arrAvg(statArray);
    mediumAnalysis = 0;


    console.log(statArray);

    for (let i = 0; i < statArray.length; i++) {
        mediumAnalysis += mediumResult / statArray[i];
    }

    mediumAnalysis = Math.trunc(mediumAnalysis);

    console.log(mediumAnalysis)

    // showStats(statArray);

    // console.log("Max percentage - " + Math.max(...statArray) + "%")
    // console.log("Min percentage - " + Math.min(...statArray) + "%")
    // console.log("Average percentage - " + arrAvg(statArray) + "%")
    // console.log("Personal score - " + personalResultAnalysis);

    // console.log(personalResultAnalysis)
    

    $(".lowest").html("Zemākais rezultāts - " + Math.min(...statArray) + "%");
    $(".highest").html("Augstākais rezultāts - " + Math.max(...statArray) + "%");
    $(".avg").html("Vidējais rezultāts - " +  Math.trunc(arrAvg(statArray)) + "%");

});

$(".analyze").click(() => {

    let personalResult = 0;
    let personalResultAnalysis = 0;

    personalResult = parseInt($("#code").val());

    for (let i = 0; i < statArray.length; i++) {
        personalResultAnalysis += personalResult / statArray[i];
    }

    personalResultAnalysis = Math.trunc(personalResultAnalysis);


    if(personalResultAnalysis / mediumAnalysis < 1) {
        $(".results-block p").css("display", "none");
        $(".bad").css("display", "inline-block");
    } else if(personalResultAnalysis / mediumAnalysis >= 1 && personalResultAnalysis / mediumAnalysis <= 1.2) {
        $(".results-block p").css("display", "none");
        $(".ok").css("display", "inline-block");
    } else if(personalResultAnalysis / mediumAnalysis > 1.2) {
        $(".results-block p").css("display", "none");
        $(".legend").css("display", "inline-block");
    } else {
        console.log("Oops, something went wrong...");
    }

    
})



function showStats(stats) {
   document.getElementsByClassName("stats")[0].innerHTML = stats;
}




// 1002	9	7	16	3	4	3	4	3	17	33	1002	ENG	5	3	1	2	0	7	18	51	57%
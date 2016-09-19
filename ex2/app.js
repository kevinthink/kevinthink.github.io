

$(function () {

    var $btn1 = $("#btn1");
    var $input1 = $("#input1");
    var $input2 = $("#input2");
    var $input3 = $("#input3");
    var $input4 = $("#input4");

    $btn1.click(function () {

        //        $("div").text("AAA");

        changeText();


    });

    function changeText() {

        var title1 = $input1.val();
        var title2 = $input2.val();
        var title3 = $input3.val();
        var title4 = $input4.val();


        $("#text1").text(title1);
        $("#text2").text(title2);
        $("#text3").text(title3);
        $("#text4").text(title4);


    };





});

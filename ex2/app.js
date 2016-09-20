$(function () {

    var $btn1 = $("#btn1");
    var $input1 = $("#input1");
    var $input2 = $("#input2");
    var $input3 = $("#input3");
    var $input4 = $("#input4");

    // $btn1 滑鼠點擊時，執行 changeText 函數(動作)

    $btn1.click(function () {

        changeText();

    });

    // changeText 函數(動作)
    function changeText() {

        // 將表單輸入文字 指定給變數
        var title1 = $input1.val();
        var title2 = $input2.val();
        var title3 = $input3.val();
        var title4 = $input4.val();

        // 將變數指定給文字區塊
        $("#text1").text(title1);
        $("#text2").text(title2);
        $("#text3").text(title3);
        $("#text4").text(title4);


    };





});

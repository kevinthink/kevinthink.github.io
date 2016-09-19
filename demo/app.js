$(function () {

    // btnReadMore 按鍵 按下時 Begin
    var btnStatus = 1;

    $("#btnReadMore").click(function () {

        $("#aboutMe").slideToggle("500");

        btnStatus = btnStatus * -1;

        if (btnStatus == -1) {

            $("#btnReadMore").text("Close")



        } else($("#btnReadMore").text("Read More"));

    });
    // btnReadMore 按鍵 按下時 End


    //螢幕往下捲動時 顯示回到頁首圖示 Begin 
    // 將 GoToTop 設為不顯示為初始值
    $("#GoToTop").hide();

    // 當視窗捲動時 觸發執行
    $(window).scroll(function () {

        // 查詢視窗離最頂端距離多少像素 並指定給變數 pxToTop

        var pxToTop = $(window).scrollTop();

        //如果 pxToTop 大於 600 則 #GoToTop 顯示 不然 #GoToTop 不顯示
        if (pxToTop > 600) {
            $("#GoToTop").show(500);
        } else {
            $("#GoToTop").hide(500);
        };
    });
    //螢幕往下捲動時 顯示回到頁首圖示 End

    // 滑鼠移到 ex 1 圖片時 作透明度處理 Begin

    $("#ex1").mouseover(

        function () {

            $("#ex1").fadeTo(300, 0.4);

        });

    $("#ex1").mouseout(

        function () {

            $("#ex1").fadeTo(300, 1);

        });

    // 滑鼠移到 ex 1 圖片時 作透明度處理 End


    // 滑鼠移到 ex 2 圖片時 作透明度處理 Begin

    $("#ex2").mouseover(

        function () {

            $("#ex2").fadeTo(300, 0.4);

        });

    $("#ex2").mouseout(

        function () {

            $("#ex2").fadeTo(300, 1);

        });

    // 滑鼠移到 ex 2 圖片時 作透明度處理 End

});

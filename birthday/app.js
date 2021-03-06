$(function () {

    //新增成員區塊 Begin  

    // 查詢輸入表單中的輸入欄 指定給各參數
    var $userName = $("#userName");
    var $userBirth = $("#userBirth");
    var $userMail = $("#userMail");
    var $userGroup = $("#userGroup");
    var $userNote = $("#userNote");
    var $btnAddUser = $("#btnAddUser");
    var $btnAllUser = $("#btnAllUser");
    var $mainBtnAllUser = $("#mainBtnAllUser")
    var flagListAllUser = 0; //將已列出名單狀態設為 0 (未列出)
    var flagEdit = 0; //已編輯狀態設為 0 ( 未編輯 )
    var numberUser = localStorage.length; //取得 localStorage 的資料列數 

    var $line1 = $("#line1");
    var $line2 = $("#line2");
    var $line3 = $("#line3");
    var $line4 = $("#line4");
    var $line5 = $("#line5");

    // 共用函數 listAllUser Begin
    function listAllUser(flagGo) {

        if (flagGo == 1) {

            var $tableAllUser = $("#tableAllUser");
            $tableAllUser.empty(); //先清空 table 下所有的列數

            var $tr = $("<tr></tr>");

            var $th = $("<th></th>");
            $th.text("姓名");
            $tr.append($th);

            var $th = $("<th></th>");
            $th.text("生日");
            $tr.append($th);

            $tableAllUser.append($tr);

            for (var index = 0; index < localStorage.length; index++) {

                var userName = localStorage.key(index);
                var str = localStorage.getItem(userName);

                var contact = JSON.parse(str);

                //宣告新一行 tr
                var $tr = $("<tr></tr>");

                var $td = $("<td></td>");
                $td.text(contact.userName);

                if (index % 2 > 0) {
                    $td.css("background", "#dde5ff")
                };


                $tr.append($td);

                var $td = $("<td></td>");
                $td.text(contact.userBirth);
                if (index % 2 > 0) {
                    $td.css("background", "#dde5ff")
                };
                $tr.append($td);

                $tableAllUser.append($tr);

                //  flagListAllUser = 1; // 將已列出名單狀態設為 1 (已列出)
                //  numberUser = localStorage.length;

            };

            flagListAllUser = 1; // 將已列出名單狀態設為 1 (已列出)
            numberUser = localStorage.length;

            flagEdit = 0; //將已編輯狀態 reset 為 0


            // 設定 td 欄位以供查詢區塊 Begin
            var $eachTd = $("td"); // 查詢 DOM 中所有元素 td

            // 設定 for 迴圈 由 0 ~ $eachLi.length ( 即所有 li 的個數 )
            for (var index = 0; index <= $eachTd.length; index++) {

                //指定每個 $eachTd ( 即 td ) 建立監聽事件 click 時函數 clickHandler
                //注意: 本例中 "click" 亦可寫成 'click' ; 函數名稱不需加上 (), 例如本例 //clickHandler 是正確的，clickHander() 是錯的

                $eachTd[index].addEventListener("click", clickHandler);
            };

            // 函數 clickHandler 區塊 Begin
            function clickHandler() {

                var userNameToList = this.textContent;

                for (var index = 0; index < localStorage.length; index++) {

                    var userName = localStorage.key(index);
                    var str = localStorage.getItem(userName);

                    var contact = JSON.parse(str);

                    if (contact.userName == userNameToList) {

                        $line1.text("姓名: " + contact.userName);
                        $line2.text("生日: " + contact.userBirth);
                        $line3.text("Email :" + contact.userMail);
                        $line4.text("群組: " + contact.userGroup);
                        $line5.text("Note: " + contact.userNote);

                        $("#userInfo").css("display", "inline");

                    };

                };
                //準備欄位點選時 顯示欄位中名字的所有欄位區塊 End               

            };
            // 函數 clickHandler 區塊 End        

        };
    };
    // 共用函數 listAllUser End


    // 當 $btnAddUser 點擊時 執行動作 Begin
    $btnAddUser.click(function () {

        // 宣告一個物件 : contact
        var contact = new Object;

        // 查詢表單中各輸入欄的值 並 指定給 contact 物件各屬性
        contact.userName = $userName.val();
        contact.userBirth = $userBirth.val();
        contact.userMail = $userMail.val();
        contact.userGroup = $userGroup.val();
        contact.userNote = $userNote.val();

        //將 JavaScript 值轉換成以 JavaScript 物件標記法 //(JavaScript Object Notation，JSON) 表示的字串。
        var str = JSON.stringify(contact);

        //存入 localStorage
        localStorage.setItem(contact.userName, str);

        //清空各輸入欄內資料
        $userName.val("");
        $userBirth.val("");
        $userMail.val("");
        $userGroup.val("");
        $userNote.val("");

        flagEdit = 1; // 設定已編輯狀態為 1 ( 已編輯 )


    });
    // 當 $btnAddUser 點擊時 執行動作 End

    // 當 $btnAllUser 點擊時 執行動作 Begin

    $btnAllUser.click(function () {

        //先將 #userInfo 區塊 設為不顯示        
        $("#userInfo").css("display", "none");

        var flagGo = 0; // 是否列出清單旗標設為 0 ( 不作 )

        if (localStorage.length > 0 && flagListAllUser == 0) {
            flagGo = 1;
        };
        if (localStorage.length > numberUser) {
            flagGo = 1;
        };

        if (flagEdit == 1) {
            flagGo = 1;
        };

        // 若 列出清單旗標 = 1 則執行 函數 listAllUser(1)
        if (flagGo == 1) {
            listAllUser(1)
        };

    });

    // 當 $btnAllUser 點擊時 執行動作 End


    // 清空所有 user 按鍵 點擊時 執行動作 Begin
    $btnClearAll = $("#btnClearAll");
    $btnClearAll.click(function () {

        localStorage.clear();

    });
    // 清空所有 user 按鍵 點擊時 執行動作 End

    //新增成員區塊 End


    // 主頁中的 main-btnAllUser 點擊時 執行動作 Begin
    $mainBtnAllUser.click(function () {

        //先將 #userInfo 區塊 設為不顯示        
        $("#userInfo").css("display", "none");

        var flagGo = 0; // 是否列出清單旗標設為 0 ( 不作 )

        if (localStorage.length > 0 && flagListAllUser == 0) {
            flagGo = 1;
        };
        if (localStorage.length > numberUser) {
            flagGo = 1;
        };

        if (flagEdit == 1) {
            flagGo = 1;
        };

        // 若 列出清單旗標 = 1 則執行 函數 listAllUser(1)
        if (flagGo == 1) {
            listAllUser(1)
        };

    });
    // 主頁中的 main-btnAllUser 點擊時 執行動作 End


    //編輯成員資料 Begin
    var $btnEditUser = $("#btnEditUser");
    $btnEditUser.click(function () {

        $userName.val($line1.text().substr(4));
        $userBirth.val($line2.text().substr(4));
        $userMail.val($line3.text().substr(7));
        $userGroup.val($line4.text().substr(4));
        $userNote.val($line5.text().substr(6));

    });
    //編輯成員資料 End

    //刪除成員資料 Begin
    var $btnDeleteUser = $("#btnDeleteUser");
    $btnDeleteUser.click(function () {

        var txt;
        var r = confirm("確定刪除資料 ?");

        if (r == true) {

            var userToDelete = $line1.text().substr(4); // 取得使用者名稱

            alert("將刪除" + userToDelete + "的資料 !");

            localStorage.removeItem(userToDelete);

        };

        $("#userInfo").css("display", "none"); // 關閉 userInfo 文字區塊               

        listAllUser(1); //重新列出所有使用者
    });
    //刪除成員資料 End

    //關閉成員資料 Begin
    var $btnUserInfoClose = $("#btnUserInfoClose");
    $btnUserInfoClose.click(function () {

        $("#userInfo").css("display", "none"); // 關閉 userInfo 文字區塊

    });
    //關閉成員資料 End

});

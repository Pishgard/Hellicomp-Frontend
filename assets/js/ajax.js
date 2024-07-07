$(document).ready(function () {
    $("#submitBtn").click(function () {
        var formData = {
            "name": $("#teamName").val(),
            "city": $("#city").val(),
            "school": $("#school").val(),
            "user_first_name_1": $("#firstName1").val(),
            "user_last_name_1": $("#lastName1").val(),
            "user_email_1": $("#email1").val(),
            "user_phone_1": $("#phone1").val(),
            "user_parent_phone_1": $("#parentPhone1").val(),
            "national_code_1": $("#nationalCode1").val(),
            "user_first_name_2": $("#firstName2").val(),
            "user_last_name_2": $("#lastName2").val(),
            "user_email_2": $("#email2").val(),
            "user_phone_2": $("#phone2").val(),
            "national_code_2": $("#nationalCode2").val(),
            "user_parent_phone_2": $("#parentPhone2").val(),
            "round": 8,
        };

        $.ajax({
            url: "https://hellicomp.pythonanywhere.com/team/",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function (response) {
                console.log(response);
                $("#messageBox").html('<div class="alert alert-success" role="alert">' +
                    'اطلاعات شما با موفقیت ثبت شد. برای ثبت نام نهایی از طریق لینک زیر پرداخت را انجام دهید.' +
                    '<br/>برای کسب اطلاعات بیشتر و اطلاعیه‌ها حتما در یکی از کانال‌ها ما عضو شوید</div>');
                var paymentLink = "https://zarinp.al/580735"; // لینک پرداخت مثالی
                var linkElement = $('<a></a>').attr('href', paymentLink).text('پرداخت').addClass('btn btn-gradient d-inline-flex');
                $("#messageBox").append(linkElement);
                $("#teamForm")[0].reset(); // پاک کردن فرم
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
                $("#messageBox").html('<div class="alert alert-danger" role="alert">خطا در ارسال اطلاعات ! ' + xhr.responseText + '</div>');
            },
            complete: function () {
                $("#messageBox").show(); // نمایش باکس پیام
            }
        });
    });
});
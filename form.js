$(document).ready(function () {
    window.actionNetwork = {};

    jQuery('#updatesForm').validate({
        messages: {
            'answer[email]': { email: "Please provide a valid email address", required: "Email is required." },
            'answer[last_name]': { required: "Last name is required" },
            'answer[first_name]': { required: "First name is required" },
            'answer[zip_code]': { required: "Zip code is required" },
            'answer[street]': { required: "Mailing address is required" },
            'answer[city]': { required: "City is required" },
        },
        onkeyup: false,
        onfocusout: function (element) { jQuery(element).valid(); },
        errorElement: "strong",
        errorElement: 'div',
        errorLabelContainer: '.errorTxt',
        submitHandler: function (form) {
            window.actionNetwork.data = {
                person: {
                    given_name: $("#form-first_name").val(),
                    family_name: $("#form-last_name").val(),
                    email_addresses: [{
                        address: $("#form-email").val()
                    }],
                    postal_addresses: [{
                        postal_code: $("#form-zip_code").val(),
                    }],
                    custom_fields: [{
                        iu_text_to_mc: $("#iu_text_to_mc").val(),
                        cell_phone: $("#Cell-Phone").val()
                    }],
                },
                triggers: {
                    autoresponse: {
                        enabled: true
                    }
                }
            };

            window.actionNetwork.headers = {
                "Content-Type": "application/json"
            };

            $.ajax({
                type: "POST",
                url: "https://actionnetwork.org/api/v2/forms/04fe499e-885a-4a0a-9f5a-ae5825b58aa7/submissions",
                data: JSON.stringify(window.actionNetwork.data),
                headers: window.actionNetwork.headers,
                done: function (data) { },
                fail: function (data) { }
            });
            // form.submit();

            $('.action').hide();
            $('h1.title').hide();
            $('.thanks').show();
        }
    });

    // If there's a cell phone field, check the opt-in box if it's filled in
    if ($("#Cell-Phone").length === 1) {
        $("body").on("change", "#Cell-Phone", function () {
            if ($(this).val().length > 0) {
                $("#iu_text_to_mc").val("1");
            } else {
                $("#iu_text_to_mc").val("0");
            }
        });
    }
});

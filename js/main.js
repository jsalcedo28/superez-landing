/* ===================================================================
 * Count - Main JS
 *
 * ------------------------------------------------------------------- */

(function ($) {

    "use strict";

    var $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    // svg fallback
    if (!Modernizr.svg) {
        $(".home-logo img").attr("src", "images/logo.png");
    }


    /* Preloader
     * -------------------------------------------------- */
    var ssPreloader = function () {

        $("html").addClass('ss-preload');

        $WIN.on('load', function () {

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function () {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            });

            // for hero content animations 
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');

        });
    };


    /* info toggle
     * ------------------------------------------------------ */
    var ssInfoToggle = function () {

        //open/close lateral navigation
        $('.info-toggle').on('click', function (event) {

            event.preventDefault();
            $('body').toggleClass('info-is-visible');

        });

    };


    /* slick slider
     * ------------------------------------------------------ */
    var ssSlickSlider = function () {

        $('.home-slider').slick({
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            speed: 3000
        });

    };


    /* placeholder plugin settings
     * ------------------------------------------------------ */
    var ssPlaceholder = function () {
        $('input, textarea, select').placeholder();
    };


    /* final countdown
     * ------------------------------------------------------ */
    var ssFinalCountdown = function () {

        var finalDate = '2018/12/17';

        $('.home-content__clock').countdown(finalDate)
            .on('update.countdown finish.countdown', function (event) {

                var str = '<div class=\"top\"><div class=\"time days\">' +
                    '%D <span>day%!D</span>' +
                    '</div></div>' +
                    '<div class=\"time hours\">' +
                    '%H <span>H</span></div>' +
                    '<div class=\"time minutes\">' +
                    '%M <span>M</span></div>' +
                    '<div class=\"time seconds\">' +
                    '%S <span>S</span></div>';

                $(this)
                    .html(event.strftime(str));

            });
    };


    /* AjaxChimp
     * ------------------------------------------------------ */
    var ssAjaxChimp = function () {

        var form = $('#mc-form');

        // form submit event
        form.on('submit', function (e) {
            e.preventDefault(); // prevent default form submit

            var email = $("#mc-email").val();

            var template = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
    
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta name="viewport" content="width=device-width">
            
            <title></title>
            
            <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
            <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
            
            
            <style type="text/css" id="media-query">
            body {
        margin: 0;
        padding: 0; }
        
        table, tr, td {
        vertical-align: top;
        border-collapse: collapse; }
        
        .ie-browser table, .mso-container table {
        table-layout: fixed; }
        
        * {
        line-height: inherit; }
        
        a[x-apple-data-detectors=true] {
        color: inherit !important;
        text-decoration: none !important; }
        
        [owa] .img-container div, [owa] .img-container button {
        display: block !important; }
        
        [owa] .fullwidth button {
        width: 100% !important; }
        
        [owa] .block-grid .col {
        display: table-cell;
        float: none !important;
        vertical-align: top; }
        
        .ie-browser .num12, .ie-browser .block-grid, [owa] .num12, [owa] .block-grid {
        width: 600px !important; }
        
        .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
        line-height: 100%; }
        
        .ie-browser .mixed-two-up .num4, [owa] .mixed-two-up .num4 {
        width: 200px !important; }
        
        .ie-browser .mixed-two-up .num8, [owa] .mixed-two-up .num8 {
        width: 400px !important; }
        
        .ie-browser .block-grid.two-up .col, [owa] .block-grid.two-up .col {
        width: 300px !important; }
        
        .ie-browser .block-grid.three-up .col, [owa] .block-grid.three-up .col {
        width: 200px !important; }
        
        .ie-browser .block-grid.four-up .col, [owa] .block-grid.four-up .col {
        width: 150px !important; }
        
        .ie-browser .block-grid.five-up .col, [owa] .block-grid.five-up .col {
        width: 120px !important; }
        
        .ie-browser .block-grid.six-up .col, [owa] .block-grid.six-up .col {
        width: 100px !important; }
        
        .ie-browser .block-grid.seven-up .col, [owa] .block-grid.seven-up .col {
        width: 85px !important; }
        
        .ie-browser .block-grid.eight-up .col, [owa] .block-grid.eight-up .col {
        width: 75px !important; }
        
        .ie-browser .block-grid.nine-up .col, [owa] .block-grid.nine-up .col {
        width: 66px !important; }
        
        .ie-browser .block-grid.ten-up .col, [owa] .block-grid.ten-up .col {
        width: 60px !important; }
        
        .ie-browser .block-grid.eleven-up .col, [owa] .block-grid.eleven-up .col {
        width: 54px !important; }
        
        .ie-browser .block-grid.twelve-up .col, [owa] .block-grid.twelve-up .col {
        width: 50px !important; }
        
        @media only screen and (min-width: 620px) {
        .block-grid {
            width: 600px !important; }
        .block-grid .col {
            vertical-align: top; }
            .block-grid .col.num12 {
            width: 600px !important; }
        .block-grid.mixed-two-up .col.num4 {
            width: 200px !important; }
        .block-grid.mixed-two-up .col.num8 {
            width: 400px !important; }
        .block-grid.two-up .col {
            width: 300px !important; }
        .block-grid.three-up .col {
            width: 200px !important; }
        .block-grid.four-up .col {
            width: 150px !important; }
        .block-grid.five-up .col {
            width: 120px !important; }
        .block-grid.six-up .col {
            width: 100px !important; }
        .block-grid.seven-up .col {
            width: 85px !important; }
        .block-grid.eight-up .col {
            width: 75px !important; }
        .block-grid.nine-up .col {
            width: 66px !important; }
        .block-grid.ten-up .col {
            width: 60px !important; }
        .block-grid.eleven-up .col {
            width: 54px !important; }
        .block-grid.twelve-up .col {
            width: 50px !important; } }
        
        @media (max-width: 620px) {
        .block-grid, .col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important; }
        .block-grid {
            width: calc(100% - 40px) !important; }
        .col {
            width: 100% !important; }
            .col > div {
            margin: 0 auto; }
        img.fullwidth, img.fullwidthOnMobile {
            max-width: 100% !important; }
        .no-stack .col {
            min-width: 0 !important;
            display: table-cell !important; }
        .no-stack.two-up .col {
            width: 50% !important; }
        .no-stack.mixed-two-up .col.num4 {
            width: 33% !important; }
        .no-stack.mixed-two-up .col.num8 {
            width: 66% !important; }
        .no-stack.three-up .col.num4 {
            width: 33% !important; }
        .no-stack.four-up .col.num3 {
            width: 25% !important; }
        .mobile_hide {
            min-height: 0px;
            max-height: 0px;
            max-width: 0px;
            display: none;
            overflow: hidden;
            font-size: 0px; } }
        
            </style>
        </head>
        <body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #FFFFFF">
        <style type="text/css" id="media-query-bodytag">
            @media (max-width: 520px) {
            .block-grid {
                min-width: 320px!important;
                max-width: 100%!important;
                width: 100%!important;
                display: block!important;
            }
        
            .col {
                min-width: 320px!important;
                max-width: 100%!important;
                width: 100%!important;
                display: block!important;
            }
        
                .col > div {
                margin: 0 auto;
                }
        
            img.fullwidth {
                max-width: 100%!important;
            }
                    img.fullwidthOnMobile {
                max-width: 100%!important;
            }
            .no-stack .col {
                        min-width: 0!important;
                        display: table-cell!important;
                    }
                    .no-stack.two-up .col {
                        width: 50%!important;
                    }
                    .no-stack.mixed-two-up .col.num4 {
                        width: 33%!important;
                    }
                    .no-stack.mixed-two-up .col.num8 {
                        width: 66%!important;
                    }
                    .no-stack.three-up .col.num4 {
                        width: 33%!important;
                    }
                    .no-stack.four-up .col.num3 {
                        width: 25%!important;
                    }
            .mobile_hide {
                min-height: 0px!important;
                max-height: 0px!important;
                max-width: 0px!important;
                display: none!important;
                overflow: hidden!important;
                font-size: 0px!important;
            }
            }
        </style>
        
        
        <table class="nl-container" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #FFFFFF;width: 100%" cellpadding="0" cellspacing="0">
            <tbody>
            <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            
        
            <div style="background-color:transparent;">
            <div style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                
        
                    
                    <div class="col num12" style="min-width: 320px;max-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="background-color: transparent; width: 100% !important;">
                    
        
                        
                            
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="divider " style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <tbody>
                <tr style="vertical-align: top">
                    <td class="divider_inner" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right: 10px;padding-left: 10px;padding-top: 10px;padding-bottom: 10px;min-width: 100%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <table class="divider_content" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid transparent;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                            <tbody>
                                <tr style="vertical-align: top">
                                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                        <span></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
                        
                    
                    </div>
                    </div>
                
                </div>
            </div>
            </div>    <div style="background-color:transparent;">
            <div style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                
        
                    
                    <div class="col num12" style="min-width: 320px;max-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="background-color: transparent; width: 100% !important;">
                    
        
                        
                            <div align="center" class="img-container center fixedwidth " style="padding-right: 0px;  padding-left: 0px;">
        
        <img class="center fixedwidth" align="center" border="0" src="https://getsuperez.com/images/logo-grey-font.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: 0;height: auto;float: none;width: 100%;max-width: 270px" width="270">
        <div style="line-height:5px;font-size:1px">&#160;</div>
        </div>
        
                        
                    
                    </div>
                    </div>
                
                </div>
            </div>
            </div>    <div style="background-image:url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7/sayagata-200px.gif');background-position:top center;background-repeat:repeat;;background-color:transparent">
            <div style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                
        
                    
                    <div class="col num12" style="min-width: 320px;max-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="background-color: transparent; width: 100% !important;">
                    
        
                        
                            <div class="">
            
            <div style="line-height:120%;color:#555555;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 30px; padding-bottom: 5px;">	
                <div style="font-size:12px;line-height:14px;font-family:Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;color:#555555;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 14px;text-align: center"><span style="font-size: 48px; line-height: 57px;"><strong><span style="line-height: 57px; font-size: 48px;">WELCOME!</span></strong></span></p></div>	
            </div>
            
        </div>
                        
                        
                            
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="divider " style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <tbody>
                <tr style="vertical-align: top">
                    <td class="divider_inner" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right: 10px;padding-left: 10px;padding-top: 15px;padding-bottom: 20px;min-width: 100%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <table class="divider_content" align="center" border="0" cellpadding="0" cellspacing="0" width="15%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 10px solid #FF5801;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                            <tbody>
                                <tr style="vertical-align: top">
                                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                        <span></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
                        
                        
                            <div class="">
            
            <div style="line-height:120%;color:#555555;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 5px; padding-bottom: 10px;">	
                <div style="font-size:12px;line-height:14px;font-family:Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;color:#555555;text-align:left;"><p style="margin: 0;font-size: 14px;line-height: 17px;text-align: center"><span style="font-size: 20px; line-height: 24px;"><strong>Thank you for subscribing to Super EZ!</strong> </span><br></p></div>	
            </div>
            
        </div>
                        
                        
                            <div class="">
            
            <div style="line-height:180%;color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif; padding-right: 25px; padding-left: 25px; padding-top: 5px; padding-bottom: 20px;">	
                <div style="font-size:12px;line-height:22px;color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;text-align:left;"><p style="margin: 0;font-size: 14px;line-height: 25px;text-align: center"><span style="font-size: 16px; line-height: 28px;">We will notify you as soon as we're available. Stay tuned and be ready, we're going to make your grocery shopping easy!</span></p></div>	
            </div>
            
        </div>
                        
                    
                    </div>
                    </div>
                
                </div>
            </div>
            </div>    <div style="background-color:transparent;">
            <div style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                
        
                    
                    <div class="col num12" style="min-width: 320px;max-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="background-color: transparent; width: 100% !important;">
                    
        
                        
                            &#160;
                        
                    
                    </div>
                    </div>
                
                </div>
            </div>
            </div>    <div style="background-color:#F9F9F9;">
            <div style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                
        
                    
                    <div class="col num12" style="min-width: 320px;max-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="background-color: transparent; width: 100% !important;">
                    
        
                        
                            <div class="">
            
            <div style="line-height:120%;color:#FF5801;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;">	
                <div style="font-size:12px;line-height:14px;color:#FF5801;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;text-align:left;"><p style="margin: 0;font-size: 14px;line-height: 17px;text-align: center"><span style="font-size: 16px; line-height: 19px; color: rgb(102, 199, 229);"><strong>getsuperez.com</strong></span></p></div>	
            </div>
            
        </div>

                        
                            
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="divider " style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <tbody>
                <tr style="vertical-align: top">
                    <td class="divider_inner" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right: 0px;padding-left: 0px;padding-top: 0px;padding-bottom: 15px;min-width: 100%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <table class="divider_content" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #EEEDED;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                            <tbody>
                                <tr style="vertical-align: top">
                                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                        <span></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
                        
                        
                            <div class="">
            
            <div style="line-height:120%;color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;">	
                <div style="font-size:12px;line-height:14px;color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;text-align:left;"><p style="margin: 0;font-size: 14px;line-height: 17px;text-align: center"><strong>© 2018 SuperEz, Inc.</strong> All rights reserved</p></div>	
            </div>
            
        </div>
                        
                    
                    </div>
                    </div>
                
                </div>
            </div>
            </div>    <div style="background-color:#F9F9F9;">
            <div style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                
        
                    
                    <div class="col num12" style="min-width: 320px;max-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="background-color: transparent; width: 100% !important;">
                    
        
                        
                            
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="divider " style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <tbody>
                <tr style="vertical-align: top">
                    <td class="divider_inner" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right: 10px;padding-left: 10px;padding-top: 10px;padding-bottom: 10px;min-width: 100%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <table class="divider_content" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid transparent;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                            <tbody>
                                <tr style="vertical-align: top">
                                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                        <span></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
                        
                    
                    </div>
                    </div>
                
                </div>
            </div>
            </div>   
                </td>
        </tr>
        </tbody>
        </table>
        
        
        
        </body></html>`;

            $.post("https://api.getsuperez.com/send", {
                "to": email,
                "from": {
                    "email": "getsuperez@gmail.com",
                    "name": 'SuperEz Team'
                },
                "subject": "Thank you for subscribing to Super EZ!",
                "html": template
            }).done(function () {
                form.trigger('reset');
                $( ".subscribe-message-error" ).hide();
                $( ".subscribe-message-sent" ).show();
                $(".subscribe-message-sent").html('<i class="fas fa-check"></i> Thank you for subscribing. We will notify you as soon as we are available.');
                fbq('track', 'CompleteRegistration', {content_name: 'New User Subscription', status: 'Registered successfully'});
            }).fail(function(xhr, status, error) {
                form.trigger('reset');
                $( ".subscribe-message-sent" ).hide();
                $( ".subscribe-message-error" ).show();
                $(".subscribe-message-error").html('<i class="fas fa-exclamation-triangle"></i> You must enter a valid e-mail address.');
            });
        });
    };


    /* initialize
     * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();
        ssInfoToggle();
        ssSlickSlider();
        ssPlaceholder();
        ssFinalCountdown();
        ssAjaxChimp();

    })();


})(jQuery);
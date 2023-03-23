<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <!--[if (gte mso 9)|(IE)]>
    <xml>
    <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- So that mobile will display zoomed in -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- enable media queries for windows phone 8 -->
    <meta name="format-detection" content="telephone=no"> <!-- disable auto telephone linking in iOS -->
    <meta name="format-detection" content="date=no"> <!-- disable auto date linking in iOS -->
    <meta name="format-detection" content="address=no"> <!-- disable auto address linking in iOS -->
    <meta name="format-detection" content="email=no"> <!-- disable auto email linking in iOS -->
    <meta name="author" content="Simple-Pleb.com">
    <title>{{ __('email.confirmation.mail-title') }}</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&display=swap"
          rel="stylesheet">

    <style type="text/css">
        /*Basics*/
        body {
            margin: 0px !important;
            padding: 0px !important;
            display: block !important;
            min-width: 100% !important;
            width: 100% !important;
            -webkit-text-size-adjust: none;
        }

        table {
            border-spacing: 0;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        table td {
            border-collapse: collapse;
            mso-line-height-rule: exactly;
        }

        td img {
            -ms-interpolation-mode: bicubic;
            width: auto;
            max-width: auto;
            height: auto;
            margin: auto;
            display: block !important;
            border: 0px;
        }

        td p {
            margin: 0;
            padding: 0;
        }

        td div {
            margin: 0;
            padding: 0;
        }

        td a {
            text-decoration: none;
            color: inherit;
        }

        /*Outlook*/
        .ExternalClass {
            width: 100%;
        }

        .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
            line-height: inherit;
        }

        .ReadMsgBody {
            width: 100%;
        }

        /* iOS BLUE LINKS */
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        /*Gmail blue links*/
        u + #body a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
        }

        /*Buttons fix*/
        .undoreset a, .undoreset a:hover {
            text-decoration: none !important;
        }

        .yshortcuts a {
            border-bottom: none !important;
        }

        .ios-footer a {
            color: #aaaaaa !important;
            text-decoration: none;
        }

        /*Responsive*/
        @media screen and (max-width: 799px) {
            table.row {
                width: 100% !important;
                max-width: 100% !important;
            }

            td.row {
                width: 100% !important;
                max-width: 100% !important;
            }

            .img-responsive img {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                margin: auto;
            }

            .center-float {
                float: none !important;
                margin: auto !important;
            }

            .center-text {
                text-align: center !important;
            }

            .container-padding {
                width: 100% !important;
                padding-left: 15px !important;
                padding-right: 15px !important;
            }

            .container-padding10 {
                width: 100% !important;
                padding-left: 10px !important;
                padding-right: 10px !important;
            }

            .hide-mobile {
                display: none !important;
            }

            .menu-container {
                text-align: center !important;
            }

            .autoheight {
                height: auto !important;
            }

            .m-padding-10 {
                margin: 10px 0 !important;
            }

            .m-padding-15 {
                margin: 15px 0 !important;
            }

            .m-padding-20 {
                margin: 20px 0 !important;
            }

            .m-padding-30 {
                margin: 30px 0 !important;
            }

            .m-padding-40 {
                margin: 40px 0 !important;
            }

            .m-padding-50 {
                margin: 50px 0 !important;
            }

            .m-padding-60 {
                margin: 60px 0 !important;
            }

            .m-padding-top10 {
                margin: 30px 0 0 0 !important;
            }

            .m-padding-top15 {
                margin: 15px 0 0 0 !important;
            }

            .m-padding-top20 {
                margin: 20px 0 0 0 !important;
            }

            .m-padding-top30 {
                margin: 30px 0 0 0 !important;
            }

            .m-padding-top40 {
                margin: 40px 0 0 0 !important;
            }

            .m-padding-top50 {
                margin: 50px 0 0 0 !important;
            }

            .m-padding-top60 {
                margin: 60px 0 0 0 !important;
            }

            .m-height10 {
                font-size: 10px !important;
                line-height: 10px !important;
                height: 10px !important;
            }

            .m-height15 {
                font-size: 15px !important;
                line-height: 15px !important;
                height: 15px !important;
            }

            .m-height20 {
                font-size: 20px !important;
                line-height: 20px !important;
                height: 20px !important;
            }

            .m-height25 {
                font-size: 25px !important;
                line-height: 25px !important;
                height: 25px !important;
            }

            .m-height30 {
                font-size: 30px !important;
                line-height: 30px !important;
                height: 30px !important;
            }

            .rwd-on-mobile {
                display: inline-block !important;
                padding: 5px;
            }

            .center-on-mobile {
                text-align: center !important;
            }
        }
    </style>

</head>

<body
    style="margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0; width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;"
    bgcolor="#F7FAFD">

<span class="preheader-text"
      style="color: transparent; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; visibility: hidden; width: 0; display: none; mso-hide: all;"></span>

<div
    style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;"></div>

<table border="0" align="center" cellpadding="0" cellspacing="0" width="100%" style="width:100%;max-width:100%;">
    <tr><!-- Outer Table -->
        <td align="center" bgcolor="#F7FAFD" data-composer>

            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%"
                   style="width:100%;max-width:100%;">
                <!-- lotus-header-2 -->
                <tr>
                    <td align="center" bgcolor="#3A4150" class="container-padding">

                        <!-- Content -->
                        <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" class="row"
                               width="580" style="width:580px;max-width:580px;">
                            <tr>
                                <td height="40" style="font-size:40px;line-height:40px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <!-- Logo & Webview -->
                                    <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation"
                                           width="100%" style="width:100%;max-width:100%;">
                                        <tr>
                                            <td align="center" class="container-padding">

                                                <!--[if (gte mso 9)|(IE)]>
                                                <table border="0" cellpadding="0" cellspacing="0" dir="rtl">
                                                <tr>
                                                    <td><![endif]-->

                                                <!-- column -->
                                            {{--<table border="0" align="right" cellpadding="0" cellspacing="0" role="presentation" class="row" width="280" style="width:280px;max-width:280px;">
                                                <tr>
                                                    <td class="center-text" align="right" height="22" style="height: 22px;">
                                                        <a href="#"  style="font-family:'Poppins',Arial,Helvetica,sans-serif;font-size:12px;line-height:16px;font-style:italic;font-weight:400;color:#b5beff;text-decoration:none;letter-spacing:0px;">View this email in your browser</a>
                                                    </td>
                                                </tr>
                                            </table>--}}
                                            <!-- column -->

                                                <!--[if (gte mso 9)|(IE)]></td>
                                                <td><![endif]-->

                                                <!-- gap -->
                                                <table border="0" align="right" cellpadding="0" cellspacing="0"
                                                       role="presentation" class="row" width="20"
                                                       style="width:20px;max-width:20px;">
                                                    <tr>
                                                        <td height="20" style="font-size:20px;line-height:20px;">
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!-- gap -->

                                                <!--[if (gte mso 9)|(IE)]></td>
                                                <td><![endif]-->

                                                <!-- column -->
                                                <table border="0" align="right" cellpadding="0" cellspacing="0"
                                                       role="presentation" class="row" width="280"
                                                       style="width:280px;max-width:280px;">
                                                    <tr>
                                                        <td align="left" class="center-text">
                                                            {{--                                                            <img style="width:72px;border:0px;display: inline!important;" src="{{ public_path('./images/logo.png') }}" width="72" border="0" alt="hallo">--}}
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!-- column -->

                                                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->

                                            </td>
                                        </tr>
                                    </table>
                                    <!-- Logo & Webview -->
                                </td>
                            </tr>
                            <tr>
                                <td height="40" style="font-size:40px;line-height:40px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td height="40" style="font-size:20px;line-height:20px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td class="center-text" align="center"
                                    style="font-family:'Figtree',Arial,Helvetica,sans-serif;font-size:24px;line-height:20px;font-weight:600;font-style:normal;color:#fff;text-decoration:none;letter-spacing:0px;">

                                    <div>
                                        Iemand heeft interesse in uw diensten
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td height="100" style="font-size:20px;line-height:20px;">&nbsp;</td>
                            </tr>
                        </table>
                        <!-- Content -->

                    </td>
                </tr>
            </table>

            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%"
                   style="width:100%;max-width:100%;">
                <!-- lotus-footer-2 -->
                <tr>
                    <td align="center" bgcolor="#F7FAFD">
                        <table>
                            <tr>
                                <td height="20"></td>
                            </tr>
                            <tr>
                                <td align="center" class="container-padding">

                                    <!-- Content -->
                                    <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" class="row"
                                           width="580" style="width:580px;max-width:500px;margin: auto">

                                        <tr>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td height="50"></td>
                                        </tr>
                                        <tr>
                                            <td style="padding:10px;font-family:'Figtree',Arial,Helvetica,sans-serif;font-size:16px;line-height:20px;font-weight:400;font-style:normal;color:#0F204D;text-decoration:none;letter-spacing:0px;">
                                                <b>Aangemaakt op</b>
                                            </td>
                                            <td style="padding:10px;font-family:'Figtree',Arial,Helvetica,sans-serif;font-size:16px;line-height:20px;font-weight:400;font-style:normal;color:#0F204D;text-decoration:none;letter-spacing:0px;">
                                                <span>
                                                    <b>{{ \Carbon\Carbon::make($data['created_at'])->format('d/m/Y') }}</b>
                                                    - {{ \Carbon\Carbon::make($data['created_at'])->format('H:i') }}
                                                </span>
                                            </td>
                                        </tr>
                                        @if($data['email'])
                                            <tr>
                                                <td style="padding:10px;font-family:'Figtree',Arial,Helvetica,sans-serif;font-size:16px;line-height:20px;font-weight:400;font-style:normal;color:#0F204D;text-decoration:none;letter-spacing:0px;">
                                                    <b>E-mailadres</b>
                                                </td>
                                                <td style="padding:10px;font-family:'Figtree',Arial,Helvetica,sans-serif;font-size:16px;line-height:20px;font-weight:400;font-style:normal;color:#0F204D;text-decoration:none;letter-spacing:0px;">
                                                    <span>{{ $data['email'] }}</span>
                                                </td>
                                            </tr>
                                        @endif
                                        <tr>
                                            <td height="50"></td>
                                        </tr>
                                    </table>
                                    <!-- Content -->

                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

            </table>

        </td>
    </tr><!-- Outer-Table -->
</table>

</body>
</html>

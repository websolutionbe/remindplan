<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta content="{{ url()->current() }}" property="og:url"/>
    <meta property="og:type" content="website">
    <link rel="canonical" href="{{ url()->current() }}" />
    <meta content="summary_large_image" name="twitter:card">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="manifest" href="/manifest.webmanifest">
    <script src="/build/registerSW.js"></script>
    @if(config('client.google_fonts'))<link href="{{ config('client.google_fonts_url') }}" rel="stylesheet">@endif
    @vite(['resources/scss/app.scss'])
    @inertiaHead
    @routes
    <script defer>
        Ziggy.url = '{{ env('APP_URL') }}'
    </script>
    <script>
        if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners')
    </script>
    @if(app()->environment('production'))
    <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-PHN6CGG"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'GTM-PHN6CGG');
    </script>
    @endif
    @vite(['resources/js/app.js'])

</head>
<body>
    @inertia


</body>
</html>

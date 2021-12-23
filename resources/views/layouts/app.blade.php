<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>OHNE PUNK UND KOMA</title>
    <meta name="description" content="OHNE PUNK UND KOMA">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Wallpoet&display=swap" rel="stylesheet">

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.2/dist/alpine.min.js" defer></script>
    @livewireStyles
</head>
<body class="leading-normal tracking-normal text-punk-dark bg-punk-light dark:text-punk-light dark:bg-punk-dark h-screen">
<div id="page_content" class="">
    {{$slot}}
</div>
@livewireScripts
</body>
</html>

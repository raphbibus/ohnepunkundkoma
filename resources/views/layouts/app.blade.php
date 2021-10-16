<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>OHNE PUNK UND KOMA</title>
    <meta name="description" content="OHNE PUNK UND KOMA">

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.2/dist/alpine.min.js" defer></script>
    @livewireStyles
</head>
<body class="leading-normal tracking-normal text-white bg-black h-screen">
<div id="page_content" class="">
    {{$slot}}
</div>
@livewireScripts
</body>
</html>

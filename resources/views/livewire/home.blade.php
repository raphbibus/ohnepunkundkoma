<div>
    <div class="container max-w-4xl mx-auto text-center my-12 p-12 shadow-xl rounded-lg">
        <h1 class="text-6xl font-display text-punk-pink">
            OHNE
        </h1>
        <img class="w-96 mx-auto" src="{{config('app.url')}}/img/logo-trans-small.png">
        <h1 class="text-6xl font-display text-punk-pink">
            PUNK UND KOMA
        </h1>
        <p class="font-mono my-3">
            Der Podcast mit Domi &amp; Ralph
        </p>
    </div>
    <div class="container max-w-4xl mx-auto text-center my-12 p-12 shadow-xl rounded-lg">
        <h2 class="text-4xl font-display text-punk-pink">
            EPISODEN
        </h2>
        <div class="grid grid-cols-1 my-12 text-left">
            @foreach($episodes as $episode)
                <div class="py-6">
                    <x-headline :title="$episode->title"></x-headline>
                    <x-description :description="$episode->description"></x-description>
                    <x-listen :links="$episode->links"></x-listen>
                </div>
            @endforeach
        </div>
    </div>
    <div class="container max-w-4xl mx-auto text-center my-12 p-12 shadow-xl rounded-lg">
        <h2 class="text-4xl font-display text-punk-pink">
            ÜBER UNS
        </h2>
    </div>
</div>

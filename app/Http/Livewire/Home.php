<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Home extends Component
{
    public function render()
    {
        return view('livewire.home', ['episodes' => $this->getEpisodes()]);
    }

    private function getEpisodes()
    {
        $episodes = file_get_contents("episodes.json");
        return json_decode($episodes);
    }
}

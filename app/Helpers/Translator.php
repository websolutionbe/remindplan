<?php

use App\Models\Translation;
use Illuminate\Support\Facades\Cache;

function translations() {
    if(
        !Cache::has('translations')
        || Translation::orderBy('updated_at','desc')->first()->updated_at->toDateTimeString() !== Cache::get('last_update')
    ){

        $translations = Translation::all()->values()->all();
        Cache::put('last_update', Translation::orderBy('updated_at','desc')->first()->updated_at->toDateTimeString());
        Cache::put('translations', $translations);
        return $translations;
    }

    return Cache::get('translations');

}

function __t(string $key): string
{
    if(Cache::has('translations')){
        $translations = collect(Cache::get('translations'));
        $translation = $translations->where('key', $key)->first();

        if($translation){
            return $translation->{'value_' . app()->getLocale()} ?? $translation->key;
        }
    }

    Translation::create([
        'key' => $key
    ]);

    Cache::put('translations',Translation::all()->values()->all());

    return $key;
}

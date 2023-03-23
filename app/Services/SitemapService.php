<?php

namespace App\Services;

use App\Models\Page;

class SitemapService
{
    public function indexed()
    {
        return array_filter(array_map(function($page){
            return !$page->seo->no_index ? $page : null;
        }, Page::all()->values()->all()));
    }
}

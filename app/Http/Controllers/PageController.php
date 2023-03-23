<?php

namespace App\Http\Controllers;

use App\Models\Block;
use App\Models\Category;
use App\Models\Faq;
use App\Models\Page;
use App\Models\SeoMetaTag;
use App\Models\Service;
use App\Models\Testimonial;
use App\Models\User;
use App\Services\SitemapService;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class PageController extends Controller
{
    public function __construct()
    {
        Inertia::share('translations', translations());
        Inertia::share('locale', app()->getLocale());
    }

    public function dashboard()
    {
        $page = Page::where('key', 'dashboard')->first();
        $meta = $page->seo;
        $categories = Category::all()
            ->where('group_id', auth()->user()->group->id);;

        return Inertia::render('Dashboard', [
            'meta' => $meta,
            'categories' => $categories
        ]);
    }

    public function group()
    {
        $page = Page::where('key', 'group')->first();
        $meta = $page->seo;
        $users = User::where('group_id', auth()->user()->group->id)->get();

        return Inertia::render('Group', [
            'meta' => $meta,
            'users' => $users
        ]);
    }

    public function category(string $slug)
    {
        $category = Category::
            where('group_id', auth()->user()->group->id)
            ->where('slug_' . app()->getLocale(), $slug)->first();

        $page = Page::where('key', 'category.' . $category->key  )->first();
        $meta = $page->seo;

        return Inertia::render('Category', [
            'meta' => $meta,
            'category' => $category,
        ]);
    }

    public function settings()
    {
        $page = Page::where('key', 'settings' )->first();
        $meta = $page->seo;

        return Inertia::render('Settings', [
            'meta' => $meta,
        ]);
    }

    public function categorySettingsIndex()
    {
        $page = Page::where('key', 'settings.categories' )->first();
        $meta = $page->seo;
        $categories = Category::where('group_id', auth()->user()->group->id)->get();

        return Inertia::render('CategorySettings', [
            'meta' => $meta,
            "categories" => $categories
        ]);
    }

    public function categorySettings(string $slug)
    {
        $category = Category::
            where('group_id', auth()->user()->group->id)
            ->where('slug_' . app()->getLocale(), $slug)->first();

        $page = Page::where('key', 'settings.category' )->first();
        $meta = $page->seo;

        return Inertia::render('CategoryConfiguration', [
            'meta' => $meta,
            "category" => $category
        ]);
    }

    public function login()
    {
        $page = Page::where('key', 'login')->first();
        $meta = $page->seo;

        return Inertia::render('Login', [
            'meta' => $meta,
        ]);
    }

    public function sitemap(SitemapService $sitemapService)
    {
        return response()->view('pages.sitemap', [
            'pages' => $sitemapService->indexed(),
        ])->header('Content-Type', 'text/xml');
    }

    // Generated methods


    //
}

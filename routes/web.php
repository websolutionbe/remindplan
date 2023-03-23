<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::controller(PageController::class)->middleware(['web', 'auth'])->group(function () {
    Route::get('/', function (){
        return redirect()->route('dashboard');
    });

    Route::get('/overzicht', 'dashboard')->name('dashboard');
    Route::get('/categorie/{slug}', 'category')->name('category');
    Route::get('/groep', 'group')->name('group');
    Route::get('/instellingen', 'settings')->name('settings');
    Route::get('/instellingen/categorie', 'categorySettingsIndex')->name('settings.categories');
    Route::get('/instellingen/categorie/{slug}', 'categorySettings')->name('settings.category');

    Route::get('/sitemap.xml', 'sitemap')->name('sitemap');
});

Route::get('/login', [PageController::class, 'login'])->name('login');
Route::controller(AuthController::class)->group(function () {
    Route::post('/login', 'login')->name('login.post');
    Route::post('/logout', 'logout')->name('logout.post');
});



<?php

use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Async Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('async/translation', [AppController::class, 'translation']);
Route::post('async/submission', [AppController::class, 'submission']);
Route::get('async/tasks/{id}', [AppController::class, 'index'])->name('task.index');
Route::post('async/update-task', [AppController::class, 'update'])->name('task.update');
Route::get('async/progress/{id}', [AppController::class, 'progress'])->name('progress');
Route::post('async/task/create', [AppController::class, 'create'])->name('task.create');
Route::post('async/task/delete', [AppController::class, 'delete'])->name('task.delete');


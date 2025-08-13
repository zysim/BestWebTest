<?php

use App\Http\Controllers\ProductController;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::permanentRedirect('/', 'dashboard')->name('home');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['web', 'throttle:60,1'])
    ->name('products.')
    ->group(function () {
        Route::get('/products', [ProductController::class, 'index'])->name('index');
        Route::get('/products/new', function () {
            return Inertia::render('products/Store');
        })->name('store');
        Route::get('/products/{product}', [ProductController::class, 'show'])->name('show');
        Route::get('/products/{product}/edit', function (Product $product) {
            return Inertia::render('products/Update', ['product' => new ProductResource($product)]);
        })->name('update');
    });

Route::middleware(['web', 'throttle:60,1'])
    ->prefix('api')
    ->name('admin.products.')
    ->group(function () {
        Route::controller(ProductController::class)->group(function () {
            Route::get('/products', 'index')->name('index');
            Route::get('/products/{product}', 'show')->name('show');
            Route::post('/products', 'store')->name('store');
            Route::put('/products/{product}', 'update')->name('update');
            Route::delete('/products/{product}', 'destroy')->name('destroy');
        });
    });

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

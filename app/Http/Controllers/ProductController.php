<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the products.
     */
    public function index(Request $request)
    {
        $categoryId = $request->query('categoryId');
        $collection = Product::latest('updated_at')
                ->with('category')
                ->when($categoryId, function (Builder $query, string $categoryId) {
                    return $query->where('category_id', intval($categoryId));
                })
                ->paginate(config('app.paginate'))
                ->through(fn ($product) => new ProductResource($product));

        return Inertia::render('products/Index', ['products' => $collection, 'categoryId' => $categoryId]);
    }

    /**
     * Store a newly created product in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $validated = $request->validated();
        $product = new Product($validated);
        $product->description = $validated['description'] ?? '-';
        $product->category_id = $validated['category_id'];
        $product->price = $validated['price'];
        $product->stock = $validated['stock'];
        $product->save();
        return to_route('products.index', ['categoryId' => $product->category_id]);
    }

    /**
     * Display the specified product.
     */
    public function show(Product $product)
    {
        return Inertia::render('products/Show', ['product' => new ProductResource($product)]);
    }

    /**
     * Update the specified product in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $validated = $request->validated();
        $product = Product::where('id', $product->id)->firstOrFail();
        $product->update($validated);
        $product->description = $validated['description'] ?? '-';
        $product->category_id = $validated['category_id'];
        $product->price = $validated['price'];
        $product->stock = $validated['stock'];
        $product->save();
        return to_route('products.show', ['product' => $product]);
    }

    /**
     * Remove the specified product from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return to_route('products.index');
    }
}

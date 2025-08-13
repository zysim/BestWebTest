<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GetProductTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_see_product()
    {
        $category = Category::factory()
            ->hasProducts(1)
            ->create();
        $product = $category->products->first();

        $response = $this->get("/products/$product->id");
        $response->assertStatus(200);
    }
}

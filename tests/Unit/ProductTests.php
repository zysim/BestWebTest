<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductTests extends TestCase
{
    use RefreshDatabase;

    public function test_product_can_be_fetched()
    {
        $category = Category::factory()
            ->hasProducts(1)
            ->create();
        $product = $category->products->first();

        $this->assertTrue($product->id !== null);
    }
}

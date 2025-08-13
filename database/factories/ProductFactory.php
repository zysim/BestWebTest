<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\=Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'created_at' => now(),
            'updated_at' => now(),
            // [RM.50, RM100]
            'price' => fake()->numberBetween(1, 200) * 50,
            'stock' => fake()->numberBetween(0, 100),
            'name' => fake()->word(),
        ];
    }
}

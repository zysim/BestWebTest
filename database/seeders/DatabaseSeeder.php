<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create non-admins
        User::factory(3)->create();

        if (User::where('name', '=', 'Admin User')->doesntExist()) {
            User::factory()->create([
                'name' => 'Admin User',
                'email' => 'admin@bestweb.com',
                'role' => 'administrator'
            ]);
        }

        if (Category::doesntExist()) {
            Category::factory(6)
                ->has(
                    Product::factory(12)
                        ->sequence(fn (Sequence $sequence) => [
                            'name' => "Product $sequence->index",
                            'enabled' => rand(1, 2) === 1 ? 1 : 0,
                        ])
                )
                ->sequence(fn (Sequence $sequence) => ['name' => "Category $sequence->index"])
                ->create();
        }
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes('deleted_at');
            $table->string('name')->nullable(false);
            $table->string('description')->default('-')->comment('Defaults to \'-\'.');
            $table->integer('price')->unsigned()->default(0)->comment('Price in sen. Defaults to 0.');
            $table->integer('stock')->default(0)->comment('Defaults to 0. Can be negative.');
            $table->boolean('enabled')->default(false);
        });

        Schema::create('categories', function (Blueprint $table) {
            $table->comment('A category products belong to. A product won\'t be in more than one category.');
            $table->id();
            $table->timestamps();
            $table->softDeletes('deleted_at');
            $table->string('name')->nullable(false);
        });

        Schema::table('products', function (Blueprint $table) {
            $table->foreignId('category_id')->constrained()->noActionOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
        });

        Schema::dropIfExists('products');
        Schema::dropIfExists('categories');
    }
};

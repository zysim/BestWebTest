<?php

namespace App\Http\Resources;

use App\Http\Resources\CategoryResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Number;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'deletedAt' => $this->deleted_at ?? '-',
            'name' => $this->name,
            'description' => $this->description,
            'price' => Number::currency($this->price / 100, in: 'MYR', locale: 'ms'),
            'stock' => $this->stock,
            'enabled' => $this->enabled,
            'category' => new CategoryResource($this->category)
        ];
    }
}

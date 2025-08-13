<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // TODO: Define an auth guard
        return $this->user()->is_admin;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|max:255',
            'description' => 'nullable',
            'category_id' => 'exists:categories,id',
            'price' => 'nullable|integer|min:0',
            'stock' => 'nullable|integer|min:0',
            'enabled' => 'boolean',
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'category_id' => intval($this->categoryId),
        ]);
    }
}

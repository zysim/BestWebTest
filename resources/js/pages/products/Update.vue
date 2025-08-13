<script setup lang="ts">
import Heading from '@/components/Heading.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Head, router } from '@inertiajs/vue3';
import { defineProps, reactive } from 'vue';

interface Product {
    data: {
        id: number,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date,
        name: string,
        description: string | null,
        price: string,
        stock: number,
        enabled: boolean,
        category: {
            id: number,
            name: string,
        },
    }
}

interface UpdateProductRequest {
    name?: string,
    description?: string,
    categoryId?: number,
    price?: number,
    stock?: number,
}

const props = defineProps<{
    product: Product,
    errors: UpdateProductRequest,
}>()

const form = reactive<UpdateProductRequest>({
    name: props.product.data.name,
    description: props.product.data.description ?? undefined,
    categoryId: props.product.data.category.id,
    price: parseFloat(props.product.data.price.replace(/^.+?(\d+\.\d{2})$/, '$1')) * 100,
    stock: props.product.data.stock,
})

function submit() {
    router.put(`/api/products/${props.product.data.id}`, form)
}
</script>

<template>
    <Head title="Update Product" />

    <Heading title="Update Product" />

    <form @submit.prevent="submit" class="flex flex-col gap-1">
        <Label for="name">Name:</Label>
        <Input id="name" v-model="form.name" maxlength="255" />
        <div v-if="props.errors.name">{{ props.errors.name }}</div>
        <Label for="description">Description:</Label>
        <Input id="description" v-model="form.description" />
        <div v-if="props.errors.description">{{ props.errors.description }}</div>
        <Label for="category-id">Category ID:</Label>
        <Input id="category-id" v-model="form.categoryId" />
        <div v-if="props.errors.categoryId">{{ props.errors.categoryId }}</div>
        <Label for="category-id">Price (in sen):</Label>
        <Input id="category-id" v-model="form.price" type="number" min="0" />
        <div v-if="props.errors.price">{{ props.errors.price }}</div>
        <Label for="category-id">Stock:</Label>
        <Input id="category-id" v-model="form.stock" type="number" min="0" />
        <div v-if="props.errors.stock">{{ props.errors.stock }}</div>
        <Button variant="default">Submit</Button>
    </form>
</template>

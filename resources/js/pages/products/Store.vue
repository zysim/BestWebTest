<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Head, router } from '@inertiajs/vue3';
import { defineProps, reactive } from 'vue';

interface StoreProductRequest {
    name?: string,
    description?: string,
    categoryId?: number,
    price?: number,
    stock?: number,
}

const props = defineProps<{
    errors: StoreProductRequest,
}>()

const form = reactive<StoreProductRequest>({
    name: undefined,
    description: undefined,
    categoryId: undefined,
    price: undefined,
    stock: undefined,
})

function submit() {
    router.post('/api/products', form)
}
</script>

<template>
    <Head title="Create New Product" />

    <form @submit.prevent="submit">
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

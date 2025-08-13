<script setup lang="ts">
import Icon from '@/components/Icon.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';

interface Paginated<T> {
    data: { data: T }[],
    current_page: number,
    from: number,
    last_page: number,
    links: {
        label: string,
        active: boolean,
        url: string | null,
    }[],
    path: string,
    per_page: number,
    to: number,
    total: number,
}

interface Product {
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

function addCategoryIdToUrl(from: string) {
    if (props.categoryId === null) return from;
    const url = new URL(from)
    const query = url.searchParams
    query.append('categoryId', props.categoryId.toString(10))
    return url.toString()
}

const props = defineProps<{
    products: Paginated<Product>,
    categoryId: number | null,
}>()

const categoryId = ref<string>(props.categoryId === null ? '' : props.categoryId.toString(10))

function updateCategoryFilter() {
    if (categoryId.value === null) return
    const params = new URLSearchParams(location.search)
    params.append('categoryId', categoryId.value)
    location.search = params.toString()
}
</script>

<template>
    <Head title="Products" />

    <div class="flex justify-between">
        <a :href="route('products.store')">
            <Button variant="default"><Icon name="plus" />New</Button>
        </a>
        <form @submit.prevent="updateCategoryFilter" class="flex justify-between">
            <Label for="category-id">Filter by Category:</Label>
            <Input id="category-id" v-model="categoryId" />
        </form>
    </div>


    <div class="grid grid-cols-3 gap-1 bg-background">
        <a v-for="{ data: product } in props.products.data" :key="product.id" :href="route('products.show', { product })">
            <div class="p-2 border border-border bg-background min-h-[200px] hover:scale-105 hover:shadow-lg motion-safe:transition-transform">
                <div :class="product.enabled ? 'text-green-500' : 'text-foreground/80'">
                    {{ product.enabled ? 'Enabled' : 'Disabled' }}
                </div>
                <h1 class="font-bold text-lg">{{ product.name }}</h1>
                <h3 class="text-foreground/80">{{ product.category.name }}</h3>
                <div class="flex justify-between">
                    <div>{{ product.price }}</div>
                    <div>Stock: {{ product.stock }}</div>
                </div>
            </div>
        </a>
    </div>
    <template v-for="link in props.products.links">
        <a v-if="link.url !== null" :href="addCategoryIdToUrl(link.url)" :key="link.url">
            <Button :disabled="link.active" variant="link"><span v-html="link.label" /></Button>
        </a>
    </template>
</template>

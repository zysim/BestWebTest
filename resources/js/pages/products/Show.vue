<script setup lang="ts">
import DeleteProduct from '@/components/DeleteProduct.vue';
import Heading from '@/components/Heading.vue';
import Icon from '@/components/Icon.vue';
import { Button } from '@/components/ui/button';
import { Head } from '@inertiajs/vue3';
import { defineProps } from 'vue';

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

const props = defineProps<{
    product: Product
}>()
</script>

<template>
    <Head title="New Product" />

    <Heading title="Create New Product" />

    <div class="flex justify-between m-1">
        <a :href="route('products.update', { product: props.product.data })">
            <Button variant="default"><Icon name="pencil" />Edit</Button>
        </a>
        <DeleteProduct :product-id="props.product.data.id" />
    </div>

    <table>
        <tr>
            <td class="capitalize py-0.5">ID:</td>
            <td class="pl-4">{{ props.product.data.id }}</td>
        </tr>
        <tr>
            <td class="capitalize py-0.5">name:</td>
            <td class="pl-4">{{ props.product.data.name }}</td>
        </tr>
        <tr>
            <td class="capitalize py-0.5">description:</td>
            <td class="pl-4">{{ props.product.data.description }}</td>
        </tr>
        <tr>
            <td class="capitalize py-0.5">createdAt:</td>
            <td class="pl-4">{{ props.product.data.createdAt }}</td>
        </tr>
        <tr>
            <td class="capitalize py-0.5">updatedAt:</td>
            <td class="pl-4">{{ props.product.data.updatedAt }}</td>
        </tr>
        <tr>
            <td class="capitalize py-0.5">deletedAt:</td>
            <td class="pl-4">{{ props.product.data.deletedAt }}</td>
        </tr>
        <tr>
            <td class="capitalize py-0.5">price:</td>
            <td class="pl-4">{{ props.product.data.price }}</td>
        </tr>
        <tr>
            <td class="capitalize py-0.5">stock:</td>
            <td class="pl-4">{{ props.product.data.stock }}</td>
        </tr>
        <tr>
            <td class="capitalize py-0.5">enabled:</td>
            <td class="pl-4">{{ props.product.data.enabled }}</td>
        </tr>
        <tr>
            <td class="capitalize py-0.5">category id:</td>
            <td class="pl-4">{{ props.product.data.category?.id }}</td>
        </tr>
        <tr>
            <td class="capitalize py-0.5">category name:</td>
            <td class="pl-4">{{ props.product.data.category?.name }}</td>
        </tr>
    </table>
</template>

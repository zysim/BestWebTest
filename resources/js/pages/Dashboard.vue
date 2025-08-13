<script setup lang="ts">
import Icon from '@/components/Icon.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
            <div>
                Please click on the Products page on the left.
            </div>
            <div class="flex gap-1">
                <Icon name="cornerDownLeft" />
                <Icon name="cornerDownLeft" />
                <Icon name="cornerDownLeft" />
            </div>
        </div>
    </AppLayout>
</template>

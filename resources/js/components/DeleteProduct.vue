<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { router } from '@inertiajs/vue3';
import Icon from './Icon.vue';

const props = defineProps<{
    productId: number,
}>()

function deleteProduct() {
    router.delete(`/api/products/${props.productId}`)
};

</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <Button variant="destructive"><Icon name="trash" />Delete</Button>
        </DialogTrigger>
        <DialogContent>
            <form method="POST" class="space-y-6" @submit.prevent="deleteProduct">
                <DialogHeader class="space-y-3">
                    <DialogTitle>Are you sure you want to delete this product?</DialogTitle>
                    <DialogDescription>
                        This action is undoable, but you will need to contact the DB admin to restore this product.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter class="gap-2">
                    <DialogClose as-child>
                        <Button variant="secondary">Cancel</Button>
                    </DialogClose>

                    <Button type="submit" variant="destructive">Delete</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
</template>

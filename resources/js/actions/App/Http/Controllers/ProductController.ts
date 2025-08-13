import { queryParams, type QueryParams } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:18
* @route '/products'
*/
const indexcdff108606cb7e4bb2af83e29c4f29fb = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: indexcdff108606cb7e4bb2af83e29c4f29fb.url(options),
    method: 'get',
})

indexcdff108606cb7e4bb2af83e29c4f29fb.definition = {
    methods: ['get','head'],
    url: '/products',
}

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:18
* @route '/products'
*/
indexcdff108606cb7e4bb2af83e29c4f29fb.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return indexcdff108606cb7e4bb2af83e29c4f29fb.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:18
* @route '/products'
*/
indexcdff108606cb7e4bb2af83e29c4f29fb.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: indexcdff108606cb7e4bb2af83e29c4f29fb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:18
* @route '/products'
*/
indexcdff108606cb7e4bb2af83e29c4f29fb.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: indexcdff108606cb7e4bb2af83e29c4f29fb.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:18
* @route '/api/products'
*/
const index82e333440dedef89b2584483dca1af53 = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index82e333440dedef89b2584483dca1af53.url(options),
    method: 'get',
})

index82e333440dedef89b2584483dca1af53.definition = {
    methods: ['get','head'],
    url: '/api/products',
}

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:18
* @route '/api/products'
*/
index82e333440dedef89b2584483dca1af53.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index82e333440dedef89b2584483dca1af53.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:18
* @route '/api/products'
*/
index82e333440dedef89b2584483dca1af53.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index82e333440dedef89b2584483dca1af53.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:18
* @route '/api/products'
*/
index82e333440dedef89b2584483dca1af53.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index82e333440dedef89b2584483dca1af53.url(options),
    method: 'head',
})

export const index = {
    '/products': indexcdff108606cb7e4bb2af83e29c4f29fb,
    '/api/products': index82e333440dedef89b2584483dca1af53,
}

/**
* @see \App\Http\Controllers\ProductController::show
* @see app/Http/Controllers/ProductController.php:50
* @route '/products/{product}'
*/
const showcaa0d70943fe3075e514fef02e3dee84 = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: showcaa0d70943fe3075e514fef02e3dee84.url(args, options),
    method: 'get',
})

showcaa0d70943fe3075e514fef02e3dee84.definition = {
    methods: ['get','head'],
    url: '/products/{product}',
}

/**
* @see \App\Http\Controllers\ProductController::show
* @see app/Http/Controllers/ProductController.php:50
* @route '/products/{product}'
*/
showcaa0d70943fe3075e514fef02e3dee84.url = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return showcaa0d70943fe3075e514fef02e3dee84.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::show
* @see app/Http/Controllers/ProductController.php:50
* @route '/products/{product}'
*/
showcaa0d70943fe3075e514fef02e3dee84.get = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: showcaa0d70943fe3075e514fef02e3dee84.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::show
* @see app/Http/Controllers/ProductController.php:50
* @route '/products/{product}'
*/
showcaa0d70943fe3075e514fef02e3dee84.head = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: showcaa0d70943fe3075e514fef02e3dee84.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProductController::show
* @see app/Http/Controllers/ProductController.php:50
* @route '/api/products/{product}'
*/
const showd8f0f081ea0596d0e6ef1cab2fc50422 = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: showd8f0f081ea0596d0e6ef1cab2fc50422.url(args, options),
    method: 'get',
})

showd8f0f081ea0596d0e6ef1cab2fc50422.definition = {
    methods: ['get','head'],
    url: '/api/products/{product}',
}

/**
* @see \App\Http\Controllers\ProductController::show
* @see app/Http/Controllers/ProductController.php:50
* @route '/api/products/{product}'
*/
showd8f0f081ea0596d0e6ef1cab2fc50422.url = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return showd8f0f081ea0596d0e6ef1cab2fc50422.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::show
* @see app/Http/Controllers/ProductController.php:50
* @route '/api/products/{product}'
*/
showd8f0f081ea0596d0e6ef1cab2fc50422.get = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: showd8f0f081ea0596d0e6ef1cab2fc50422.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::show
* @see app/Http/Controllers/ProductController.php:50
* @route '/api/products/{product}'
*/
showd8f0f081ea0596d0e6ef1cab2fc50422.head = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: showd8f0f081ea0596d0e6ef1cab2fc50422.url(args, options),
    method: 'head',
})

export const show = {
    '/products/{product}': showcaa0d70943fe3075e514fef02e3dee84,
    '/api/products/{product}': showd8f0f081ea0596d0e6ef1cab2fc50422,
}

/**
* @see \App\Http\Controllers\ProductController::store
* @see app/Http/Controllers/ProductController.php:35
* @route '/api/products'
*/
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '/api/products',
}

/**
* @see \App\Http\Controllers\ProductController::store
* @see app/Http/Controllers/ProductController.php:35
* @route '/api/products'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::store
* @see app/Http/Controllers/ProductController.php:35
* @route '/api/products'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProductController::update
* @see app/Http/Controllers/ProductController.php:58
* @route '/api/products/{product}'
*/
export const update = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put'],
    url: '/api/products/{product}',
}

/**
* @see \App\Http\Controllers\ProductController::update
* @see app/Http/Controllers/ProductController.php:58
* @route '/api/products/{product}'
*/
update.url = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return update.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::update
* @see app/Http/Controllers/ProductController.php:58
* @route '/api/products/{product}'
*/
update.put = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ProductController::destroy
* @see app/Http/Controllers/ProductController.php:74
* @route '/api/products/{product}'
*/
export const destroy = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/api/products/{product}',
}

/**
* @see \App\Http\Controllers\ProductController::destroy
* @see app/Http/Controllers/ProductController.php:74
* @route '/api/products/{product}'
*/
destroy.url = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return destroy.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::destroy
* @see app/Http/Controllers/ProductController.php:74
* @route '/api/products/{product}'
*/
destroy.delete = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const ProductController = { index, show, store, update, destroy }

export default ProductController
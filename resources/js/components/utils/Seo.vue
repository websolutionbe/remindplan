<template>
    <Head>
        <title>{{ meta.title }} | {{ meta.default_title }}</title>
        <meta name="robots" :content="meta['no_index'] ? 'noindex' : 'all,index,follow'">
        <link rel="icon" :href="imagePath('favicon.svg')">
        <meta name="description" :content="meta.description">
        <meta :content="meta.title ?? meta.default_title" property="og:title">
        <meta :content="meta.description" property="og:description">
        <meta :content="imagePath('share-image.png')" property="og:image">

        <meta :content="meta.title || meta.default_title" property="twitter:title">
        <meta :content="meta.description" property="twitter:description">
    </Head>
</template>

<script>
export default {
    name: "Seo",
    props: {
        meta: {type: Object, required: true}
    },
}
</script>

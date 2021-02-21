<template>
    <div class="tracker-preview">
        <p v-text="tracker.name"></p>
        <p v-text="tracker.url"></p>
    </div>
</template>

<script>
export default {
    name: 'tpTrackerPreview',
    props: {
        tracker: {
            type: Object,
            required: true
        }
    }
}
</script>
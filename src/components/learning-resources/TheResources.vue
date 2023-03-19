<template>
    <base-card>
        <buttons-style @click="setSelectedTab('stored-resources')">
            Stored Resources
        </buttons-style>
        <button-style @click="setSelectedTab('add-resource')">
            Add resources
        </button-style>
    </base-card>
</template>

<script>
import ButtonsStyle from '@/components/UI/ButtonsStyle'

export default {
    components: { ButtonsStyle },
    data() {
        return {
            selectedTab: 'stored-resources',
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        }
    }
}
</script>
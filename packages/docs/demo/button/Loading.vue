<template>
    <div>
        <g-button type="primary" loading>Loading</g-button>
        <g-button type="primary" loading-icon="circle-notch" loading>Loading</g-button>
        <g-button type="primary" loading>
            <template #loading>
                <g-icon style="margin-right: 6px" icon="star" spin />
            </template>
            Loading
        </g-button>
    </div>
</template>
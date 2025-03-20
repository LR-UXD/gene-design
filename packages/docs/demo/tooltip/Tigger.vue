<template>
    <div style="display: flex; gap: 10px;">
        <g-tooltip content="Hello Tooltip" trigger="hover">
            <g-button>Hover Me</g-button>
        </g-tooltip>
        <g-tooltip content="Hello Tooltip" trigger="click">
            <g-button>Click Me</g-button>
        </g-tooltip>
        <g-tooltip content="Hello Tooltip" trigger="contextmenu">
            <g-button>Right Click Me</g-button>
        </g-tooltip>
    </div>
</template>
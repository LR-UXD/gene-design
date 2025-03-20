<template>
    <div style="display: flex; gap: 10px;">
        <g-tooltip content="Hello Tooltip" trigger="hover" disabled>
            <g-button>Hover Me</g-button>
        </g-tooltip>
        <g-tooltip content="Hello Tooltip" trigger="click" disabled>
            <g-button>Click Me</g-button>
        </g-tooltip>
        <g-tooltip content="Hello Tooltip" trigger="contextmenu" disabled>
            <g-button>Right Click Me</g-button>
        </g-tooltip>
    </div>
</template>
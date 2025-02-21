import Button from './Button.vue';
import ButtonGroup from './ButtonGroup.vue';
import { withInstall } from '@gene-design/utils'

export const gButton = withInstall(Button)
export const gButtonGroup = withInstall(ButtonGroup)

export * from "./types";
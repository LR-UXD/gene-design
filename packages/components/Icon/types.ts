import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
    icon: object | Array<string> | string | IconDefinition;
    size?:
    | "2xs"
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x";
    type?: 'primary' | 'secondary' | 'default' | 'text';
    color?: string;
}


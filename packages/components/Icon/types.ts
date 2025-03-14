import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
    icon: object | Array<string> | string | IconDefinition;
    size?: string;
    type?: 'primary' | 'secondary' | 'default' | 'text';
    color?: string;
}


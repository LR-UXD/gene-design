import { type Component, type ComputedRef, type Ref } from "vue";

export type ButtonType = 'primary' | 'secondary' | 'default' | 'text';
export type NativeType = "button" | "reset" | "submit";
export type ButtonSize = "large" | "default" | "small" | "mini";


export interface ButtonProps {
    tag?: string | Component;
    type?: ButtonType;
    size?: ButtonSize;
    nativeType?: NativeType;
    disabled?: boolean;
    loading?: boolean;
    icon?: string;
    circle?: boolean;
    round?: boolean;
    loadingIcon?: string;
    autofocus?: boolean;
    useThrottle?: boolean;
    throttleDuration?: number;

}



export interface ButtonGroupProps {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}

export interface ButtonGroupContext {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}

export interface ButtonEmits { (e: "click", value: MouseEvent): void; }


export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void>;
    disabled: ComputedRef<boolean>;
    size: ComputedRef<string>;
    type: ComputedRef<string>;
}
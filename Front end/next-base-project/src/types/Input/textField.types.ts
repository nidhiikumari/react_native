import { ReactNode } from "react"

export interface TextFields {
    className: string
    type: string
    placeholder: string
    labelClassName: string
    svgChildren?: ReactNode
    value: string | number
    onChange: Function
}

export interface UsersCreds {
    name: string
    email: string
    password: string
}
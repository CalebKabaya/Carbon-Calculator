import { ReactNode } from "react"

export interface AppTab {
    index: number
    label: string
    content: ReactNode
}
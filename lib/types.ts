import { LucideIcon } from "lucide-react"

export type SidebarRoute = {

    title: string,
    url: string,
    icon: LucideIcon|string
}

export type ScrapeResultType = {
    screenshot?: string,
    html?: string
}
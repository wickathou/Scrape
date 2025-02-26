"use client"
import React from 'react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { SidebarRoute } from '@/lib/types'
import { usePathname } from 'next/navigation'
import { Home, Layers2Icon, Settings } from 'lucide-react'

interface SidebarProps {
    extraRoutes?: SidebarRoute[],
}


const sidebarRoutes: SidebarRoute[] = [
    {
        title: "Home",
        url: "home",
        icon: Home,
    },
    {
        title: "Workflows",
        url: "workflows",
        icon: Layers2Icon,
    },
    {
        title: "Settings",
        url: "settings",
        icon: Settings,
    },
]

const AppSidebar: React.FC<SidebarProps> = ({ extraRoutes }) => {
    const currentRoute = usePathname()

    if (extraRoutes && extraRoutes.keys.length>0) {
        sidebarRoutes.push(...extraRoutes)
    }

    console.log(currentRoute)
    
    return (
        <Sidebar>
            <SidebarHeader>
                Scrape
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Available options

                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarRoutes.map(route => (
                                <SidebarMenuItem key={route.title}>
                                    <SidebarMenuButton asChild isActive={currentRoute.includes(route.title.toLowerCase())}>
                                        <a href={`${route.url}`}>
                                            <route.icon />
                                            <span>{route.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>

                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar
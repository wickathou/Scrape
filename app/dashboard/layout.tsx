import AppSidebar from '@/components/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

type DashboardProps = { children: React.ReactNode }


const Layout = (props: DashboardProps) => {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <main className='p-2'>
                <SidebarTrigger />
                {props.children}
            </main>
        </SidebarProvider>
    )
}

export default Layout
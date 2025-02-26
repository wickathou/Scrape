"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const formSchema = z.object({
    targetURL: z.string().url('Not valid URL')
})

export const URLForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:
            { targetURL: '' }
    })
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} onReset={()=>form.reset()}>
                <FormField
                    control={form.control}
                    name='targetURL'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Target URL
                            </FormLabel>
                            <FormControl>
                                <Input placeholder='http://somesite.com' {...field} />
                            </FormControl>
                            <FormDescription>
                                Here you can input the URL you want to scrape
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='flex gap-2'>
                    <Button type='submit'>Add URL</Button>
                    <Button variant={'outline'} type='reset'>Reset</Button>
                </div>
            </form>
        </Form>
    )
}
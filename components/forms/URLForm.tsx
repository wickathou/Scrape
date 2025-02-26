"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ScrapeResultType } from '@/lib/types'

const formSchema = z.object({
    targetURL: z.string().url('Not valid URL')
})



interface ChildComponentProps {
    scrapeResult: React.Dispatch<React.SetStateAction<ScrapeResultType>>;
    setLoading:React.Dispatch<React.SetStateAction<boolean>>
}

export const URLForm: React.FC<ChildComponentProps> = ({ scrapeResult,setLoading }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:
            { targetURL: '' }
    })
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true)
            const response = await fetch('/api/scrape', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ targetURL: values.targetURL }),
            })
            const result = await response.json()
            if (result.success) {
                console.log('Scraping successful:', result.data);
                scrapeResult({
                    screenshot: result.data.screenshot,
                    html: result.data.html
                })
            } else {
                console.error('Scraping failed:', result.error);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} onReset={() => form.reset()}>
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
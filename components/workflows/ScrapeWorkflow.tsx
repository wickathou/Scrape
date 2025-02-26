'use client'
import React, { useState } from 'react'
import BaseCard from '../customCards/BaseCard'
import { URLForm } from '../forms/URLForm'
import { ScrapeResultType } from '@/lib/types'
import { SkeletonCard } from '../customCards/SkeletonCard'
import Image from 'next/image'
import { Button } from '../ui/button'

// type Props = {}


const ScrapeWorkflow = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [scrapeResult, setScrapeResult] = useState<ScrapeResultType>({
        screenshot: '',
        html: ''
    })
    const [extractionResult, setExtractionResult] = useState({})

    const initiateExtration = async (htmlData: string) => {
        try {
            setLoading(true)
            const response = await fetch('/api/extract', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ htmlData }),
            })
            const result = await response.json()
            if (result.success) {
                console.log('Extration successful:', result.data);
                setExtractionResult(result.data)
            } else {
                console.error('Extration failed:', result.error);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false)
        }
    }



    return (
        <div>
            <BaseCard title='Add the URL you want to scrape'>
                <URLForm scrapeResult={setScrapeResult} setLoading={setLoading} />
            </BaseCard>
            {scrapeResult.html && (
                <BaseCard title='Results' description={`${scrapeResult.html.substring(0, 100)}...`}>
                    <>
                        {scrapeResult.screenshot && (
                            <Image src={`data:image/png;base64,${scrapeResult.screenshot}`} alt="Screenshot" width={400} height={300} />
                        )}
                        <Button onClick={() => initiateExtration(scrapeResult.html)}>Extract data</Button>
                    </>
                </BaseCard>
            )}
            {/* {Object.keys(extractionResult).length > 0 && (
                <p>{extractionResult}</p>
            )} */}
            {loading && (<SkeletonCard />)}
        </div>
    )
}

export default ScrapeWorkflow
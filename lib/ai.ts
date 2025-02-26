import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

const client = new OpenAI({apiKey:process.env.OPEN_AI_KEY});

const DataExtrationResult = z.object({
  productName: z.string(),
  price: z.string(),
//   availablity: z.string(),
});

export const extractDataFromHTML = async (rawHTML:string) => {
    const htmlLength = rawHTML.length
    console.log('Lenght of rawHTML')
    console.log(htmlLength)
    const lowerTrimLength = Math.ceil(htmlLength*0.15)
    const higherTrimLength = Math.floor(htmlLength*0.5)
    console.log('Trim limits for string')
    console.log({
        lowerTrimLength,higherTrimLength
    })
    let shortenRawHTML:string
    if (higherTrimLength - lowerTrimLength > 200000) {
        shortenRawHTML = rawHTML.substring(lowerTrimLength, lowerTrimLength+200000)
    } else {
        shortenRawHTML = rawHTML.substring(lowerTrimLength,higherTrimLength)
    }
    console.log('Lenght of shortRawHTML')
    console.log(shortenRawHTML.length)
    const completion = await client.beta.chat.completions.parse({
      model: "gpt-4o-mini-2024-07-18",
      messages: [
        { role: "system", content: "You are purchasing and sourcing specialist, extract the product name and the price information from the raw HTML provided. If the data is not clear, set productName and price to 'unknown'" },
        { role: "user", content: shortenRawHTML },
        // { role: "user", content: '<div><h2>Rivets, pack of 10</h2><p>Price: <span>$10</span></p></div>' },
      ],
      response_format: zodResponseFormat(DataExtrationResult, "product"),
    });
    console.log('EXTRACTION DATA RESULT')
    console.log(completion)
    const dataExtracted = completion.choices[0].message.parsed;
    console.log(dataExtracted)
    return dataExtracted
}
import { getBrowser } from "./getBrowser"

export async function savePDF(url: string) {
  
    const browser = await getBrowser()
    const page = await browser.newPage()
  
    await page.goto(url, { waitUntil: "networkidle2" })
    
    return await page.pdf({format: "a4"})
  }

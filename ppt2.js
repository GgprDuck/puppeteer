const puppeteer = require('puppeteer');

(async() =>{
    const browser = await puppeteer.launch({ headless: false });
    try{
        const page = await browser.newPage();
        await page.goto('https://pptr.dev/');
        await page.evaluate(() => { document.querySelector('#__docusaurus > nav').style.backgroundColor = '#1F54C0'; });
        await page.waitForTimeout(3000);
        await page.screenshot({path: 'blue.png'})
    }
    catch(error){
        await browser.close();
    }
    finally{
        await browser.close();
    }
})();
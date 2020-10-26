const puppeteer = require('puppeteer')
const readlineSync = require('readline-sync')

async function robo() {
    const browser = await puppeteer.launch({
        headless: true
    });

    const page = await browser.newPage();
    const moedaBase = readlineSync.question('Informe a moeda base para conversão: ') || 'dolar'
    const moedaFinal = readlineSync.question('Informe a moeda final: ') || 'real'
    const qualquerULR = `https://www.google.com/search?biw=1920&bih=985&sxsrf=ALeKk001NRjqQi1e-uWFdC37z7BluQuW0Q%3A1603721611481&ei=i9mWX9bjHNjY5OUP2OW08Aw&q=${moedaBase}+para+${moedaFinal}&oq=dollar+para+&gs_lcp=CgZwc3ktYWIQAxgAMgkIABAKEEYQggIyBggAEAoQAzIHCAAQsQMQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjoHCAAQRxCwAzoHCCMQ6gIQJ1DT7yNYoJokYJipJGgDcAB4A4ABhQaIAbsUkgEJMC4zLjUtMS4ymAEAoAEBqgEHZ3dzLXdperABCsgBCMABAQ&sclient=psy-ab`
    await page.goto(qualquerULR);
     
    const resultado = await page.evaluate(() => {
        return valor = document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value
      });

    console.log(`O valor de 1 ${moedaBase} convertido para ${moedaFinal} é ${resultado} `)
    await browser.close();
}

robo()
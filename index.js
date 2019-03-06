const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless:false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080});
  await page.goto('http://wf-dev-root.s3-website.ap-south-1.amazonaws.com/ci/account/166');
  await page.waitFor(5000);
  await page.click('#login-form > div:nth-child(1) > input');
  await page.type('#login-form > div:nth-child(1) > input','sudhir@workplacefabric.com');
  await page.click('#login-form > div:nth-child(2) > input');
  await page.type('#login-form > div:nth-child(2) > input','Sk@7654627171');
  await page.click('#login-form > div.row > div.col-xs-4 > button');
  await page.waitFor(9000);
  await page.screenshot({path: 'loginPage.png'});

   

  await page.click('#side-menu-container > ul > li:nth-child(5) > a');
  await page.waitFor(5000);
  await page.screenshot({path: 'analytics.png'});
  
  await page.waitFor(5000);
  await page.click('#side-menu-container > ul > li.active > ul > li:nth-child(3) > a');
  
  await page.waitFor(5000);
  //
  await page.click('#users-data-body > tr:nth-child(102) > td.text-center > span');
  
  await page.waitFor(5000);
  await page.screenshot({path: 'wpf.png'});
  await page.waitFor(5000);
  await page.click('#side-menu-container > ul > li:nth-child(4) > a');
  
  await page.waitFor(5000);
  
  await page.click('#side-menu-container > ul > li.active > ul > li > ul > li:nth-child(1) > a');///spacial
  await page.waitFor(5000);
  await page.select('#locationId','1578'); //k-mil- 6 th floor 
  await page.waitFor(8000);
  /*
  await page.waitFor(5000);
  await page.select('#maxtime'); 
  
  await page.waitFor(5000);
  await page.select('#morningtime'); 
  
  await page.waitFor(5000);
  
  await page.select('#eveningtime'); 

  */
  await page.screenshot({path: 'selectvalue.png'});
  
  



  await browser.close();
})();
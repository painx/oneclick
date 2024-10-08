const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

// 指定geckodriver路径
const firefox_path = "E:/python/geckodriver-v0.35.0-win32/geckodriver.exe";
// 指定Firefox二进制文件路径
const firefox_binary_path = 'D:/Program Files/Mozilla Firefox/firefox.exe';

(async function example() {
  // 创建一个新的Firefox配置对象
  let opts = new firefox.Options()
    .setBinary(firefox_binary_path) // 设置Firefox二进制文件路径
    .addArguments('--start-maximized'); // 可以添加启动参数

  // 使用指定的geckodriver路径
  let driver = await new Builder()
    .forBrowser('firefox')
    .setFirefoxService(new firefox.ServiceBuilder(firefox_path))
    .setFirefoxOptions(opts)
    .build();

  try {
    // 打开百度网站
    await driver.get('http://www.baidu.com');
    console.log('Baidu page opened successfully.');

    // 示例操作：搜索框输入关键词
    const searchBox = await driver.findElement(By.id('kw'));
    await searchBox.sendKeys('Selenium', Key.RETURN);

    // 等待搜索结果加载完成
    await driver.wait(until.titleIs('Selenium_百度搜索'), 3000);
    console.log('Search results loaded.');
  } finally {
    // 最后关闭浏览器
    //await driver.quit();
  }
})();

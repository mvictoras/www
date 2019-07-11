import yaml
from selenium import webdriver
from PIL import Image
from selenium.webdriver.chrome.options import Options
import time
import os.path

DRIVER = 'chromedriver'

with open('../data/press.yaml') as f:
    # use safe_load instead load
    dataMap = yaml.safe_load(f)
    for p in dataMap["web"]:
        if 'url' in p:
#            print(p["url"])
            
            url = p["url"]
            filename = 'screenshots/' + p['publication'] + '-' + p['title'] + '.png'
            print('Opening: ' + url)
            if not os.path.exists(filename):
                try:
                    driver = webdriver.Chrome(DRIVER)

                    driver.get(url)
                    time.sleep(3)
                    height = driver.execute_script("return Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight )")
                    #close browser
                    driver.close()
                    
                    #Open another headless browser with height extracted above
                    chrome_options = Options()
                    chrome_options.add_argument("--headless")
                    chrome_options.add_argument(f"--window-size=1920,{height}")
                    chrome_options.add_argument("--hide-scrollbars")
                    driver = webdriver.Chrome(options=chrome_options)
                    driver.get(url)
                    #pause 3 second to let page loads
                    time.sleep(3)
                    driver.save_screenshot(filename)
                    driver.close()
                except:
                    print('Error taking screenshot')
                    driver.close()
            else:
                print('File exists, moving on...')

driver.quit()

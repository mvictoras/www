import yaml
import os
from os.path  import basename
from urllib.request import urlopen
from bs4 import BeautifulSoup
import re
import requests
from PIL import Image
import shutil
import time


with open('../data/press.yaml') as f:
    # use safe_load instead load
    dataMap = yaml.safe_load(f)
    for p in dataMap["web"]:
        if 'url' in p:
            filename = 'featuredImg/' + p['publication'] + '-' + p['title'] + '.jpg'
            if not os.path.exists(filename):    
                url = p["url"]
                try:
                    html = urlopen(url)
                    bs = BeautifulSoup(html, 'html.parser')
                    images = bs.find_all('img', {'src':re.compile('.jpg')})
                   
                    maxW = 0
                    maxH = 0
                    maxHW = 0
                    maxImg = None
                    maxImgName = None
                    if os.path.isdir('tmp'):
                        shutil.rmtree('tmp')
                    os.mkdir('tmp')
                    for image in images: 
                        imgURL = image['src']
                        imgTmpFile = 'tmp/' + basename(imgURL)
                        print(image['src'])
                        
                        with open(imgTmpFile, "wb") as f:
                          f.write(requests.get(imgURL).content)

                        im = Image.open(imgTmpFile)
                        width, height = im.size
                        if width * height > maxHW:
                            maxW = width
                            maxH = height
                            maxHW = width * height
                            maxImg = imgTmpFile
                            maxImgName = basename(imgURL)
                       
                    if maxImg is not None:
                        print('Max image: {} Width: {}'.format(maxImg, maxW))
                        shutil.move(maxImg, filename)
                    shutil.rmtree('tmp')
                except:
                    print('Could not open ' + url) 
            else:
                print('File exists. Continuing...')
                

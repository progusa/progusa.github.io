from selenium import webdriver
from datetime import datetime
import urllib.request
import json
import time
import tkinter as tk
from selenium.webdriver.chrome.webdriver import WebDriver

PATH = "C:\Program Files\WebDriver\chromedriver.exe"

# PATH = "C:\Program Files\Google\Chrome\Application\chrome.exe"

option = webdriver.ChromeOptions()
option.add_argument("--start-maximized")

# driver = webdriver.Chrome(PATH, chrome_options=option)

driver = webdriver.Chrome(PATH, chrome_options=option)
driver.get("https://www.freelancer.com/login")

# Login method
form = ["channelkita2208@gmail.com", "Sasuke26*!"]
i = 0

for log in driver.find_elements_by_tag_name("input"):
    if i < 2:
        log.send_keys(form[i])
        i = i + 1

i = 0
for login in driver.find_elements_by_tag_name("button"):
    if(i == 3):
        login.click()

    i = i + 1

# click on project browser, wait 30 second
print("Mulai menunggu")

wait = 30
time.sleep(wait)

print("30 detik berlalu . . .")

browserProject = driver.find_element_by_link_text("Browse Projects")

browserProject.click()

# start to scrap information, hold 30 second
print("Mulai menunggu")

wait = 30
time.sleep(wait)

print("30 detik berlalu . . .")

data = []

for job in driver.find_elements_by_class_name("Project"):
    print("=================")
    tittle = job.find_element_by_class_name("Project-title").text
    print("Job Tittle :")
    print(tittle)

    budget = job.find_element_by_class_name("Project-budget").text
    print("Budget :")
    print(budget)

    date = job.find_element_by_class_name("Project-date").text
    print("Date :")
    print(date)

    details = job.find_element_by_class_name("Project-details")

    description = details.find_element_by_tag_name("fl-text").text
    print("Deskripsi :")
    print(description)

    skill = details.find_element_by_class_name("Skills").text
    print("Skill :")
    print(skill)

    print("=================")

    waktu_scrape = datetime.now().strftime("%H:%M:%S")

    # input to raw object
    raw = {
        "tittle": tittle,
        "budget": budget,
        "date": date,
        "description": description,
        "skill": skill,
        "waktu_scrape": waktu_scrape
    }

    data.append(raw)

# open json file
f = open("E:\\Arsal\\YouTube\\Programming Nusantara\\Website PN\\assets\\scrapping\\Job_data.json", "w")
json.dump(data, f, indent=4)
f.close()

# close browser
driver.quit()

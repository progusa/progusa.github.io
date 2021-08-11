
import subprocess
import requests
import os
import pyperclip

os.system("cls")

param = {
    "code" : 
    '#include <stdio.h>\nint main(){\n  printf("hello");\n  return 0;\n}',
    "lexer" : 'c',
    "linenos" : 'yes'
}

response = requests.get("http://hilite.me/api", params=param)

text = response.text

pyperclip.copy(text)

spam = pyperclip.paste()

print(text)

import requests
import os
from pathlib import Path

# Function to sanitize title and convert to camel case
def sanitize_and_convert_title(title, num_words=7):
    # Sanitize title: keep alphanumeric and spaces, convert to lower case
    sanitized = "".join(c.lower() for c in title if c.isalnum() or c == " ")
    # Convert to camel case and limit to first 'num_words' words
    words = sanitized.split()
    camel_case = ''.join(word.capitalize() for word in words[:num_words])
    return camel_case[0].lower() + camel_case[1:] if camel_case else ''

# Function to download image
def download_image(url, path):
    response = requests.get(url)
    if response.status_code == 200:
        with open(path, 'wb') as f:
            f.write(response.content)
    else:
        raise Exception("Failed to download image.")

# Book details input
title = input("Enter book title: ")
author = input("Enter book author: ")
year = input("Enter book year: ")
# reading = input("Enter if currently reading (true/false): ")
# link = input("Enter book link: ")
reading = "false"
link = ""
img_url = input("Enter image URL (to download): ")

camel_case_title = sanitize_and_convert_title(title)
img_filename = camel_case_title + ".jpg"
img_directory = "./books/"
img_path = img_directory + img_filename

# Ensure the image directory exists
Path(img_directory).mkdir(parents=True, exist_ok=True)

# Download the image
try:
    download_image(img_url, img_path)
    print(f"Image downloaded successfully to {img_path}")
except Exception as e:
    print(e)
    exit(1)

books_file = "./books.ts"
import_statement = f'import {camel_case_title} from "./books/{img_filename}?url";\n'

# Read current content of the file
with open(books_file, 'r') as file:
    content = file.readlines()

# Insert import statement at the top of the file
content.insert(0, import_statement)

# Construct the book object
book_object = f"""  {{
    title: "{title}",
    author: "{author}",
    img: {camel_case_title},
    year: {year},
    reading: {reading.lower()},
    link: "{link}",
    loading: "eager",
  }},
"""

# Find the position of the array to insert the new book object
try:
    position = next(i for i, line in enumerate(content) if "export const books: Book[] = [" in line) + 1
except StopIteration:
    print("Could not find the books array in the file.")
    exit(1)

content.insert(position, book_object)

# Write everything back to the file
with open(books_file, 'w') as file:
    file.write("".join(content))

print("Book added successfully.")

import requests

word_site = "https://en.wikipedia.org/wiki/Glossary_of_nautical_terms"

response = requests.get(word_site)
WORDS = response.content.splitlines()
print(WORDS)
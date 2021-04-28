import requests

"""
Based on https://stackoverflow.com/questions/30259452/proper-way-to-consume-data-from-restful-api-in-django
"""

def categories():
    url = 'https://opentdb.com/api_category.php' 
    r = requests.get(url)
    categories = r.json()
    return categories['trivia_categories']


def questions_by_category(cat_id):
    url = 'https://opentdb.com/api_count.php' 
    params = {'category': cat_id}
    r = requests.get(url, params=params)
    question_count = r.json()
    return question_count['category_question_count']


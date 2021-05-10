import requests
import base64

"""
Based on stack overflow question 30259452
"proper-way-to-consume-data-from-restful-api-in-django"
"""

def get_questions(cat_id, num_quest, difficulty, quest_type):
    """
    difficulty must be in 'easy', 'medium', 'hard'
    quest_type must be 'multiple' or 'boolean'
    """
    url = 'https://opentdb.com/api.php'
    encode = 'base64'
    params = {'category': cat_id, 'amount': num_quest,
              'difficulty': difficulty, 'type': quest_type,
              'encode': encode}
    r = requests.get(url, params=params)
    questions = r.json()
    return questions

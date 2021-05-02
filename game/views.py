from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.http import HttpResponse
from django.http.response import JsonResponse

from . import services

from random import shuffle

import pybase64
#from services import categories, question_count_by_category, get_questions


def Index(request):
    return render(request, "index.html")

def Questions(request):

    if request.method == "GET":
        cat_id = 11, 
        num_quest = 1, 
        difficulty = 'easy', 
        quest_type = 'multiple' 
        questions_raw = services.get_questions(cat_id, num_quest, difficulty, quest_type)

        if questions_raw['response_code']  != 0:
            return JsonResponse({"error retriving questions": "POST request required."}, status=400)
        
        else:
            questions_cln = []
            for record in questions_raw['results']:
                all_answers = record['incorrect_answers']
                all_answers.append(record['correct_answer'])
                
                # Rearrange potential answers in random order
                # TODO ensure that order is truely random
                all_answers = list(set(all_answers))      
                record ['choice1'] = all_answers[0]
                record ['choice2'] = all_answers[1]
                record ['choice3'] = all_answers[2]
                record ['choice4'] = all_answers[3]
                del record['incorrect_answers']
                
                # decode text
                record_cln = {k: pybase64.b64decode(v, validate=True).decode("utf-8") 
                                for k, v in record.items()}

                #appened to a master list
                questions_cln.append(record_cln)

            return JsonResponse(questions_cln, safe=False)
    
    # TODO: POST request should update a score. 
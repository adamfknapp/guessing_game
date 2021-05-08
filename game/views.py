from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from . import services
from game.models import Game

from random import shuffle
import json
import pybase64
#from services import categories, question_count_by_category, get_questions


def Index(request):
    return render(request, "index.html")

@csrf_exempt
def Questions(request):

    if request.method == "GET":
        cat_id = None, 
        num_quest = 1, 
        difficulty = None, 
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
    

    elif request.method == "POST":
        data = json.loads(request.body)
        game = Game(score=data["score"], max_questions=data["max_questions"])
        game.save()
        return HttpResponse(status=204)

    # Email must be via GET or PUT
    else:
        return JsonResponse({
            "error": "GET or PUT request required."
        }, status=400)
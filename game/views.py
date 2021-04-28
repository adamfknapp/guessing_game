from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, "index.html")



"""******************************************************

Get questions from https://opentdb.com/api_config.php
Options:
    - Num Questions
    - CAtegory
    - Difficulty
    - Question type

Also
    - category look up
    - category question count lookup
    - Global question count

****************************************************"""
# TODO Log in user and store session token to prevent seeing same question
# TODO Handle answer. If answer is correct update score
# TODO Add helper function

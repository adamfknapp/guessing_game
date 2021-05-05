from django.db import models

class Game(models.Model):
    game_id = models.AutoField(primary_key=True)
    score = models.IntegerField()
    num_quest = models.IntegerField()

    def __str__(self):
        return f"game_id: {self.game_id} | score: {self.score} | num_quest: {self.num_quest}"
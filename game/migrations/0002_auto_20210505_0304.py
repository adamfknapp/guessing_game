# Generated by Django 3.1.6 on 2021-05-05 03:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='num_quest',
            field=models.IntegerField(default=3),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='game',
            name='score',
            field=models.IntegerField(),
        ),
    ]
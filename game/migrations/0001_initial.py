# Generated by Django 3.1.6 on 2021-05-05 02:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('game_id', models.AutoField(primary_key=True, serialize=False)),
                ('score', models.FloatField()),
            ],
        ),
    ]

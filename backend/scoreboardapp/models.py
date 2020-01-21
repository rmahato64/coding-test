from django.db import models


class Player(models.Model):
    name = models.CharField(max_length=150)
    point = models.IntegerField(default=0)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-point']
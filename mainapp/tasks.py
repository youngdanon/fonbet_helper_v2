from celery import shared_task
import os

from mainapp.models import BlockLog
from mainapp.utils.fonbet_parser import Parser

parser = Parser()


@shared_task(name='get_updates')
def get_blocklog_updates():
    blocked_events = parser.get_blocked_events()
    miscs = parser.get_event_misc(blocked_events)
    for event_id, blocked_factors in blocked_events.items():
        comment = miscs[event_id]['comment']
        score = f"{miscs[event_id]['score1']}:{miscs[event_id]['score2']}"
        for factor in blocked_factors:
            BlockLog(event_id=event_id,
                     factor=factor['factor_id'],
                     param=factor['param'],
                     value=factor['value'],
                     score=score,
                     comment=comment).save()
    return True


@shared_task(name='delete_old_logs')
def delete_old_logs():
    live_events = parser.get_live_events()
    logged_events = BlockLog.objects.all()
    for event in logged_events:
        if event.event_id not in live_events:
            event.delete()


@shared_task(name='test_task')
def test_task():
    return 'test'

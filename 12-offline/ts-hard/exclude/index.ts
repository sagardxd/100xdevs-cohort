type EventType = 'click' | 'mouse' | 'scroll';
type ExcludeEventType = Exclude<EventType, 'scroll'>;

const setEvent = (event: ExcludeEventType) => {
    console.log(event);
}

setEvent('mouse')
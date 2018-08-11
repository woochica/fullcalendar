import Calendar from '../Calendar'
import { EventSource } from '../structs/event-source'

export default class EventSourceApi {

  calendar: Calendar
  internalEventSource: EventSource

  constructor(calendar: Calendar, internalEventSource: EventSource) {
    this.calendar = calendar
    this.internalEventSource = internalEventSource
  }

  remove() {
    this.calendar.dispatch({
      type: 'REMOVE_EVENT_SOURCES',
      sourceIds: [ this.internalEventSource.sourceId ]
    })
  }

  refetch() {
    this.calendar.dispatch({
      type: 'FETCH_EVENT_SOURCES',
      sourceIds: [ this.internalEventSource.sourceId ]
    })
  }

}
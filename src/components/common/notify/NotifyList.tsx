import React from 'react'
import { useSelector } from 'react-redux'
import { IEvent } from '../../../events/IEvent'
import { RootReducer } from '../../../redux/store'
import { Notify } from './Notify'

interface IProps {
}

export const NotifyList: React.FC<IProps> = () => {
  const events = useSelector<RootReducer, IEvent[]>(state => state.event.occurredEvents)

  return (
    <div className="notify-list">
      {events.map(e => <Notify event={e}/>)}
    </div>
  )
}
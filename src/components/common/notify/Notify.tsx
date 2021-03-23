import React, { useEffect, useState } from 'react'
import { IEvent } from '../../../events/IEvent'

interface IProps {
  event: IEvent
}

export const Notify: React.FC<IProps> = ({event}) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => setShow(false), 5000)
  })

  return show? (
    <div className="notify">
      {event.description}
    </div>
  ): null
}
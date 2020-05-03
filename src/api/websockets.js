import React, { createContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Socket } from 'phoenix'

const SocketContext = createContext()

const SocketProvider = ({ wsUrl, params, children }) => {
    const socket = new Socket(wsUrl, { params })
    useEffect(() => socket.connect(), [params, wsUrl, socket])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

SocketProvider.defaultProps = {
 params: {}
}

SocketProvider.propTypes = {
  wsUrl: PropTypes.string.isRequired
}

export { SocketContext }
export default SocketProvider
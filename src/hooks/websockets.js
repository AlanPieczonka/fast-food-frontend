import { useContext, useEffect } from 'react'
import { SocketContext } from '../api/websockets'

const useChannel = (channelTopic, callback) => {
    const socket = useContext(SocketContext)
    useEffect(() => {
        const channel = socket.channel(channelTopic, { client: 'browser' })

        channel.onMessage = (event, payload) => {
            callback(event, payload)
            return payload
        }

        channel.join()
            .receive("ok", ({ messages }) =>  console.log('successfully joined channel', messages || ''))
            .receive("error", ({ reason }) => console.error('failed to join channel', reason))

        return () => {
            channel.leave()
        }
    }, [channelTopic, socket, callback])
}

export default useChannel
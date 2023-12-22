import EventBus from './EventBus'

export enum WebSoketEvents {
  Error = 'Error',
  Connected = 'Connected',
  Close = 'Close',
  Message = 'Message',
}

class WSTransport extends EventBus {
  static API_URL = 'wss://ya-praktikum.tech/ws'

  private socket?: WebSocket

  private pingInterval?: ReturnType<typeof setInterval>

  private readonly pingIntervalTime = 3000

  private readonly url: string

  constructor(url: string) {
    super()
    this.url = url
  }

  public send(data: string | number | object) {
    if (!this.socket) {
      throw new Error('Socket is not connected')
    }

    this.socket.send(JSON.stringify(data))
  }

  public async connected(): Promise<void> {
    if (this.socket) {
      throw new Error('The socket is already connected')
    }

    this.socket = new WebSocket(`${WSTransport.API_URL}${this.url}`)
    this.subscribe(this.socket)
    this.setupPing()

    await new Promise<void>((resolve, reject) => {
      this.on(WebSoketEvents.Error, reject)
      this.on(WebSoketEvents.Connected, () => {
        this.off(WebSoketEvents.Error, reject)
        resolve()
      })
    })
  }

  public close() {
    this.socket?.close()
    clearInterval(this.pingInterval)
  }

  private setupPing() {
    this.pingInterval = setInterval(() => {
      this.send({ type: 'ping' })
    }, this.pingIntervalTime)

    this.on(WebSoketEvents.Close, () => {
      clearInterval(this.pingInterval)
      this.pingInterval = undefined
    })
  }

  private subscribe(socket: WebSocket) {
    socket.addEventListener('open', () => {
      this.emit(WebSoketEvents.Connected)
    })

    socket.addEventListener('close', () => {
      this.emit(WebSoketEvents.Close)
    })

    socket.addEventListener('error', (error) => {
      this.emit(WebSoketEvents.Error, error)
    })

    socket.addEventListener('message', (message) => {
      try {
        const data = JSON.parse(message.data)
        if (['pong', 'user connected'].includes(data?.type)) {
          return
        }
        this.emit(WebSoketEvents.Message, data)
      } catch (error) {
        console.log(error);
      }
    })
  }
}

export default WSTransport

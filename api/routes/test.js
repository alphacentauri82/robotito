import { Board, Servo } from 'johnny-five'
import EtherPort from 'etherport'
const { Router } = require('express')
const router = Router()

// Control de direccion start-stop
const testMotors = status => {
  const newPort = { port: new EtherPort(3030), timeout: 30000 }
  const board = new Board(newPort)
  board.on('ready', () => {
    const motorRight = new Servo.Continuous({
      controller: 'PCA9685',
      pin: 14
    })

    const motorLeft = new Servo.Continuous({
      controller: 'PCA9685',
      pin: 15
    })
    motorRight.stop()
    motorLeft.stop()
  })
  if (status === 'start') {
    return 'load'
  } else {
    return 'stopped'
  }
}

router.get('/test:id', function (req, res, next) {
  const statusId = req.params.id
  const statusMotor = testMotors(statusId)
  res.send(statusMotor)
})

export default router

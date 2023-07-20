import React from 'react'
import './App.css'
import BrownChart from './components/BrownChart'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './app/store'
import { random } from './math/random'
import { Point } from 'chart.js'
import {
  BrownDataState,
  play,
  resetData,
  setData,
  setIntervalMilisec,
  setMaxX,
  setMaxY,
  setMinX,
  setMinY,
} from './app/brownDataSlice'
import Input from './components/Input'

const App: React.FC = () => {
  const data = useSelector((state: RootState) => state.brownData)
  const dispatch = useDispatch()

  React.useEffect(() => {
    const updateNextPoint = () => {
      const plotData = data.dataPoints
      const lastPoint = plotData[plotData.length - 1]
      const nextPoint: Point = {
        x: lastPoint.x + random.real(data.minX, data.maxX),
        y: lastPoint.y + random.real(data.minY, data.maxY),
      }

      const newPlotData: BrownDataState = {
        ...data,
        dataPoints: [...plotData, nextPoint],
      }

      dispatch(setData(newPlotData))
    }
    let intervalId: NodeJS.Timer

    if (data.play) {
      intervalId = setInterval(() => updateNextPoint(), data.intervalInMiliSec)
    }

    return () => {
      clearInterval(intervalId)
    }
  })

  type ActionCreator = <T extends unknown>(
    payload: T
  ) => { type: string; payload: T }
  const dispatchUpdateWithNumber = (
    value: string | number,
    actionCreator: ActionCreator
  ) => {
    if (Number.isNaN(parseFloat(value.toString()))) {
      return
    } else {
      dispatch(actionCreator(value))
    }
  }

  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button
            onClick={() => {
              dispatch(play())
            }}
            style={{ background: 'green', color: 'white' }}
          >
            {data.play ? 'Pause' : 'Play'}
          </button>
          <button
            onClick={() => {
              dispatch(resetData())
            }}
            style={{ background: 'brown', color: 'white', marginTop: '10px' }}
          >
            Clear
          </button>
          <Input
            label="Interval milisec"
            name="interval"
            placeHolder={data.intervalInMiliSec.toString()}
            onChange={(value) =>
              dispatchUpdateWithNumber(value, setIntervalMilisec)
            }
          />
          <Input
            label="Min X"
            name="minX"
            placeHolder={data.minX.toString()}
            onChange={(value) => {
              dispatchUpdateWithNumber(value, setMinX)
            }}
          />
          <Input
            label="Max X"
            name="maxX"
            placeHolder={data.maxX.toString()}
            onChange={(value) => {
              dispatchUpdateWithNumber(value, setMaxX)
            }}
          />
          <Input
            label="Min Y"
            name="minY"
            placeHolder={data.minY.toString()}
            onChange={(value) => {
              dispatchUpdateWithNumber(value, setMinY)
            }}
          />
          <Input
            label="Max Y"
            name="maxY"
            placeHolder={data.maxX.toString()}
            onChange={(value) => {
              dispatchUpdateWithNumber(value, setMaxY)
            }}
          />
        </div>

        <div>
          <BrownChart dataPoints={data.dataPoints} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App

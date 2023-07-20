import { createSlice } from '@reduxjs/toolkit'
import { BrownDataState } from '.'

const initialState: BrownDataState = {
  dataPoints: [
    {
      x: 0,
      y: 0,
    },
  ],
  minX: 0,
  maxX: 1,
  minY: -1,
  maxY: 1,
  intervalInMiliSec: 500,
  play: false,
}

export const brownDataSLice = createSlice({
  name: 'brownData',
  initialState,
  reducers: {
    setData: (state, action) => {
      return { ...state, ...action.payload }
    },
    resetData: () => initialState,
    play: (state) => {
      return { ...state, play: !state.play }
    },
    setIntervalMilisec: (state, action) => {
      return { ...state, intervalInMiliSec: action.payload }
    },
    setMinX: (state, action) => {
      return { ...state, minX: action.payload }
    },
    setMaxX: (state, action) => {
      return { ...state, maxX: action.payload }
    },
    setMinY: (state, action) => {
      return { ...state, minY: action.payload }
    },
    setMaxY: (state, action) => {
      return { ...state, maxY: action.payload }
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setData,
  resetData,
  play,
  setIntervalMilisec,
  setMinX,
  setMaxX,
  setMinY,
  setMaxY,
} = brownDataSLice.actions

const brownDataReducer = brownDataSLice.reducer

export default brownDataReducer

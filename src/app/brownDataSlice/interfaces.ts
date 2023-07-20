import { Point } from "chart.js";

export interface BrownDataState {
    dataPoints: Point[]
    minX: number,
    minY: number,
    maxX: number,
    maxY: number,
    intervalInMiliSec: number,
    play: boolean,
}
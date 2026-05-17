import type { MockTool, ToolScoreKey } from '~~/data/mock-tools'

export interface ComparisonScore {
  key: ToolScoreKey
  label: string
  value: number
}

export interface DynamicComparisonResult {
  tools: MockTool[]
  bestWriting?: MockTool
  bestCoding?: MockTool
  bestValue?: MockTool
  bestChinese?: MockTool
  easiest?: MockTool
  conclusion: string[]
}


import apiClient from '../plugins/apiClient'    // your Axios instance

export interface Score {
  yourScore: number
  average:   number
  target:    number
}

export async function fetchScores(): Promise<Score> {
  const { data } = await apiClient.get<Score>('/scores')
  return data
}

export async function randomizeScores(): Promise<Score> {
  const { data } = await apiClient.post<Score>('/scores/randomize')
  return data
}

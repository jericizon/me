import { withBase } from 'ufo'

export function useBasePath() {
  const baseURL = useRuntimeConfig().app.baseURL || '/'
  return (path: string) => withBase(path, baseURL)
}

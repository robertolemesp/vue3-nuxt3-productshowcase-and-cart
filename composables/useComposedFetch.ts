
import { UseFetchOptions } from 'nuxt/dist/app/composables'
import { KeyOfRes } from 'nuxt/dist/app/composables/asyncData'

export default function useComposedFetch<T>(path: string, options?: |
  UseFetchOptions<
    T extends void ? unknown : T,
    (res: T extends void ? unknown : T) => T extends void ? unknown : T,
    KeyOfRes<(res: T extends void ? unknown : T) => T extends void ? unknown : T>
  >
  | undefined
) {
  return useFetch(path, options /* { ...options, baseURL: useRuntimeConfig().public.apiBaseUrl } */)
}

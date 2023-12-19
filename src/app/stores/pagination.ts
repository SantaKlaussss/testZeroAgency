import { atom } from 'nanostores';

export const $currentPage = atom<number>(1)

export function addCurrentPage(currentPage: number) {
  $currentPage.set(currentPage)
}

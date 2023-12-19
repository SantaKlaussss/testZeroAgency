import { $currentPage } from '@/app/stores/pagination';
import { useStore } from '@nanostores/react';
import { atom, computed } from 'nanostores';

export const $posts = atom<any>([])

export function addPosts(posts: any) {
  $posts.set(posts);
}

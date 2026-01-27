import { atom } from 'jotai'
import { PAGES } from '../lib/constant'

export const pageAtom = atom(PAGES.HOME)
export const isHomeTitleAnimationAtom = atom(false)
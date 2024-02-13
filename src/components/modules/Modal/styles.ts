import tw from 'tailwind-styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

export const DialogOverlay = tw(Dialog.Overlay)`
    inset-0
    fixed
    bg-black/60
`

export const DialogContent = tw(Dialog.Content)`
    fixed 
    inset-0 
    md:inset-auto 
    md:left-1/2 
    overflow-hidden 
    md:-translate-x-1/2 
    md:-translate-y-1/2 
    md:top-1/2 
    md:max-w-[640px] 
    w-full 
    md:h-[60vh] 
    bg-slate-700 
    md:rounded-md 
    flex 
    flex-col 
    outline-none
`

export const DialogClose = tw(Dialog.Close)`
    absolute 
    right-0 
    top-0 
    bg-slate-800
    p-1.5 
    text-slate-400 
    hover:text-slate-100
`

export const CloseIcon = tw(X)`size-5`

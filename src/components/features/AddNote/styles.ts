import * as Dialog from '@radix-ui/react-dialog'
import tw from 'tailwind-styled-components'

export const DialogTrigger = tw(Dialog.Trigger)`
    rounded-md 
    bg-slate-700 
    p-5 
    space-y-3 
    flex 
    flex-col 
    gap-3 
    text-left 
    outline-none 
    hover:ring-2 
    hover:ring-slate-600 
    focus-visible:ring-2 
    focus-visible:ring-lime-400
`

export const Form = tw.form`
    flex-1 
    flex 
    flex-col
`

export const ContainerEditor = tw.div`
    flex-1 
    flex 
    flex-col 
    gap-3 p-5
`

export const TitleModal = tw.span`
    text-sm 
    font-medium 
    text-slate-300
`

export const ContentModal = tw.p`
    text-sm 
    leading-6 
    text-slate-400
`

export const TextAreaModal = tw.textarea`
    text-sm 
    leading-6 
    text-slate-400 
    bg-transparent 
    resize-none 
    flex-1 
    outline-none
`

export const ButtonRecording = tw.button`
    w-full 
    flex 
    items-center 
    justify-center 
    gap-2 
    bg-slate-900 
    py-4 
    text-center 
    text-sm 
    text-slate-300 
    outline-none 
    font-medium 
    hover:text-slate-100
`

export const ButtonSave = tw.button`
    w-full 
    bg-lime-400 
    py-4 
    text-center 
    text-sm 
    text-lime-950 
    outline-none 
    font-medium hover:bg-lime-500
`

export const AnimationRecording = tw.div`
    size-3 
    rounded-full 
    bg-red-500 
    animate-pulse
`

export const TextButton = tw.button`
    font-medium 
    text-lime-400 
    hover:underline
`

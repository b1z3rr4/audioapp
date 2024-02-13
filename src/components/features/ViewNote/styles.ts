import tw from 'tailwind-styled-components';
import * as Dialog from '@radix-ui/react-dialog'

export const DialogTrigger = tw(Dialog.Trigger)`
    text-left 
    rounded-md 
    flex 
    flex-col 
    bg-slate-800 
    p-5 outline-none 
    gap-3 
    overflow-hidden 
    relative 
    hover:ring-2 
    hover:ring-slate-600 
    focus-visible:ring-2 
    focus-visible:ring-lime-400
`;

export const ContainerModal = tw.div`
    flex-1 
    flex 
    flex-col 
    gap-3 
    p-5
`;

export const TitleModal = tw.span`
    text-sm 
    font-medium 
    text-slate-300
`;

export const ContentModal = tw.p`
    text-sm 
    leading-6 
    text-slate-400
`;

export const ButtonSave = tw.button`
    w-full 
    bg-slate-800 
    py-4 
    text-center 
    text-sm 
    text-slate-300 
    outline-none 
    font-medium 
    group
`;

export const TextButton = tw.span`
    text-red-400 
    group-hover:underline
`;

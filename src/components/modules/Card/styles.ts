import tw from 'tailwind-styled-components';

export const TitleCard = tw.span<{ colorWeight: string }>`
    text-sm
    font-medium
    text-slate-${({ colorWeight }) => colorWeight}
`;

export const ContentCard = tw.p`
    text-sm
    leading-6
    text-slate-400
`;

export const GradientCard = tw.div`
    absolute 
    bottom-0 
    left-0 
    right-0 
    h-1/2 
    bg-gradient-to-t 
    from-black/60 
    to-black/0 
    pointer-events-none
`;

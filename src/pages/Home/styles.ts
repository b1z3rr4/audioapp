import tw from 'tailwind-styled-components';

export const HomeContainer = tw.div`
    mx-auto
    max-w-6xl
    my-12 
    space-y-6 
    px-5
`;

export const Divisor = tw.div`
    h-px 
    bg-slate-700
`;

export const ContainerGrid = tw.div`
    grid 
    grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    gap-6 
    auto-rows-[250px]
`;

export const Image = tw.img``;

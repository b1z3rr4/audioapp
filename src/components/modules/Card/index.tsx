interface CardProps {
    content: string;
    variant: 'gradient' | 'normal';
    titleColorIntense: string;
    titleCard: string;
}

export const Card = ({ content, variant, titleColorIntense, titleCard }: CardProps) => {
    return (
        <>
            <span className={`text-sm font-medium text-slate-${titleColorIntense}`}>{titleCard}</span>

            <p className="text-sm leading-6 text-slate-400">
                {content} 
            </p>

            {
                variant === 'gradient' && 
                    <div 
                        className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" 
                    />
            }
        </>
    );
};

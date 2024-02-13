import { ContentCard, GradientCard, TitleCard } from './styles'

interface CardProps {
  content: string
  variant: 'gradient' | 'normal'
  titleColorIntense: string
  titleCard: string
}

export const Card = ({
  content,
  variant,
  titleColorIntense,
  titleCard,
}: CardProps) => {
  return (
    <>
      <TitleCard colorWeight={titleColorIntense}>{titleCard}</TitleCard>
      <ContentCard>{content}</ContentCard>
      {variant === 'gradient' && <GradientCard />}
    </>
  )
}

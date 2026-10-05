import React from 'react';
import { Container, Heading, Text, SectionEyebrow, Button, Badge } from './index';
import ImageBlock from './ImageBlock';
import { cn } from '../../utils/cn';

/**
 * EditorialSplit Primitive
 * 
 * Asymmetrical two-column layout combining large photography with evocative storytelling.
 * Reversible (image left or image right).
 */
export default function EditorialSplit({
  image,
  imageAlt,
  imageRatio = 'editorial',
  caption,
  eyebrow,
  title,
  subtitle,
  badge,
  action,
  reverse = false,
  background = 'ivory', // 'ivory' | 'forest' | 'sand'
  className = '',
  children,
}) {
  const bgStyles = {
    ivory: 'bg-ivory text-charcoal',
    forest: 'bg-forest-deep text-ivory',
    sand: 'bg-sand-light/60 text-charcoal',
  }[background];

  const isDark = background === 'forest';

  return (
    <section className={cn('py-16 md:py-24', bgStyles, className)}>
      <Container size="xl">
        <div className={cn(
          'grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center',
          reverse && 'lg:[&>*:first-child]:order-2'
        )}>
          {/* Image Column */}
          <div className="lg:col-span-6">
            <ImageBlock
              src={image}
              alt={imageAlt || title}
              aspectRatio={imageRatio}
              caption={caption}
            />
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-6">
            {badge && (
              <div className="mb-4">
                <Badge variant={isDark ? 'gold' : 'terracotta'}>{badge}</Badge>
              </div>
            )}
            {eyebrow && (
              <SectionEyebrow
                color={isDark ? 'gold' : 'terracotta'}
                withLine
                className={cn('mb-3', isDark && 'text-gold-light')}
              >
                {eyebrow}
              </SectionEyebrow>
            )}
            <Heading
              as="h2"
              variant="h2"
              font="serif"
              color={isDark ? 'sand' : 'forest'}
              className="mb-5 leading-[1.18]"
            >
              {title}
            </Heading>
            {subtitle && (
              <Text
                variant="lead"
                color={isDark ? 'sand' : 'muted'}
                className="mb-6 font-light"
              >
                {subtitle}
              </Text>
            )}

            {children}

            {action && (
              <div className="mt-8">
                <Button
                  as={action.to ? 'a' : 'button'}
                  href={action.to}
                  variant={action.variant || (isDark ? 'gold' : 'primary')}
                  size="md"
                  onClick={action.onClick}
                >
                  {action.label}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

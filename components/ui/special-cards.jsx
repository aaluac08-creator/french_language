import * as React from 'react';
import { cn } from '@/lib/utils';

// Did You Know Card Variant
const DidYouKnowCard = React.forwardRef(
  (
    {
      className,
      title = 'Le Saviez-Vous?',
      source,
      variant = 'fact',
      children,
      ...props
    },
    ref
  ) => {
    const isQuestion = variant === 'question';

    return (
      <div
        ref={ref}
        className={cn(
          'relative overflow-visible rounded-[20px] border-[4px] bg-white p-8 text-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.3)] md:p-12',
          isQuestion ? 'border-emerald-800' : 'border-slate-800',
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'absolute -top-1 -left-1 h-1 w-14',
            isQuestion ? 'bg-emerald-800' : 'bg-slate-800'
          )}
        />
        <div
          className={cn(
            'absolute -top-1 -left-1 h-14 w-1',
            isQuestion ? 'bg-emerald-800' : 'bg-slate-800'
          )}
        />
        <div
          className={cn(
            'absolute -bottom-1 -right-1 h-1 w-14',
            isQuestion ? 'bg-emerald-800' : 'bg-slate-800'
          )}
        />
        <div
          className={cn(
            'absolute -bottom-1 -right-1 h-14 w-1',
            isQuestion ? 'bg-emerald-800' : 'bg-slate-800'
          )}
        />

        <div className="absolute -top-14 right-6 animate-float md:right-10">
          {isQuestion ? (
            <div className="grid h-20 w-20 place-items-center rounded-full border-[3px] border-emerald-800 bg-gradient-to-br from-emerald-200 to-teal-200 shadow-[0_0_30px_rgba(16,185,129,0.45)]">
              <span className="text-4xl font-extrabold text-emerald-800">?</span>
            </div>
          ) : (
            <div className="relative h-20 w-20">
              <div className="absolute inset-0">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span
                    key={index}
                    className="absolute left-1/2 top-1/2 h-4 w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-slate-800"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${index * 45}deg) translateY(-45px)`,
                    }}
                  />
                ))}
              </div>
              <div className="relative h-[70px] w-[70px] rounded-full border-[3px] border-slate-800 bg-gradient-to-br from-amber-300 to-yellow-200 shadow-[0_0_30px_rgba(255,215,0,0.6)]">
                <div className="absolute -top-2 left-1/2 h-2 w-5 -translate-x-1/2 rounded-sm bg-slate-800" />
                <div className="absolute left-[25%] top-[22%] h-[40%] w-[30%] -rotate-45 rounded-full bg-white/40" />
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 md:mt-8">
          <h3
            className={cn(
              'mb-4 text-3xl font-bold italic md:text-4xl',
              isQuestion ? 'text-emerald-900' : 'text-slate-800'
            )}
          >
            {title}
          </h3>
          <div className="text-lg leading-relaxed text-slate-600">{children}</div>
          {source ? (
            <p className="mt-4 text-sm italic text-slate-500">{source}</p>
          ) : null}
        </div>
      </div>
    );
  }
);
DidYouKnowCard.displayName = 'DidYouKnowCard';

// Stat Box Card Variant
const StatBoxCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-primary/10 to-secondary/10 text-text',
      'border-primary/30',
      'p-6 text-center',
      className
    )}
    {...props}
  />
));
StatBoxCard.displayName = 'StatBoxCard';

// Insight Card Variant
const InsightCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-surface/50 text-text italic',
      'border-muted/50',
      'p-6',
      className
    )}
    {...props}
  />
));
InsightCard.displayName = 'InsightCard';

// Warning Card Variant
const WarningCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-surface text-text',
      'border-red-500/50 border-l-4 border-l-red-500',
      'p-6',
      className
    )}
    {...props}
  />
));
WarningCard.displayName = 'WarningCard';

// Victory Card Variant
const VictoryCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-green-500/10 to-emerald-500/10 text-text',
      'border-green-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
VictoryCard.displayName = 'VictoryCard';

// Irony Card Variant
const IronyCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-surface/70 text-text',
      'border-purple-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
IronyCard.displayName = 'IronyCard';

// Quote Card Variant
const QuoteCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-surface/50 text-text italic',
      'border-accent/50',
      'p-6 relative before:content-["«"] before:absolute before:left-4 before:top-0 before:text-6xl before:font-serif before:opacity-20',
      className
    )}
    {...props}
  />
));
QuoteCard.displayName = 'QuoteCard';

// Analysis Card Variant
const AnalysisCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-surface/40 text-text',
      'border-blue-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
AnalysisCard.displayName = 'AnalysisCard';

// Birth Card Variant
const BirthCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-text',
      'border-pink-500/50',
      'p-6 text-center',
      className
    )}
    {...props}
  />
));
BirthCard.displayName = 'BirthCard';

// Resolution Card Variant
const ResolutionCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-yellow-500/10 to-orange-500/10 text-text',
      'border-yellow-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
ResolutionCard.displayName = 'ResolutionCard';

// Result Card Variant
const ResultCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-teal-500/10 to-cyan-500/10 text-text',
      'border-teal-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
ResultCard.displayName = 'ResultCard';

// Conclusion Card Variant
const ConclusionCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-r from-indigo-500/10 to-blue-500/10 text-text',
      'border-indigo-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
ConclusionCard.displayName = 'ConclusionCard';

// Celebration Card Variant
const CelebrationCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-yellow-500/20 to-red-500/20 text-text',
      'border-yellow-500/50',
      'p-6 text-center',
      className
    )}
    {...props}
  />
));
CelebrationCard.displayName = 'CelebrationCard';

// Success Card Variant
const SuccessCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-green-500/15 to-emerald-500/15 text-text',
      'border-green-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
SuccessCard.displayName = 'SuccessCard';

// Hope Card Variant
const HopeCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-sky-500/10 to-cyan-500/10 text-text',
      'border-sky-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
HopeCard.displayName = 'HopeCard';

// Ownership Card Variant
const OwnershipCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-violet-500/15 to-purple-500/15 text-text',
      'border-violet-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
OwnershipCard.displayName = 'OwnershipCard';

// Purpose Card Variant
const PurposeCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-surface/60 text-text',
      'border-amber-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
PurposeCard.displayName = 'PurposeCard';

// Resolution Special Card - Different styling for specific uses
const ResolutionSpecialCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-lime-500/10 to-green-500/10 text-text',
      'border-lime-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
ResolutionSpecialCard.displayName = 'ResolutionSpecialCard';

// Victory Card Highlighted
const VictoryCardHighlight = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-emerald-500/20 to-green-500/20 text-text',
      'border-emerald-500/70 border-2',
      'p-6',
      className
    )}
    {...props}
  />
));
VictoryCardHighlight.displayName = 'VictoryCardHighlight';

// Lesson Card Featured
const LessonCardFeatured = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-text',
      'border-purple-500/70 border-2',
      'p-6 text-center',
      className
    )}
    {...props}
  />
));
LessonCardFeatured.displayName = 'LessonCardFeatured';

// Survival Card
const SurvivalCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-rose-500/10 to-red-500/10 text-text',
      'border-rose-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
SurvivalCard.displayName = 'SurvivalCard';

// Future Card
const FutureCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-blue-500/15 to-indigo-500/15 text-text',
      'border-blue-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
FutureCard.displayName = 'FutureCard';

// Featured Highlight Card
const FeaturedHighlightCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-orange-500/20 to-amber-500/20 text-text',
      'border-orange-500/70 border-2',
      'p-6',
      className
    )}
    {...props}
  />
));
FeaturedHighlightCard.displayName = 'FeaturedHighlightCard';

// Logic Card Variant
const LogicCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-blue-500/10 to-cyan-500/10 text-text',
      'border-blue-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
LogicCard.displayName = 'LogicCard';

// Revolutionary View Card
const RevolutionaryView = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-red-500/15 to-orange-500/15 text-text',
      'border-red-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
RevolutionaryView.displayName = 'RevolutionaryView';

// Ferry Laws Card
const FerryLaws = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-blue-500/15 to-indigo-500/15 text-text',
      'border-blue-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
FerryLaws.displayName = 'FerryLaws';

// Conclusion Card for Revolution page
const Conclusion = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-text',
      'border-2 border-green-500/70',
      'p-6',
      className
    )}
    {...props}
  />
));
Conclusion.displayName = 'Conclusion';

// Founding Card
const FoundingCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-text',
      'border-purple-500/70',
      'p-6 text-center',
      className
    )}
    {...props}
  />
));
FoundingCard.displayName = 'FoundingCard';

// Vision Card
const VisionCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-blue-500/15 to-cyan-500/15 text-text',
      'border-blue-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
VisionCard.displayName = 'VisionCard';

// Academy Role Card
const AcademyRole = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-indigo-500/15 to-purple-500/15 text-text',
      'border-indigo-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
AcademyRole.displayName = 'AcademyRole';

// StatBox for Colonial Expansion
const StatBox = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-text',
      'border-2 border-purple-500/70',
      'p-6 text-center',
      className
    )}
    {...props}
  />
));
StatBox.displayName = 'StatBox';

// Note Card for Colonial Expansion
const Note = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-amber-500/15 to-orange-500/15 text-text',
      'border-amber-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
Note.displayName = 'Note';

// Reform Card for Reforms 1740
const ReformCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-text',
      'border-purple-500/70',
      'p-6 text-center',
      className
    )}
    {...props}
  />
));
ReformCard.displayName = 'ReformCard';

// HopeCard Special for Modern Challenge
const HopeCardSpecial = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-text',
      'border-2 border-green-500/70',
      'p-6',
      className
    )}
    {...props}
  />
));
HopeCardSpecial.displayName = 'HopeCardSpecial';

// Critique Card for Spelling Madness page
const CritiqueCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-orange-500/20 to-red-500/20 text-text',
      'border-2 border-orange-500/70',
      'p-6',
      className
    )}
    {...props}
  />
));
CritiqueCard.displayName = 'CritiqueCard';

// Additional Resolution Card for contexts where we need different styling
const ResolutionCardSpecial = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-purple-500/15 to-pink-500/15 text-text',
      'border-purple-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
ResolutionCardSpecial.displayName = 'ResolutionCardSpecial';

// Balance Card for Reform 1835 page
const BalanceCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-gradient-to-br from-amber-500/15 to-orange-500/15 text-text',
      'border-amber-500/50',
      'p-6',
      className
    )}
    {...props}
  />
));
BalanceCard.displayName = 'BalanceCard';

export {
  DidYouKnowCard,
  StatBoxCard,
  InsightCard,
  WarningCard,
  VictoryCard,
  IronyCard,
  QuoteCard,
  AnalysisCard,
  BirthCard,
  ResolutionCard,
  ResultCard,
  ConclusionCard,
  CelebrationCard,
  SuccessCard,
  HopeCard,
  OwnershipCard,
  PurposeCard,
  ResolutionSpecialCard,
  VictoryCardHighlight,
  LessonCardFeatured,
  SurvivalCard,
  FutureCard,
  FeaturedHighlightCard,
  LogicCard,
  RevolutionaryView,
  FerryLaws,
  Conclusion,
  FoundingCard,
  VisionCard,
  AcademyRole,
  StatBox,
  Note,
  ReformCard,
  HopeCardSpecial,
  CritiqueCard,
  ResolutionCardSpecial,
  BalanceCard
};

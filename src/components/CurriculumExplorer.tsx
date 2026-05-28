import { useEffect, useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CurriculumPeriod } from '../types';

type CurriculumExplorerProps = {
  periods: CurriculumPeriod[];
  compact?: boolean;
};

export function CurriculumExplorer({
  periods,
  compact = false,
}: CurriculumExplorerProps) {
  const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(0);
  const selectedPeriod = useMemo(
    () => periods[selectedPeriodIndex] ?? periods[0],
    [periods, selectedPeriodIndex],
  );
  const [openCode, setOpenCode] = useState(selectedPeriod.items[0]?.code ?? '');

  useEffect(() => {
    setOpenCode(selectedPeriod.items[0]?.code ?? '');
  }, [selectedPeriod]);

  return (
    <div className={compact ? 'curriculum-portal curriculum-portal-compact' : 'curriculum-portal'}>
      <div className="curriculum-summary-card">
        <div>
          <h3>Disciplinas obrigatórias</h3>
          <p>
            Visualização da matriz curricular diretamente no portal, organizada por período.
          </p>
        </div>
      </div>

      <div className="curriculum-period-tabs" role="tablist" aria-label="Selecionar período">
        {periods.map((period, index) => (
          <button
            key={period.period}
            type="button"
            className={
              index === selectedPeriodIndex
                ? 'curriculum-period-tab curriculum-period-tab-active'
                : 'curriculum-period-tab'
            }
            onClick={() => setSelectedPeriodIndex(index)}
            role="tab"
            aria-selected={index === selectedPeriodIndex}
          >
            {period.shortLabel}
          </button>
        ))}
      </div>

      <div className="curriculum-meta-row">
        <div className="curriculum-meta-main">
          <span className="curriculum-track-badge">{selectedPeriod.group}</span>
          <strong>
            {selectedPeriod.items.length} disciplina(s) - {selectedPeriod.workload}
          </strong>
        </div>
        <small>{selectedPeriod.period}</small>
      </div>

      <div className="curriculum-course-list">
        {selectedPeriod.items.map((item) => {
          const isOpen = item.code === openCode;
          const summary =
            item.summary ??
            'Componente curricular exibido na matriz interna do portal, com acesso rápido por período letivo.';

          return (
            <article
              key={item.code}
              className={
                isOpen ? 'curriculum-course-card curriculum-course-card-open' : 'curriculum-course-card'
              }
            >
              <button
                type="button"
                className="curriculum-course-trigger"
                onClick={() => setOpenCode(isOpen ? '' : item.code)}
                aria-expanded={isOpen}
              >
                <div className="curriculum-course-top">
                  <div className="curriculum-course-tags">
                    <span className="curriculum-course-code">{item.code}</span>
                    <span className="curriculum-course-hours">{item.hours}</span>
                  </div>
                  <h4>{item.name}</h4>
                </div>
                <ChevronDown
                  size={18}
                  className={isOpen ? 'curriculum-course-icon curriculum-course-icon-open' : 'curriculum-course-icon'}
                />
              </button>

              {isOpen ? (
                <div className="curriculum-course-body">
                  <p>{summary}</p>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>

      {!compact && selectedPeriod.note ? <p className="curriculum-period-note">{selectedPeriod.note}</p> : null}
    </div>
  );
}

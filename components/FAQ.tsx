'use client';

import { useState } from 'react';
import type { FaqItem } from '@/data/pricing';
import { PlusIcon } from './icons';

export default function FAQ({ faq }: { faq: FaqItem[] }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="page">
        <div className="section-head">
          <div className="section-head__left">
            <span className="eyebrow" aria-hidden="true">05 · FAQ · Умови</span>
            <h2 className="section-title" id="faq-title">
              Як ми працюємо.
            </h2>
          </div>
          <p className="section-lede">
            Питання, які ставлять найчастіше. Усе інше — напряму менеджеру.
          </p>
        </div>

        <div className="faq" role="list">
          {faq.map((item, i) => (
            <div
              key={item.q}
              className={`faq__item${open === i ? ' is-open' : ''}`}
              role="listitem"
            >
              <button
                className="faq__q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{item.q}</span>
                <span className="faq__toggle">
                  <PlusIcon />
                </span>
              </button>
              <div
                className="faq__a"
                id={`faq-answer-${i}`}
                role="region"
                aria-label={item.q}
              >
                <div className="faq__a-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

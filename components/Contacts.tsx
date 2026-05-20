'use client';

import { useState } from 'react';
import type { ContactsData } from '@/data/pricing';

const SendIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2L7 9M14 2l-5 12-2-5-5-2 12-5z" />
  </svg>
);

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormState {
  name: string;
  contact: string;
  channels: string;
  format: string;
  msg: string;
  website: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  contact: '',
  channels: 'Мережеве охоплення',
  format: '1/24',
  msg: '',
  website: '',
};

export default function Contacts({ contacts }: { contacts: ContactsData }) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState<FormState>(INITIAL_FORM);

  const set = (patch: Partial<FormState>) => setForm((prev) => ({ ...prev, ...patch }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.contact.trim()) {
      setError("Заповніть обов'язкові поля: Ім'я та Telegram / Email");
      return;
    }

    setError('');
    setStatus('loading');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error || 'Помилка сервера');
      }

      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus('error');
      if (err instanceof Error) setError(err.message);
    }
  };

  const statusMessage = () => {
    if (status === 'success') return '✓ Бриф отримано — відповімо протягом 1–2 годин';
    if (status === 'error') return error || 'Щось пішло не так. Спробуйте ще раз.';
    if (error) return error;
    return contacts.response;
  };

  const statusClass = () => {
    if (status === 'success') return 'is-success';
    if (status === 'error' || error) return 'is-error';
    return '';
  };

  return (
    <section className="section" id="contacts" aria-labelledby="contacts-title">
      <div className="page">
        <div className="section-head">
          <div className="section-head__left">
            <span className="eyebrow" aria-hidden="true">06 · Контакти</span>
            <h2 className="section-title" id="contacts-title">
              Зв&apos;язатись з нами
            </h2>
            <span className="section-note">{contacts.intro}</span>
          </div>
          <p className="section-lede">{contacts.body}</p>
        </div>

        <div className="contacts">
          {/* Direct channels */}
          <div className="contacts__panel">
            <h3>Прямі канали</h3>
            <p className="contacts__intro">
              Напишіть менеджеру напряму — це найшвидший спосіб отримати відповідь і
              зафіксувати слот.
            </p>
            <div className="direct" role="list">
              {contacts.direct.map((d) => (
                <a
                  key={d.label}
                  className="direct__row"
                  href={d.href}
                  target={d.href.startsWith('https://t.me') ? '_blank' : undefined}
                  rel={d.href.startsWith('https://t.me') ? 'noopener noreferrer' : undefined}
                  role="listitem"
                  aria-label={`${d.label}: ${d.value}`}
                >
                  <span className="direct__k">{d.label}</span>
                  <span className="direct__v">{d.value}</span>
                </a>
              ))}
            </div>
            <div className="response" aria-live="polite">{contacts.response}</div>
          </div>

          {/* Brief form */}
          <form className="contacts__panel" onSubmit={handleSubmit} noValidate>
            <h3>Короткий бриф</h3>
            <p className="contacts__intro">
              Вкажіть, які канали або пакет вас цікавлять. У відповідь надішлемо
              наявність слотів та оцінку вартості.
            </p>
            <div className="form">
              <div className="form-row">
                <div className="field">
                  <label htmlFor="f-name">
                    Ім&apos;я <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="f-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => set({ name: e.target.value })}
                    placeholder="Як до вас звертатись"
                    required
                    aria-required="true"
                    aria-invalid={!!error && !form.name.trim() ? 'true' : 'false'}
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="field">
                  <label htmlFor="f-contact">
                    Telegram / Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="f-contact"
                    type="text"
                    value={form.contact}
                    onChange={(e) => set({ contact: e.target.value })}
                    placeholder="@username або email"
                    required
                    aria-required="true"
                    aria-invalid={!!error && !form.contact.trim() ? 'true' : 'false'}
                    disabled={status === 'loading'}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="f-channels">Цікавить</label>
                  <select
                    id="f-channels"
                    value={form.channels}
                    onChange={(e) => set({ channels: e.target.value })}
                    disabled={status === 'loading'}
                  >
                    <option>Один канал</option>
                    <option>Стартовий мікс</option>
                    <option>Мережеве охоплення</option>
                    <option>Діаспора</option>
                    <option>Повний цикл послуг</option>
                    <option>Поки не визначились</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="f-format">Формат</label>
                  <select
                    id="f-format"
                    value={form.format}
                    onChange={(e) => set({ format: e.target.value })}
                    disabled={status === 'loading'}
                  >
                    <option>1/24</option>
                    <option>2/48</option>
                    <option>2/без видалення</option>
                    <option>Нативна реклама</option>
                    <option>Поки не визначились</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="f-msg">Бриф</label>
                <textarea
                  id="f-msg"
                  rows={4}
                  value={form.msg}
                  onChange={(e) => set({ msg: e.target.value })}
                  placeholder="Цільова аудиторія, бажані дати, орієнтовний бюджет."
                  disabled={status === 'loading'}
                />
              </div>
                <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  width: 1,
                  height: 1,
                  overflow: 'hidden',
                }}
              >
                <label htmlFor="f-website">Website</label>
                <input
                  id="f-website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) => set({ website: e.target.value })}
                />
              </div>
              <div className="form-cta">
                <small
                  className={statusClass()}
                  role="status"
                  aria-live="polite"
                >
                  {statusMessage()}
                </small>
                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={status === 'loading' || status === 'success'}
                >
                  {status === 'loading'
                    ? 'Надсилаємо…'
                    : status === 'success'
                      ? 'Надіслано'
                      : 'Надіслати бриф'}{' '}
                  <SendIcon />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CareersSection } from '../components/CareersSection';

export const CareersPage = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Page Header */}
      <PageHeader
        badge="07 | RECRUITMENT & HIRING"
        title="Careers at"
        highlight="Trivanta Impex"
        subtitle="Join our disciplined security force, specialized facility teams, and command operations. We offer timely salary, statutory benefits (EPF/ESIC), professional training, and clear career progression."
        breadcrumb={[{ label: 'Careers' }]}
      />

      {/* Careers Section Component */}
      <CareersSection />
    </div>
  );
};

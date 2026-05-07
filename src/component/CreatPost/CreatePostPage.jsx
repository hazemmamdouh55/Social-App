import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@heroui/react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpenText, Scale, Shield, Sparkles, ArrowLeft, ArrowRight, Award,
  BriefcaseBusiness, Building2, CalendarDays, GraduationCap, HandCoins,
  MapPin, MessageSquareText, MoonStar, Zap, Smile, CircleUserRound, Heart,
  LocateFixed, UserRoundCheck, BadgeCheck, Brain, Lightbulb, Wrench, Rocket,
  CheckCircle2
} from 'lucide-react'
import { useWizardForm } from '../../context/WizardFormContext'

// ==========================================
// Shared: FieldLabel
// ==========================================
function FieldLabel({ icon, label, required = false }) {
  return (
    <p className="mb-1 flex items-center gap-2 text-base font-semibold text-[#0A0A0A]">
      <span className="text-[#9810FA]">{icon}</span>
      {label}
      {required ? <span className="text-[#FB2C36]">*</span> : null}
    </p>
  )
}

// ==========================================
// Shared: TraitSelection (steps 2-6)
// ==========================================
function TraitSelection({ step, percent, title, subtitle, helperText, options, selectionKey, multiSelect = false, onBack, onNext }) {
  const { selections, setSelection } = useWizardForm()
  const current = selections[selectionKey] || []
  const MotionButton = motion.button

  const handleSelect = (id) => {
    if (multiSelect) {
      setSelection(selectionKey, current.includes(id) ? current.filter(i => i !== id) : [...current, id])
    } else {
      setSelection(selectionKey, [id])
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFCFF]">
      <header className="border-b border-[#E5E7EB] bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-4 md:px-6">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#364153] cursor-pointer" onClick={onBack}>
            <ArrowLeft size={16} /> Back
          </p>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-r from-[#9810FA] to-[#155DFC] p-3 text-white">
              <BriefcaseBusiness size={22} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#0A0A0A] md:text-4xl">Post a Teaching Position</h1>
              <p className="text-base text-[#4A5565]">Find the perfect teacher match for your school</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-5 md:px-5">
        <div className="mb-5 rounded-2xl border border-[#E5E7EB] bg-white p-4">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold">
            <span className="text-[#364153]">Step {step} of 7</span>
            <span className="text-[#9810FA]">{percent}% Complete</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#E5E7EB]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              className="h-full rounded-full bg-gradient-to-r from-[#9810FA] to-[#155DFC]"
            />
          </div>
        </div>

        <section className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-bold text-[#0A0A0A]">{title}</h2>
          <p className="mb-2 text-base text-[#4A5565]">{subtitle}</p>
          {helperText && <p className="mb-5 text-sm text-[#9810FA] font-medium">{helperText}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {options.map((opt) => {
              const isSelected = current.includes(opt.id)
              return (
                <MotionButton
                  key={opt.id}
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleSelect(opt.id)}
                  className={`p-5 rounded-2xl border-2 transition-all flex items-start gap-4 text-left w-full ${
                    isSelected
                      ? 'border-[#9810FA] bg-purple-50 shadow-md'
                      : 'border-[#E5E7EB] bg-white hover:border-[#9810FA]/40'
                  }`}
                >
                  <div className={`p-3 rounded-xl flex-shrink-0 ${isSelected ? 'bg-gradient-to-r from-[#9810FA] to-[#155DFC] text-white' : 'bg-[#F3F4F6] text-[#4A5565]'}`}>
                    <opt.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#0A0A0A]">{opt.title}</h4>
                    <p className="text-sm text-[#4A5565]">{opt.description}</p>
                  </div>
                </MotionButton>
              )
            })}
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="flat"
              onPress={onBack}
              className="h-12 min-w-[120px] rounded-xl bg-[#F3F4F6] px-6 text-base font-semibold text-[#99A1AF]"
              startContent={<ArrowLeft size={16} />}
            >
              Back
            </Button>
            <Button
              isDisabled={current.length === 0}
              onPress={onNext}
              className={`h-12 min-w-[120px] rounded-xl px-6 text-base font-semibold transition-all ${
                current.length > 0
                  ? 'bg-gradient-to-r from-[#9810FA] to-[#155DFC] text-white shadow-lg'
                  : 'bg-[#EEF2F7] text-[#99A1AF]'
              }`}
              endContent={<ArrowRight size={16} />}
            >
              Next
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

// ==========================================
// Step 1: Job Details
// ==========================================
function StepJobDetails({ onNext, onBack }) {
  const { jobDetails, setJobField } = useWizardForm()
  const subjects = useMemo(() => [
    'Mathematics', 'Science', 'English', 'Arabic', 'Physics', 'Chemistry',
    'Biology', 'History', 'Geography', 'Computer Science', 'Art', 'Music', 'Physical Education',
  ], [])
  const MotionButton = motion.button

  const isFormValid =
    jobDetails.location?.trim() !== '' &&
    jobDetails.positionTitle?.trim() !== '' &&
    jobDetails.subjects?.length > 0 &&
    jobDetails.requiredExperience?.trim() !== '' &&
    jobDetails.salaryRange?.trim() !== ''

  const toggleSubject = (subject) => {
    const next = jobDetails.subjects?.includes(subject)
      ? jobDetails.subjects.filter(i => i !== subject)
      : [...(jobDetails.subjects || []), subject]
    setJobField('subjects', next)
  }

  return (
    <div className="min-h-screen bg-[#FAFCFF]">
      <header className="border-b border-[#E5E7EB] bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-4 md:px-6">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#364153] cursor-pointer" onClick={onBack}>
            <ArrowLeft size={16} /> Back to Dashboard
          </p>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-r from-[#9810FA] to-[#155DFC] p-3 text-white">
              <BriefcaseBusiness size={22} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#0A0A0A] md:text-4xl">Post a Teaching Position</h1>
              <p className="text-base text-[#4A5565]">Find the perfect teacher match for your school</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-5 md:px-5">
        <div className="mb-5 rounded-2xl border border-[#E5E7EB] bg-white p-4">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold">
            <span className="text-[#364153]">Step 1 of 7</span>
            <span className="text-[#9810FA]">13% Complete</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#E5E7EB]">
            <div className="h-full w-[13%] rounded-full bg-gradient-to-r from-[#9810FA] to-[#155DFC]" />
          </div>
        </div>

        <section className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm md:p-5">
          <h2 className="text-3xl font-bold text-[#0A0A0A]">Job Details</h2>
          <p className="mb-5 text-base text-[#4A5565]">Let's start with the basic information about the position</p>

          <div className="space-y-4">
            <FieldLabel icon={<Building2 size={16} />} label="School Name" />
            <input value={jobDetails.schoolName} onChange={e => setJobField('schoolName', e.target.value)} placeholder="Enter your school name" className="w-full rounded-xl border border-[#E5E7EB] px-3 py-3 text-sm outline-none focus:border-[#155DFC]" />

            <FieldLabel icon={<MapPin size={16} />} label="Location" required />
            <input value={jobDetails.location} onChange={e => setJobField('location', e.target.value)} placeholder="City, Country" className="w-full rounded-xl border border-[#E5E7EB] px-3 py-3 text-sm outline-none focus:border-[#155DFC]" />

            <FieldLabel icon={<GraduationCap size={16} />} label="Position Title" required />
            <input value={jobDetails.positionTitle} onChange={e => setJobField('positionTitle', e.target.value)} placeholder="e.g., High School Math Teacher" className="w-full rounded-xl border border-[#E5E7EB] px-3 py-3 text-sm outline-none focus:border-[#155DFC]" />

            <FieldLabel icon={<BookOpenText size={16} />} label="Subjects" required />
            <div className="flex flex-wrap gap-2.5">
              {subjects.map((subject) => {
                const selected = jobDetails?.subjects?.includes(subject)
                return (
                  <MotionButton
                    key={subject}
                    type="button"
                    whileHover={{ y: -2, x: 1 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => toggleSubject(subject)}
                    className={`rounded-xl px-3 py-2 text-sm font-semibold text-left transition sm:text-base ${
                      selected
                        ? 'bg-gradient-to-r from-[#9810FA] to-[#155DFC] text-white shadow'
                        : 'bg-[#FAFCFF] text-[#364153] hover:bg-[#EFF6FF]'
                    }`}
                  >
                    {subject}
                  </MotionButton>
                )
              })}
            </div>

            <FieldLabel icon={<Award size={16} />} label="Required Experience" required />
            <select value={jobDetails.requiredExperience} onChange={e => setJobField('requiredExperience', e.target.value)} className="w-full rounded-xl border-2 border-[#9810FA] px-4 py-3 text-base outline-none focus:border-[#155DFC] md:text-lg">
              <option value="">Select experience level</option>
              <option>0-2 years</option>
              <option>3-5 years</option>
              <option>6-10 years</option>
              <option>10+ years</option>
            </select>

            <FieldLabel icon={<GraduationCap size={16} />} label="Required Qualifications" />
            <textarea rows={2} value={jobDetails.qualifications} onChange={e => setJobField('qualifications', e.target.value)} placeholder="e.g., Bachelor's Education, Teaching License" className="w-full rounded-xl border border-[#E5E7EB] px-3 py-3 text-sm outline-none focus:border-[#155DFC]" />

            <FieldLabel icon={<CalendarDays size={16} />} label="Start Date" />
            <input type="date" value={jobDetails.startDate} onChange={e => setJobField('startDate', e.target.value)} className="w-full rounded-xl border border-[#E5E7EB] px-3 py-3 text-sm outline-none focus:border-[#155DFC]" />

            <FieldLabel icon={<HandCoins size={16} />} label="Salary Range" required />
            <input value={jobDetails.salaryRange} onChange={e => setJobField('salaryRange', e.target.value)} placeholder="e.g., $40,000 - $60,000 per year" className="w-full rounded-xl border border-[#E5E7EB] px-3 py-3 text-sm outline-none focus:border-[#155DFC]" />

            <FieldLabel icon={<MessageSquareText size={16} />} label="Additional Information" />
            <textarea rows={3} value={jobDetails.additionalInfo} onChange={e => setJobField('additionalInfo', e.target.value)} placeholder="Any other details about the position..." className="w-full rounded-xl border border-[#E5E7EB] px-3 py-3 text-sm outline-none focus:border-[#155DFC]" />
          </div>
        </section>

        <div className="mt-5 flex items-center justify-between">
          <Button variant="flat" onPress={onBack} className="h-12 min-w-[120px] rounded-xl bg-[#F3F4F6] px-6 text-base font-semibold text-[#99A1AF]" startContent={<ArrowLeft size={16} />}>
            Back
          </Button>
          <Button isDisabled={!isFormValid} onPress={onNext} className={`h-12 min-w-[120px] rounded-xl px-6 text-base font-semibold transition-all ${isFormValid ? 'bg-gradient-to-r from-[#9810FA] to-[#155DFC] text-white shadow-lg' : 'bg-[#EEF2F7] text-[#99A1AF]'}`} endContent={<ArrowRight size={16} />}>
            Next
          </Button>
        </div>
      </main>
    </div>
  )
}

// ==========================================
// Step 7: Report
// ==========================================
const labelMaps = {
  teachingStyle: { strict: 'Strict', flexible: 'Flexible', structured: 'Structured', 'free-flowing': 'Free-flowing' },
  classroomEnergy: { calm: 'Calm', energetic: 'Energetic', balanced: 'Balanced', playful: 'Playful' },
  leadershipStyle: { leader: 'Leader', supporter: 'Supporter', collaborator: 'Collaborator', mentor: 'Mentor' },
  communicationStyle: { direct: 'Direct', empathetic: 'Empathetic', formal: 'Formal', casual: 'Casual' },
  problemSolving: { analytical: 'Analytical', creative: 'Creative', practical: 'Practical', innovative: 'Innovative' },
}

function DetailItem({ label, value, className = '' }) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold text-[#4A5565]">{label}</p>
      <p className="font-medium text-[#1E2939]">{value || '-'}</p>
    </div>
  )
}

function TagRow({ title, values }) {
  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-white p-4">
      <p className="mb-2 text-sm font-semibold text-[#1E2939]">{title}</p>
      <div className="flex flex-wrap gap-2">
        {values.length > 0 ? values.map(v => (
          <span key={v} className="rounded-full bg-gradient-to-r from-[#9810FA] to-[#155DFC] px-3 py-1 text-xs font-semibold text-white">{v}</span>
        )) : <span className="text-sm text-[#99A1AF]">No data selected</span>}
      </div>
    </div>
  )
}

function StepReport({ onBack, onPublish }) {
  const { jobDetails, selections } = useWizardForm()
  const navigate = useNavigate()

  const getLabels = (key) => (selections[key] ?? []).map(i => labelMaps[key]?.[i] ?? i)

  return (
    <div className="min-h-screen bg-[#FAFCFF]">
      <header className="border-b border-[#E5E7EB] bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-4 md:px-6">
          <p onClick={() => navigate('/dashboard')} className="mb-3 flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#364153]">
            <ArrowLeft size={16} /> Back to Dashboard
          </p>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-r from-[#9810FA] to-[#155DFC] p-3 text-white">
              <BriefcaseBusiness size={22} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#0A0A0A] md:text-4xl">Post a Teaching Position</h1>
              <p className="text-base text-[#4A5565]">Find the perfect teacher match for your school</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-5 md:px-6">
        <div className="mb-5 rounded-2xl border border-[#E5E7EB] bg-white p-4">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold">
            <span className="text-[#364153]">Step 7 of 7</span>
            <span className="text-[#9810FA]">100% Complete</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#E5E7EB]">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-[#9810FA] to-[#155DFC]" />
          </div>
        </div>

        <section className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm md:p-6">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white">
              <CheckCircle2 size={28} />
            </div>
            <h2 className="text-2xl font-bold text-[#1E2939] md:text-4xl">Review Your Job Posting</h2>
            <p className="text-sm text-[#4A5565] md:text-base">Please review all details before publishing</p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl bg-[#FAFCFF] p-4">
              <h3 className="mb-3 text-lg font-bold text-[#1E2939]">Job Details</h3>
              <div className="grid grid-cols-1 gap-3 text-sm text-[#364153] md:grid-cols-2">
                <DetailItem label="School Name" value={jobDetails.schoolName} />
                <DetailItem label="Position" value={jobDetails.positionTitle} />
                <DetailItem label="Location" value={jobDetails.location} />
                <DetailItem label="Salary Range" value={jobDetails.salaryRange} />
                <DetailItem label="Experience Required" value={jobDetails.requiredExperience} />
                <DetailItem label="Start Date" value={jobDetails.startDate} />
              </div>
              <div className="mt-3 text-sm text-[#364153]">
                <p className="font-semibold">Subjects</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {(jobDetails.subjects || []).map(s => (
                    <span key={s} className="rounded-full bg-gradient-to-r from-[#9810FA] to-[#155DFC] px-3 py-1 text-xs font-semibold text-white">{s}</span>
                  ))}
                </div>
              </div>
              <DetailItem label="Qualifications" value={jobDetails.qualifications} className="mt-3" />
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#1E2939]">Ideal Teacher Personality</h3>
              <TagRow title="Teaching Style" values={getLabels('teachingStyle')} />
              <TagRow title="Classroom Energy" values={getLabels('classroomEnergy')} />
              <TagRow title="Leadership Style" values={getLabels('leadershipStyle')} />
              <TagRow title="Communication Style" values={getLabels('communicationStyle')} />
              <TagRow title="Problem-Solving Approach" values={getLabels('problemSolving')} />
            </div>
          </div>
        </section>

        <div className="mt-5 flex items-center justify-between">
          <Button variant="flat" onPress={onBack} className="h-11 min-w-[110px] rounded-xl bg-white px-5 text-sm font-semibold text-[#364153] shadow" startContent={<ArrowLeft size={16} />}>
            Back
          </Button>
          <Button onPress={onPublish} className="h-11 min-w-[140px] rounded-xl bg-emerald-500 px-5 text-sm font-semibold text-white">
            Publish Job
          </Button>
        </div>
      </main>
    </div>
  )
}

// ==========================================
// Main Wizard Controller
// ==========================================
export default function WizardPage() {
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  const next = () => setStep(s => s + 1)
  const back = () => setStep(s => s - 1)

  const steps = [
    <StepJobDetails onNext={next} onBack={() => navigate(-1)} />,

    <TraitSelection
      step={2} percent={25} title="Teaching Style"
      subtitle="How should the teacher approach classroom management?"
      options={[
        { id: 'strict', title: 'Strict', description: 'Firm rules and high expectations', icon: Shield },
        { id: 'flexible', title: 'Flexible', description: 'Adaptable and open to change', icon: Scale },
        { id: 'structured', title: 'Structured', description: 'Organized with clear routines', icon: BookOpenText },
        { id: 'free-flowing', title: 'Free-flowing', description: 'Spontaneous and creative approach', icon: Sparkles },
      ]}
      selectionKey="teachingStyle"
      onBack={back} onNext={next}
    />,

    <TraitSelection
      step={3} percent={38} title="Classroom Energy"
      subtitle="What energy level works best for your students?"
      options={[
        { id: 'calm', title: 'Calm', description: 'Peaceful and composed atmosphere', icon: MoonStar },
        { id: 'energetic', title: 'Energetic', description: 'High-energy and dynamic', icon: Zap },
        { id: 'balanced', title: 'Balanced', description: 'Mix of calm and energetic', icon: Scale },
        { id: 'playful', title: 'Playful', description: 'Fun and engaging environment', icon: Smile },
      ]}
      selectionKey="classroomEnergy"
      onBack={back} onNext={next}
    />,

    <TraitSelection
      step={4} percent={50} title="Leadership Style"
      subtitle="How should the teacher lead and interact with students?"
      helperText="You can select multiple traits"
      multiSelect
      options={[
        { id: 'leader', title: 'Leader', description: 'Takes charge and guides decisively', icon: LocateFixed },
        { id: 'supporter', title: 'Supporter', description: 'Nurtures and encourages growth', icon: Heart },
        { id: 'collaborator', title: 'Collaborator', description: 'Works together as a team', icon: CircleUserRound },
        { id: 'mentor', title: 'Mentor', description: 'Guides through experience', icon: UserRoundCheck },
      ]}
      selectionKey="leadershipStyle"
      onBack={back} onNext={next}
    />,

    <TraitSelection
      step={5} percent={63} title="Communication Style"
      subtitle="How should the teacher communicate with students?"
      options={[
        { id: 'direct', title: 'Direct', description: 'Clear and straightforward', icon: LocateFixed },
        { id: 'empathetic', title: 'Empathetic', description: 'Understanding and compassionate', icon: Heart },
        { id: 'formal', title: 'Formal', description: 'Professional and respectful', icon: BadgeCheck },
        { id: 'casual', title: 'Casual', description: 'Friendly and approachable', icon: Smile },
      ]}
      selectionKey="communicationStyle"
      onBack={back} onNext={next}
    />,

    <TraitSelection
      step={6} percent={75} title="Problem-Solving Approach"
      subtitle="How should the teacher tackle challenges?"
      helperText="You can select multiple traits"
      multiSelect
      options={[
        { id: 'analytical', title: 'Analytical', description: 'Data-driven and logical', icon: Brain },
        { id: 'creative', title: 'Creative', description: 'Innovative and imaginative', icon: Lightbulb },
        { id: 'practical', title: 'Practical', description: 'Hands-on and realistic', icon: Wrench },
        { id: 'innovative', title: 'Innovative', description: 'Forward-thinking and bold', icon: Rocket },
      ]}
      selectionKey="problemSolving"
      onBack={back} onNext={next}
    />,

    <StepReport onBack={back} onPublish={() => navigate('/dashboard')} />,
  ]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.25 }}
      >
        {steps[step - 1]}
      </motion.div>
    </AnimatePresence>
  )
}
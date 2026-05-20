import React, { useState } from 'react';
import { Menu, X, Download, ChevronDown, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [expandedExperience, setExpandedExperience] = useState(null);

  const navItems = [
    { id: 'home', label: 'Summary' },
    { id: 'experience', label: 'Experience' },
    { id: 'entrepreneurship', label: 'Ventures' },
    { id: 'projects', label: 'Projects' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'competitions', label: 'Awards' },
    { id: 'education', label: 'Education' },
    { id: 'extracurricular', label: 'Extra' },
  ];

  const experiences = [
    {
      id: 'gradgo',
      company: 'GradGo',
      position: 'Chief Business Officer',
      period: 'July 2025 - Present',
      details: [
        'Spearheaded AI, SaaS, digital marketing, and GTM consulting operations targeting the $300B+ global consulting market, drove 40% MoM revenue growth through acquisitions',
        'Closed 30+ startups and enterprise deals through sales execution, proposal structuring, MoU negotiations, stakeholder management, Zoho CRM-driven conversion of 100+ leads',
        'Secured a 40% partnership with IndiaFilings; led a 10-member intern and freelance team using Notion and Confluence workflows, improving project delivery efficiency by 30%',
      ]
    },
    {
      id: 'prepsom',
      company: 'PrepSOM Labs',
      position: 'Founder\'s Office Intern',
      period: 'July 2025 - September 2025',
      details: [
        'Spearheaded business development for PrepSummit 2025, engaging 2,000+ students, 650+ colleges, and 200+ hiring partners, generating 30+ institutional partnerships',
        'Drove collaboration across EdTech platforms, placement cells, and hiring agencies through mass mailing, cold calls, strategic proposals, and recruiter onboarding pitch decks',
        'Worked with product and tech teams to propose AI-powered mock interview modules and alumni dashboards, enhancing platform usability and customer engagement',
        'Oversaw CRM-driven candidate pipelines and coordinated aptitude, case study, and interview simulations, ensuring seamless execution and stakeholder coordination',
      ]
    },
    {
      id: 'laneway',
      company: 'Laneway Official',
      position: 'Product Management Intern',
      period: 'June 2025 - July 2025',
      details: [
        'Led vendor acquisition for Indian artisan products leveraging Ministry of Textiles databases to onboard vendors and tap the $20B+ global handicraft market',
        'Drove product strategy, UI/UX enhancements, and wireframe development for new website features, improving engagement, product visibility, and customer conversion',
        'Coordinated a 20-member cross-functional team, aligning weekly deliverables across product, marketing, operations, and technology functions for streamlined execution',
        'Conducted ICP design and market research across 50+ Tier-2 and Tier-3 cities, shaping customer acquisition, demand forecasting, and scalable GTM strategies',
        'Built cold-call templates, email sequences, and outreach workflows, reducing lead-generation effort by 20% while improving sales efficiency and CRM tracking',
        'Proposed SEO, LinkedIn, Instagram, and mobile-ad strategies to strengthen digital outreach, early-stage customer engagement, lead generation, and brand visibility tactics',
      ]
    },
    {
      id: 'quantum',
      company: 'Quantum Quotient Consulting',
      position: 'Business Development Executive',
      period: 'June 2025 - August 2025',
      details: [
        'Designed Ideal Customer Profiles for BosonBridge & QuarkQuest targeting $10B+ industries through market research, customer segmentation, and competitive benchmarking',
        'Implemented CRM workflows for lead tracking, follow-ups, and pipeline management, improving outbound sales efficiency, coordination, and conversion processes by 25%',
        'Conducted competitor benchmarking and pricing analysis to identify user personas, value propositions, and scalable go-to-market strategies across multiple service verticals',
        'Executed 3,000+ cold calls and email campaigns using structured outbound playbooks, securing 5 successful client conversions for white-collar workforce solutions',
        'Created corporate pitch decks, negotiation scripts, and client engagement frameworks, driving stakeholder meetings and deal closures from outreach to final contract sign-off',
      ]
    },
  ];

  const projects = [
    {
      title: 'Equity Research & Valuation',
      subtitle: 'Amara Raja Energy & Mobility Investment Thesis',
      date: 'August 2025',
      highlights: [
        'Developed BUY-side equity research thesis analyzing strategic expansion into 16 GWh ACC battery market',
        'Performed SOTP and DCF valuation using EV/EBITDA, revenue CAGR, and segment-wise growth analysis',
        'Identified ~44% upside from current valuation levels',
        'Evaluated FY25 revenue of ₹12,405 Cr, debt-equity ratio, peer benchmarking, and execution milestones',
      ]
    },
    {
      title: 'Digital Marketing & SEO Strategy',
      subtitle: 'GreenGlow Skincare',
      date: 'February 2026',
      highlights: [
        'Developed 30-day social strategy with 6 content domains and engagement flows',
        'Built GTM audience segmentation strategies across Instagram, YouTube, LinkedIn, Pinterest, TikTok, Reddit',
        'Aligned 4 customer personas with conversion-focused content funnels',
        'Designed SEO content framework with keyword research, analytics dashboards, and performance tracking systems',
      ]
    },
  ];

  const awards = [
    {
      title: 'Gold - GC Case Study 2025',
      description: 'Developed AI-driven EQ/RQ model for Deloitte',
      scale: '20+ halls, 18,000+ students'
    },
    {
      title: 'Gold - GC Product Management 2025',
      description: 'Unified insurance platform with telemedicine integration',
      scale: '20+ halls, 18,000+ students'
    },
    {
      title: 'Gold - GC Product Management 2026',
      description: 'Deutsche Telekom MagentaCard GTM & fintech adoption strategy',
      scale: '20+ halls, 18,000+ students'
    },
    {
      title: 'Silver - OpenIIT Supply Chain 2025',
      description: 'Tech-enabled banana supply-chain strategy (₹2,500+ Cr loss reduction)',
      scale: '15,000+ students'
    },
    {
      title: 'Global Finalist - Empressario\'26',
      description: 'Asia\'s largest business model competition for Aithro venture',
      scale: '6,000+ participants'
    },
    {
      title: 'Top 50 - Smart India Hackathon 2025',
      description: 'Selected from 300+ teams for technological innovation expertise',
      scale: '300+ teams'
    },
  ];

  const leadership = [
    {
      position: 'Core Team Head',
      organization: 'Megalith, IIT Kharagpur',
      period: 'July 2025 - April 2026',
      achievements: [
        'Secured 20+ brand partnerships through outreach to 700+ companies',
        'Managed 30-member team for fest operations and stakeholder coordination',
      ]
    },
    {
      position: 'Senior Executive / Manager',
      organization: 'Innovation and Incubation Cell (IIC), IIT Kharagpur',
      period: 'August 2025 - April 2026',
      achievements: [
        'Drove startup ecosystem initiatives via MNFIC collaboration',
        'Led 40-member managerial structure and 15-member execution team',
      ]
    },
    {
      position: 'General Secretary',
      organization: 'Civil Engineering Society (CES), IIT Kharagpur',
      period: 'September 2025 - April 2026',
      achievements: [
        'Directed 10+ academic and professional events engaging 500+ students',
        'Managed 10-member secretary team for execution',
      ]
    },
    {
      position: 'President / Chapter Coordinator',
      organization: 'Nation Building Impact Chapter, IIT Kharagpur',
      period: 'October 2025 - Present',
      achievements: [
        'Led 27-member team across Marketing, Strategic, and College Initiatives',
        'Executed campus programs addressing student engagement and civic impact',
      ]
    },
  ];

  const extraCurricular = [
    {
      category: 'Social & Cultural',
      items: [
        'Vice Captain for Asia\'s largest Diwali Illumination at Patel Hall (50+ member team)',
        'Finalist in GC Hindi and English Debate & Elocution competitions (60+ participants)',
        '150+ state-level debate and essay competition awards during school',
      ]
    },
    {
      category: 'Technology & Strategy',
      items: [
        'Podium finishes in case study, product management, and design competitions (Vice Captain, 20+ member team)',
        'Gold Medal recognition from CM Shri Naveen Patnaik and Governors',
        '7th state rank in Pathani Samanta Mathematics Scholarship Test',
        'Strong interest in geopolitics and strategic thinking',
      ]
    },
    {
      category: 'Sports',
      items: [
        'Bronze in Open IIT and Shaurya Shot Put competitions',
        '3rd position in Open IIT Rubik\'s Cube competition (100+ enthusiasts)',
        'Shot Put team member under National Sports Organisation, IIT Kharagpur',
      ]
    },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white font-sans">
      {/* HEADER - MOBILE OPTIMIZED */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent truncate">
            ASHUTOSH PALAI
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-slate-100 border-b-2 border-blue-400'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="flex items-center gap-1 sm:gap-2 bg-blue-600 hover:bg-blue-700 px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-colors duration-200 whitespace-nowrap">
              <Download size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">CV</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-slate-300 hover:text-white p-1"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-900/95 px-4 py-3 space-y-1 max-h-96 overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-slate-700/50 text-slate-100 font-medium'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-16 sm:pt-20">
        {/* HERO SECTION */}
        <section id="home" className="px-4 sm:px-6 py-12 sm:py-16 border-b border-slate-800/50">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Ashutosh Palai
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-light tracking-wide">
                Dual Degree (B.Tech + M.Tech), Civil Engineering
              </p>
              <p className="text-base sm:text-lg text-slate-400">
                IIT Kharagpur | Class of 2028
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Driving scalable business growth, product strategy, and operational excellence through strategic consulting, venture building, and data-driven decision making.
            </p>

            {/* KEY METRICS - MOBILE OPTIMIZED BENTO GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8">
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-slate-800/60 transition-colors duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-xs sm:text-sm text-slate-400">MoM Revenue Growth</div>
              </div>
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-slate-800/60 transition-colors duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">30+</div>
                <div className="text-xs sm:text-sm text-slate-400">Enterprise Deals</div>
              </div>
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-slate-800/60 transition-colors duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">4x</div>
                <div className="text-xs sm:text-sm text-slate-400">Gold Medalist</div>
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section id="experience" className="px-4 sm:px-6 py-12 sm:py-16 border-b border-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 tracking-tight">Professional Experience</h2>
            <div className="space-y-3">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-slate-800/20 border border-slate-700/50 rounded-lg overflow-hidden hover:border-slate-600/50 transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedExperience(expandedExperience === exp.id ? null : exp.id)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-start hover:bg-slate-800/40 transition-colors duration-200"
                  >
                    <div className="text-left flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-100">{exp.position}</h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">{exp.company}</p>
                      <p className="text-xs text-slate-500 mt-2 font-mono">{exp.period}</p>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-slate-400 transition-transform duration-300 ml-3 flex-shrink-0 ${
                        expandedExperience === exp.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedExperience === exp.id && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0 border-t border-slate-700/30 space-y-3">
                      {exp.details.map((detail, idx) => (
                        <div key={idx} className="flex gap-3">
                          <ArrowRight size={16} className="text-blue-400 flex-shrink-0 mt-1" />
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENTREPRENEURSHIP */}
        <section id="entrepreneurship" className="px-4 sm:px-6 py-12 sm:py-16 border-b border-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 tracking-tight">Entrepreneurial Ventures</h2>
            <div className="bg-slate-800/20 border border-slate-700/50 rounded-lg p-5 sm:p-8 space-y-5 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-2">Aithro</h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-4">Chief Business Officer | October 2025 - Present</p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-blue-400 flex-shrink-0 text-lg leading-none">•</span>
                    <span className="text-xs sm:text-sm text-slate-300">Built business foundation for dual-platform library-tech venture Studoo and Padhloo, defining subscriptions, pricing models, customer segmentation, monetization frameworks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 flex-shrink-0 text-lg leading-none">•</span>
                    <span className="text-xs sm:text-sm text-slate-300">Designed operational workflows and scalable platform strategies for students and library owners, including onboarding systems, feature planning, and execution roadmaps</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 flex-shrink-0 text-lg leading-none">•</span>
                    <span className="text-xs sm:text-sm text-slate-300">Expanded operations by onboarding 10+ libraries across Patna and Kolkata, driving 60+ student registrations platform-wide</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 flex-shrink-0 text-lg leading-none">•</span>
                    <span className="text-xs sm:text-sm text-slate-300">Led 10+ member cross-functional team in investor pitching and financial strategy, TAM-SAM-SOM analysis for 31+ Cr market, expenditure forecasting, growth projections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* STRATEGIC PROJECTS */}
        <section id="projects" className="px-4 sm:px-6 py-12 sm:py-16 border-b border-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 tracking-tight">Strategic Projects & Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-slate-800/20 border border-slate-700/50 rounded-lg p-5 sm:p-8 hover:border-slate-600/50 hover:bg-slate-800/30 transition-all duration-300">
                  <div className="text-xs font-mono text-slate-500 mb-3">{project.date}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-1">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mb-5">{project.subtitle}</p>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="flex gap-3">
                        <span className="text-blue-400 text-xs flex-shrink-0 mt-1">▸</span>
                        <span className="text-xs sm:text-sm text-slate-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPETITIONS & AWARDS */}
        <section id="competitions" className="px-4 sm:px-6 py-12 sm:py-16 border-b border-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 tracking-tight">Corporate Competitions & Awards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {awards.map((award, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-900/20 to-slate-800/20 border border-slate-700/50 rounded-lg p-5 sm:p-6 hover:border-blue-600/50 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-2"></div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-100 text-xs sm:text-sm">{award.title}</h3>
                      <p className="text-xs text-slate-500 mt-1 font-mono">{award.scale}</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section id="leadership" className="px-4 sm:px-6 py-12 sm:py-16 border-b border-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 tracking-tight">Leadership & Positions of Responsibility</h2>
            <div className="space-y-6">
              {leadership.map((role, idx) => (
                <div key={idx} className="border-l-2 border-blue-400 pl-4 sm:pl-6 py-4">
                  <h3 className="font-semibold text-slate-100 text-base sm:text-lg">{role.position}</h3>
                  <p className="text-xs sm:text-sm text-slate-400">{role.organization}</p>
                  <p className="text-xs text-slate-500 font-mono mt-2">{role.period}</p>
                  <ul className="mt-4 space-y-2">
                    {role.achievements.map((achievement, aidx) => (
                      <li key={aidx} className="flex gap-3 text-xs sm:text-sm text-slate-300">
                        <span className="text-blue-400 flex-shrink-0">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="px-4 sm:px-6 py-12 sm:py-16 border-b border-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 tracking-tight">Education</h2>
            
            {/* Mobile View - Stacked Cards */}
            <div className="sm:hidden space-y-4">
              {[
                { year: '2028', program: 'Dual Degree (B.Tech + M.Tech), Civil Engineering', institution: 'IIT Kharagpur', score: '7.7 CGPA' },
                { year: '2023', program: 'Class XII, CHSE', institution: 'Adyant Higher Secondary School', score: '85%' },
                { year: '2021', program: 'Class X, CHSE', institution: 'Saraswati Shishu Vidya Mandir, Unit-8', score: '93.75%' },
              ].map((edu, idx) => (
                <div key={idx} className="bg-slate-800/20 border border-slate-700/50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-slate-100 text-sm">{edu.year}</h3>
                    <span className="text-blue-400 font-semibold text-sm">{edu.score}</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2">{edu.program}</p>
                  <p className="text-xs text-slate-400">{edu.institution}</p>
                </div>
              ))}
            </div>

            {/* Desktop View - Table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-3 px-4 text-slate-300 font-semibold">Year</th>
                    <th className="text-left py-3 px-4 text-slate-300 font-semibold">Program</th>
                    <th className="text-left py-3 px-4 text-slate-300 font-semibold">Institution</th>
                    <th className="text-left py-3 px-4 text-slate-300 font-semibold">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                    <td className="py-3 px-4 text-slate-400">2028</td>
                    <td className="py-3 px-4 text-slate-300">Dual Degree (B.Tech + M.Tech), Civil Engineering</td>
                    <td className="py-3 px-4 text-slate-300">IIT Kharagpur</td>
                    <td className="py-3 px-4 text-blue-400 font-semibold">7.7 CGPA</td>
                  </tr>
                  <tr className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                    <td className="py-3 px-4 text-slate-400">2023</td>
                    <td className="py-3 px-4 text-slate-300">Class XII, CHSE</td>
                    <td className="py-3 px-4 text-slate-300">Adyant Higher Secondary School</td>
                    <td className="py-3 px-4 text-blue-400 font-semibold">85%</td>
                  </tr>
                  <tr className="hover:bg-slate-800/20 transition-colors">
                    <td className="py-3 px-4 text-slate-400">2021</td>
                    <td className="py-3 px-4 text-slate-300">Class X, CHSE</td>
                    <td className="py-3 px-4 text-slate-300">Saraswati Shishu Vidya Mandir, Unit-8</td>
                    <td className="py-3 px-4 text-blue-400 font-semibold">93.75%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* EXTRA-CURRICULAR */}
        <section id="extracurricular" className="px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 tracking-tight">Extra-Curricular & Academic Excellence</h2>
            <div className="space-y-6 sm:space-y-8">
              {extraCurricular.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>{section.category}</span>
                  </h3>
                  <ul className="space-y-3 ml-4">
                    {section.items.map((item, iidx) => (
                      <li key={iidx} className="flex gap-3 text-slate-300">
                        <span className="text-blue-400 text-xs font-bold flex-shrink-0 mt-1">•</span>
                        <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm py-6 sm:py-8 mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-4 text-center sm:text-left sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm text-slate-400">
          <div className="flex gap-6 justify-center sm:justify-start">
            <a href="mailto:ashutosh@example.com" className="hover:text-slate-200 transition-colors">
              Email
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-colors">
              LinkedIn
            </a>
          </div>
          <div className="text-xs text-slate-500">
            © 2026 Ashutosh Palai | Engineered for Scalability
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
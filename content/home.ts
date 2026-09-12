export const homeHtml = `<div class="fixed inset-0 pointer-events-none overflow-hidden z-0"><div class="absolute -top-40 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[128px]"></div><div class="absolute top-1/3 -right-20 w-80 h-80 bg-secondary-container/10 rounded-full blur-[140px]"></div><div class="absolute -bottom-20 left-1/3 w-[32rem] h-[32rem] bg-primary-container/5 rounded-full blur-[160px]"></div></div><main class="relative z-10 w-full pt-20 bg-transparent min-h-[calc(100vh-140px)]"><div class="flex flex-col w-full">
<!-- HERO SECTION -->
<section class="relative w-full -mt-20 pt-24 pb-20 overflow-hidden">
<!-- Hero Background Image & Atmospheric Scrim -->
<div class="absolute inset-0 z-0">
<img alt="Recovery operative assisting a stranded motorist on a UK motorway hard shoulder in daylight" class="w-full h-full object-cover object-center filter brightness-[0.45] contrast-125 scale-105 transform duration-1000" src="/hero-motorway-assistance.webp"/>
<div class="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 via-surface-container-lowest/70 to-background"></div>
<div class="absolute inset-0 bg-radial from-transparent via-background/40 to-background"></div>
</div>
<!-- Ambient Glowing Light Orbs -->
<div class="absolute top-1/4 left-10 w-96 h-96 bg-primary-container/20 rounded-full blur-[140px] pointer-events-none"></div>
<div class="absolute top-1/2 right-10 w-96 h-96 bg-secondary-container/25 rounded-full blur-[160px] pointer-events-none"></div>
<div class="relative z-10 max-w-7xl mx-auto px-margin-sm lg:px-margin pt-12 lg:pt-16">
<div class="max-w-3xl flex flex-col items-start gap-space-md">
<!-- Pulse Status Chip -->
<div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-high/80 backdrop-blur-xl shadow-lg shadow-black/40">
<span class="relative flex h-2.5 w-2.5">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
</span>
<span class="font-label-sm text-label-sm tracking-wider uppercase text-on-surface">Available 24/7 • Average UK Response Time: <span class="text-primary font-bold">28 Mins</span></span>
</div>
<!-- Headline -->
<h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight font-extrabold leading-none">
          24/7 Vehicle Recovery &amp; Roadside Assistance
        </h1>
<!-- Subheading -->
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Stranded at the roadside? The Road Rescue Guys deliver rapid, damage-free recovery, roadside mechanical triage, and nationwide vehicle transportation whenever you need us.
        </p>
<!-- CTAs -->
<div class="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
<a class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-secondary-container text-white font-label-lg text-label-lg shadow-[0_0_30px_rgba(251,91,17,0.55)] hover:brightness-110 hover:shadow-[0_0_40px_rgba(251,91,17,0.8)] transition-all" href="tel:08001234567">
<span class="material-symbols-outlined text-[22px]">phone_in_talk</span>
<span>Call for Recovery</span>
</a>
<a class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-surface-container-high/90 text-on-surface font-label-lg text-label-lg backdrop-blur-2xl hover:bg-surface-bright shadow-lg transition-all" href="https://wa.me/448001234567" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-emerald-400 text-[22px]">chat</span>
<span>WhatsApp Us</span>
</a>
</div>
</div>
<!-- Trust Badges Row -->
<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 lg:mt-20">
<div class="group p-5 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-xl hover:bg-surface-container-high/80 transition-all flex items-center gap-4">
<div class="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary-container shrink-0">
<span class="material-symbols-outlined text-[26px]">schedule</span>
</div>
<div class="flex flex-col min-w-0">
<span class="font-headline-sm text-headline-sm text-on-surface font-bold truncate">24/7 Availability</span>
<span class="font-body-sm text-body-sm text-on-surface-variant truncate">Day &amp; night active dispatch</span>
</div>
</div>
<div class="group p-5 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-xl hover:bg-surface-container-high/80 transition-all flex items-center gap-4">
<div class="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary shrink-0">
<span class="material-symbols-outlined text-[26px]">speed</span>
</div>
<div class="flex flex-col min-w-0">
<span class="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Fast Response</span>
<span class="font-body-sm text-body-sm text-on-surface-variant truncate">Live telematics tracking</span>
</div>
</div>
<div class="group p-5 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-xl hover:bg-surface-container-high/80 transition-all flex items-center gap-4">
<div class="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary-container shrink-0">
<span class="material-symbols-outlined text-[26px]">distance</span>
</div>
<div class="flex flex-col min-w-0">
<span class="font-headline-sm text-headline-sm text-on-surface font-bold truncate">UK Wide Coverage</span>
<span class="font-body-sm text-body-sm text-on-surface-variant truncate">All motorways &amp; A-roads</span>
</div>
</div>
<div class="group p-5 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-xl hover:bg-surface-container-high/80 transition-all flex items-center gap-4">
<div class="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
<span class="material-symbols-outlined text-[26px]">verified_user</span>
</div>
<div class="flex flex-col min-w-0">
<span class="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Fully Insured</span>
<span class="font-body-sm text-body-sm text-on-surface-variant truncate">£5M liability protection</span>
</div>
</div>
</div>
</div>
</section>
<!-- SERVICES SECTION: MODERN ASYMMETRIC BENTO GRID -->
<section class="py-20 max-w-7xl mx-auto px-margin-sm lg:px-margin w-full">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3">
          Specialist Units
        </div>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold">
          Roadside Help When You Need It Most
        </h2>
</div>
<p class="font-body-md text-body-md text-on-surface-variant max-w-md">
        From local breakdowns to long-distance vehicle transport, our heavy &amp; light tilt-bed operators get your transit restored safely.
      </p>
</div>
<!-- Bento Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
<article class="flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
<div class="relative w-full h-52 overflow-hidden">
<img alt="Heavy tilt tray recovery truck loading a car in daylight on a UK highway" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/tilt-tray-recovery-daylight.webp"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">24/7 Vehicle Recovery</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Towing &amp; Flatbed</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Dedicated multi-car tilt and slide carriers deployed instantly. Safe, damage-free wheel lift mechanisms for luxury and standard vehicles.</p>
</div>
</article>
<article class="flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
<div class="relative w-full h-52 overflow-hidden">
<img alt="Recovery technician running roadside diagnostics on a broken-down car in daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/breakdown-roadside-operator.webp"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Car Breakdown Recovery</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Emergency Roadside</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Mechanical, electrical, clutch, or drivetrain failures promptly collected and secured.</p>
</div>
</article>
<article class="flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
<div class="relative w-full h-52 overflow-hidden">
<img alt="Tilt and slide flatbed recovery truck securing a vehicle with soft wheel straps in daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/flatbed-soft-strap-recovery.webp"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Accident Recovery</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Accident &amp; Specialist</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Specialised hydraulic winch extractions, scene cleanup, and insurance-approved storage transfers.</p>
</div>
</article>
<article class="flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
<div class="relative w-full h-52 overflow-hidden">
<img alt="Recovery truck assisting a motorist on a UK motorway hard shoulder in daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/motorway-hard-shoulder-assist.webp"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Roadside Breakdown Assistance</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Emergency Roadside</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Flat batteries, misfuelling extraction, puncture assistance, or lockout services. 78% of vehicles repaired curbside without needing a full tow.</p>
</div>
</article>
<article class="flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
<div class="relative w-full h-52 overflow-hidden">
<img alt="The Road Rescue Guys telematics dispatch command centre with live fleet tracking" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/command-centre-dispatch.webp"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Emergency Recovery</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Emergency Roadside</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Rapid priority dispatch for live-lane incidents, dangerous junctions, or vulnerable drivers.</p>
</div>
</article>
<article class="flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
<div class="relative w-full h-52 overflow-hidden">
<img alt="The Road Rescue Guys depot yard with a fleet of recovery trucks in daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/depot-fleet-daylight.webp"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Vehicle Transportation</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Long Distance &amp; Logistics</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Dealership transfers, auction pickups, classic transport, and non-runner logistical relocation.</p>
</div>
</article>
<article class="flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
<div class="relative w-full h-52 overflow-hidden">
<img alt="Tow truck transporting a vehicle along a UK motorway in clear daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/tow-truck-motorway-transport.webp"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Long Distance Recovery</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Long Distance &amp; Logistics</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Relocate stranded vehicles back to your hometown or preferred independent specialist garage UK-wide.</p>
</div>
</article>
<article class="flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl">
<div class="relative w-full h-52 overflow-hidden">
<img alt="Recovery truck winching an electric vehicle onto a flatbed in daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/ev-winch-recovery-daylight.webp"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Motorway Recovery</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Emergency Roadside</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Smart motorway emergency refuge areas, hard shoulder clearances on M1, M4, M6, and M25 loops.</p>
</div>
</article>
</div>
</section>
<!-- EMERGENCY CTA STRIP -->
<section class="w-full relative my-8 overflow-hidden bg-gradient-to-r from-surface-container-lowest via-surface-container-high to-surface-container-lowest py-16 px-margin-sm lg:px-margin shadow-2xl">
<div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-secondary-container/20 rounded-full blur-[120px] pointer-events-none"></div>
<div class="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm uppercase font-bold tracking-widest mb-4">
<span class="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
        24/7 Emergency Recovery Network
      </div>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold max-w-2xl leading-tight">
        Broken Down? Help Is Just One Call Away.
      </h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mt-4 mb-8">
        Tell us your coordinates or What3Words and what has happened. Our closest patrol unit will be dispatched instantly.
      </p>
<div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-secondary-container text-white font-label-lg text-label-lg shadow-[0_0_35px_rgba(251,91,17,0.6)] hover:brightness-110 transition-all font-bold" href="tel:08001234567">
<span class="material-symbols-outlined text-[22px]">phone_forwarded</span>
<span>Call 0800 123 4567</span>
</a>
<a class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-surface-bright/80 text-on-surface font-label-lg text-label-lg backdrop-blur-xl hover:bg-surface-bright transition-all" href="https://wa.me/448001234567" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-emerald-400 text-[22px]">send</span>
<span>Message on WhatsApp</span>
</a>
</div>
</div>
</section>
<!-- WHY CHOOSE US: ASYMMETRIC SPLIT -->
<section class="py-20 max-w-7xl mx-auto px-margin-sm lg:px-margin w-full">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<!-- Image Side -->
<div class="lg:col-span-5 relative">
<div class="rounded-3xl overflow-hidden shadow-2xl bg-surface-container aspect-4/5 relative">
<img alt="Recovery technician securing a car's wheel with soft tie-down straps on a flatbed truck in daylight" class="w-full h-full object-cover" src="/why-choose-us-damage-free.webp"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
<!-- Floating Badge -->
<div class="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-surface-container-high/90 backdrop-blur-2xl shadow-xl flex items-center gap-4">
<div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-[26px]">task_alt</span>
</div>
<div>
<span class="font-headline-sm text-headline-sm text-on-surface font-bold">100% Damage-Free Guarantee</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Precision winches and soft-tie wheel harness straps.</p>
</div>
</div>
</div>
</div>
<!-- Feature Grid Side -->
<div class="lg:col-span-7 flex flex-col">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3 self-start">
          Why Drivers Rely On Us
        </div>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold mb-8">
          Why Drivers Choose The Road Rescue Guys
        </h2>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div class="p-5 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-lg hover:bg-surface-container-high transition-all">
<span class="material-symbols-outlined text-primary text-[28px] mb-2">av_timer</span>
<h4 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">Available 24/7</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Live telematics dispatchers on duty round-the-clock, every day of the year.</p>
</div>
<div class="p-5 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-lg hover:bg-surface-container-high transition-all">
<span class="material-symbols-outlined text-secondary text-[28px] mb-2">near_me</span>
<h4 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">Fast Response</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Rapid routing system sends the closest patrol unit to avoid prolonged waiting.</p>
</div>
<div class="p-5 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-lg hover:bg-surface-container-high transition-all">
<span class="material-symbols-outlined text-primary text-[28px] mb-2">engineering</span>
<h4 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">Experienced Team</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">IVR certified recovery technicians handling lowered cars, EVs, SUVs, and vans.</p>
</div>
<div class="p-5 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-lg hover:bg-surface-container-high transition-all">
<span class="material-symbols-outlined text-primary text-[28px] mb-2">receipt_long</span>
<h4 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">Clear Pricing</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Transparent upfront quote with fixed mileage rates and no hidden callout shocks.</p>
</div>
<div class="p-5 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-lg hover:bg-surface-container-high transition-all">
<span class="material-symbols-outlined text-emerald-400 text-[28px] mb-2">shield</span>
<h4 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">Fully Insured</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Comprehensive goods-in-transit and full road-risk liability cover on every mission.</p>
</div>
<div class="p-5 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-lg hover:bg-surface-container-high transition-all">
<span class="material-symbols-outlined text-primary text-[28px] mb-2">public</span>
<h4 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">Nationwide Support</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Inter-city transfers, cross-county breakdowns, and long-range relocations.</p>
</div>
</div>
</div>
</div>
</section>
<!-- HOW IT WORKS (GETTING HELP IS SIMPLE) -->
<section class="py-20 max-w-7xl mx-auto px-margin-sm lg:px-margin w-full">
<div class="text-center max-w-3xl mx-auto mb-16">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3">
        Stress-Free Process
      </div>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold">
        Getting Help Is Simple
      </h2>
<p class="font-body-md text-body-md text-on-surface-variant mt-2">
        Rapid 3-step assistance designed to get you out of danger and back on track smoothly.
      </p>
</div>
<!-- Stepper Grid with glowing track -->
<div class="relative grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Glow connector rail -->
<div class="hidden md:block absolute top-1/2 left-16 right-16 h-1 bg-gradient-to-r from-primary via-primary-container to-secondary -translate-y-8 z-0 opacity-40"></div>
<!-- Step 1 -->
<div class="relative z-10 p-8 rounded-3xl bg-surface-container/90 backdrop-blur-xl shadow-xl flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-2xl bg-primary-container text-on-primary-container font-headline-md text-headline-md font-bold flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.4)] mb-6">
          01
        </div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Call or WhatsApp</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">
          Share your coordinates, postcode, or What3Words address, vehicle make, and nature of the issue.
        </p>
</div>
<!-- Step 2 -->
<div class="relative z-10 p-8 rounded-3xl bg-surface-container/90 backdrop-blur-xl shadow-xl flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-2xl bg-secondary-container text-white font-headline-md text-headline-md font-bold flex items-center justify-center shadow-[0_0_20px_rgba(251,91,17,0.4)] mb-6">
          02
        </div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">We Dispatch Help</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">
          The nearest dedicated patrol or tilt-slide truck is mobilized. You receive live SMS status updates.
        </p>
</div>
<!-- Step 3 -->
<div class="relative z-10 p-8 rounded-3xl bg-surface-container/90 backdrop-blur-xl shadow-xl flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-2xl bg-primary text-on-primary font-headline-md text-headline-md font-bold flex items-center justify-center shadow-[0_0_20px_rgba(165,231,255,0.4)] mb-6">
          03
        </div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Back on Track</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">
          Curbside repair or safe transport directly to your driveway, workplace, or preferred garage.
        </p>
</div>
</div>
</section>
<!-- LARGE VISUAL RECOVERY SECTION: CINEMATIC SPLIT -->
<section class="py-16 max-w-7xl mx-auto px-margin-sm lg:px-margin w-full">
<div class="rounded-3xl overflow-hidden bg-surface-container shadow-2xl grid grid-cols-1 lg:grid-cols-12">
<div class="lg:col-span-7 relative min-h-[400px]">
<img alt="Recovery technicians in high-visibility gear placing safety cones beside vehicles on a UK motorway in daylight" class="w-full h-full object-cover" src="/cinematic-high-vis-protocol.webp"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest lg:bg-gradient-to-r lg:from-transparent lg:to-surface-container"></div>
<div class="absolute top-6 left-6 flex flex-wrap gap-2">
<span class="px-3 py-1 rounded-full bg-surface-container-high/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm">High-Vis Protocol</span>
<span class="px-3 py-1 rounded-full bg-secondary-container/90 backdrop-blur-md text-white font-label-sm text-label-sm font-bold">Motorway Certified</span>
</div>
</div>
<div class="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3 self-start">
          Nationwide Reach
        </div>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold mb-4">
          Recovery Wherever the Road Takes You
        </h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-6">
          Whether you are stranded at home, at work, on a smart motorway or miles away from your final destination, The Road Rescue Guys are engineered to deploy at a moment's notice.
        </p>
<div class="flex flex-wrap gap-2 mb-8">
<span class="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm">Local Recovery</span>
<span class="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm">Motorway Rapid Recovery</span>
<span class="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm">Emergency Extraction</span>
<span class="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm">Inter-City Relocation</span>
</div>
<div>
<a class="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-secondary-container text-white font-label-lg text-label-lg font-bold shadow-[0_0_24px_rgba(251,91,17,0.5)] hover:brightness-110 transition-all" href="tel:08001234567">
<span class="material-symbols-outlined text-[20px]">sos</span>
<span>Get Roadside Help</span>
</a>
</div>
</div>
</div>
</section>
<!-- REVIEWS SECTION -->
<section class="py-20 max-w-7xl mx-auto px-margin-sm lg:px-margin w-full">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-high text-emerald-400 font-label-sm text-label-sm uppercase tracking-widest mb-3">
          Verified Customer Feedback
        </div>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold">
          Trusted by Drivers When It Matters
        </h2>
</div>
<div class="flex items-center gap-2 text-primary">
<span class="font-headline-sm text-headline-sm font-bold text-on-surface">4.9 / 5.0</span>
<div class="flex text-secondary">
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<span class="font-body-sm text-body-sm text-on-surface-variant">Over 1,200+ Recoveries</span>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- Review 1 -->
<div class="p-6 rounded-3xl bg-surface-container/80 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:bg-surface-container-high transition-all">
<div>
<div class="flex items-center justify-between mb-4">
<div class="flex text-secondary">
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<span class="font-label-sm text-label-sm text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">verified</span> Verified Google Review
            </span>
</div>
<p class="font-body-md text-body-md text-on-surface italic mb-6">
            “Broke down on the M4 near Reading in pouring rain with kids in the car. The Road Rescue Guys were on scene in 22 minutes. Incredibly calming, professional, and took us right to our doorstep in Bristol.”
          </p>
</div>
<div class="flex items-center justify-between border-t border-outline-variant/10 pt-4">
<div>
<div class="font-headline-sm text-sm font-bold text-on-surface">Mark Henderson</div>
<div class="font-body-sm text-body-sm text-on-surface-variant">Range Rover Velar</div>
</div>
<span class="material-symbols-outlined text-outline text-[24px]">directions_car</span>
</div>
</div>
<!-- Review 2 -->
<div class="p-6 rounded-3xl bg-surface-container/80 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:bg-surface-container-high transition-all">
<div>
<div class="flex items-center justify-between mb-4">
<div class="flex text-secondary">
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<span class="font-label-sm text-label-sm text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">verified</span> Verified Google Review
            </span>
</div>
<p class="font-body-md text-body-md text-on-surface italic mb-6">
            “Clutch blew in central Manchester during rush hour. Contacted them via WhatsApp, quote was clear with no extortionate charges. Driver arrived with a slick flatbed and loaded my lowered 3 Series without a scratch!”
          </p>
</div>
<div class="flex items-center justify-between border-t border-outline-variant/10 pt-4">
<div>
<div class="font-headline-sm text-sm font-bold text-on-surface">Tariq Al-Mansoor</div>
<div class="font-body-sm text-body-sm text-on-surface-variant">BMW 330e M Sport</div>
</div>
<span class="material-symbols-outlined text-outline text-[24px]">directions_car</span>
</div>
</div>
<!-- Review 3 -->
<div class="p-6 rounded-3xl bg-surface-container/80 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:bg-surface-container-high transition-all">
<div>
<div class="flex items-center justify-between mb-4">
<div class="flex text-secondary">
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<span class="font-label-sm text-label-sm text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">verified</span> Verified Google Review
            </span>
</div>
<p class="font-body-md text-body-md text-on-surface italic mb-6">
            “Alternator failed 120 miles from home at 2 AM. Other companies gave 4-hour wait times. The Road Rescue Guys were there within 35 minutes and transported the car directly to my garage. Exceptional service.”
          </p>
</div>
<div class="flex items-center justify-between border-t border-outline-variant/10 pt-4">
<div>
<div class="font-headline-sm text-sm font-bold text-on-surface">Sarah Jenkins</div>
<div class="font-body-sm text-body-sm text-on-surface-variant">Audi A4 Avant</div>
</div>
<span class="material-symbols-outlined text-outline text-[24px]">directions_car</span>
</div>
</div>
</div>
</section>
<!-- SERVICE AREAS -->
<section class="py-20 max-w-7xl mx-auto px-margin-sm lg:px-margin w-full">
<div class="rounded-3xl p-8 lg:p-12 bg-surface-container shadow-2xl relative overflow-hidden">
<div class="absolute -top-32 -right-32 w-96 h-96 bg-primary-container/15 rounded-full blur-[140px] pointer-events-none"></div>
<div class="relative z-10 max-w-3xl mb-10">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3">
          Strategic Dispatch Network
        </div>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold mb-3">
          Recovery Across the UK
        </h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">
          Wherever you break down, our centralized telematic dispatch connects to the nearest specialized recovery patrol in your region.
        </p>
</div>
<!-- Region Pills Grid -->
<div class="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
<div class="p-4 rounded-xl bg-surface-container-high/70 backdrop-blur-md flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-[20px]">pin_drop</span>
<span class="font-label-lg text-label-lg text-on-surface font-semibold">Greater Manchester</span>
</div>
<div class="p-4 rounded-xl bg-surface-container-high/70 backdrop-blur-md flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-[20px]">pin_drop</span>
<span class="font-label-lg text-label-lg text-on-surface font-semibold">London &amp; South East</span>
</div>
<div class="p-4 rounded-xl bg-surface-container-high/70 backdrop-blur-md flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-[20px]">pin_drop</span>
<span class="font-label-lg text-label-lg text-on-surface font-semibold">Midlands &amp; M1 Corridor</span>
</div>
<div class="p-4 rounded-xl bg-surface-container-high/70 backdrop-blur-md flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-[20px]">pin_drop</span>
<span class="font-label-lg text-label-lg text-on-surface font-semibold">West Yorkshire &amp; Leeds</span>
</div>
<div class="p-4 rounded-xl bg-surface-container-high/70 backdrop-blur-md flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-[20px]">pin_drop</span>
<span class="font-label-lg text-label-lg text-on-surface font-semibold">M4 Corridor &amp; Bristol</span>
</div>
<div class="p-4 rounded-xl bg-surface-container-high/70 backdrop-blur-md flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-[20px]">pin_drop</span>
<span class="font-label-lg text-label-lg text-on-surface font-semibold">M6 &amp; North West</span>
</div>
<div class="p-4 rounded-xl bg-surface-container-high/70 backdrop-blur-md flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-[20px]">pin_drop</span>
<span class="font-label-lg text-label-lg text-on-surface font-semibold">Scotland &amp; Glasgow</span>
</div>
<div class="p-4 rounded-xl bg-surface-container-high/70 backdrop-blur-md flex items-center gap-3">
<span class="material-symbols-outlined text-secondary text-[20px]">autorenew</span>
<span class="font-label-lg text-label-lg text-secondary font-semibold">Inter-City Relocation</span>
</div>
</div>
<div class="relative z-10 flex flex-wrap items-center gap-4">
<a class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold shadow-lg hover:brightness-105 transition-all" href="tel:08001234567">
<span>Check Response Time in Your Area</span>
<span class="material-symbols-outlined text-[18px]">travel_explore</span>
</a>
</div>
</div>
</section>
<!-- GALLERY SECTION: ASYMMETRIC MOSAIC -->
<section class="py-20 max-w-7xl mx-auto px-margin-sm lg:px-margin w-full" id="gallery">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3">
          Operational Excellence
        </div>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold">
          The Road Rescue Guys in Action
        </h2>
</div>
<p class="font-body-md text-body-md text-on-surface-variant max-w-md">
        Real vehicle recovery situations handled safely across the UK motorway network and city centers.
      </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-12 gap-6">
<!-- Big Visual Card -->
<div class="md:col-span-8 rounded-3xl overflow-hidden shadow-2xl relative min-h-[380px] group">
<img alt="Recovery truck arriving at a breakdown scene on a UK motorway in daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/gallery-motorway-deployment.webp"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
<div class="absolute bottom-6 left-6 right-6 flex items-center justify-between">
<div>
<span class="px-3 py-1 rounded-full bg-secondary-container text-white font-label-sm text-label-sm uppercase font-bold">Motorway Recovery</span>
<div class="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">Smart Motorway Rapid Deployment</div>
</div>
<span class="px-3 py-1 rounded-lg bg-surface-container-high/80 backdrop-blur-md text-on-surface font-label-sm text-label-sm">M4 Westbound</span>
</div>
</div>
<!-- Right 2 Stacked Cards -->
<div class="md:col-span-4 flex flex-col gap-6">
<div class="rounded-3xl overflow-hidden shadow-2xl relative h-[180px] group">
<img alt="Close-up of a hydraulic winch cable loading a car onto a recovery truck in daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/gallery-winch-loading.webp"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent"></div>
<div class="absolute bottom-4 left-4">
<span class="font-headline-sm text-sm font-bold text-on-surface">Damage-Free Winch Loading</span>
</div>
</div>
<div class="rounded-3xl overflow-hidden shadow-2xl relative h-[180px] group">
<img alt="Recovery truck transporting a car along a UK motorway in daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/gallery-long-distance-relocation.webp"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent"></div>
<div class="absolute bottom-4 left-4">
<span class="font-headline-sm text-sm font-bold text-on-surface">Long Distance Logistics</span>
</div>
</div>
</div>
</div>
</section>
<!-- FAQS ACCORDION -->
<section class="py-20 max-w-5xl mx-auto px-margin-sm lg:px-margin w-full" id="faqs">
<div class="text-center mb-12">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3">
        Got Questions?
      </div>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold">
        Common Questions
      </h2>
<p class="font-body-md text-body-md text-on-surface-variant mt-2">
        Everything you need to know about our response times, equipment, and recovery protocols.
      </p>
</div>
<!-- Accordion Stack -->
<div class="flex flex-col gap-4" id="faq-list">
<!-- FAQ 1 -->
<details class="group p-6 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-lg [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary class="flex items-center justify-between cursor-pointer list-none">
<span class="font-headline-sm text-headline-sm text-on-surface font-bold">Do you provide 24/7 vehicle recovery?</span>
<span class="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="font-body-md text-body-md text-on-surface-variant mt-4">
          Yes, absolutely. Our operations room and fleet of recovery trucks operate 24 hours a day, 7 days a week, 365 days a year including Christmas and all UK Bank Holidays.
        </p>
</details>
<!-- FAQ 2 -->
<details class="group p-6 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-lg [&amp;_summary::-webkit-details-marker]:hidden">
<summary class="flex items-center justify-between cursor-pointer list-none">
<span class="font-headline-sm text-headline-sm text-on-surface font-bold">Can you recover my car from a motorway?</span>
<span class="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="font-body-md text-body-md text-on-surface-variant mt-4">
          Yes. Our drivers hold National Highways safety certifications to safely attend motorways, smart motorway emergency refuge areas, and A-road hard shoulders with full high-visibility strobe protection.
        </p>
</details>
<!-- FAQ 3 -->
<details class="group p-6 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-lg [&amp;_summary::-webkit-details-marker]:hidden">
<summary class="flex items-center justify-between cursor-pointer list-none">
<span class="font-headline-sm text-headline-sm text-on-surface font-bold">Do you provide long-distance vehicle transportation?</span>
<span class="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="font-body-md text-body-md text-on-surface-variant mt-4">
          Yes. We provide scheduled and emergency transport anywhere across England, Scotland, and Wales. Whether recovering back to your residence or moving vehicles between dealerships, we provide upfront mileage pricing.
        </p>
</details>
<!-- FAQ 4 -->
<details class="group p-6 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-lg [&amp;_summary::-webkit-details-marker]:hidden">
<summary class="flex items-center justify-between cursor-pointer list-none">
<span class="font-headline-sm text-headline-sm text-on-surface font-bold">Can you recover vehicles after an accident?</span>
<span class="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="font-body-md text-body-md text-on-surface-variant mt-4">
          Yes. We have heavy-duty tilt &amp; slide recovery beds equipped with precision hydraulic winches capable of handling non-rolling vehicles, broken suspension, or collision damage safely without causing further body damage.
        </p>
</details>
<!-- FAQ 5 -->
<details class="group p-6 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-lg [&amp;_summary::-webkit-details-marker]:hidden">
<summary class="flex items-center justify-between cursor-pointer list-none">
<span class="font-headline-sm text-headline-sm text-on-surface font-bold">How quickly can you reach me?</span>
<span class="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="font-body-md text-body-md text-on-surface-variant mt-4">
          Our current average nationwide response time is approximately 28 minutes. When you call us, our dispatchers look at live GPS telematics to provide a realistic, accurate arrival ETA.
        </p>
</details>
<!-- FAQ 6 -->
<details class="group p-6 rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-lg [&amp;_summary::-webkit-details-marker]:hidden">
<summary class="flex items-center justify-between cursor-pointer list-none">
<span class="font-headline-sm text-headline-sm text-on-surface font-bold">Can you take my vehicle to a garage of my choice?</span>
<span class="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="font-body-md text-body-md text-on-surface-variant mt-4">
          Certainly. You dictate the destination. We can deliver your car directly to your trusted local mechanic, a main dealership, insurance assessment center, or back to your home driveway.
        </p>
</details>
</div>
</section>
<!-- CONTACT & EMERGENCY DISPATCH SECTION -->
<section class="py-20 max-w-7xl mx-auto px-margin-sm lg:px-margin w-full">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
<!-- Form Side -->
<div class="lg:col-span-7 p-8 lg:p-10 rounded-3xl bg-surface-container/90 backdrop-blur-2xl shadow-2xl flex flex-col justify-between">
<div>
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3">
            Quick Quote &amp; Dispatch
          </div>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold mb-2">
            Need Help Right Now?
          </h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-6">
            Send us your coordinates and breakdown issue. An operator will confirm your vehicle ETA immediately.
          </p>
<form class="space-y-4">
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div class="flex flex-col gap-1.5">
<label class="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">Your Name</label>
<input class="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/80 text-on-surface placeholder:text-outline border-0 focus:outline-none focus:ring-2 focus:ring-primary font-body-md" placeholder="e.g. David Wright" required="" type="text"/>
</div>
<div class="flex flex-col gap-1.5">
<label class="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">Phone Number</label>
<input class="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/80 text-on-surface placeholder:text-outline border-0 focus:outline-none focus:ring-2 focus:ring-primary font-body-md" placeholder="e.g. 07700 900077" required="" type="tel"/>
</div>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div class="flex flex-col gap-1.5">
<label class="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">Current Location / Postcode</label>
<input class="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/80 text-on-surface placeholder:text-outline border-0 focus:outline-none focus:ring-2 focus:ring-primary font-body-md" placeholder="e.g. M4 Jct 11 or RG2 0RP" required="" type="text"/>
</div>
<div class="flex flex-col gap-1.5">
<label class="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">Service Required</label>
<select class="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/80 text-on-surface border-0 focus:outline-none focus:ring-2 focus:ring-primary font-body-md">
<option>Roadside Breakdown Tow</option>
<option>Accident Extraction</option>
<option>Jump Start / Battery</option>
<option>Long-Distance Transport</option>
<option>Motorway Urgent Tow</option>
</select>
</div>
</div>
<div class="flex flex-col gap-1.5">
<label class="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">Vehicle Details &amp; Fault Description</label>
<textarea class="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/80 text-on-surface placeholder:text-outline border-0 focus:outline-none focus:ring-2 focus:ring-primary font-body-md" placeholder="e.g. Mercedes C-Class, flat tyre &amp; broken jack on hard shoulder..." rows="3"></textarea>
</div>
<button class="w-full py-4 rounded-xl bg-secondary-container text-white font-label-lg text-label-lg font-bold shadow-[0_0_24px_rgba(251,91,17,0.5)] hover:brightness-110 transition-all flex items-center justify-center gap-2" type="submit">
<span class="material-symbols-outlined text-[20px]">local_shipping</span>
<span>Request Recovery Dispatch</span>
</button>
</form>
</div>
</div>
<!-- Live Priority Card Side -->
<div class="lg:col-span-5 p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-surface-container-high to-surface-container-lowest shadow-2xl flex flex-col justify-between relative overflow-hidden">
<div class="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none"></div>
<div>
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm uppercase font-bold tracking-wider mb-6">
<span class="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
            Priority Live Ops
          </div>
<h3 class="font-headline-md text-headline-md text-on-surface font-extrabold mb-4">
            Available 24 Hours a Day
          </h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-8">
            Do not remain stranded in active motorway traffic. Move behind the safety barrier and call our emergency line immediately.
          </p>
<div class="flex flex-col gap-4">
<a class="flex items-center gap-4 p-4 rounded-2xl bg-secondary-container text-white shadow-[0_0_24px_rgba(251,91,17,0.4)] hover:brightness-110 transition-all" href="tel:08001234567">
<div class="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-[24px]">call</span>
</div>
<div class="flex flex-col text-left">
<span class="font-label-sm text-[11px] uppercase tracking-widest text-secondary-fixed">24/7 Hotline</span>
<span class="font-headline-sm text-headline-sm font-bold">0800 123 4567</span>
</div>
</a>
<a class="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-highest/90 text-on-surface hover:bg-surface-bright transition-all" href="https://wa.me/448001234567" rel="noopener" target="_blank">
<div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-[24px]">chat</span>
</div>
<div class="flex flex-col text-left">
<span class="font-label-sm text-[11px] uppercase tracking-widest text-emerald-400">WhatsApp Instant Pin</span>
<span class="font-headline-sm text-headline-sm font-bold">Share Location</span>
</div>
</a>
</div>
</div>
<div class="mt-8 pt-6 border-t border-outline-variant/20 flex items-center justify-between">
<span class="font-label-sm text-label-sm text-on-surface-variant">Fleet Status: <strong class="text-emerald-400">All Units Green</strong></span>
<span class="font-label-sm text-label-sm text-primary">Avg UK ETA: 28m</span>
</div>
</div>
</div>
</section>
</div></main><aside class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none"><a class="pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-full bg-secondary-container text-white font-label-lg text-label-lg shadow-[0_8px_32px_rgba(251,91,17,0.55)] border border-secondary/30 backdrop-blur-md hover:scale-105 transition-transform duration-200" href="tel:08001234567"><span class="relative flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span></span><span class="font-headline-sm text-sm font-bold tracking-wide">Emergency SOS Tow</span><span class="material-symbols-outlined text-[20px]">call</span></a></aside>`;

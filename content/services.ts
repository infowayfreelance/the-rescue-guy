export const servicesHtml = `<div class="fixed inset-0 pointer-events-none overflow-hidden z-0"><div class="absolute -top-40 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[128px]"></div><div class="absolute top-1/3 -right-20 w-80 h-80 bg-secondary-container/10 rounded-full blur-[140px]"></div><div class="absolute -bottom-20 left-1/3 w-[32rem] h-[32rem] bg-primary-container/5 rounded-full blur-[160px]"></div></div><main class="relative z-10 w-full pt-20 bg-transparent min-h-[calc(100vh-140px)]"><div class="flex flex-col w-full">
<!-- Top Command & Header Tier -->
<section class="relative w-full overflow-hidden px-margin-sm lg:px-margin pt-space-md pb-space-lg">
<!-- Atmospheric Ambient Glows -->
<div class="absolute top-0 left-1/3 -translate-x-1/2 w-[48rem] h-64 bg-primary-container/10 rounded-full blur-[140px] pointer-events-none"></div>
<div class="absolute top-1/4 right-10 w-96 h-96 bg-secondary-container/10 rounded-full blur-[160px] pointer-events-none"></div>
<div class="max-w-7xl mx-auto flex flex-col gap-space-lg relative z-10">
<!-- Breadcrumb & Tactical Badge -->
<div class="flex flex-wrap items-center justify-between gap-space-sm">
<div class="flex items-center gap-space-xs">
<span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/70 backdrop-blur-xl text-primary font-label-sm text-label-sm uppercase tracking-widest shadow-sm">
<span class="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
            OUR CAPABILITIES &amp; FLEET
          </span>
<span class="text-outline text-label-sm font-label-sm">/</span>
<span class="text-on-surface-variant font-label-sm text-label-sm">Nationwide Deployment Matrix</span>
</div>
<div class="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-xl bg-surface-container-low/80 backdrop-blur-md text-on-surface-variant font-label-md text-label-md shadow-sm">
<span class="material-symbols-outlined text-primary text-[18px]">verified</span>
<span>ISO 9001 &amp; PAS 43 Roadside Recovery Compliant</span>
</div>
</div>
<!-- Headline Block with Asymmetric Alignment -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-end">
<div class="lg:col-span-8 flex flex-col gap-space-sm">
<h1 class="font-display-lg text-headline-lg lg:text-display-lg text-on-surface font-extrabold tracking-tight">
            Comprehensive 24/7 Vehicle Recovery &amp; Specialist Roadside Services
          </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            From high-risk motorway extractions to prestige EV logistics and rapid roadside mechanical triage. Managed under precision telematics with real-time GPS tracking across every UK county.
          </p>
</div>
<div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end gap-3">
<div class="p-space-md rounded-2xl bg-surface-container-high/60 backdrop-blur-2xl shadow-xl w-full flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-xl bg-primary-container/15 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[24px]">timer</span>
</div>
<div class="flex flex-col">
<span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Avg Motorway ETA</span>
<span class="font-headline-sm text-headline-sm font-bold text-on-surface">28 Minutes</span>
</div>
</div>
<div class="flex flex-col text-right">
<span class="font-label-sm text-label-sm text-emerald-400 font-bold uppercase tracking-wider">Live Active</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">184 Rigs Deployed</span>
</div>
</div>
</div>
</div>
<!-- Urgent Dispatch Floating Strip -->
<div class="p-1 rounded-2xl bg-gradient-to-r from-secondary-container via-surface-container-high to-primary-container shadow-2xl">
<div class="px-space-md py-3 rounded-[0.875rem] bg-surface-container-lowest/95 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-space-md">
<div class="flex items-center gap-space-md text-left">
<div class="w-9 h-9 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary-container shrink-0">
<span class="material-symbols-outlined text-[20px] animate-pulse">warning</span>
</div>
<div class="flex flex-col">
<span class="font-label-lg text-label-lg font-bold text-on-surface">Immediate Emergency Assistance Required?</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">28-min average motorway arrival time. Priority telematics dispatch active nationwide.</span>
</div>
</div>
<div class="flex items-center gap-3 w-full md:w-auto shrink-0">
<a class="flex-1 md:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-secondary-container text-white font-label-lg text-label-lg shadow-lg hover:brightness-110 transition-all" href="tel:08001234567">
<span class="material-symbols-outlined text-[18px]">call</span>
<span>Call 0800 123 4567</span>
</a>
<a class="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-high text-primary hover:bg-surface-bright font-label-lg text-label-lg transition-all" href="https://wa.me/448001234567" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[18px]">near_me</span>
<span class="hidden sm:inline">Send GPS</span>
</a>
</div>
</div>
</div>
<!-- Interactive Capability Category Pills -->
<div class="flex flex-wrap items-center gap-2 pt-space-xs" id="categoryFilterContainer">
<button class="filter-btn px-4 py-2 rounded-xl bg-primary-container text-on-primary-container font-label-lg text-label-lg shadow-md transition-all cursor-pointer" data-filter="all">
          All Services (8)
        </button>
<button class="filter-btn px-4 py-2 rounded-xl bg-surface-container-high/60 backdrop-blur-xl text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-all cursor-pointer" data-filter="emergency">
          Emergency Roadside
        </button>
<button class="filter-btn px-4 py-2 rounded-xl bg-surface-container-high/60 backdrop-blur-xl text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-all cursor-pointer" data-filter="recovery">
          Towing &amp; Flatbed
        </button>
<button class="filter-btn px-4 py-2 rounded-xl bg-surface-container-high/60 backdrop-blur-xl text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-all cursor-pointer" data-filter="logistics">
          Long Distance &amp; Logistics
        </button>
<button class="filter-btn px-4 py-2 rounded-xl bg-surface-container-high/60 backdrop-blur-xl text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg transition-all cursor-pointer" data-filter="specialist">
          Accident &amp; Specialist
        </button>
</div>
</div>
</section>
<!-- Detailed All Services Grid Section -->
<section class="w-full px-margin-sm lg:px-margin py-space-lg relative">
<div class="max-w-7xl mx-auto flex flex-col gap-space-xl">
<!-- Bento-style Service Matrix Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter" id="servicesGrid">
<article class="service-card flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl" data-category="emergency">
<div class="relative w-full h-52 overflow-hidden">
<img alt="Recovery technician running roadside diagnostics on a broken-down car in daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/breakdown-roadside-operator.webp" width="800" height="600" loading="eager" decoding="async" fetchpriority="high"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Car Breakdown Recovery &amp; Mobile Triage</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Emergency Roadside</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Comprehensive on-scene diagnosis and repair for non-starts, dead 12V batteries, alternator failure, starter motors, wheel seizures, and fuel contamination drains. Equipped with state-of-the-art OBD-II telemetry diagnostics to resolve issues without unnecessary towing.</p>
</div>
</article>
<article class="service-card flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl" data-category="recovery">
<div class="relative w-full h-52 overflow-hidden">
<img alt="Tilt and slide flatbed recovery truck securing a vehicle with soft wheel straps in daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/flatbed-soft-strap-recovery.webp" width="800" height="600" loading="lazy" decoding="async"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Tilt &amp; Slide Recovery</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Towing &amp; Flatbed</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Hydraulic low-approach angles engineered for sports cars, low-clearance hypercars, prestige saloons, and light commercial vehicles. Damage-free 4-point soft wheel straps.</p>
</div>
</article>
<article class="service-card flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl" data-category="emergency">
<div class="relative w-full h-52 overflow-hidden">
<img alt="Recovery truck assisting a motorist on a UK motorway hard shoulder in daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/motorway-hard-shoulder-assist.webp" width="850" height="478" loading="lazy" decoding="async"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Motorway &amp; Smart Hard Shoulder Rescue</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Emergency Roadside</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">High-priority rapid extraction from live lanes, emergency refuge areas (ERAs), and motorway verges (M1, M4, M6, M25 corridors). Fully PAS 43 certified and coordinated with National Highways.</p>
</div>
</article>
<article class="service-card flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl" data-category="specialist">
<div class="relative w-full h-52 overflow-hidden">
<img alt="Heavy tilt tray recovery truck loading a car in daylight on a UK highway" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/tilt-tray-recovery-daylight.webp" width="800" height="600" loading="lazy" decoding="async"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Accident Recovery &amp; Scene Clearance</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Accident &amp; Specialist</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Full-service collision management: mechanical winching, roll-over uprighting, hazard debris clearing, and fluid remediation. Direct handover to police compounds or insurance-approved holding yards.</p>
</div>
</article>
<article class="service-card flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl" data-category="specialist">
<div class="relative w-full h-52 overflow-hidden">
<img alt="Recovery truck winching an electric vehicle onto a flatbed in daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/ev-winch-recovery-daylight.webp" width="850" height="637" loading="lazy" decoding="async"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Electric Vehicle (EV) Free-Wheel Towing</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Accident &amp; Specialist</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Dedicated protocols for Tesla, Porsche Taycan, Audi e-tron, and hybrid drive systems. Prevents motor back-EMF burnout through specialized freewheeling dolly skates and full flatbed placement.</p>
</div>
</article>
<article class="service-card flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl" data-category="logistics">
<div class="relative w-full h-52 overflow-hidden">
<img alt="Tow truck transporting a vehicle along a UK motorway in clear daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/tow-truck-motorway-transport.webp" width="800" height="450" loading="lazy" decoding="async"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Inter-City &amp; Long-Distance Relocation</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Long Distance &amp; Logistics</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Scheduled and rapid vehicle relocation between cities and regions across England, Wales, and Scotland. Transparent fixed-rate mileage calculation with full transit insurance coverage up to £100,000 as standard.</p>
</div>
</article>
<article class="service-card flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl" data-category="recovery">
<div class="relative w-full h-52 overflow-hidden">
<img alt="The Road Rescue Guys depot yard with a fleet of recovery trucks in daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/depot-fleet-daylight-sm.webp" width="800" height="450" loading="lazy" decoding="async"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Commercial Van &amp; Fleet Logistics</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Towing &amp; Flatbed</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Medium and long wheelbase (LWB) van recovery up to 3.5 tonnes GVW. Catering to couriers, trades, and enterprise fleet managers with depot delivery options.</p>
</div>
</article>
<article class="service-card flex flex-col rounded-2xl bg-surface-container-low/75 backdrop-blur-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl" data-category="specialist">
<div class="relative w-full h-52 overflow-hidden">
<img alt="Recovery operative assisting a stranded motorist on a UK motorway hard shoulder in daylight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/hero-motorway-assistance-sm.webp" width="800" height="450" loading="lazy" decoding="async"/>
</div>
<div class="p-space-lg flex flex-col gap-space-sm flex-1">
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Off-Road Ditch &amp; Winch Recovery</h3>
<span class="inline-flex self-start px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Accident &amp; Specialist</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Specialist retrieval from mud, grass verges, flooded dips, snowbanks, and steep motorway embankments with 10-tonne hydraulic winches.</p>
</div>
</article>
</div>
</div>
</section>
<!-- Interactive Telemetry & Fleet Status Dashboard -->
<section class="w-full px-margin-sm lg:px-margin py-space-xl relative">
<div class="max-w-7xl mx-auto rounded-3xl bg-surface-container-low/80 backdrop-blur-2xl shadow-2xl p-space-md lg:p-space-xl flex flex-col gap-space-lg">
<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
<span class="font-label-sm text-label-sm uppercase tracking-widest text-emerald-400 font-bold">Live Telematics Dashboard</span>
</div>
<h2 class="font-headline-md text-headline-md font-bold text-on-surface">UK Recovery Grid Telemetry &amp; Resource Availability</h2>
</div>
<div class="flex items-center gap-space-sm">
<div class="px-3 py-1.5 rounded-xl bg-surface-container-high text-on-surface-variant text-label-md font-label-md flex items-center gap-2">
<span class="material-symbols-outlined text-[16px] text-primary">satellite_alt</span>
<span>GNSS Sync: 100% Locked</span>
</div>
</div>
</div>
<!-- Telemetry Metric Cards -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
<div class="p-space-md rounded-2xl bg-surface-container-high/50 backdrop-blur-xl flex flex-col gap-2">
<div class="flex items-center justify-between text-on-surface-variant">
<span class="font-label-sm text-label-sm uppercase tracking-wider font-bold">Motorway Response</span>
<span class="material-symbols-outlined text-primary text-[20px]">speed</span>
</div>
<div class="flex items-baseline gap-2">
<span class="font-display-lg-mobile text-display-lg-mobile font-extrabold text-on-surface">28.4</span>
<span class="font-label-lg text-label-lg text-primary font-bold">MINS</span>
</div>
<span class="text-body-sm font-body-sm text-on-surface-variant">National median arrival across M-roads</span>
</div>
<div class="p-space-md rounded-2xl bg-surface-container-high/50 backdrop-blur-xl flex flex-col gap-2">
<div class="flex items-center justify-between text-on-surface-variant">
<span class="font-label-sm text-label-sm uppercase tracking-wider font-bold">Active Recovery Units</span>
<span class="material-symbols-outlined text-secondary text-[20px]">local_shipping</span>
</div>
<div class="flex items-baseline gap-2">
<span class="font-display-lg-mobile text-display-lg-mobile font-extrabold text-on-surface">184</span>
<span class="font-label-lg text-label-lg text-emerald-400 font-bold">LIVE</span>
</div>
<span class="text-body-sm font-body-sm text-on-surface-variant">Flatbeds, spearlifts &amp; mobile vans</span>
</div>
<div class="p-space-md rounded-2xl bg-surface-container-high/50 backdrop-blur-xl flex flex-col gap-2">
<div class="flex items-center justify-between text-on-surface-variant">
<span class="font-label-sm text-label-sm uppercase tracking-wider font-bold">Roadside Fix Success</span>
<span class="material-symbols-outlined text-emerald-400 text-[20px]">verified</span>
</div>
<div class="flex items-baseline gap-2">
<span class="font-display-lg-mobile text-display-lg-mobile font-extrabold text-on-surface">78.6</span>
<span class="font-label-lg text-label-lg text-emerald-400 font-bold">%</span>
</div>
<span class="text-body-sm font-body-sm text-on-surface-variant">Continuing journeys without towing</span>
</div>
<div class="p-space-md rounded-2xl bg-surface-container-high/50 backdrop-blur-xl flex flex-col gap-2">
<div class="flex items-center justify-between text-on-surface-variant">
<span class="font-label-sm text-label-sm uppercase tracking-wider font-bold">Customer Safety Index</span>
<span class="material-symbols-outlined text-primary-container text-[20px]">security</span>
</div>
<div class="flex items-baseline gap-2">
<span class="font-display-lg-mobile text-display-lg-mobile font-extrabold text-on-surface">99.8</span>
<span class="font-label-lg text-label-lg text-primary-container font-bold">%</span>
</div>
<span class="text-body-sm font-body-sm text-on-surface-variant">Accredited scene safety extraction</span>
</div>
</div>
<!-- Embedded Vector Status Graphic: Dispatch Progress Rail -->
<div class="p-space-md rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl flex flex-col gap-space-md">
<span class="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">Typical Incident Lifecycle from First Ring</span>
<div class="grid grid-cols-1 md:grid-cols-4 gap-space-md relative">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-primary-container text-surface-container-lowest font-bold flex items-center justify-center shrink-0">1</div>
<div class="flex flex-col">
<span class="font-label-lg text-label-lg font-bold text-on-surface">Emergency Call</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">GPS pinned in 45 sec</span>
</div>
</div>
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-primary-container text-surface-container-lowest font-bold flex items-center justify-center shrink-0">2</div>
<div class="flex flex-col">
<span class="font-label-lg text-label-lg font-bold text-on-surface">Unit Dispatched</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">Assigned nearest rig</span>
</div>
</div>
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-primary-container text-surface-container-lowest font-bold flex items-center justify-center shrink-0">3</div>
<div class="flex flex-col">
<span class="font-label-lg text-label-lg font-bold text-on-surface">On-Scene Arrival</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">High-vis zone established</span>
</div>
</div>
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-secondary-container text-white font-bold flex items-center justify-center shrink-0">4</div>
<div class="flex flex-col">
<span class="font-label-lg text-label-lg font-bold text-on-surface">Safe Resolution</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">Repaired or towed</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Interactive Service Pricing & Transparency Matrix -->
<section class="w-full px-margin-sm lg:px-margin py-space-lg relative">
<div class="max-w-7xl mx-auto flex flex-col gap-space-lg">
<div class="flex flex-col gap-space-xs text-center items-center">
<span class="px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">
          Transparent Rates
        </span>
<h2 class="font-headline-lg text-headline-lg font-bold text-on-surface">No Hidden Surcharges. Fixed Towing Tariffs.</h2>
<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          We believe motorists in distress deserve honest, upfront figures without post-incident markup surprises.
        </p>
</div>
<!-- Pricing Table Glass Card -->
<div class="rounded-3xl bg-surface-container-low/80 backdrop-blur-2xl shadow-xl overflow-hidden">
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead>
<tr class="bg-surface-container-high/80 text-on-surface font-label-md text-label-md uppercase tracking-wider">
<th class="py-4 px-6">Service Category</th>
<th class="py-4 px-6">Base Callout Fee</th>
<th class="py-4 px-6">Mileage Tariff</th>
<th class="py-4 px-6">Included Features</th>
<th class="py-4 px-6 text-right">Dispatch Action</th>
</tr>
</thead>
<tbody class="font-body-md text-body-md divide-y-0">
<tr class="hover:bg-surface-container-high/40 transition-colors">
<td class="py-5 px-6 font-semibold text-on-surface flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-[20px]">build</span>
<div>
<span class="block text-on-surface font-bold">Local Breakdown Triage</span>
<span class="text-on-surface-variant text-[12px]">Dead battery, fuel drain, wheel change</span>
</div>
</td>
<td class="py-5 px-6 font-bold text-on-surface">£79.00</td>
<td class="py-5 px-6 text-on-surface-variant">Includes 10 miles tow if unfixable</td>
<td class="py-5 px-6 text-body-sm text-on-surface-variant">OBD-II Scan + 45 mins roadside work</td>
<td class="py-5 px-6 text-right">
<a class="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary font-label-sm text-label-sm font-bold transition-all" href="tel:08001234567">
                    Call Dispatch
                  </a>
</td>
</tr>
<tr class="hover:bg-surface-container-high/40 transition-colors bg-surface-container-high/20">
<td class="py-5 px-6 font-semibold text-on-surface flex items-center gap-3">
<span class="material-symbols-outlined text-secondary text-[20px]">emergency</span>
<div>
<span class="block text-on-surface font-bold">Motorway Emergency Flatbed</span>
<span class="text-on-surface-variant text-[12px]">Smart motorway &amp; hard shoulder priority</span>
</div>
</td>
<td class="py-5 px-6 font-bold text-secondary">£119.00</td>
<td class="py-5 px-6 text-on-surface-variant">£2.00 / mile after first 15 miles</td>
<td class="py-5 px-6 text-body-sm text-on-surface-variant">Rapid ERA extraction + Passenger cab seats (up to 4)</td>
<td class="py-5 px-6 text-right">
<a class="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-secondary-container text-white font-label-sm text-label-sm font-bold shadow-md hover:brightness-110 transition-all" href="tel:08001234567">
                    Emergency Call
                  </a>
</td>
</tr>
<tr class="hover:bg-surface-container-high/40 transition-colors">
<td class="py-5 px-6 font-semibold text-on-surface flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-[20px]">route</span>
<div>
<span class="block text-on-surface font-bold">Long-Distance Nationwide Relocation</span>
<span class="text-on-surface-variant text-[12px]">Inter-city vehicle transport</span>
</div>
</td>
<td class="py-5 px-6 font-bold text-on-surface">£95.00</td>
<td class="py-5 px-6 text-on-surface-variant">£1.85 / mile flat rate</td>
<td class="py-5 px-6 text-body-sm text-on-surface-variant">Full transit insurance £100k + Live GPS tracking pin</td>
<td class="py-5 px-6 text-right">
<a class="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary font-label-sm text-label-sm font-bold transition-all" href="tel:08001234567">
                    Book Transit
                  </a>
</td>
</tr>
<tr class="hover:bg-surface-container-high/40 transition-colors">
<td class="py-5 px-6 font-semibold text-on-surface flex items-center gap-3">
<span class="material-symbols-outlined text-emerald-400 text-[20px]">electric_car</span>
<div>
<span class="block text-on-surface font-bold">Electric Vehicle (EV) Specialised Flatbed</span>
<span class="text-on-surface-variant text-[12px]">Freewheel dolly cart extraction</span>
</div>
</td>
<td class="py-5 px-6 font-bold text-on-surface">£129.00</td>
<td class="py-5 px-6 text-on-surface-variant">£2.20 / mile after first 15 miles</td>
<td class="py-5 px-6 text-body-sm text-on-surface-variant">Zero rotor drag guarantee + Certified HV technicians</td>
<td class="py-5 px-6 text-right">
<a class="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary font-label-sm text-label-sm font-bold transition-all" href="tel:08001234567">
                    EV Dispatch
                  </a>
</td>
</tr>
</tbody>
</table>
</div>
<div class="px-6 py-4 bg-surface-container-high/60 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-body-sm text-on-surface-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-emerald-400 text-[18px]">verified_user</span>
<span>All fees confirmed verbally before operator roll-out. No card processing fees.</span>
</div>
<span class="text-outline text-label-sm font-label-sm">Accepted: Visa, Mastercard, AMEX, BACS &amp; Fleet Accounts</span>
</div>
</div>
</div>
</section>
<!-- Emergency Dispatch Banner Section -->
<section class="w-full px-margin-sm lg:px-margin py-space-xl relative">
<div class="max-w-7xl mx-auto rounded-3xl p-1 bg-gradient-to-r from-secondary-container via-primary-container to-secondary-container shadow-2xl">
<div class="rounded-[1.4rem] bg-surface-container-lowest/95 backdrop-blur-2xl p-space-lg lg:p-space-xl flex flex-col lg:flex-row items-center justify-between gap-space-lg">
<div class="flex flex-col gap-space-sm text-center lg:text-left">
<div class="inline-flex items-center justify-center lg:justify-start gap-2 text-secondary font-label-sm text-label-sm font-bold uppercase tracking-widest">
<span class="w-2.5 h-2.5 rounded-full bg-secondary-container animate-ping"></span>
            Immediate National Dispatch Center
          </div>
<h2 class="font-display-lg-mobile lg:font-headline-lg text-display-lg-mobile lg:text-headline-lg font-bold text-on-surface">
            Stranded Right Now? Let's Get You Safe.
          </h2>
<p class="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Our operators are on standby 24 hours a day, 365 days a year. Share your location via WhatsApp or call our toll-free incident control room directly.
          </p>
</div>
<div class="flex flex-col sm:flex-row items-center gap-space-md w-full lg:w-auto shrink-0">
<a class="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-secondary-container text-white font-label-lg text-label-lg font-bold shadow-xl hover:brightness-110 transition-all" href="tel:08001234567">
<span class="material-symbols-outlined text-[24px]">call</span>
<div class="flex flex-col text-left leading-tight">
<span class="text-[10px] tracking-widest uppercase opacity-80">Priority Hotline</span>
<span class="text-headline-sm font-extrabold">0800 123 4567</span>
</div>
</a>
<a class="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-surface-container-high/90 text-primary font-label-lg text-label-lg font-bold hover:bg-surface-bright transition-all shadow-md" href="https://wa.me/448001234567" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[24px]">share_location</span>
<div class="flex flex-col text-left leading-tight">
<span class="text-[10px] tracking-widest uppercase opacity-80 text-on-surface-variant">Fastest Way</span>
<span class="text-body-md font-bold text-on-surface">WhatsApp GPS Location</span>
</div>
</a>
</div>
</div>
</div>
</section>
<!-- Interactive Filter Script -->

</div></main><aside class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none"><a class="pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-full bg-secondary-container text-white font-label-lg text-label-lg shadow-[0_8px_32px_rgba(251,91,17,0.55)] border border-secondary/30 backdrop-blur-md hover:scale-105 transition-transform duration-200" href="tel:08001234567"><span class="relative flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span></span><span class="font-headline-sm text-sm font-bold tracking-wide">Emergency SOS Tow</span><span class="material-symbols-outlined text-[20px]">call</span></a></aside>`;

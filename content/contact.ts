export const contactHtml = `<div class="fixed inset-0 pointer-events-none overflow-hidden z-0"><div class="absolute -top-40 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[128px]"></div><div class="absolute top-1/3 -right-20 w-80 h-80 bg-secondary-container/10 rounded-full blur-[140px]"></div><div class="absolute -bottom-20 left-1/3 w-[32rem] h-[32rem] bg-primary-container/5 rounded-full blur-[160px]"></div></div><main class="relative z-10 w-full pt-20 bg-transparent min-h-[calc(100vh-140px)]"><div class="flex flex-col w-full">
<!-- SECTION 1: URGENT MOTORWAY / HAZARD TRIAGE BANNER -->
<section class="w-full px-margin-sm lg:px-margin pt-space-md pb-space-lg">
<div class="max-w-7xl mx-auto">
<div class="relative overflow-hidden rounded-2xl bg-surface-container-low shadow-2xl p-space-md lg:p-space-lg">
<div class="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-secondary-container/20 blur-[90px] pointer-events-none"></div>
<div class="absolute left-1/3 -bottom-20 w-72 h-72 rounded-full bg-primary-container/10 blur-[80px] pointer-events-none"></div>
<div class="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md">
<div class="flex items-start gap-space-md max-w-3xl">
<div class="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center shrink-0 shadow-lg">
<span class="material-symbols-outlined text-secondary text-[28px] animate-pulse">warning</span>
</div>
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm uppercase tracking-wider">
<span class="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
                  Active Hazard Protocol
                </span>
<span class="text-on-surface-variant font-label-md text-label-md">UK Motorway Safety Advisory</span>
</div>
<p class="font-headline-sm text-headline-sm text-on-surface font-bold">
                Stranded in a live lane or in immediate danger?
              </p>
<p class="font-body-md text-body-md text-on-surface-variant">
                If life is at risk, step behind the safety barrier and dial <span class="text-on-surface font-bold underline">999</span> first. Then trigger direct operator recovery dispatch below.
              </p>
</div>
</div>
<div class="flex flex-wrap sm:flex-nowrap items-center gap-space-sm w-full lg:w-auto shrink-0">
<a class="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-space-lg py-3.5 rounded-xl bg-secondary-container text-white font-label-lg text-label-lg shadow-xl hover:brightness-110 transition-all cursor-pointer" href="tel:08001234567">
<span class="material-symbols-outlined text-[20px]">e911_emergency</span>
<span>Call 0800 123 4567</span>
</a>
<a class="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-space-md py-3.5 rounded-xl bg-surface-container-high text-primary hover:text-on-primary-fixed hover:bg-primary-container transition-all font-label-lg text-label-lg shadow-md cursor-pointer" href="https://wa.me/448001234567?text=EMERGENCY%20BREAKDOWN:%20Sending%20live%20location" rel="noopener" target="_blank">
<span class="material-symbols-outlined text-[20px]">share_location</span>
<span>Share WhatsApp GPS</span>
</a>
</div>
</div>
</div>
</div>
</section>
<!-- SECTION 2: LIVE OPERATING CONSOLE (SPLIT 2-COLUMN BOOKING & LIVE STATUS) -->
<section class="w-full px-margin-sm lg:px-margin pb-space-xl">
<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
<!-- COLUMN 1: PRIORITY DISPATCH CONSOLE (7 cols) -->
<div class="lg:col-span-7 flex flex-col gap-space-md bg-surface-container-low rounded-2xl p-space-md lg:p-space-lg shadow-2xl relative overflow-hidden">
<div class="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>
<div class="flex items-center justify-between gap-2 pb-space-sm">
<div class="flex flex-col">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span class="font-label-sm text-label-sm uppercase tracking-widest text-primary">Mission Telematics Terminal</span>
</div>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">Priority Recovery Dispatch</h2>
</div>
<span class="hidden sm:inline-flex px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
            SSL 256-Bit Encrypted
          </span>
</div>
<form class="flex flex-col gap-space-md relative z-10" id="dispatchForm">
<!-- Row: Name & Phone -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface-variant flex items-center justify-between" for="fullName">
<span>Driver Full Name</span>
<span class="text-secondary font-label-sm text-label-sm">*Required</span>
</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">person</span>
<input class="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest transition-colors" id="fullName" placeholder="e.g. Sarah Jenkins" required="" type="text"/>
</div>
</div>
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface-variant flex items-center justify-between" for="phone">
<span>Contact Phone</span>
<span class="text-secondary font-label-sm text-label-sm">*Required</span>
</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">phone</span>
<input class="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest transition-colors" id="phone" placeholder="07123 456789" required="" type="tel"/>
</div>
</div>
</div>
<!-- Row: Incident Location & Tow Destination -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface-variant flex items-center justify-between" for="breakdownLocation">
<span>Breakdown Location / Road</span>
<span class="text-primary font-label-sm text-label-sm">Postcode or ///what3words</span>
</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[18px]">pin_drop</span>
<input class="w-full pl-10 pr-10 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest transition-colors" id="breakdownLocation" placeholder="e.g. M4 Jct 11 Hard Shoulder or ///chips.crane.vital" required="" type="text"/>
<button class="absolute right-2.5 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors p-1" title="Detect Current GPS" type="button">
<span class="material-symbols-outlined text-[18px]">my_location</span>
</button>
</div>
</div>
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface-variant flex items-center justify-between" for="destinationPostcode">
<span>Destination (Towing / Garage)</span>
<span class="text-outline font-label-sm text-label-sm">Optional</span>
</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">garage</span>
<input class="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest transition-colors" id="destinationPostcode" placeholder="e.g. RG1 4NW or Home Address" type="text"/>
</div>
</div>
</div>
<!-- Row: Vehicle Registration & Service Type -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface-variant flex items-center justify-between" for="vrm">
<span>Vehicle Reg (VRM) &amp; Make</span>
<span class="text-secondary font-label-sm text-label-sm">*Required</span>
</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">directions_car</span>
<input class="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md uppercase focus:outline-none focus:bg-surface-container-highest transition-colors" id="vrm" placeholder="e.g. AB22 XYZ (Tesla Model 3)" required="" type="text"/>
</div>
</div>
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface-variant" for="serviceType">
<span>Recovery Service Mode</span>
</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">car_repair</span>
<select class="w-full pl-10 pr-10 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest transition-colors appearance-none cursor-pointer" id="serviceType">
<option value="flatbed">Motorway Breakdown &amp; Flatbed Tow</option>
<option value="accident">Accident Recovery &amp; Scene Clearance</option>
<option value="ev">EV / Hybrid High-Voltage Safe Recovery</option>
<option value="fuel">Wrong Fuel Drain &amp; Restart</option>
<option value="battery">12V / 24V Heavy Duty Jump-Start</option>
<option value="lockout">Roadside Wheel, Tyre &amp; Lockout</option>
<option value="commercial">Lawn/Plant / Van &amp; Fleet Logistics</option>
</select>
<span class="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">expand_more</span>
</div>
</div>
</div>
<!-- Situation Notes -->
<div class="flex flex-col gap-1.5">
<label class="font-label-md text-label-md text-on-surface-variant flex items-center justify-between" for="incidentNotes">
<span>Incident Details &amp; Situation Hazards</span>
<span class="text-outline font-label-sm text-label-sm">Passengers, pets, smoke, etc.</span>
</label>
<textarea class="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:bg-surface-container-highest transition-colors" id="incidentNotes" placeholder="Tell us if you're stuck in mud, locked out of drive, have flat tyres on both sides, or need 4 passenger seats in the recovery cab..." rows="3"></textarea>
</div>
<!-- High Hazard Checkbox Alert -->
<div class="p-space-sm rounded-xl bg-surface-container-lowest flex items-start gap-3">
<input class="mt-1 w-5 h-5 rounded bg-surface-container text-primary-container focus:ring-0 focus:outline-none cursor-pointer" id="hazardToggle" type="checkbox"/>
<label class="cursor-pointer select-none" for="hazardToggle">
<span class="font-label-lg text-label-lg text-secondary font-bold block">Vehicle is stranded in a high-speed live lane or unsafe unlit shoulder</span>
<span class="font-body-sm text-body-sm text-on-surface-variant block">Triggers Priority Code Red routing in our automated telematics dispatch queue.</span>
</label>
</div>
<!-- Submit Button & ETA reassurance -->
<div class="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-2">
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-emerald-400 text-[18px]">verified</span>
<span class="font-label-sm text-label-sm">No card needed to initiate dispatch call</span>
</div>
<button class="w-full sm:w-auto px-space-xl py-3.5 rounded-xl bg-primary-container text-on-primary-container font-label-lg text-label-lg font-bold shadow-xl hover:bg-primary transition-all flex items-center justify-center gap-2" type="submit">
<span class="material-symbols-outlined text-[20px]">local_shipping</span>
<span>Request Immediate Recovery Dispatch</span>
</button>
</div>
</form>
<div class="hidden p-space-md rounded-xl bg-surface-container-high text-on-surface mt-2 animate-fadeIn" id="dispatchSuccessMessage">
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary-container text-[24px]">task_alt</span>
<div class="flex flex-col">
<span class="font-headline-sm text-headline-sm font-bold text-primary">Incident Ticket #RR-9042 Transmitted</span>
<span class="font-body-md text-body-md text-on-surface-variant">Regional desk operator is reviewing telemetry. Our emergency co-ordinator will call your contact number within 120 seconds.</span>
</div>
</div>
</div>
</div>
<!-- COLUMN 2: 24/7 CONTACT CHANNELS & LIVE OPERATING STATUS (5 cols) -->
<div class="lg:col-span-5 flex flex-col gap-space-md">
<!-- Live Fleet Telematics Card -->
<div class="bg-surface-container-low rounded-2xl p-space-md lg:p-space-lg shadow-2xl relative overflow-hidden flex flex-col gap-space-md">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="relative flex h-3 w-3">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
</span>
<span class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-bold">National Telematics Grid</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant">Updated: Live</span>
</div>
<div class="grid grid-cols-2 gap-space-sm">
<div class="bg-surface-container-lowest p-space-md rounded-xl flex flex-col">
<span class="font-label-sm text-label-sm text-on-surface-variant uppercase">Active Units</span>
<div class="flex items-baseline gap-1.5 mt-1">
<span class="font-headline-lg text-headline-lg font-extrabold text-on-surface">42</span>
<span class="font-label-sm text-label-sm text-emerald-400 font-bold">Patrolling</span>
</div>
<span class="font-body-sm text-body-sm text-outline mt-1">Heavy &amp; Light Flatbeds</span>
</div>
<div class="bg-surface-container-lowest p-space-md rounded-xl flex flex-col">
<span class="font-label-sm text-label-sm text-on-surface-variant uppercase">Avg Scene ETA</span>
<div class="flex items-baseline gap-1.5 mt-1">
<span class="font-headline-lg text-headline-lg font-extrabold text-primary">34</span>
<span class="font-label-sm text-label-sm text-primary font-bold">mins</span>
</div>
<span class="font-body-sm text-body-sm text-outline mt-1">UK Motorway Network</span>
</div>
</div>
<!-- Visual Telematics Sparkline Map Graphic -->
<div class="w-full bg-surface-container-lowest rounded-xl p-space-sm relative overflow-hidden">
<div class="flex items-center justify-between text-outline font-label-sm text-label-sm mb-2 px-1">
<span>M25 / M1 / M6 Fleet Density</span>
<span class="text-primary font-bold">Optimal Coverage</span>
</div>
<!-- Minimal SVG Network Visualization -->
<svg class="w-full h-24 text-primary-container/40" fill="none" viewbox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
<path d="M10 80 Q 70 20, 130 55 T 250 30 T 390 70" stroke="currentColor" stroke-dasharray="4 4" stroke-width="2"></path>
<path d="M10 80 Q 70 20, 130 55 T 250 30 T 390 70" stroke="#00d2ff" stroke-opacity="0.8" stroke-width="1.5"></path>
<!-- Recovery Truck Radar Blips -->
<circle class="animate-ping" cx="70" cy="45" fill="#00d2ff" r="4"></circle>
<circle cx="70" cy="45" fill="#00d2ff" r="3"></circle>
<circle class="animate-ping" cx="180" cy="38" fill="#fb5b11" r="4"></circle>
<circle cx="180" cy="38" fill="#fb5b11" r="3"></circle>
<circle class="animate-ping" cx="290" cy="48" fill="#00d2ff" r="4"></circle>
<circle cx="290" cy="48" fill="#00d2ff" r="3"></circle>
<circle cx="340" cy="62" fill="#00d2ff" r="3"></circle>
</svg>
<div class="flex items-center justify-between text-[11px] font-label-sm text-on-surface-variant mt-1 px-1">
<span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-primary-container"></span> Patrol Node</span>
<span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Active Rescue Winch</span>
<span>GPS Lock: 99.8%</span>
</div>
</div>
</div>
<!-- Direct Contact Channels Hub -->
<div class="bg-surface-container-low rounded-2xl p-space-md lg:p-space-lg shadow-2xl flex flex-col gap-space-md">
<span class="font-headline-sm text-headline-sm font-bold text-on-surface">Direct Contact Desk</span>
<div class="flex flex-col gap-3">
<!-- Channel 1: Phone -->
<a class="group flex items-center justify-between p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-all" href="tel:08001234567">
<div class="flex items-center gap-space-md">
<div class="w-10 h-10 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[20px]">phone_in_talk</span>
</div>
<div class="flex flex-col">
<span class="font-label-sm text-label-sm uppercase text-outline">Priority Hotline (Toll-Free)</span>
<span class="font-headline-sm text-headline-sm font-bold text-on-surface">0800 123 4567</span>
</div>
</div>
<span class="material-symbols-outlined text-outline group-hover:text-on-surface group-hover:translate-x-1 transition-all">chevron_right</span>
</a>
<!-- Channel 2: WhatsApp Live Drop -->
<a class="group flex items-center justify-between p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-all" href="https://wa.me/448001234567" rel="noopener" target="_blank">
<div class="flex items-center gap-space-md">
<div class="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[20px]">chat</span>
</div>
<div class="flex flex-col">
<span class="font-label-sm text-label-sm uppercase text-outline">WhatsApp Live Pin Desk</span>
<span class="font-headline-sm text-headline-sm font-bold text-on-surface">+44 7911 234567</span>
</div>
</div>
<span class="material-symbols-outlined text-outline group-hover:text-on-surface group-hover:translate-x-1 transition-all">chevron_right</span>
</a>
<!-- Channel 3: Email Dispatch -->
<a class="group flex items-center justify-between p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-all" href="mailto:recovery@roadrescueguys.co.uk">
<div class="flex items-center gap-space-md">
<div class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-[20px]">mail</span>
</div>
<div class="flex flex-col">
<span class="font-label-sm text-label-sm uppercase text-outline">Fleet &amp; Corporate Email</span>
<span class="font-body-md text-body-md font-semibold text-on-surface">recovery@roadrescueguys.co.uk</span>
</div>
</div>
<span class="material-symbols-outlined text-outline group-hover:text-on-surface group-hover:translate-x-1 transition-all">chevron_right</span>
</a>
</div>
<!-- Headquarters / Holding Depots -->
<div class="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-2">
<span class="font-label-sm text-label-sm uppercase text-outline font-bold">Secure UK Holding Depots</span>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-on-surface-variant font-body-sm text-body-sm">
<div class="flex items-start gap-2">
<span class="material-symbols-outlined text-primary text-[16px] mt-0.5">warehouse</span>
<div>
<strong class="text-on-surface block">London Hub:</strong>
                  Park Royal Logistics Hub, NW10 7HQ
                </div>
</div>
<div class="flex items-start gap-2">
<span class="material-symbols-outlined text-primary text-[16px] mt-0.5">warehouse</span>
<div>
<strong class="text-on-surface block">Manchester Hub:</strong>
                  M60 Interchange Depot, M17 1EH
                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- SECTION 3: ON-SCENE VISUALS & OPERATIONAL CAPABILITY -->
<section class="w-full px-margin-sm lg:px-margin pb-space-xl">
<div class="max-w-7xl mx-auto">
<div class="grid grid-cols-1 md:grid-cols-2 gap-space-md items-center">
<!-- Visual 1: Motorway Scene -->
<div class="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container-low group min-h-[300px]">
<img alt="Recovery truck assisting a motorist on a UK motorway hard shoulder in daylight" class="w-full h-80 object-cover brightness-90 group-hover:scale-105 transition-transform duration-700" src="/motorway-hard-shoulder-assist.webp" width="850" height="478" loading="eager" decoding="async" fetchpriority="high"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
<div class="absolute bottom-0 inset-x-0 p-space-md lg:p-space-lg flex flex-col">
<span class="px-2.5 py-1 rounded-md bg-secondary-container/90 text-white font-label-sm text-label-sm uppercase tracking-wider w-max mb-2">Motorway Quick-Response</span>
<h3 class="font-headline-md text-headline-md font-bold text-on-surface">Emergency Live-Lane Scene Extraction</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">High-visibility impact attenuator safety setups for rapid incident clearing across smart motorways.</p>
</div>
</div>
<!-- Visual 2: Flatbed Loading in Adverse Weather -->
<div class="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container-low group min-h-[300px]">
<img alt="Recovery truck winching an electric vehicle onto a flatbed in daylight" class="w-full h-80 object-cover brightness-90 group-hover:scale-105 transition-transform duration-700" src="/ev-winch-recovery-daylight.webp" width="850" height="637" loading="lazy" decoding="async"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
<div class="absolute bottom-0 inset-x-0 p-space-md lg:p-space-lg flex flex-col">
<span class="px-2.5 py-1 rounded-md bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase tracking-wider w-max mb-2">All-Weather EV Handling</span>
<h3 class="font-headline-md text-headline-md font-bold text-on-surface">Damage-Free Winch &amp; Tilt Slide</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Low-angle hydraulic platforms designed specifically for lowered sports vehicles and delicate battery skateboard chassis.</p>
</div>
</div>
</div>
</div>
</section>
<!-- SECTION 4: NATIONWIDE REGIONAL HUBS & CORRIDORS (Bento 4-Card Layout) -->
<section class="w-full px-margin-sm lg:px-margin pb-space-xl">
<div class="max-w-7xl mx-auto flex flex-col gap-space-lg">
<div class="flex flex-col md:flex-row items-start md:items-end justify-between gap-space-sm">
<div>
<span class="font-label-sm text-label-sm uppercase tracking-widest text-primary">Strategic Regional Deployment</span>
<h2 class="font-headline-lg text-headline-lg text-on-surface font-extrabold">Dedicated UK Dispatch Corridors</h2>
</div>
<p class="font-body-md text-body-md text-on-surface-variant max-w-md">
          Stationary flatbeds staged at high-incident interchanges to guarantee response times under 45 minutes nationwide.
        </p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
<!-- Hub 1: London & South East -->
<div class="bg-surface-container-low p-space-md rounded-2xl shadow-xl flex flex-col justify-between hover:bg-surface-container transition-colors">
<div class="flex flex-col gap-2">
<div class="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">explore</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Greater London &amp; South</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Inner London ULEZ compliant flatbeds, Dartford Crossing &amp; orbital rings.</p>
</div>
<div class="mt-space-md pt-space-sm border-t border-surface-container-high/40 flex flex-col gap-1.5">
<span class="font-label-sm text-label-sm text-outline uppercase font-semibold">Primary Arterials</span>
<div class="flex flex-wrap gap-1">
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm">M25</span>
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">M1</span>
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">M4</span>
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">M3</span>
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">A12</span>
</div>
<span class="font-label-sm text-label-sm text-emerald-400 mt-1 flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 14 Units Active
            </span>
</div>
</div>
<!-- Hub 2: Midlands -->
<div class="bg-surface-container-low p-space-md rounded-2xl shadow-xl flex flex-col justify-between hover:bg-surface-container transition-colors">
<div class="flex flex-col gap-2">
<div class="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">hub</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">Midlands &amp; Central</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Birmingham interchange, Black Country, Coventry, Leicester, and Stoke.</p>
</div>
<div class="mt-space-md pt-space-sm border-t border-surface-container-high/40 flex flex-col gap-1.5">
<span class="font-label-sm text-label-sm text-outline uppercase font-semibold">Primary Arterials</span>
<div class="flex flex-wrap gap-1">
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm">M6 Toll</span>
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">M42</span>
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">M69</span>
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">M5</span>
</div>
<span class="font-label-sm text-label-sm text-emerald-400 mt-1 flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 11 Units Active
            </span>
</div>
</div>
<!-- Hub 3: North West & Trans-Pennine -->
<div class="bg-surface-container-low p-space-md rounded-2xl shadow-xl flex flex-col justify-between hover:bg-surface-container transition-colors">
<div class="flex flex-col gap-2">
<div class="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">alt_route</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">North West &amp; Pennines</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Manchester, Liverpool, Leeds, Sheffield, and heavy Trans-Pennine weather routes.</p>
</div>
<div class="mt-space-md pt-space-sm border-t border-surface-container-high/40 flex flex-col gap-1.5">
<span class="font-label-sm text-label-sm text-outline uppercase font-semibold">Primary Arterials</span>
<div class="flex flex-wrap gap-1">
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm">M62</span>
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">M60</span>
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">M56</span>
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">A1(M)</span>
</div>
<span class="font-label-sm text-label-sm text-emerald-400 mt-1 flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 10 Units Active
            </span>
</div>
</div>
<!-- Hub 4: South West & Wales -->
<div class="bg-surface-container-low p-space-md rounded-2xl shadow-xl flex flex-col justify-between hover:bg-surface-container transition-colors">
<div class="flex flex-col gap-2">
<div class="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">video_file</span>
</div>
<h3 class="font-headline-sm text-headline-sm font-bold text-on-surface">South West &amp; Wales</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Severn crossing, Bristol, Cardiff, Swansea, and Devon/Cornwall tourist links.</p>
</div>
<div class="mt-space-md pt-space-sm border-t border-surface-container-high/40 flex flex-col gap-1.5">
<span class="font-label-sm text-label-sm text-outline uppercase font-semibold">Primary Arterials</span>
<div class="flex flex-wrap gap-1">
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm">M4</span>
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">M5</span>
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">A303</span>
<span class="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">A48</span>
</div>
<span class="font-label-sm text-label-sm text-emerald-400 mt-1 flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 7 Units Active
            </span>
</div>
</div>
</div>
</div>
</section>
<!-- SECTION 5: FREQUENTLY ASKED DISPATCH QUESTIONS (ACCORDION) -->
<section class="w-full px-margin-sm lg:px-margin pb-space-xl">
<div class="max-w-4xl mx-auto flex flex-col gap-space-lg">
<div class="text-center flex flex-col items-center gap-2">
<span class="font-label-sm text-label-sm uppercase tracking-widest text-primary">Clarification &amp; Support</span>
<h2 class="font-headline-lg text-headline-lg font-extrabold text-on-surface">Frequently Asked Dispatch Questions</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Everything you need to know about roadside protocol, ETA calculation, and billing.</p>
</div>
<div class="flex flex-col gap-3" id="faqAccordion">
<!-- FAQ 1 -->
<div class="rounded-2xl bg-surface-container-low overflow-hidden transition-all shadow-md">
<button class="w-full p-space-md text-left flex items-center justify-between gap-4 cursor-pointer" type="button">
<span class="font-headline-sm text-headline-sm font-bold text-on-surface">What exact details do I need to supply when calling?</span>
<span class="material-symbols-outlined text-outline text-[20px] transition-transform duration-300">expand_more</span>
</button>
<div class="hidden px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md">
            Having your current road name or junction marker post, vehicle registration plate, and vehicle make/colour handy speeds up dispatch by up to 5 minutes. If you are on an unlit rural road, sharing your exact location via WhatsApp or a 3-word address (What3Words) helps our driver pinpoint your stranded vehicle directly.
          </div>
</div>
<!-- FAQ 2 -->
<div class="rounded-2xl bg-surface-container-low overflow-hidden transition-all shadow-md">
<button class="w-full p-space-md text-left flex items-center justify-between gap-4 cursor-pointer" type="button">
<span class="font-headline-sm text-headline-sm font-bold text-on-surface">Can I pay by debit/credit card or Apple Pay at the roadside?</span>
<span class="material-symbols-outlined text-outline text-[20px] transition-transform duration-300">expand_more</span>
</button>
<div class="hidden px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md">
            Yes. Every recovery technician is equipped with an encrypted wireless contactless card terminal supporting Visa, Mastercard, American Express, Apple Pay, and Google Pay. You receive an instant digital VAT receipt via SMS or email immediately upon transaction completion.
          </div>
</div>
<!-- FAQ 3 -->
<div class="rounded-2xl bg-surface-container-low overflow-hidden transition-all shadow-md">
<button class="w-full p-space-md text-left flex items-center justify-between gap-4 cursor-pointer" type="button">
<span class="font-headline-sm text-headline-sm font-bold text-on-surface">Do you work directly with UK insurance providers &amp; fleets?</span>
<span class="material-symbols-outlined text-outline text-[20px] transition-transform duration-300">expand_more</span>
</button>
<div class="hidden px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md">
            Yes. We issue itemised PAS 43 compliant recovery invoices that are fully reimbursable under comprehensive UK motor insurance policies (such as breakdown and accident add-ons). For corporate fleet accounts, we offer direct 30-day net terms upon prior registration.
          </div>
</div>
<!-- FAQ 4 -->
<div class="rounded-2xl bg-surface-container-low overflow-hidden transition-all shadow-md">
<button class="w-full p-space-md text-left flex items-center justify-between gap-4 cursor-pointer" type="button">
<span class="font-headline-sm text-headline-sm font-bold text-on-surface">Can your trucks carry passengers from the breakdown scene?</span>
<span class="material-symbols-outlined text-outline text-[20px] transition-transform duration-300">expand_more</span>
</button>
<div class="hidden px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md">
            Our standard recovery cabs accommodate up to 2 adult passengers alongside the recovery driver. For families or larger groups up to 6 people, please check the notes box during dispatch so we can assign our double-cab recovery vehicle or coordinate a relief taxi immediately.
          </div>
</div>
</div>
</div>
</section>
<!-- INTERACTIVE CLIENT-SIDE LOGIC -->

</div></main><aside class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none"><a class="pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-full bg-secondary-container text-white font-label-lg text-label-lg shadow-[0_8px_32px_rgba(251,91,17,0.55)] border border-secondary/30 backdrop-blur-md hover:scale-105 transition-transform duration-200" href="tel:08001234567"><span class="relative flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span></span><span class="font-headline-sm text-sm font-bold tracking-wide">Emergency SOS Tow</span><span class="material-symbols-outlined text-[20px]">call</span></a></aside>`;

/* Illustrations. Classes: s stroke ink, a stroke accent, af fill accent-soft, m stroke muted, t text ink, ta text accent, tm text muted */
(function(){
const ar='<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fi"/></marker></defs>';
const F={};
F.mapping={title:'A conceptual metaphor is a mapping',cap:'Structure is carried from a source domain onto a target. Each row is one correspondence. What follows in the source and is then found in the target is an entailment.',
svg:`<svg viewBox="0 0 360 170" role="img" aria-label="Source domain palimpsest mapped onto target domain sound design">${ar}
<rect x="6" y="24" width="140" height="138" rx="6" class="s"/><rect x="214" y="24" width="140" height="138" rx="6" class="s"/>
<text x="76" y="16" text-anchor="middle" class="tm">SOURCE: palimpsest</text><text x="284" y="16" text-anchor="middle" class="tm">TARGET: sound design</text>
<text x="76" y="54" text-anchor="middle" class="t">scraped writing</text><text x="284" y="54" text-anchor="middle" class="t">muted or cut sound</text>
<text x="76" y="98" text-anchor="middle" class="t">traces show through</text><text x="284" y="98" text-anchor="middle" class="t">tails, leaks, old air</text>
<text x="76" y="142" text-anchor="middle" class="t">new text on top</text><text x="284" y="142" text-anchor="middle" class="t">the present mix</text>
<line x1="150" y1="50" x2="210" y2="50" class="a" marker-end="url(#ah)"/><line x1="150" y1="94" x2="210" y2="94" class="a" marker-end="url(#ah)"/><line x1="150" y1="138" x2="210" y2="138" class="a" marker-end="url(#ah)"/>
<text x="180" y="86" text-anchor="middle" class="ta">maps to</text></svg>`};
F.operable={title:'Illustrative or operable',cap:'The same metaphor can take two routes. The upper route depicts the source. The lower route passes through an entailment and ends in a decision you would not otherwise have made.',
svg:`<svg viewBox="0 0 360 150" role="img" aria-label="Two routes from a metaphor: depiction, or entailment leading to a decision">${ar}
<rect x="6" y="52" width="84" height="46" rx="6" class="s"/><text x="48" y="79" text-anchor="middle" class="t">metaphor</text>
<path d="M90 66 C120 40 130 30 156 30" class="m" marker-end="url(#ah)"/><rect x="160" y="10" width="194" height="40" rx="6" class="m"/><text x="257" y="27" text-anchor="middle" class="tm">depict the source</text><text x="257" y="42" text-anchor="middle" class="tm">a bubble sound for “bubble”</text>
<path d="M90 84 C112 110 118 120 136 120" class="a" marker-end="url(#ah)"/><rect x="140" y="100" width="84" height="40" rx="6" class="a af"/><text x="182" y="124" text-anchor="middle" class="t">entailment</text>
<line x1="224" y1="120" x2="246" y2="120" class="a" marker-end="url(#ah)"/><rect x="250" y="100" width="104" height="40" rx="6" class="a af"/><text x="302" y="117" text-anchor="middle" class="t">decision: mute,</text><text x="302" y="132" text-anchor="middle" class="t">route, filter, place</text>
<text x="96" y="20" class="tm">illustrative</text><text x="60" y="140" class="ta">operable</text></svg>`};
F.palimpsest={title:'The Palimpsest',cap:'Three passes over one surface. Each erasure is imperfect, so the present layer carries the residue of the ones below it.',
svg:`<svg viewBox="0 0 360 164" role="img" aria-label="Three stacked layers with earlier layers showing through the top one">
<g class="m" stroke-dasharray="3 4"><rect x="40" y="14" width="230" height="84" rx="4"/><path d="M52 40h200M52 58h170M52 76h190"/></g>
<g class="s" opacity=".55"><rect x="65" y="38" width="230" height="84" rx="4"/><path d="M78 64h60M160 64h110M78 82h150M78 100h90"/></g>
<g class="a"><rect x="90" y="62" width="230" height="84" rx="4" class="af"/><path d="M104 88h190M104 106h120M104 124h160"/></g>
<text x="36" y="10" class="tm">first inscription</text><text x="320" y="158" class="ta" text-anchor="end">present mix</text></svg>`};
F.echo={title:'The Echo',cap:'A sound leaves, meets a surface and returns late and altered. What comes back reports the distance and the surface more than the source.',
svg:`<svg viewBox="0 0 360 150" role="img" aria-label="A sound travels to a wall and returns altered after a delay">${ar}
<circle cx="40" cy="75" r="7" class="fi"/><text x="40" y="105" text-anchor="middle" class="t">origin</text>
<path d="M330 14v122" class="s" stroke-width="3"/><text x="322" y="12" text-anchor="end" class="tm">surface</text>
<path d="M54 62C150 30 250 34 322 58" class="s" marker-end="url(#ah)"/><text x="186" y="30" text-anchor="middle" class="tm">departure</text>
<path d="M322 92C250 120 150 122 58 90" class="a" stroke-dasharray="7 5" marker-end="url(#ah)"/><text x="186" y="134" text-anchor="middle" class="ta">return: delayed, filtered, carrying the space</text>
<path d="M60 75h250" class="m" stroke-dasharray="2 5"/><text x="186" y="71" text-anchor="middle" class="tm">distance and time</text></svg>`};
F.infection={title:'The Infection',cap:'A trait introduced in one element spreads by contact. After an incubation period the whole field carries it.',
svg:(()=>{let o='<svg viewBox="0 0 360 130" role="img" aria-label="Three panels of a dot grid in which a marked trait spreads from one dot to all">';
const sets=[[5],[5,4,6,1,9],[0,1,2,3,4,5,6,7,8,9,10,11]];
sets.forEach((st,p)=>{const x0=18+p*118;o+=`<rect x="${x0-10}" y="12" width="104" height="84" rx="6" class="m"/>`;
for(let i=0;i<12;i++){const x=x0+(i%4)*28,y=30+Math.floor(i/4)*24;o+=`<circle cx="${x}" cy="${y}" r="7" class="${st.includes(i)?'fi':'s'}"/>`;}
o+=`<text x="${x0+42}" y="116" text-anchor="middle" class="${p==2?'ta':'tm'}">${['contact','incubation','saturation'][p]}</text>`;});
return o+'</svg>';})()};
F.fold={title:'The Fold',cap:'One continuous line. Nowhere does outside stop and inside begin: the interior is the exterior, folded.',
svg:`<svg viewBox="0 0 360 150" role="img" aria-label="A single line that travels from the outside and spirals inward without a break">
<path d="M10 120C80 120 110 110 150 80C190 50 250 40 270 75C288 108 240 128 215 104C196 84 222 62 240 74C254 84 244 98 234 92" class="a" stroke-width="2"/>
<text x="14" y="140" class="tm">the field outside</text><text x="352" y="20" text-anchor="end" class="ta">a centre of listening</text><text x="352" y="36" text-anchor="end" class="tm">holds the field, folded</text></svg>`};
F.bubble={title:'The Bubble',cap:'A shared interior held by a thin membrane. The outside presses on it, and it can burst.',
svg:`<svg viewBox="0 0 360 160" role="img" aria-label="A membrane enclosing two listeners with outside sound pressing against it">${ar}
<circle cx="180" cy="82" r="58" class="a af" stroke-width="2"/><circle cx="162" cy="86" r="6" class="fi"/><circle cx="198" cy="86" r="6" class="fi"/><path d="M168 86h24" class="s"/>
<text x="180" y="62" text-anchor="middle" class="t">shared inside</text><text x="180" y="116" text-anchor="middle" class="tm">two poles, one space</text>
<line x1="36" y1="40" x2="118" y2="64" class="s" marker-end="url(#ah)"/><line x1="324" y1="40" x2="242" y2="64" class="s" marker-end="url(#ah)"/><line x1="40" y1="134" x2="122" y2="110" class="s" marker-end="url(#ah)"/><line x1="320" y1="134" x2="238" y2="110" class="s" marker-end="url(#ah)"/>
<text x="20" y="30" class="tm">outside sound</text><text x="340" y="150" text-anchor="end" class="tm">pressure on the membrane</text></svg>`};
F.spectrum={title:'Murch’s spectrum of sound colours',cap:'Sounds are sorted by how much code stands between listener and meaning, from speech to music. Five layers spread across the spectrum stay clear. Layers stacked in one colour blur at about two and a half.',
svg:`<svg viewBox="0 0 360 120" role="img" aria-label="A spectrum from encoded sound, speech, to embodied sound, music, with effects in between">
<rect x="10" y="30" width="68" height="30" fill="#7b5bd6"/><rect x="78" y="30" width="68" height="30" fill="#2f9aa0"/><rect x="146" y="30" width="68" height="30" fill="#d9b93c"/><rect x="214" y="30" width="68" height="30" fill="#e0862f"/><rect x="282" y="30" width="68" height="30" fill="#cf4a3c"/>
<text x="10" y="20" class="t">ENCODED</text><text x="350" y="20" text-anchor="end" class="t">EMBODIED</text>
<text x="44" y="78" text-anchor="middle" class="tm">dialogue</text><text x="112" y="78" text-anchor="middle" class="tm">footsteps</text><text x="180" y="78" text-anchor="middle" class="tm">“centaur” fx</text><text x="248" y="78" text-anchor="middle" class="tm">atmospheres</text><text x="316" y="78" text-anchor="middle" class="tm">music</text>
<text x="44" y="94" text-anchor="middle" class="tm">violet</text><text x="112" y="94" text-anchor="middle" class="tm">blue-green</text><text x="180" y="94" text-anchor="middle" class="tm">yellow</text><text x="248" y="94" text-anchor="middle" class="tm">orange</text><text x="316" y="94" text-anchor="middle" class="tm">red</text>
<text x="180" y="114" text-anchor="middle" class="ta">placed centre and mono ←→ spread wide and stereo</text></svg>`};
F.twohalf={title:'From trees to forest',cap:'One or two layers of the same kind are followed individually. At three the mind stops counting and hears a group.',
svg:`<svg viewBox="0 0 360 130" role="img" aria-label="One, two and three layers; at three the layers fuse into a single group">
<path d="M20 30h70" class="a" stroke-width="2"/><text x="55" y="118" text-anchor="middle" class="tm">1: clear</text>
<path d="M130 26h70M130 40h70" class="a" stroke-width="2"/><text x="165" y="118" text-anchor="middle" class="tm">2: clear</text>
<path d="M130 62h70" class="a" stroke-width="2" stroke-dasharray="4 4"/><text x="165" y="80" text-anchor="middle" class="ta">+ half</text>
<rect x="244" y="18" width="96" height="60" rx="6" class="a af"/><path d="M252 30h80M252 40h80M252 50h80M252 60h80M252 68h80" class="m"/><text x="292" y="98" text-anchor="middle" class="t">3 or more: one mass</text><text x="292" y="118" text-anchor="middle" class="tm">dense, no longer clear</text></svg>`};
F.oresme={title:'Oresme’s configuration of a quality',cap:'Extension runs along the base and intensity stands upright, so the two are composed into an area without being reduced to a single line. Mader reads Deleuze as valuing exactly that.',
svg:`<svg viewBox="0 0 360 160" role="img" aria-label="Two figures plotting intensity upright against extension along the base: a rectangle and a triangle">${ar}
<line x1="30" y1="130" x2="340" y2="130" class="s" marker-end="url(#ah)"/><line x1="30" y1="130" x2="30" y2="14" class="s" marker-end="url(#ah)"/>
<text x="336" y="148" text-anchor="end" class="tm">longitude: extension in space or time</text><text x="38" y="20" class="tm">latitude: intensity</text>
<rect x="56" y="70" width="110" height="60" class="a af"/><text x="111" y="104" text-anchor="middle" class="t">uniform</text>
<path d="M206 130L316 130L316 44z" class="a af"/><text x="282" y="118" text-anchor="middle" class="t">difform</text></svg>`};
F.flux={title:'Sonic flux',cap:'For Christoph Cox, sound is a continuous material flow. Speech, music and signal are local captures of it, and noise is the ground they are drawn from.',
svg:`<svg viewBox="0 0 360 140" role="img" aria-label="Flow lines running left to right with three bracketed regions labelled speech, music and signal">
<g class="m"><path d="M0 30C60 10 120 50 180 30S300 10 360 30"/><path d="M0 52C60 32 120 72 180 52S300 32 360 52"/><path d="M0 74C60 54 120 94 180 74S300 54 360 74"/><path d="M0 96C60 76 120 116 180 96S300 76 360 96"/></g>
<rect x="40" y="18" width="70" height="92" rx="8" class="a af"/><rect x="146" y="18" width="70" height="92" rx="8" class="a af"/><rect x="252" y="18" width="70" height="92" rx="8" class="a af"/>
<text x="75" y="128" text-anchor="middle" class="t">speech</text><text x="181" y="128" text-anchor="middle" class="t">music</text><text x="287" y="128" text-anchor="middle" class="t">signal</text></svg>`};
F.medium={title:'Sound as medium',cap:'Ingold places the perceiver inside a zone where earth and air mix. Weather, light and sound are what we perceive in. They are conditions of perceiving, not its objects.',
svg:`<svg viewBox="0 0 360 150" role="img" aria-label="A walker on variegated ground beneath moving air, leaving footprints">
<path d="M0 104C40 96 70 112 110 102S190 92 230 104S310 112 360 100V150H0z" class="af"/><path d="M0 104C40 96 70 112 110 102S190 92 230 104S310 112 360 100" class="s"/>
<g class="m"><path d="M10 26C60 14 90 38 140 26S230 14 280 26"/><path d="M60 48C110 36 140 60 190 48S280 36 340 48"/></g>
<circle cx="200" cy="58" r="7" class="fi"/><path d="M200 65v22M200 87l-9 14M200 87l9 14M200 72l-10 8M200 72l10 6" class="s" stroke-width="2"/>
<g class="a"><ellipse cx="150" cy="108" rx="5" ry="2.5"/><ellipse cx="124" cy="106" rx="5" ry="2.5"/><ellipse cx="98" cy="107" rx="5" ry="2.5"/><ellipse cx="72" cy="109" rx="5" ry="2.5"/></g>
<text x="10" y="14" class="tm">air: the medium, in flux</text><text x="10" y="140" class="tm">earth: substances</text><text x="350" y="86" text-anchor="end" class="ta">ground: where they mix</text></svg>`};
F.tricircle={title:'Chion’s tricircle',cap:'Three zones that communicate. In <i>Em Chamas</i> the radio never settles in one of them, and that movement is the character.',
svg:`<svg viewBox="0 0 360 170" role="img" aria-label="A circle divided into onscreen, offscreen and nondiegetic zones, with a path crossing all three">${ar}
<circle cx="180" cy="84" r="72" class="s"/><path d="M180 84V12M180 84L117.6 120M180 84L242.4 120" class="s"/>
<text x="140" y="62" text-anchor="middle" class="t">onscreen</text><text x="222" y="62" text-anchor="middle" class="t">offscreen</text><text x="180" y="138" text-anchor="middle" class="t">nondiegetic</text>
<path d="M132 82C150 108 170 122 196 116C222 110 232 92 226 76" class="a" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ah)"/><text x="300" y="150" text-anchor="middle" class="ta">the radio</text><path d="M274 144L224 112" class="m"/></svg>`};
F.sonosphere={title:'Sonosphere and phonotope',cap:'Sloterdijk’s nested interiors, as Abels reads them. The phonotope is the sounding island of one listening community inside the wider sonosphere.',
svg:`<svg viewBox="0 0 360 150" role="img" aria-label="A large ellipse labelled sonosphere containing a smaller one labelled phonotope containing listeners">
<ellipse cx="180" cy="76" rx="170" ry="66" class="s"/><ellipse cx="190" cy="82" rx="96" ry="40" class="a af"/>
<circle cx="160" cy="84" r="5" class="fi"/><circle cx="188" cy="74" r="5" class="fi"/><circle cx="216" cy="88" r="5" class="fi"/><path d="M160 84L188 74L216 88z" class="s"/>
<text x="60" y="44" class="t">sonosphere</text><text x="190" y="110" text-anchor="middle" class="ta">phonotope</text><text x="300" y="120" text-anchor="middle" class="tm">hearing one another</text></svg>`};
F.design={title:'Research design in six phases',cap:'The film is the experiment. Picture lock is the control: the metaphor is applied only to sound. Each phase leaves its own evidence.',
svg:(()=>{const p=[['1','Pre-production','CMT mapping'],['2','Production','diary, field rec.'],['3','Post','picture lock,','comparative design'],['4','Analysis','tagged studio log'],['5','Reception','test screenings'],['6','Writing','findings']];
let o='<svg viewBox="0 0 360 120" role="img" aria-label="Six research phases in sequence, post-production highlighted">'+ar;
p.forEach((r,i)=>{const x=4+i*59.5;o+=`<rect x="${x}" y="24" width="54" height="74" rx="5" class="${i==2?'a af':'s'}"/><text x="${x+27}" y="42" text-anchor="middle" class="${i==2?'ta':'tm'}">${r[0]}</text><text x="${x+27}" y="58" text-anchor="middle" class="t" style="font-size:9.5px">${r[1]}</text><text x="${x+27}" y="74" text-anchor="middle" class="tm" style="font-size:8px">${r[2]}</text>${r[3]?`<text x="${x+27}" y="85" text-anchor="middle" class="tm" style="font-size:8px">${r[3]}</text>`:''}`;});
return o+'<text x="4" y="14" class="tm">sequence of work</text><text x="356" y="114" text-anchor="end" class="tm">evidence gathered at each step</text></svg>';})()};
F.infrathin={title:'The infra-thin',cap:'Between a signal arriving and a sound being identified there is a thin interval. Your essay places the residue of presence there.',
svg:`<svg viewBox="0 0 360 120" role="img" aria-label="A timeline from signal to sound object with a narrow highlighted interval between them">${ar}
<line x1="10" y1="66" x2="350" y2="66" class="s" marker-end="url(#ah)"/><rect x="150" y="40" width="46" height="52" class="a af"/>
<text x="76" y="56" text-anchor="middle" class="t">signal</text><text x="76" y="86" text-anchor="middle" class="tm">hearing</text>
<text x="272" y="56" text-anchor="middle" class="t">sound object</text><text x="272" y="86" text-anchor="middle" class="tm">listening, naming</text>
<text x="173" y="30" text-anchor="middle" class="ta">infra-thin</text><text x="173" y="108" text-anchor="middle" class="tm">the trace: present and already gone</text></svg>`};
window.FIGS=F;
})();

/* ---- 15 Nov 2026 update ---- */
(function(){const F=window.FIGS;
const ar='<defs><marker id="ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fi"/></marker></defs>';
F.bloom={title:'Bloom’s map of misreading',cap:'Six revisionary ratios. Each pairs a rhetorical trope with a pair of images, and they alternate between limiting and representing. Metaphor sits in the fifth row, bound to inside and outside.',
svg:(()=>{const r=[['Clinamen','irony','presence / absence',0],['Tessera','synecdoche','part / whole',1],['Kenosis','metonymy','fullness / emptiness',0],['Daemonization','hyperbole','high / low',1],['Askesis','metaphor','inside / outside',0],['Apophrades','metalepsis','early / late',1]];
let o='<svg viewBox="0 0 420 178" role="img" aria-label="Table of Bloom’s six revisionary ratios with their tropes and image pairs"><text x="8" y="14" class="tm">RATIO</text><text x="128" y="14" class="tm">TROPE</text><text x="222" y="14" class="tm">IMAGES</text>';
r.forEach((x,i)=>{const y=22+i*26;o+=`<rect x="4" y="${y}" width="412" height="22" rx="4" class="${i==4?'a af':'m'}"/><text x="10" y="${y+15}" class="t">${x[0]}</text><text x="128" y="${y+15}" class="${i==4?'ta':'t'}">${x[1]}</text><text x="222" y="${y+15}" class="t">${x[2]}</text><text x="410" y="${y+15}" text-anchor="end" class="tm">${x[3]?'represents':'limits'}</text>`;});
return o+'</svg>';})()};
F.career={title:'The neural career of a metaphor',cap:'A schematic of the finding in Desai et al. (2011), not their data. As a metaphor becomes familiar, the motor regions are recruited less. A fresh metaphor is simulated in more detail than a worn one.',
svg:`<svg viewBox="0 0 360 160" role="img" aria-label="Schematic curve: sensorimotor activation falls as a metaphor becomes more familiar">${ar}
<line x1="40" y1="130" x2="340" y2="130" class="s" marker-end="url(#ah2)"/><line x1="40" y1="130" x2="40" y2="16" class="s" marker-end="url(#ah2)"/>
<path d="M56 34C120 44 190 92 320 112" class="a" stroke-width="2"/><circle cx="62" cy="35" r="5" class="fi"/><circle cx="314" cy="111" r="5" class="fi"/>
<text x="74" y="30" class="ta">novel: detailed simulation</text><text x="318" y="100" text-anchor="end" class="tm">conventional: abstracted</text>
<text x="336" y="148" text-anchor="end" class="tm">familiarity of the metaphor</text><text x="48" y="14" class="tm">sensorimotor activation</text></svg>`};
F.intertext={title:'Who builds the intertext',cap:'Klein separates the texts a maker brought to the work (poietic) from the texts a listener brings to it (esthesic). Influence is the narrow, maker-side case. The listener can connect a film to things its makers never heard.',
svg:`<svg viewBox="0 0 360 160" role="img" aria-label="A work in the centre linked on one side to texts its maker knew and on the other to texts its listeners bring">${ar}
<rect x="140" y="58" width="80" height="44" rx="6" class="a af"/><text x="180" y="84" text-anchor="middle" class="t">this film</text>
<rect x="10" y="20" width="84" height="28" rx="5" class="s"/><rect x="10" y="66" width="84" height="28" rx="5" class="s"/><rect x="10" y="112" width="84" height="28" rx="5" class="s"/>
<rect x="266" y="20" width="84" height="28" rx="5" class="m"/><rect x="266" y="66" width="84" height="28" rx="5" class="m"/><rect x="266" y="112" width="84" height="28" rx="5" class="m"/>
<line x1="94" y1="34" x2="138" y2="66" class="s" marker-end="url(#ah2)"/><line x1="94" y1="80" x2="138" y2="80" class="s" marker-end="url(#ah2)"/><line x1="94" y1="126" x2="138" y2="94" class="s" marker-end="url(#ah2)"/>
<line x1="266" y1="34" x2="222" y2="66" class="m" stroke-dasharray="4 4" marker-end="url(#ah2)"/><line x1="266" y1="80" x2="222" y2="80" class="m" stroke-dasharray="4 4" marker-end="url(#ah2)"/><line x1="266" y1="126" x2="222" y2="94" class="m" stroke-dasharray="4 4" marker-end="url(#ah2)"/>
<text x="52" y="38" text-anchor="middle" class="t">films heard</text><text x="52" y="84" text-anchor="middle" class="t">conventions</text><text x="52" y="130" text-anchor="middle" class="t">precursors</text>
<text x="308" y="38" text-anchor="middle" class="tm">later films</text><text x="308" y="84" text-anchor="middle" class="tm">other media</text><text x="308" y="130" text-anchor="middle" class="tm">memories</text>
<text x="52" y="12" text-anchor="middle" class="ta">poietic: the maker</text><text x="308" y="12" text-anchor="middle" class="ta">esthesic: the listener</text></svg>`};
})();

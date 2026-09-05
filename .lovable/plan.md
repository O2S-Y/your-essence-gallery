# Contact cleanup + "Road" project section

## 1. Contact section cleanup
Remove the email / location / Email-LinkedIn-GitHub block at the bottom of the contact area — it already lives in the footer. Contact keeps only the small "Get in touch" label and the big "Say hi! / Let's talk ↗" mail link, with spacing tightened so it doesn't leave a gap above the footer.

## 2. Projects as a hand-drawn road
Rebuild the Work section to follow the sketch: a single hand-drawn road winding down the page, passing each project card.

- Cards alternate sides: project 1 left, project 2 right, project 3 left — squared corners, same sage/cream style as today.
- Each card keeps its number, title, one-line outcome and "View case study" link; the label ("① Project") sits beside the card along the road.
- A continuous road is drawn as a multi-line SVG path (2-3 slightly offset hand-drawn strokes, like the sketch) that enters from one edge, curves around each card, and continues to the next.
- The road draws itself as you scroll: the stroke reveals progressively, so it feels like travelling the path.
- At the end the road curves down into a "View more" link (goes to the projects page).
- On smaller screens the cards stack in one column and the road runs down the left edge.

## Technical notes
- All changes in `src/routes/index.tsx` (contact block removal + new road-based `ProjectsSection`); project content stays in `src/data/portfolio.ts`.
- Road path built from a fixed viewBox SVG sized to the section, revealed with `stroke-dasharray`/`stroke-dashoffset` driven by an IntersectionObserver + scroll progress; respects reduced-motion by showing the full path.
- Existing hover "stitched cord" effect on cards is dropped in favour of the road, unless you want it kept.

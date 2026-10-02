# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> homepage has no critical or serious accessibility violations
- Location: tests\accessibility.spec.ts:36:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 481

- Array []
+ Array [
+   Object {
+     "description": "Ensure aria-hidden elements are not focusable nor contain focusable elements",
+     "help": "ARIA hidden element must not be focusable or contain focusable elements",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/aria-hidden-focus?application=playwright",
+     "id": "aria-hidden-focus",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "focusable-not-tabbable",
+             "impact": "serious",
+             "message": "Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"https://www.canva.com/features/photo-background-changer/\" class=\"_5KtATA Xj0kcw LQzFZw Qfw6fw Sp3u_w Gcy95A _8ERLTg hw3gKA _9U4ptw _4_iekA j34Zww aqbYPg _3FvZZg\"><span class=\"khPe7Q\">Change background</span></a>",
+                 "target": Array [
+                   ".x4lel18.x159c2z0.xo0oibl:nth-child(1) > .xbp6zib.xw36f2b.xn95wi4:nth-child(1) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .light.x6brqfx.x19aimcq > .ii7Tlw.x1fozly0.x9dqhi0 > .xl4xnwh.x1r8uycs.xrvj5dj > .x4lel18.x159c2z0.xo0oibl > .xbp6zib.xw36f2b.xn95wi4 > ._9U4ptw.hw3gKA._4_iekA",
+                 ],
+               },
+             ],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+         "html": "<div class=\"LSNU1w\" aria-hidden=\"true\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".x4lel18.x159c2z0.xo0oibl:nth-child(1) > .xbp6zib.xw36f2b.xn95wi4:nth-child(1) > .LSNU1w[aria-hidden=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "focusable-not-tabbable",
+             "impact": "serious",
+             "message": "Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"https://www.canva.com/ai-logo-generator/\" class=\"_5KtATA Xj0kcw LQzFZw Qfw6fw Sp3u_w Gcy95A _8ERLTg hw3gKA _9U4ptw _4_iekA j34Zww aqbYPg _3FvZZg\"><span class=\"khPe7Q\">Generate a logo</span></a>",
+                 "target": Array [
+                   ".x4lel18.x159c2z0.xo0oibl:nth-child(1) > .xbp6zib.xw36f2b.xn95wi4:nth-child(2) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .dark.xo86nag.xntwwlm > .ii7Tlw.x1fozly0.x9dqhi0 > .xl4xnwh.x1r8uycs.xrvj5dj > .x4lel18.x159c2z0.xo0oibl > .xbp6zib.xw36f2b.xn95wi4 > ._9U4ptw.hw3gKA._4_iekA",
+                 ],
+               },
+             ],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+         "html": "<div class=\"LSNU1w\" aria-hidden=\"true\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".x4lel18.x159c2z0.xo0oibl:nth-child(1) > .xbp6zib.xw36f2b.xn95wi4:nth-child(2) > .LSNU1w[aria-hidden=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "focusable-not-tabbable",
+             "impact": "serious",
+             "message": "Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"https://www.canva.com/features/ai-photo-editing/\" class=\"_5KtATA Xj0kcw LQzFZw Qfw6fw Sp3u_w Gcy95A _8ERLTg hw3gKA _9U4ptw _4_iekA j34Zww aqbYPg _3FvZZg\"><span class=\"khPe7Q\">Try Magic Edit</span></a>",
+                 "target": Array [
+                   ".xbp6zib.xw36f2b.xn95wi4:nth-child(1) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .dark.xo86nag.xntwwlm > .ii7Tlw.x1fozly0.x9dqhi0 > .xl4xnwh.x1r8uycs.xrvj5dj > .x4lel18.x159c2z0.xo0oibl > .xbp6zib.xw36f2b.xn95wi4 > ._9U4ptw.hw3gKA._4_iekA",
+                 ],
+               },
+             ],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+         "html": "<div class=\"LSNU1w\" aria-hidden=\"true\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".x4lel18.x159c2z0.xo0oibl:nth-child(2) > .xbp6zib.xw36f2b.xn95wi4:nth-child(1) > .LSNU1w[aria-hidden=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "focusable-not-tabbable",
+             "impact": "serious",
+             "message": "Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"https://www.canva.com/features/ai-voice-generator/\" class=\"_5KtATA Xj0kcw LQzFZw Qfw6fw Sp3u_w Gcy95A _8ERLTg hw3gKA _9U4ptw _4_iekA j34Zww aqbYPg _3FvZZg\"><span class=\"khPe7Q\">Generate voice</span></a>",
+                 "target": Array [
+                   ".xbp6zib.xw36f2b.xn95wi4:nth-child(2) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .light.x6brqfx.x19aimcq > .ii7Tlw.x1fozly0.x9dqhi0 > .xl4xnwh.x1r8uycs.xrvj5dj > .x4lel18.x159c2z0.xo0oibl > .xbp6zib.xw36f2b.xn95wi4 > ._9U4ptw.hw3gKA._4_iekA",
+                 ],
+               },
+             ],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+         "html": "<div class=\"LSNU1w\" aria-hidden=\"true\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".x4lel18.x159c2z0.xo0oibl:nth-child(2) > .xbp6zib.xw36f2b.xn95wi4:nth-child(2) > .LSNU1w[aria-hidden=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "focusable-not-tabbable",
+             "impact": "serious",
+             "message": "Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"https://www.canva.com/features/image-enhancer/\" class=\"_5KtATA Xj0kcw LQzFZw Qfw6fw Sp3u_w Gcy95A _8ERLTg hw3gKA _9U4ptw _4_iekA j34Zww aqbYPg _3FvZZg\"><span class=\"khPe7Q\">Enhance an image</span></a>",
+                 "target": Array [
+                   ".x4lel18.x159c2z0.xo0oibl:nth-child(3) > .xbp6zib.xw36f2b.xn95wi4:nth-child(1) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .light.x6brqfx.x19aimcq > .ii7Tlw.x1fozly0.x9dqhi0 > .xl4xnwh.x1r8uycs.xrvj5dj > .x4lel18.x159c2z0.xo0oibl > .xbp6zib.xw36f2b.xn95wi4 > ._9U4ptw.hw3gKA._4_iekA",
+                 ],
+               },
+             ],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+         "html": "<div class=\"LSNU1w\" aria-hidden=\"true\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".x4lel18.x159c2z0.xo0oibl:nth-child(3) > .xbp6zib.xw36f2b.xn95wi4:nth-child(1) > .LSNU1w[aria-hidden=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "focusable-not-tabbable",
+             "impact": "serious",
+             "message": "Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"https://www.canva.com/magic-write/\" class=\"_5KtATA Xj0kcw LQzFZw Qfw6fw Sp3u_w Gcy95A _8ERLTg hw3gKA _9U4ptw _4_iekA j34Zww aqbYPg _3FvZZg\"><span class=\"khPe7Q\">Try Magic Write</span></a>",
+                 "target": Array [
+                   ".x4lel18.x159c2z0.xo0oibl:nth-child(3) > .xbp6zib.xw36f2b.xn95wi4:nth-child(2) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .dark.xo86nag.xntwwlm > .ii7Tlw.x1fozly0.x9dqhi0 > .xl4xnwh.x1r8uycs.xrvj5dj > .x4lel18.x159c2z0.xo0oibl > .xbp6zib.xw36f2b.xn95wi4 > ._9U4ptw.hw3gKA._4_iekA",
+                 ],
+               },
+             ],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+         "html": "<div class=\"LSNU1w\" aria-hidden=\"true\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".x4lel18.x159c2z0.xo0oibl:nth-child(3) > .xbp6zib.xw36f2b.xn95wi4:nth-child(2) > .LSNU1w[aria-hidden=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "focusable-not-tabbable",
+             "impact": "serious",
+             "message": "Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"https://www.canva.com/en_in/pro/brand-kit/\" class=\"_5KtATA Xj0kcw LQzFZw Qfw6fw Sp3u_w Gcy95A _8ERLTg hw3gKA _9U4ptw _4_iekA j34Zww aqbYPg _3FvZZg\"><span class=\"khPe7Q\">Learn more</span></a>",
+                 "target": Array [
+                   ".zAWjSA.GLyNIw:nth-child(1) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .light.x6brqfx.x19aimcq > .ii7Tlw.x1fozly0.x9dqhi0 > .xl4xnwh.x1r8uycs.xrvj5dj > .x4lel18.x159c2z0.xo0oibl > .xbp6zib.xw36f2b.xn95wi4 > ._9U4ptw.hw3gKA._4_iekA",
+                 ],
+               },
+             ],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+         "html": "<div class=\"LSNU1w\" aria-hidden=\"true\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".zAWjSA.GLyNIw:nth-child(1) > .LSNU1w[aria-hidden=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "focusable-not-tabbable",
+             "impact": "serious",
+             "message": "Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"https://www.canva.com/en_in/business/features/invite-your-team/\" class=\"_5KtATA Xj0kcw LQzFZw Qfw6fw Sp3u_w Gcy95A _8ERLTg hw3gKA _9U4ptw _4_iekA j34Zww aqbYPg _3FvZZg\"><span class=\"khPe7Q\">Learn more</span></a>",
+                 "target": Array [
+                   ".zAWjSA.GLyNIw:nth-child(2) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .light.x6brqfx.x19aimcq > .ii7Tlw.x1fozly0.x9dqhi0 > .xl4xnwh.x1r8uycs.xrvj5dj > .x4lel18.x159c2z0.xo0oibl > .xbp6zib.xw36f2b.xn95wi4 > ._9U4ptw.hw3gKA._4_iekA",
+                 ],
+               },
+             ],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+         "html": "<div class=\"LSNU1w\" aria-hidden=\"true\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".zAWjSA.GLyNIw:nth-child(2) > .LSNU1w[aria-hidden=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "focusable-not-tabbable",
+             "impact": "serious",
+             "message": "Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"https://www.canva.com/en_in/pricing/\" class=\"_5KtATA Xj0kcw LQzFZw Qfw6fw Sp3u_w Gcy95A _8ERLTg hw3gKA _9U4ptw _4_iekA j34Zww aqbYPg _3FvZZg\"><span class=\"khPe7Q\">View plans</span></a>",
+                 "target": Array [
+                   ".zAWjSA.GLyNIw:nth-child(3) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .light.x6brqfx.x19aimcq > .ii7Tlw.x1fozly0.x9dqhi0 > .xl4xnwh.x1r8uycs.xrvj5dj > .x4lel18.x159c2z0.xo0oibl > .xbp6zib.xw36f2b.xn95wi4 > ._9U4ptw.hw3gKA._4_iekA",
+                 ],
+               },
+             ],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+         "html": "<div class=\"LSNU1w\" aria-hidden=\"true\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".zAWjSA.GLyNIw:nth-child(3) > .LSNU1w[aria-hidden=\"true\"]",
+         ],
+       },
+       Object {
+         "all": Array [
+           Object {
+             "data": null,
+             "id": "focusable-not-tabbable",
+             "impact": "serious",
+             "message": "Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"https://www.canva.com/en_in/security/\" class=\"_5KtATA Xj0kcw LQzFZw Qfw6fw Sp3u_w Gcy95A _8ERLTg hw3gKA _9U4ptw _4_iekA j34Zww aqbYPg _3FvZZg\"><span class=\"khPe7Q\">Learn more</span></a>",
+                 "target": Array [
+                   ".zAWjSA.GLyNIw:nth-child(4) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .light.x6brqfx.x19aimcq > .ii7Tlw.x1fozly0.x9dqhi0 > .xl4xnwh.x1r8uycs.xrvj5dj > .x4lel18.x159c2z0.xo0oibl > .xbp6zib.xw36f2b.xn95wi4 > ._9U4ptw.hw3gKA._4_iekA",
+                 ],
+               },
+             ],
+           },
+         ],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   Focusable content should have tabindex=\"-1\" or be removed from the DOM",
+         "html": "<div class=\"LSNU1w\" aria-hidden=\"true\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".zAWjSA.GLyNIw:nth-child(4) > .LSNU1w[aria-hidden=\"true\"]",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.name-role-value",
+       "wcag2a",
+       "wcag412",
+       "TTv5",
+       "TT6.a",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "RGAAv4",
+       "RGAA-10.8.1",
+     ],
+   },
+   Object {
+     "description": "Ensure ARIA attributes are not prohibited for an element's role",
+     "help": "Elements must only use permitted ARIA attributes",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/aria-prohibited-attr?application=playwright",
+     "id": "aria-prohibited-attr",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [],
+         "failureSummary": "Fix all of the following:
+   aria-label attribute cannot be used on a div with no valid role attribute.",
+         "html": "<div id=\"_R_6tb5b_\" class=\"XmRDGw C3qtwA iC_woA x1ghz6dp x1717udv xng3xce xc342km xe8uvvx x9dqhi0 x9f619 x1a2a7pz xozqiw3 xxtcm4k x1qyk479 x1eywl5b qwEVbg Jvb7NA\" style=\"--x-display:flex;--x-flexDirection:row;--x-columnGap:24px;--rlSUnQ:24px;--sk9ikg:1\" aria-label=\"business_cards\">",
+         "impact": "serious",
+         "none": Array [
+           Object {
+             "data": Object {
+               "messageKey": "noRoleSingular",
+               "nodeName": "div",
+               "prohibited": Array [
+                 "aria-label",
+               ],
+               "role": null,
+             },
+             "id": "aria-prohibited-attr",
+             "impact": "serious",
+             "message": "aria-label attribute cannot be used on a div with no valid role attribute.",
+             "relatedNodes": Array [],
+           },
+         ],
+         "target": Array [
+           "#_R_6tb5b_",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.aria",
+       "wcag2a",
+       "wcag412",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "RGAAv4",
+       "RGAA-7.1.1",
+     ],
+   },
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#eeeeef",
+               "contrastRatio": 1.15,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#ffffff",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.15 (foreground color: #ffffff, background color: #eeeeef, font size: 18.0pt (24px), font weight: normal). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"x1kgbacm x16k6dlu x1lfrg59 x5yr21d xh8yej3 x1sbju2s xa4qsjk x93rc3u\"></div>",
+                 "target": Array [
+                   ".x4lel18.x159c2z0.xo0oibl:nth-child(1) > .xbp6zib.xw36f2b.xn95wi4:nth-child(2) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .B_B2ng > .xqtp20y.x1n2onr6.xh8yej3 > .x5o4joa.x13vifvy.x1o0tod > .xcrlgei.x1agbcgv.x2lwn1j > .x1n2onr6.x5yr21d.xh8yej3 > .x5yr21d.xh8yej3 > .ww8pxw[aria-label=\"\"] > div > .x1kgbacm.x16k6dlu.x1sbju2s",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"_1ulZIQ\" style=\"width:100%;height:100%;max-height:505px\">",
+                 "target": Array [
+                   ".x4lel18.x159c2z0.xo0oibl:nth-child(1) > .xbp6zib.xw36f2b.xn95wi4:nth-child(2) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.15 (foreground color: #ffffff, background color: #eeeeef, font size: 18.0pt (24px), font weight: normal). Expected contrast ratio of 3:1",
+         "html": "<h3 class=\"xlh3980 xvmahel x1ghz6dp x1wtentn x1n2zxk4 xxrschz xv0kuv6 x7gbg69 x5bqof6 xmhinqh x12oo3zp xaqwbqt x1mzt3pk x1vvkbs x1yc453h xce744n\">Capture the essence of your brand in a logo</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".x4lel18.x159c2z0.xo0oibl:nth-child(1) > .xbp6zib.xw36f2b.xn95wi4:nth-child(2) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .dark.xo86nag.xntwwlm > .ii7Tlw.x1fozly0.x9dqhi0 > .xl4xnwh.x1r8uycs.xrvj5dj > .xv0kuv6.xmhinqh.xaqwbqt",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#eeeeef",
+               "contrastRatio": 1.15,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#ffffff",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.15 (foreground color: #ffffff, background color: #eeeeef, font size: 18.0pt (24px), font weight: normal). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"x1kgbacm x16k6dlu x1lfrg59 x5yr21d xh8yej3 x1sbju2s xa4qsjk x93rc3u\"></div>",
+                 "target": Array [
+                   ".xbp6zib.xw36f2b.xn95wi4:nth-child(1) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .B_B2ng > .xqtp20y.x1n2onr6.xh8yej3 > .x5o4joa.x13vifvy.x1o0tod > .xcrlgei.x1agbcgv.x2lwn1j > .lszjnQ > .gh48MQ > .xqtp20y.x1n2onr6.xh8yej3 > .x5o4joa.x13vifvy.x1o0tod > .xcrlgei.x1agbcgv.x2lwn1j > .x1n2onr6.x5yr21d.xh8yej3 > .x5yr21d.xh8yej3 > .ww8pxw[aria-label=\"\"] > div > .x1kgbacm.x16k6dlu.x1sbju2s",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"_1ulZIQ\" style=\"width:100%;height:100%;max-height:505px\">",
+                 "target": Array [
+                   ".x4lel18.x159c2z0.xo0oibl:nth-child(2) > .xbp6zib.xw36f2b.xn95wi4:nth-child(1) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.15 (foreground color: #ffffff, background color: #eeeeef, font size: 18.0pt (24px), font weight: normal). Expected contrast ratio of 3:1",
+         "html": "<h3 class=\"xlh3980 xvmahel x1ghz6dp x1wtentn x1n2zxk4 xxrschz xv0kuv6 x7gbg69 x5bqof6 xmhinqh x12oo3zp xaqwbqt x1mzt3pk x1vvkbs x1yc453h xce744n\">Reimagine your image with a short written prompt</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".xbp6zib.xw36f2b.xn95wi4:nth-child(1) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .dark.xo86nag.xntwwlm > .ii7Tlw.x1fozly0.x9dqhi0 > .xl4xnwh.x1r8uycs.xrvj5dj > .xv0kuv6.xmhinqh.xaqwbqt",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#eeeeef",
+               "contrastRatio": 1.15,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#ffffff",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.15 (foreground color: #ffffff, background color: #eeeeef, font size: 18.0pt (24px), font weight: normal). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"x1kgbacm x16k6dlu x1lfrg59 x5yr21d xh8yej3 x1sbju2s xa4qsjk x93rc3u\"></div>",
+                 "target": Array [
+                   ".xbp6zib.xw36f2b.xn95wi4:nth-child(2) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .B_B2ng > .xqtp20y.x1n2onr6.xh8yej3 > .x5o4joa.x13vifvy.x1o0tod > .xcrlgei.x1agbcgv.x2lwn1j > .lszjnQ > .gh48MQ > .xqtp20y.x1n2onr6.xh8yej3 > .x5o4joa.x13vifvy.x1o0tod > .xcrlgei.x1agbcgv.x2lwn1j > .x1n2onr6.x5yr21d.xh8yej3 > .x5yr21d.xh8yej3 > .ww8pxw[aria-label=\"\"] > div > .x1kgbacm.x16k6dlu.x1sbju2s",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"_1ulZIQ\" style=\"width:100%;height:100%;max-height:505px\">",
+                 "target": Array [
+                   ".x4lel18.x159c2z0.xo0oibl:nth-child(3) > .xbp6zib.xw36f2b.xn95wi4:nth-child(2) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.15 (foreground color: #ffffff, background color: #eeeeef, font size: 18.0pt (24px), font weight: normal). Expected contrast ratio of 3:1",
+         "html": "<h3 class=\"xlh3980 xvmahel x1ghz6dp x1wtentn x1n2zxk4 xxrschz xv0kuv6 x7gbg69 x5bqof6 xmhinqh x12oo3zp xaqwbqt x1mzt3pk x1vvkbs x1yc453h xce744n\">Make words come easily, introducing the Magic Write</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".x4lel18.x159c2z0.xo0oibl:nth-child(3) > .xbp6zib.xw36f2b.xn95wi4:nth-child(2) > .LSNU1w[aria-hidden=\"true\"] > ._1ulZIQ > .dark.xo86nag.xntwwlm > .ii7Tlw.x1fozly0.x9dqhi0 > .xl4xnwh.x1r8uycs.xrvj5dj > .xv0kuv6.xmhinqh.xaqwbqt",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]: Loading finished
  - generic [ref=e5]:
    - paragraph [ref=e7]:
      - link "Skip to main content" [ref=e8] [cursor=pointer]:
        - /url: "#mainId"
    - banner [ref=e13]:
      - generic [ref=e17]:
        - link "Canva home" [ref=e20] [cursor=pointer]:
          - /url: https://www.canva.in/
        - navigation [ref=e27]:
          - list [ref=e28]:
            - listitem [ref=e29]:
              - button "Design" [ref=e30] [cursor=pointer]
            - listitem [ref=e32]:
              - button "Product" [ref=e33] [cursor=pointer]
            - listitem [ref=e35]:
              - button "Plans" [ref=e36] [cursor=pointer]
            - listitem [ref=e38]:
              - button "Business" [ref=e39] [cursor=pointer]
            - listitem [ref=e41]:
              - button "Education" [ref=e42] [cursor=pointer]
            - listitem [ref=e44]:
              - button "Help" [ref=e45] [cursor=pointer]
        - generic [ref=e49]:
          - link "Sign up" [ref=e51] [cursor=pointer]:
            - /url: https://www.canva.com/en_in/signup/
          - link "Log in" [ref=e53] [cursor=pointer]:
            - /url: https://www.canva.com/en_in/login/
    - main [ref=e55]:
      - generic [ref=e58]:
        - generic [ref=e59]:
          - heading "Your ideas, powered by Canva" [level=1] [ref=e60]
          - generic [ref=e63]: AI visual suite for presentations, reels & more
          - button "Sign up for free" [ref=e69] [cursor=pointer]
        - generic [ref=e76]:
          - button "Play" [ref=e85] [cursor=pointer]
          - generic [ref=e86]:
            - button "Play" [ref=e87] [cursor=pointer]
            - button "Mute" [ref=e88] [cursor=pointer]
      - generic [ref=e95]:
        - heading "All the tools to create like a pro" [level=2] [ref=e98]
        - generic [ref=e100]:
          - tablist [ref=e106]:
            - tab [selected] [ref=e108] [cursor=pointer]:
              - paragraph [ref=e111]: AI
            - tab [ref=e113] [cursor=pointer]:
              - paragraph [ref=e116]: Social Media
            - tab [ref=e118] [cursor=pointer]:
              - paragraph [ref=e121]: Video
            - tab [ref=e123] [cursor=pointer]:
              - paragraph [ref=e126]: Presentation
            - tab [ref=e128] [cursor=pointer]:
              - paragraph [ref=e131]: Print
            - tab [ref=e133] [cursor=pointer]:
              - paragraph [ref=e136]: Try it now
            - tab [ref=e138] [cursor=pointer]:
              - paragraph [ref=e141]: Education
          - tabpanel [ref=e144]:
            - generic [ref=e145]:
              - generic [ref=e146]:
                - generic [ref=e160] [cursor=pointer]:
                  - heading [level=3] [ref=e161]: Swap distracting backgrounds & transform your photos
                  - link [ref=e165]:
                    - /url: https://www.canva.com/features/photo-background-changer/
                    - generic [ref=e166]: Change background
                - generic [ref=e180] [cursor=pointer]:
                  - heading [level=3] [ref=e181]: Capture the essence of your brand in a logo
                  - link [ref=e185]:
                    - /url: https://www.canva.com/ai-logo-generator/
                    - generic [ref=e186]: Generate a logo
              - generic [ref=e187]:
                - generic [ref=e207] [cursor=pointer]:
                  - heading [level=3] [ref=e208]: Reimagine your image with a short written prompt
                  - link [ref=e212]:
                    - /url: https://www.canva.com/features/ai-photo-editing/
                    - generic [ref=e213]: Try Magic Edit
                - generic [ref=e227] [cursor=pointer]:
                  - heading [level=3] [ref=e228]: Generate natural-sounding AI voices
                  - link [ref=e232]:
                    - /url: https://www.canva.com/features/ai-voice-generator/
                    - generic [ref=e233]: Generate voice
              - generic [ref=e234]:
                - generic [ref=e248] [cursor=pointer]:
                  - heading [level=3] [ref=e249]: Upscale your images with AI
                  - link [ref=e253]:
                    - /url: https://www.canva.com/features/image-enhancer/
                    - generic [ref=e254]: Enhance an image
                - generic [ref=e274] [cursor=pointer]:
                  - heading [level=3] [ref=e275]: Make words come easily, introducing the Magic Write
                  - link [ref=e279]:
                    - /url: https://www.canva.com/magic-write/
                    - generic [ref=e280]: Try Magic Write
      - generic [ref=e289]:
        - generic [ref=e291]:
          - heading "Try Image Generator" [level=2] [ref=e292]
          - paragraph [ref=e293]: Turn pure text to art with Magic Media™ and our range of AI art generator tools. Simply enter a prompt, pick a style, and watch your words transform into beautiful art.
          - generic [ref=e294]:
            - generic [ref=e298]:
              - searchbox "Choose from the list of example prompts or write your own" [ref=e300]: Moon rising over the mountains
              - button "Clear" [ref=e303] [cursor=pointer]
            - button "Generate" [ref=e307] [cursor=pointer]
        - generic [ref=e312]:
          - region [ref=e313]
          - button [ref=e354] [cursor=pointer]:
            - generic [ref=e356]:
              - paragraph [ref=e359]: 20+
              - paragraph [ref=e361]: More
      - generic [ref=e370]:
        - generic [ref=e371]:
          - heading "Templates for absolutely anything" [level=2] [ref=e372]
          - generic [ref=e375]:
            - link "Start designing for free" [ref=e378] [cursor=pointer]:
              - /url: https://www.canva.com/signup/
            - link "Browse all templates (opens in a new tab or window)" [ref=e382] [cursor=pointer]:
              - /url: /templates/
              - generic [ref=e383]: Browse all templates
              - generic: (opens in a new tab or window)
        - generic: Start of template list
        - paragraph [ref=e388]:
          - link "Skip to end of template list" [ref=e389] [cursor=pointer]:
            - /url: "#_R_195bH1_1"
        - generic [ref=e391]:
          - button "Previous page of list" [ref=e393] [cursor=pointer]
          - button "Next page of list" [ref=e461] [cursor=pointer]
        - paragraph [ref=e465]:
          - link "Skip to start of template list" [ref=e466] [cursor=pointer]:
            - /url: "#_R_195bH1_0"
        - generic: End of template list
      - generic [ref=e476]:
        - generic [ref=e477]:
          - heading "Our Business Features" [level=2] [ref=e479]
          - paragraph [ref=e481]:
            - text: Enhance the design capabilities of your team or your entire business with Canva's business plans! To enquire about our Enterprise plan, please contact us
            - link "here⁠ (opens in a new tab or window)" [ref=e482] [cursor=pointer]:
              - /url: https://www.canva.com/contact-sales/
              - text: here
              - generic:
                - generic:
                  - text: ⁠
                  - generic [ref=e483]: (opens in a new tab or window)
            - text: "!"
        - tabpanel [ref=e488]:
          - generic "business_cards" [ref=e490]:
            - generic [ref=e504] [cursor=pointer]:
              - heading [level=3] [ref=e505]: Set up a Brand Kit to unify your designs
              - link [ref=e509]:
                - /url: https://www.canva.com/en_in/pro/brand-kit/
                - generic [ref=e510]: Learn more
            - generic [ref=e524] [cursor=pointer]:
              - heading [level=3] [ref=e525]: Empower your team to scale content
              - link [ref=e529]:
                - /url: https://www.canva.com/en_in/business/features/invite-your-team/
                - generic [ref=e530]: Learn more
            - generic [ref=e544] [cursor=pointer]:
              - heading [level=3] [ref=e545]: Collaborate & create in real time
              - link [ref=e549]:
                - /url: https://www.canva.com/en_in/pricing/
                - generic [ref=e550]: View plans
            - generic [ref=e564] [cursor=pointer]:
              - heading [level=3] [ref=e565]: Protect and secure your data
              - link [ref=e569]:
                - /url: https://www.canva.com/en_in/security/
                - generic [ref=e570]: Learn more
      - generic [ref=e578]:
        - paragraph [ref=e580]:
          - text: Unlock premium templates, more powerful design tools & AI features with a Canva plan.
          - link "Educational institutions⁠ (opens in a new tab or window)" [ref=e581] [cursor=pointer]:
            - /url: https://www.canva.com/en_in/education/
            - text: Educational institutions
            - generic:
              - generic:
                - text: ⁠
                - generic [ref=e582]: (opens in a new tab or window)
          - text: and
          - link "non-profits⁠ (opens in a new tab or window)" [ref=e583] [cursor=pointer]:
            - /url: https://www.canva.com/en_in/canva-for-nonprofits/
            - text: non-profits
            - generic:
              - generic:
                - text: ⁠
                - generic [ref=e584]: (opens in a new tab or window)
          - text: can use Canva's premium features for free.
        - link "See plans and pricing (opens in a new tab or window)" [ref=e585] [cursor=pointer]:
          - /url: https://www.canva.com/en_in/pricing/
          - generic [ref=e587]: See plans and pricing
          - generic: (opens in a new tab or window)
    - generic [ref=e593]:
      - paragraph [ref=e595]:
        - link "Skip to end of footer" [ref=e596] [cursor=pointer]:
          - /url: "#_R_5rH1_"
      - contentinfo [ref=e598]:
        - generic [ref=e600]:
          - generic [ref=e607]:
            - generic [ref=e610]:
              - heading "Download Canva for free" [level=2] [ref=e612]
              - generic [ref=e615]:
                - link "Windows" [ref=e617] [cursor=pointer]:
                  - /url: https://www.canva.com/en_in/download/windows/
                - link "Mac" [ref=e620] [cursor=pointer]:
                  - /url: https://www.canva.com/en_in/download/mac/
            - navigation [ref=e624]:
              - list [ref=e626]:
                - listitem [ref=e627]:
                  - heading "Product" [level=2] [ref=e629]
                  - list "Product" [ref=e631]:
                    - listitem [ref=e632]:
                      - link "Latest launches" [ref=e633] [cursor=pointer]:
                        - /url: https://www.canva.com/launches/
                    - listitem [ref=e635]:
                      - link "Visual Suite" [ref=e636] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/visual-suite/
                    - listitem [ref=e638]:
                      - link "Canva AI" [ref=e639] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/canva-ai/
                    - listitem [ref=e641]:
                      - link "Brand management" [ref=e642] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/solutions/brand-management-tools/
                    - listitem [ref=e644]:
                      - link "Social media" [ref=e645] [cursor=pointer]:
                        - /url: https://www.canva.com/social-media/
                    - listitem [ref=e647]:
                      - link "Features" [ref=e648] [cursor=pointer]:
                        - /url: https://www.canva.com/features/
                    - listitem [ref=e650]:
                      - link "Print" [ref=e651] [cursor=pointer]:
                        - /url: https://www.canva.com/en_gb/print/
                    - listitem [ref=e653]:
                      - link "Affinity" [ref=e654] [cursor=pointer]:
                        - /url: https://www.affinity.studio/
                    - listitem [ref=e659]:
                      - link "Template library" [ref=e660] [cursor=pointer]:
                        - /url: https://www.canva.in/templates/
                    - listitem [ref=e662]:
                      - link "Design Trends" [ref=e663] [cursor=pointer]:
                        - /url: https://www.canva.com/design-trends/
                - listitem [ref=e665]:
                  - heading "Plans" [level=2] [ref=e667]
                  - list "Plans" [ref=e669]:
                    - listitem [ref=e670]:
                      - link "Pricing" [ref=e671] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/pricing/
                    - listitem [ref=e673]:
                      - link "Pro" [ref=e674] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/pro/
                    - listitem [ref=e676]:
                      - link "Business" [ref=e677] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/canva-business/
                    - listitem [ref=e679]:
                      - link "Enterprise" [ref=e680] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/enterprise/
                    - listitem [ref=e682]:
                      - link "Education" [ref=e683] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/education/
                    - listitem [ref=e685]:
                      - link "Higher education" [ref=e686] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/higher-education/
                    - listitem [ref=e688]:
                      - link "Nonprofits" [ref=e689] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/nonprofits/
                    - listitem [ref=e691]:
                      - link "Contact Sales" [ref=e692] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/contact-sales/
                - listitem [ref=e694]:
                  - heading "About" [level=2] [ref=e696]
                  - list "About" [ref=e698]:
                    - listitem [ref=e699]:
                      - link "About Canva" [ref=e700] [cursor=pointer]:
                        - /url: https://www.canva.com/about/
                    - listitem [ref=e702]:
                      - link "Newsroom" [ref=e703] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/newsroom/news/
                    - listitem [ref=e705]:
                      - link "Events" [ref=e706] [cursor=pointer]:
                        - /url: https://www.canva.com/events/
                    - listitem [ref=e708]:
                      - link "Canva Originals" [ref=e709] [cursor=pointer]:
                        - /url: https://shop.canva.com/
                    - listitem [ref=e711]:
                      - link "Careers" [ref=e712] [cursor=pointer]:
                        - /url: https://www.lifeatcanva.com/en
                    - listitem [ref=e717]:
                      - link "Social impact" [ref=e718] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/step-two/
                    - listitem [ref=e720]:
                      - link "Sustainability" [ref=e721] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/sustainability/
                    - listitem [ref=e723]:
                      - link "Case studies" [ref=e724] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/case-studies/
                - listitem [ref=e726]:
                  - heading "Community" [level=2] [ref=e728]
                  - list "Community" [ref=e730]:
                    - listitem [ref=e731]:
                      - link "Canva Communities" [ref=e732] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/community/
                    - listitem [ref=e734]:
                      - link "Creators" [ref=e735] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/creators/
                    - listitem [ref=e737]:
                      - link "Affiliates" [ref=e738] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/help/canva-affiliate-marketing-program/
                    - listitem [ref=e740]:
                      - link "Canva Represents Fund" [ref=e741] [cursor=pointer]:
                        - /url: https://www.canva.com/canva-represents/
                    - listitem [ref=e743]:
                      - link "Content partners" [ref=e744] [cursor=pointer]:
                        - /url: https://www.canva.com/partners/content/
                    - listitem [ref=e746]:
                      - link "Business partner directory" [ref=e747] [cursor=pointer]:
                        - /url: https://partners.canva.com/directory/
                    - listitem [ref=e749]:
                      - link "Canva Developers" [ref=e750] [cursor=pointer]:
                        - /url: https://www.canva.com/developers/
                - listitem [ref=e755]:
                  - heading "Inspiration" [level=2] [ref=e757]
                  - list "Inspiration" [ref=e759]:
                    - listitem [ref=e760]:
                      - link "Design Trends" [ref=e761] [cursor=pointer]:
                        - /url: https://www.canva.com/design-trends/
                    - listitem [ref=e763]:
                      - link "AI creativity podcast" [ref=e764] [cursor=pointer]:
                        - /url: https://promptedpodcast.com/
                    - listitem [ref=e769]:
                      - link "Learn blog" [ref=e770] [cursor=pointer]:
                        - /url: https://www.canva.com/learn/
                    - listitem [ref=e772]:
                      - link "Templates Marketplace" [ref=e773] [cursor=pointer]:
                        - /url: https://www.canva.in/templates/
                    - listitem [ref=e775]:
                      - link "Font pairing" [ref=e776] [cursor=pointer]:
                        - /url: https://www.canva.com/learn/the-ultimate-guide-to-font-pairing/
                    - listitem [ref=e778]:
                      - link "Colour wheel" [ref=e779] [cursor=pointer]:
                        - /url: https://www.canva.com/colors/color-wheel/
                    - listitem [ref=e781]:
                      - link "Colours" [ref=e782] [cursor=pointer]:
                        - /url: https://www.canva.com/colors/
                    - listitem [ref=e784]:
                      - link "Colour palette generator" [ref=e785] [cursor=pointer]:
                        - /url: https://www.canva.com/colors/color-palette-generator/
                - listitem [ref=e787]:
                  - heading "Help" [level=2] [ref=e789]
                  - list "Help" [ref=e791]:
                    - listitem [ref=e792]:
                      - link "Help Centre" [ref=e793] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/help/
                    - listitem [ref=e795]:
                      - link "Security" [ref=e796] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/security/
                    - listitem [ref=e798]:
                      - link "Trust Centre" [ref=e799] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/trust/
                    - listitem [ref=e801]:
                      - link "Canva Safe AI" [ref=e802] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/safe-ai-canva-shield/
                    - listitem [ref=e804]:
                      - link "Accessibility" [ref=e805] [cursor=pointer]:
                        - /url: https://www.canva.com/accessibility/
                    - listitem [ref=e807]:
                      - link "Enterprise services" [ref=e808] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/enterprise/professional-services/
                    - listitem [ref=e810]:
                      - link "Design School" [ref=e811] [cursor=pointer]:
                        - /url: https://www.canva.com/design-school/
                    - listitem [ref=e816]:
                      - link "Sitemap" [ref=e817] [cursor=pointer]:
                        - /url: https://www.canva.com/en_in/sitemap/
          - generic [ref=e821]:
            - generic [ref=e825]:
              - button "English (India)" [ref=e831] [cursor=pointer]
              - generic [ref=e837]:
                - link "LinkedIn" [ref=e839] [cursor=pointer]:
                  - /url: https://www.linkedin.com/company/canva
                  - generic: (opens in a new tab or window)
                - link "Instagram" [ref=e843] [cursor=pointer]:
                  - /url: https://www.instagram.com/canvaindia/
                  - generic: (opens in a new tab or window)
                - link "Facebook" [ref=e847] [cursor=pointer]:
                  - /url: https://www.facebook.com/CanvaIndia/
                  - generic: (opens in a new tab or window)
                - link "Pinterest" [ref=e851] [cursor=pointer]:
                  - /url: https://au.pinterest.com/canva/
                  - generic: (opens in a new tab or window)
                - link "X" [ref=e855] [cursor=pointer]:
                  - /url: https://x.com/canva
                  - generic: (opens in a new tab or window)
                - link "YouTube" [ref=e859] [cursor=pointer]:
                  - /url: https://www.youtube.com/@canvaindia
                  - generic: (opens in a new tab or window)
            - generic [ref=e864]:
              - generic [ref=e868]:
                - link "Privacy" [ref=e870] [cursor=pointer]:
                  - /url: https://www.canva.com/en_in/policies/privacy-policy/
                - link "Terms" [ref=e874] [cursor=pointer]:
                  - /url: https://www.canva.com/en_in/policies/terms-of-use/
              - paragraph [ref=e879]: © 2026 All Rights Reserved
      - paragraph [ref=e881]:
        - link "Skip to start of footer" [ref=e882] [cursor=pointer]:
          - /url: "#_R_5r_"
```

# Test source

```ts
  1  | // accessibility.spec.ts
  2  | // This file: opens a page with Playwright, scans it with axe-core, and reports violations.
  3  | // Every test below follows the exact same 3-step pattern:
  4  | //   1. page.goto() — open the page (this part you already know from Playwright)
  5  | //   2. AxeBuilder(...).analyze() — run the accessibility scan
  6  | //   3. expect(...) — decide whether the test passes or fails based on what axe found
  7  | 
  8  | import { test, expect } from '@playwright/test';
  9  | import AxeBuilder from '@axe-core/playwright';
  10 | 
  11 | // ============================================================
  12 | // TEST 1: Basic scan — just see what violations exist, don't fail the test yet
  13 | // Good starting point: run this first and just LOOK at what axe finds.
  14 | // ============================================================
  15 | test('homepage accessibility scan (report only)', async ({ page }) => {
  16 |   await page.goto('https://www.canva.in/'); // Wikipedia homepage — stable, simple, good for testing setup
  17 | 
  18 |   const results = await new AxeBuilder({ page }).analyze();
  19 | 
  20 |   // Print violations to the console so you can read them
  21 |   console.log(`Found ${results.violations.length} accessibility violations`);
  22 |   results.violations.forEach((violation) => {
  23 |     console.log(`\n[${violation.impact?.toUpperCase()}] ${violation.id}`);
  24 |     console.log(`Description: ${violation.description}`);
  25 |     console.log(`Affected elements: ${violation.nodes.length}`);
  26 |   });
  27 | 
  28 |   // No hard assertion here yet — this test is just for exploring what's on the page.
  29 | });
  30 | 
  31 | // ============================================================
  32 | // TEST 2: Fail the test if there are any CRITICAL or SERIOUS violations
  33 | // This is the version you'd actually use in a real CI pipeline —
  34 | // it turns accessibility bugs into real test failures, same as any other bug.
  35 | // ============================================================
  36 | test('homepage has no critical or serious accessibility violations', async ({ page }) => {
  37 |   await page.goto('https://www.canva.in/');
  38 | 
  39 |   const results = await new AxeBuilder({ page })
  40 |     .withTags(['wcag2a', 'wcag2aa']) // scan against WCAG 2.0 Level A and AA rules
  41 |     .analyze();
  42 | 
  43 |   const criticalOrSerious = results.violations.filter(
  44 |     (v) => v.impact === 'critical' || v.impact === 'serious'
  45 |   );
  46 | 
  47 |   // This is where the test actually passes or fails.
  48 |   // If this array isn't empty, the test fails and shows you what broke.
> 49 |   expect(criticalOrSerious).toEqual([]);
     |                             ^ Error: expect(received).toEqual(expected) // deep equality
  50 | });
  51 | 
  52 | // ============================================================
  53 | // TEST 3: Scan multiple pages in one run (loop pattern)
  54 | // Same idea as testing multiple modules — reuse the same check across several URLs.
  55 | // ============================================================
  56 | const pagesToScan = [
  57 |   'https://www.canva.in/',
  58 |   // Add more EPFO public pages here as you explore the site,
  59 |   // e.g. the "For Employees" page, "Downloads" page, grievance portal —
  60 |   // stick to public pages only, don't attempt to log in.
  61 | ];
  62 | 
  63 | for (const url of pagesToScan) {
  64 |   test(`accessibility scan: ${url}`, async ({ page }) => {
  65 |     await page.goto(url);
  66 |     const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
  67 | 
  68 |     console.log(`${url} — ${results.violations.length} violations found`);
  69 | 
  70 |     const critical = results.violations.filter((v) => v.impact === 'critical');
  71 |     expect(critical).toEqual([]);
  72 |   });
  73 | }
```
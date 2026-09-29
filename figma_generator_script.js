// =========================================================================
// FIGMA AUTOMATION SCRIPT: Food Delivery UX Planning Board & Wireframes
// =========================================================================
// HOW TO USE IN FIGMA:
// 1. In Figma, open any file.
// 2. Go to Plugins -> Development -> Open Console (or Create a new Plugin).
// 3. Paste this code into the Figma console and press Enter.
// 4. Figma will generate the planning board and mobile frames directly on canvas!
// =========================================================================

(async function generateFigmaBoard() {
  // Load fonts
  await Promise.all([
    figma.loadFontAsync({ family: "Inter", style: "Regular" }),
    figma.loadFontAsync({ family: "Inter", style: "Medium" }),
    figma.loadFontAsync({ family: "Inter", style: "Semi Bold" }),
    figma.loadFontAsync({ family: "Inter", style: "Bold" })
  ]);

  const bgPageColor = { r: 0.98, g: 0.976, b: 0.96 }; // #FAF9F5
  const blackColor = { r: 0.07, g: 0.07, b: 0.07 };   // #111111
  const grayBorder = { r: 0.86, g: 0.85, b: 0.82 };   // #DCD9D0
  const grayText = { r: 0.45, g: 0.45, b: 0.45 };     // #737373
  const whiteColor = { r: 1, g: 1, b: 1 };

  // Master Board Frame
  const board = figma.createFrame();
  board.name = "Mobile UX Planning Board · Sprint 01";
  board.resize(1600, 2000);
  board.fills = [{ type: 'SOLID', color: bgPageColor }];

  // 1. Header Section
  const headerFrame = figma.createFrame();
  headerFrame.name = "00_Header";
  headerFrame.resize(1480, 160);
  headerFrame.x = 60;
  headerFrame.y = 50;
  headerFrame.fills = [];
  board.appendChild(headerFrame);

  // Sprint Pill
  const pill = figma.createFrame();
  pill.resize(230, 26);
  pill.cornerRadius = 13;
  pill.fills = [{ type: 'SOLID', color: { r: 0.92, g: 0.91, b: 0.88 } }];
  headerFrame.appendChild(pill);

  const pillText = figma.createText();
  pillText.characters = "01  MOBILE UX PLANNING BOARD · SPRINT 01";
  pillText.fontName = { family: "Inter", style: "Bold" };
  pillText.fontSize = 9.5;
  pillText.fills = [{ type: 'SOLID', color: blackColor }];
  pillText.x = 12;
  pillText.y = 7;
  pill.appendChild(pillText);

  // Main Title
  const title = figma.createText();
  title.characters = "Dinner, without the guesswork.";
  title.fontName = { family: "Inter", style: "Bold" };
  title.fontSize = 38;
  title.fills = [{ type: 'SOLID', color: blackColor }];
  title.x = 0;
  title.y = 42;
  headerFrame.appendChild(title);

  // Subtitle
  const subtitle = figma.createText();
  subtitle.characters = "A low-fidelity end-to-end food-delivery experience that helps hungry people choose quickly,\nunderstand the total cost, and know exactly what happens after checkout.";
  subtitle.fontName = { family: "Inter", style: "Regular" };
  subtitle.fontSize = 13;
  subtitle.lineHeight = { value: 18, unit: 'PIXELS' };
  subtitle.fills = [{ type: 'SOLID', color: grayText }];
  subtitle.x = 0;
  subtitle.y = 96;
  headerFrame.appendChild(subtitle);

  // Design Challenge Card (Top Right)
  const challengeCard = figma.createFrame();
  challengeCard.name = "Design Challenge Card";
  challengeCard.resize(420, 140);
  challengeCard.x = 1060;
  challengeCard.y = 0;
  challengeCard.fills = [{ type: 'SOLID', color: bgPageColor }];
  challengeCard.strokes = [{ type: 'SOLID', color: blackColor }];
  challengeCard.strokeWeight = 1.2;
  headerFrame.appendChild(challengeCard);

  const challengeHeader = figma.createText();
  challengeHeader.characters = "DESIGN CHALLENGE";
  challengeHeader.fontName = { family: "Inter", style: "Bold" };
  challengeHeader.fontSize = 9;
  challengeHeader.fills = [{ type: 'SOLID', color: blackColor }];
  challengeHeader.x = 16;
  challengeHeader.y = 16;
  challengeCard.appendChild(challengeHeader);

  const challengeQuestion = figma.createText();
  challengeQuestion.characters = "How can ordering feel fast without hiding\nthe details people need to trust the decision?";
  challengeQuestion.fontName = { family: "Inter", style: "Semi Bold" };
  challengeQuestion.fontSize = 15;
  challengeQuestion.lineHeight = { value: 20, unit: 'PIXELS' };
  challengeQuestion.fills = [{ type: 'SOLID', color: blackColor }];
  challengeQuestion.x = 16;
  challengeQuestion.y = 42;
  challengeCard.appendChild(challengeQuestion);

  const challengeSub = figma.createText();
  challengeSub.characters = "Constraint: support a first-time order in under 4 minutes,\nwith price and delivery confidence intact.";
  challengeSub.fontName = { family: "Inter", style: "Regular" };
  challengeSub.fontSize = 9;
  challengeSub.lineHeight = { value: 13, unit: 'PIXELS' };
  challengeSub.fills = [{ type: 'SOLID', color: grayText }];
  challengeSub.x = 16;
  challengeSub.y = 96;
  challengeCard.appendChild(challengeSub);

  // 2. 8 Wireframe Screens Section
  const wireframesSection = figma.createFrame();
  wireframesSection.name = "04_Wireframe_Screens";
  wireframesSection.resize(1480, 480);
  wireframesSection.x = 60;
  wireframesSection.y = 800;
  wireframesSection.fills = [];
  board.appendChild(wireframesSection);

  const wireframeTitle = figma.createText();
  wireframeTitle.characters = "The end-to-end ordering experience";
  wireframeTitle.fontName = { family: "Inter", style: "Bold" };
  wireframeTitle.fontSize = 20;
  wireframeTitle.fills = [{ type: 'SOLID', color: blackColor }];
  wireframeTitle.x = 0;
  wireframeTitle.y = 24;
  wireframesSection.appendChild(wireframeTitle);

  const screenNames = [
    { num: "01", name: "Discover", note: "Address, ETA, and visible fees establish relevance before browsing." },
    { num: "02", name: "Compare", note: "Filters enforce real decision signals; results stay scannable." },
    { num: "03", name: "Choose", note: "Restaurant expectations and menu structure appear before item selection." },
    { num: "04", name: "Customize", note: "Required choices are explicit; price updates stay attached to the CTA." },
    { num: "05", name: "Review", note: "Editable items and itemized fees prevent a surprised checkout." },
    { num: "06", name: "Checkout", note: "Address, timing, and payment are validated without losing the cart." },
    { num: "07", name: "Confirm", note: "Receipt, order number, ETA, and next actions appear the moment paid." },
    { num: "08", name: "Track", note: "Specific delivery states, courier contact, and destination remain secondary." }
  ];

  screenNames.forEach((s, idx) => {
    const xPos = idx * 185;
    const phone = figma.createFrame();
    phone.name = `${s.num}_${s.name}`;
    phone.resize(165, 340);
    phone.x = xPos;
    phone.y = 60;
    phone.cornerRadius = 16;
    phone.fills = [{ type: 'SOLID', color: whiteColor }];
    phone.strokes = [{ type: 'SOLID', color: blackColor }];
    phone.strokeWeight = 1.2;
    wireframesSection.appendChild(phone);

    // Screen title
    const sTitle = figma.createText();
    sTitle.characters = `${s.num} ${s.name}`;
    sTitle.fontName = { family: "Inter", style: "Bold" };
    sTitle.fontSize = 11;
    sTitle.fills = [{ type: 'SOLID', color: blackColor }];
    sTitle.x = xPos;
    sTitle.y = 38;
    wireframesSection.appendChild(sTitle);

    // Island
    const island = figma.createFrame();
    island.resize(44, 4);
    island.cornerRadius = 2;
    island.fills = [{ type: 'SOLID', color: blackColor }];
    island.x = (165 - 44) / 2;
    island.y = 6;
    phone.appendChild(island);

    // Note below
    const noteText = figma.createText();
    noteText.characters = `↳ ${s.note}`;
    noteText.fontName = { family: "Inter", style: "Regular" };
    noteText.fontSize = 8;
    noteText.lineHeight = { value: 11, unit: 'PIXELS' };
    noteText.resize(165, 45);
    noteText.fills = [{ type: 'SOLID', color: grayText }];
    noteText.x = xPos;
    noteText.y = 412;
    wireframesSection.appendChild(noteText);
  });

  // Focus view on created board
  figma.viewport.scrollAndZoomIntoView([board]);
  figma.notify("✅ Food Delivery UX Planning Board & Wireframes generated successfully!");
})();

  // YC Motivation Script
  function generateRandomMessage() {
    
    const ycGroupPartner = ['Dalton', 'Michael', 'Gary', 'PG', 'Sam', 'Jessica', 'Harj'];

    const phrase = [
      'the following',
      'something simple',
      'a hard truth',
      'this early on',
      'advice that stuck',
      'this during office hours'
    ];

    const ycAdvice = ["Launch now", "Build something people want", "Do things that don't scale", 
    "Find the 90 / 10 solution", "Find 10-100 customers who love your product", "All startups are badly broken at some point", 
    "Write code - talk to users", "It's not your money", "Growth is the result of a great product not the precursor", 
    "Don't scale your team/product until you have built something people want", "Valuation is not equal to success or even probability of success", 
    "Avoid long negotiated deals with big customers if you can", "Avoid big company corporate development queries - they will only waste time", 
    "Avoid conferences unless they are the best way to get customers", "Pre-product market fit - do things that don't scale: remain small/nimble", 
    "Startups can only solve one problem well at any given time", 
    "Founder relationships matter more than you think", "Sometimes you need to fire your customers (they might be killing you)", 
    "Ignore your competitors, you will more likely die of suicide than murder", "Most companies don't die because they run out of money", 
    "Be nice! Or at least don't be a jerk", "Get sleep and exercise - take care of yourself"];

    let lastGroupPartnerIndex = Math.floor(Math.random() * ycGroupPartner.length);
    let lastPhraseIndex = Math.floor(Math.random() * phrase.length);
    let lastAdviceIndex = Math.floor(Math.random() * ycAdvice.length);

    const randomGroupPartner = ycGroupPartner[lastGroupPartnerIndex];
    lastGroupPartnerIndex = (lastGroupPartnerIndex + 1) % ycGroupPartner.length;

    const randomPhrase = phrase[lastPhraseIndex];
    lastPhraseIndex = (lastPhraseIndex + 1) % phrase.length;

    const randomAdvice = ycAdvice[lastAdviceIndex];
    lastAdviceIndex = (lastAdviceIndex + 1) % ycAdvice.length;

    document.getElementById("ycPhrase").innerHTML = `"${randomGroupPartner} said ${randomPhrase}: ${randomAdvice}."`;
  }
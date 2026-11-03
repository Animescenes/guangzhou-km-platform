"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "zh" | "am";

const copy = {
  en: {
    nav: ["Home", "Products", "Manufacturers", "Our Services", "Contact"],
    eyebrow: "YOUR BRIDGE TO CHINA",
    title: "Source with confidence.\nTrade with clarity.",
    intro: "We help Ethiopian and international businesses connect with Chinese manufacturers through practical sourcing support, supplier verification, logistics coordination, and business tours.",
    primary: "Send an inquiry",
    secondary: "Explore our services",
    trust: ["China-based sourcing support", "Supplier checks before you commit", "One point of contact for your inquiry"],
    servicesTitle: "How we help your business",
    servicesIntro: "Practical support across the sourcing journey—from finding the right product to coordinating the next steps.",
    services: [
      ["Import & Export", "Support with trade coordination and the documents needed to move your order forward."],
      ["Freight & Logistics", "Coordinate with logistics partners and help clarify shipping options, timelines, and documents."],
      ["Product Sourcing", "Identify suitable products and manufacturers based on your specifications and budget."],
      ["Supplier Verification", "Help review supplier business details, communication, and available factory information."],
      ["Business Tour", "Plan manufacturer visits, Canton Fair visits, and practical travel arrangements for business buyers."]
    ],
    processTitle: "A clearer path from request to shipment",
    steps: [
      ["01", "Tell us what you need", "Share product specifications, quantity, target price, and destination."],
      ["02", "We research options", "We help identify potential suppliers and coordinate the information you need to compare."],
      ["03", "Review before deciding", "Review quotations and available supplier details before you make commitments."],
      ["04", "Coordinate next steps", "We help coordinate documentation and logistics discussions with the relevant partners."]
    ],
    marketplaceTitle: "Looking for a product or manufacturer?",
    marketplaceIntro: "Send us your requirements. Our team will review your inquiry and help identify suitable sourcing options. Supplier listings and product submissions are subject to review.",
    formName: "Your name",
    formCompany: "Company name (optional)",
    formEmail: "Email address",
    formProduct: "Product or service you need",
    formDetails: "Specifications, quantity, target price, and destination",
    formSend: "Prepare inquiry email",
    formNote: "This starter form opens your email application; it does not yet save submissions to an online database.",
    contactTitle: "Let's discuss your sourcing needs",
    contactIntro: "Tell us what you are looking to buy, where it needs to go, and what matters most to your business.",
    emailLabel: "Email",
    locationLabel: "Based in Guangzhou, China",
    footer: "Built on Trust, Driven by Reliability.",
    language: "Language",
    products: "Product categories and manufacturer listings will be published here as they are reviewed.",
    contactEmail: "info@guangzhoukm.com"
  },
  zh: {
    nav: ["首页", "产品", "制造商", "服务项目", "联系我们"],
    eyebrow: "您连接中国的桥梁",
    title: "放心采购，\n清晰贸易。",
    intro: "我们帮助埃塞俄比亚及国际企业对接中国制造商，提供产品采购、供应商核查、物流协调及商务考察支持。",
    primary: "发送询盘",
    secondary: "查看服务",
    trust: ["中国本地采购支持", "采购前核查供应商信息", "统一对接您的询盘"],
    servicesTitle: "我们如何帮助您的业务",
    servicesIntro: "从寻找合适产品到协调后续步骤，为采购流程提供实用支持。",
    services: [
      ["进出口贸易", "协助贸易协调及订单推进所需的相关文件。"],
      ["货运与物流", "与物流合作伙伴协调，协助了解运输方案、时间及文件要求。"],
      ["产品采购", "根据您的规格和预算寻找合适的产品及制造商。"],
      ["供应商核查", "协助核查供应商企业信息、沟通情况及可获得的工厂资料。"],
      ["商务考察", "为商务买家安排制造商拜访、广交会参观及相关出行事宜。"]
    ],
    processTitle: "从需求到发货，流程更清晰",
    steps: [
      ["01", "告诉我们您的需求", "提供产品规格、数量、目标价格及目的地。"],
      ["02", "我们研究可选方案", "协助寻找潜在供应商，并整理比较所需的信息。"],
      ["03", "决策前进行审核", "在作出承诺前，查看报价及可获得的供应商信息。"],
      ["04", "协调后续步骤", "协助与相关合作伙伴沟通文件及物流安排。"]
    ],
    marketplaceTitle: "正在寻找产品或制造商？",
    marketplaceIntro: "请发送您的需求。我们将审核询盘并协助寻找合适的采购方案。产品及供应商信息须经审核后发布。",
    formName: "您的姓名",
    formCompany: "公司名称（选填）",
    formEmail: "电子邮箱",
    formProduct: "所需产品或服务",
    formDetails: "规格、数量、目标价格及目的地",
    formSend: "准备询盘邮件",
    formNote: "当前表单会打开您的邮件应用；暂不将提交内容保存到在线数据库。",
    contactTitle: "让我们讨论您的采购需求",
    contactIntro: "告诉我们您要采购什么、目的地在哪里，以及您最重视的事项。",
    emailLabel: "电子邮箱",
    locationLabel: "位于中国广州",
    footer: "以信任为本，以可靠为先。",
    language: "语言",
    products: "产品类别及制造商信息将在审核后陆续发布。",
    contactEmail: "info@guangzhoukm.com"
  },
  am: {
    nav: ["መነሻ", "ምርቶች", "አምራቾች", "አገልግሎቶች", "ያግኙን"],
    eyebrow: "ከቻይና ጋር የሚያገናኝዎ ድልድይ",
    title: "በእምነት ይግዙ።\nበግልጽነት ይነግዱ።",
    intro: "ለኢትዮጵያውያንና ለዓለም አቀፍ ንግዶች ከቻይና አምራቾች ጋር እንዲገናኙ በምርት ፍለጋ፣ በአቅራቢ ማረጋገጫ፣ በሎጂስቲክስ ቅንጅትና በንግድ ጉብኝት እንረዳለን።",
    primary: "ጥያቄ ይላኩ",
    secondary: "አገልግሎቶቻችንን ይመልከቱ",
    trust: ["በቻይና የምርት ፍለጋ ድጋፍ", "ከመወሰንዎ በፊት የአቅራቢ መረጃ ማረጋገጥ", "ለጥያቄዎ አንድ የግንኙነት ነጥብ"],
    servicesTitle: "ንግድዎን እንዴት እንረዳለን",
    servicesIntro: "ከትክክለኛውን ምርት ከመፈለግ እስከ ቀጣይ ደረጃዎች ድረስ ተግባራዊ ድጋፍ።",
    services: [
      ["ከውጭ ማስገባትና ወደ ውጭ መላክ", "የንግድ ቅንጅትና ትዕዛዝዎን ለማስቀጠል የሚያስፈልጉ ሰነዶች ድጋፍ።"],
      ["ጭነትና ሎጂስቲክስ", "ከሎጂስቲክስ አጋሮች ጋር በመተባበር የመላኪያ አማራጮችንና ሰነዶችን ማብራራት።"],
      ["የምርት ፍለጋ", "እንደ ፍላጎትዎና በጀትዎ ተስማሚ ምርቶችንና አምራቾችን መፈለግ።"],
      ["የአቅራቢ ማረጋገጫ", "የአቅራቢ የንግድ መረጃ፣ ግንኙነትና የፋብሪካ መረጃ ማጣራት።"],
      ["የንግድ ጉብኝት", "የፋብሪካ ጉብኝት፣ የካንተን ፌር ጉብኝትና የንግድ ጉዞ ዝግጅት።"]
    ],
    processTitle: "ከጥያቄ እስከ ጭነት ግልጽ ሂደት",
    steps: [
      ["01", "ፍላጎትዎን ይንገሩን", "የምርት ዝርዝር፣ ብዛት፣ የዋጋ ግብና መድረሻ ይላኩ።"],
      ["02", "አማራጮችን እንመረምራለን", "ተስማሚ አቅራቢዎችን ለመፈለግና መረጃን ለማወዳደር እንረዳለን።"],
      ["03", "ከመወሰን በፊት ይገምግሙ", "ቃል ከመግባትዎ በፊት ዋጋዎችንና የአቅራቢ መረጃን ይመልከቱ።"],
      ["04", "ቀጣይ እርምጃዎችን እናቀናጃለን", "ከሚመለከታቸው አጋሮች ጋር የሰነድና የሎጂስቲክስ ውይይት እንረዳለን።"]
    ],
    marketplaceTitle: "ምርት ወይም አምራች እየፈለጉ ነው?",
    marketplaceIntro: "ፍላጎትዎን ይላኩልን። ጥያቄዎን ከገመገምን በኋላ ተስማሚ የግዢ አማራጮችን እንፈልጋለን። የአቅራቢና የምርት መረጃ ከግምገማ በኋላ ይታተማል።",
    formName: "ሙሉ ስም",
    formCompany: "የድርጅት ስም (አማራጭ)",
    formEmail: "ኢሜይል",
    formProduct: "የሚፈልጉት ምርት ወይም አገልግሎት",
    formDetails: "ዝርዝር፣ ብዛት፣ የዋጋ ግብና መድረሻ",
    formSend: "የኢሜይል ጥያቄ ያዘጋጁ",
    formNote: "ይህ የመጀመሪያ ቅጽ የኢሜይል መተግበሪያዎን ይከፍታል፤ መረጃን ገና በድረ-ገጽ ዳታቤዝ ውስጥ አያስቀምጥም።",
    contactTitle: "ስለ ግዢ ፍላጎትዎ እንወያይ",
    contactIntro: "ምን እንደሚፈልጉ፣ ወዴት እንደሚላክና ለንግድዎ ወሳኝ የሆነውን ይንገሩን።",
    emailLabel: "ኢሜይል",
    locationLabel: "በቻይና ጓንግዙ የሚገኝ",
    footer: "በእምነት ላይ የተመሠረተ፣ በታማኝነት የሚመራ።",
    language: "ቋንቋ",
    products: "የምርት ምድቦችና የአምራቾች መረጃ ከግምገማ በኋላ እዚህ ይታያል።",
    contactEmail: "info@guangzhoukm.com"
  }
} as const;

const serviceIcons = ["↗", "⇄", "⌕", "✓", "⌂"];

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [form, setForm] = useState({ name: "", company: "", email: "", product: "", details: "" });
  const t = copy[lang];

  useEffect(() => {
    const saved = window.localStorage.getItem("km-language") as Lang | null;
    if (saved && ["en", "zh", "am"].includes(saved)) setLang(saved);
  }, []);

  function changeLanguage(value: Lang) {
    setLang(value);
    window.localStorage.setItem("km-language", value);
  }

  function submitInquiry(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry: ${form.product}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company || "Not provided"}\nEmail: ${form.email}\nProduct/service: ${form.product}\nDetails: ${form.details}`
    );
    window.location.href = `mailto:${t.contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Guangzhou KM Trading home">
          <span className="brand-mark">KM</span>
          <span className="brand-text"><strong>GUANGZHOU KM</strong><small>TRADING CO., LTD.</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#home">{t.nav[0]}</a><a href="#products">{t.nav[1]}</a><a href="#manufacturers">{t.nav[2]}</a><a href="#services">{t.nav[3]}</a><a href="#contact">{t.nav[4]}</a>
        </nav>
        <label className="language-picker"><span className="sr-only">{t.language}</span>
          <select value={lang} onChange={(e) => changeLanguage(e.target.value as Lang)} aria-label={t.language}>
            <option value="en">EN · English</option><option value="zh">中文 · 简体中文</option><option value="am">አማ · አማርኛ</option>
          </select>
        </label>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="hero-content">
          <div className="eyebrow"><span />{t.eyebrow}</div>
          <h1>{t.title.split("\n").map((line, i) => <span key={line}>{line}{i === 0 && <br />}</span>)}</h1>
          <p className="hero-copy">{t.intro}</p>
          <div className="hero-actions"><a className="button button-gold" href="#contact">{t.primary} <span>↗</span></a><a className="button button-ghost" href="#services">{t.secondary}</a></div>
          <div className="hero-trust">{t.trust.map((item) => <div key={item}><span className="check">✓</span>{item}</div>)}</div>
        </div>
        <div className="hero-visual" aria-label="Abstract global trade illustration">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="globe"><div className="globe-lines" /><span className="globe-pin pin-a">GZ</span><span className="globe-pin pin-b">ADD</span></div>
          <div className="floating-card card-top"><span className="mini-icon">✓</span><div><strong>Supplier verified</strong><small>Details reviewed</small></div></div>
          <div className="floating-card card-bottom"><span className="mini-icon gold-icon">↗</span><div><strong>China → Ethiopia</strong><small>Trade connections</small></div></div>
          <div className="visual-caption">CONNECTING MARKETS. BUILDING TRUST.</div>
        </div>
        <div className="hero-bottom-line"><span>01 / SOURCING</span><span>GUANGZHOU · CHINA</span><span>GLOBAL TRADE SUPPORT</span></div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading"><div><div className="eyebrow dark-eyebrow">WHAT WE DO</div><h2>{t.servicesTitle}</h2></div><p>{t.servicesIntro}</p></div>
        <div className="service-grid">{t.services.map((service, i) => <article className="service-card" key={service[0]}><div className="service-top"><span className="service-icon">{serviceIcons[i]}</span><span className="service-number">0{i + 1}</span></div><h3>{service[0]}</h3><p>{service[1]}</p><a href="#contact" aria-label={`${service[0]} inquiry`} className="arrow-link">↗</a></article>)}</div>
      </section>

      <section className="process-section" id="manufacturers">
        <div className="process-inner"><div className="eyebrow"><span />OUR APPROACH</div><h2>{t.processTitle}</h2><div className="steps-grid">{t.steps.map((step) => <article className="step" key={step[0]}><span className="step-number">{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}</div></div>
      </section>

      <section className="marketplace-section section" id="products">
        <div className="marketplace-copy"><div className="eyebrow dark-eyebrow">BUYER INQUIRIES</div><h2>{t.marketplaceTitle}</h2><p>{t.marketplaceIntro}</p><div className="market-note"><span>◎</span><p>{t.products}</p></div><div className="platform-points"><span>✓ Inquiry review</span><span>✓ Supplier information checks</span><span>✓ Buyer-focused coordination</span></div></div>
        <form className="inquiry-form" onSubmit={submitInquiry}>
          <div className="form-title"><span>KM</span><div><strong>Buyer inquiry</strong><small>Tell us what you need</small></div></div>
          <div className="form-row"><label>{t.formName}<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder=" " /></label><label>{t.formCompany}<input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder=" " /></label></div>
          <label>{t.formEmail}<input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="name@company.com" /></label>
          <label>{t.formProduct}<input required value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} placeholder="e.g. packaging, building materials..." /></label>
          <label>{t.formDetails}<textarea required rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} placeholder=" " /></label>
          <button className="button button-navy" type="submit">{t.formSend} <span>↗</span></button><p className="form-disclaimer">{t.formNote}</p>
        </form>
      </section>

      <section className="contact-section" id="contact"><div className="contact-inner"><div><div className="eyebrow"><span />LET'S CONNECT</div><h2>{t.contactTitle}</h2><p>{t.contactIntro}</p></div><div className="contact-details"><div className="contact-detail"><span className="contact-icon">@</span><div><small>{t.emailLabel}</small><a href={`mailto:${t.contactEmail}`}>{t.contactEmail}</a></div></div><div className="contact-detail"><span className="contact-icon">⌖</span><div><small>LOCATION</small><strong>{t.locationLabel}</strong></div></div><a href={`mailto:${t.contactEmail}`} className="button button-gold">{t.primary} ↗</a></div></div></section>

      <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">KM</span><span className="brand-text"><strong>GUANGZHOU KM</strong><small>TRADING CO., LTD.</small></span></a><p>{t.footer}</p><span>© {new Date().getFullYear()} Guangzhou KM Trading Co., Ltd.</span></footer>
    </main>
  );
}

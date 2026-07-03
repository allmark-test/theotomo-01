import { useState } from "react";

// ─── Wireframe Primitive Components ─────────────────────────────────────────

function WF_Label({ children }: { children: React.ReactNode }) {
  return (
    null
  );
}

function WF_ImageBox({ label, aspectRatio = "aspect-video", className = "" }: { label: string; aspectRatio?: string; className?: string }) {
  return (
    <div className={`${aspectRatio} ${className} bg-muted border border-border flex flex-col items-center justify-center gap-1 w-full`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-muted-foreground">
        <rect x="1" y="1" width="26" height="26" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
        <path d="M1 20L9 13L14 17L19 11L27 20" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="text-[10px] font-mono text-muted-foreground text-center px-2">{label}</span>
    </div>
  );
}

function WF_Button({ children, variant = "outline", size = "md", full = false }: {
  children: React.ReactNode;
  variant?: "outline" | "fill" | "ghost";
  size?: "sm" | "md" | "lg";
  full?: boolean;
}) {
  const base = "font-medium tracking-wide transition-colors font-sans";
  const sizes = { sm: "text-xs px-4 py-2", md: "text-sm px-6 py-3", lg: "text-base px-8 py-4" };
  const variants = {
    outline: "border-2 border-foreground text-foreground bg-transparent",
    fill: "border-2 border-foreground bg-foreground text-background",
    ghost: "border border-dashed border-muted-foreground text-muted-foreground bg-transparent",
  };
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${full ? "w-full" : ""}`}>
      {children}
    </button>
  );
}

function WF_Divider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="flex-1 h-px bg-border" />
      {label && <span className="text-[10px] font-mono text-muted-foreground whitespace-nowrap">{label}</span>}
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function WF_Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-border bg-card p-4 ${className}`}>
      {children}
    </div>
  );
}

function WF_Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[10px] font-mono border border-foreground px-2 py-0.5 uppercase tracking-wider">
      {children}
    </span>
  );
}

function WF_Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`text-sm ${i < count ? "text-foreground" : "text-muted"}`}>★</span>
      ))}
    </div>
  );
}

function SectionHeader({ no, title }: { no: string; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <span className="text-[10px] font-mono text-muted-foreground">[{no}]</span>
      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{title}</span>
    </div>
  );
}

// ─── Main App ────────────────────────────────────────────────────────────────

export default function App() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      {/* Mobile frame wrapper */}
      <div className="max-w-[390px] mx-auto relative">

        {/* ── ANNOTATION BAR ─────────────────────────────────────── */}
        

        {/* ════════════════════════════════════════════════════════
            ① FIRST VIEW / ファーストビュー
        ════════════════════════════════════════════════════════ */}
        <section className="px-5 pt-8 pb-10 border-b border-border">
          <SectionHeader no="01" title="First View" />

          {/* Logo / Brand */}
          <div className="mb-5">
            <WF_Label>Brand Name</WF_Label>
            <div className="border border-foreground inline-block px-3 py-1">
              <span className="text-sm font-mono font-bold tracking-[0.2em]">The Otomo</span>
            </div>
          </div>

          {/* Hero Image */}
          <WF_ImageBox label="メインビジュアル｜食卓に並ぶ商品写真 / 俯瞰" aspectRatio="aspect-[4/3]" className="mb-6" />

          {/* キャッチコピー */}
          <div className="mb-4">
            <WF_Label>Catch Copy H1</WF_Label>
            <h1 className="text-2xl font-bold leading-[1.4] tracking-tight text-foreground">
              探さなくても<br />
              全国の美味しい逸品が<br />
              届くワクワク。
            </h1>
          </div>

          {/* Sub Copy */}
          <div className="mb-5">
            <WF_Label>Sub Copy</WF_Label>
            <p className="text-sm leading-relaxed text-foreground">
              1,500種類以上を実食したプロが選ぶ、<br />
              日本各地の「本当に美味しいご飯のお供」<br />
              毎日のご飯が、少し待ち遠しくなる。
            </p>
          </div>

          {/* USP Badges */}
          <div className="mb-5">
            <WF_Label>USP Badges</WF_Label>
            <div className="flex flex-wrap gap-2">
              <WF_Badge>継続率94.7%</WF_Badge>
              <WF_Badge>非売品・限定品</WF_Badge>
              <WF_Badge>プロ厳選</WF_Badge>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6 border border-border p-3 bg-card">
            <WF_Label>Price Block</WF_Label>
            <p className="text-xs text-muted-foreground mt-1">数量限定1,000円OFF！</p>
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-muted-foreground line-through">通常 ¥3,970</span>
              <span className="text-2xl font-bold">¥1,980</span>
              <span className="text-xs text-muted-foreground">（初回特別価格）</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">送料 ¥990｜いつでも解約可能</p>
          </div>

          {/* CTA Primary */}
          <div className="flex flex-col gap-3">
            <WF_Button variant="fill" size="lg" full>
              The Otomoを始める →
            </WF_Button>
            <WF_Button variant="ghost" size="sm" full>
              詳しく見る（スクロール）
            </WF_Button>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            ② EMPATHY / 共感
        ════════════════════════════════════════════════════════ */}
        <section className="px-5 pt-10 pb-10 border-b border-border">
          <SectionHeader no="02" title="Empathy — 共感" />

          <div className="mb-4">
            <WF_Label>Section Lead</WF_Label>
            <h2 className="text-xl font-bold leading-snug mb-2">
              今日も、同じ食卓だった。
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              仕事終わり、炊飯器を開ける。<br />
              冷蔵庫にあるのは、いつもの醤油漬け。
            </p>
          </div>

          {/* Scene Photo 1 */}
          <WF_ImageBox label="情景写真①｜仕事帰りの夕方 / キッチン" aspectRatio="aspect-[3/2]" className="mb-4" />

          {/* Scenario Cards */}
          <div className="mb-4">
            <WF_Label>Scenario List</WF_Label>
            <div className="flex flex-col gap-2">
              {[
                "ご飯のお供がいつも同じ",
                "レビューを読む時間もない",
                "買ってみたら外れだった…",
                "休日しか贅沢できない",
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-3 border border-border p-3 bg-card">
                  <span className="text-muted-foreground mt-0.5">—</span>
                  <span className="text-sm leading-relaxed">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scene Photo 2 */}
          <WF_ImageBox label="情景写真②｜夜の食卓 / ご飯とおかず" aspectRatio="aspect-[4/3]" className="mb-4" />

          <p className="text-sm leading-relaxed text-foreground font-medium">
            美味しいものは好き。でも探す時間はない。<br />
            そんな毎日を変えたいと思いませんか?
          </p>
        </section>

        {/* ════════════════════════════════════════════════════════
            ③ PROBLEM / 悩み
        ════════════════════════════════════════════════════════ */}
        <section className="px-5 pt-10 pb-10 border-b border-border bg-card">
          <SectionHeader no="03" title="Problem — 悩み" />

          <div className="mb-4">
            <WF_Label>Section H2</WF_Label>
            <h2 className="text-xl font-bold leading-snug mb-2">
              「また同じもの」<br />
              になってしまう理由
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { no: "01", title: "何を買えばいいか分からない", body: "選択肢が多すぎて、結局いつもと同じものを選んでしまう。" },
              { no: "02", title: "外れを引くのが怖い", body: "買ってみたら口に合わない。少量なのに高いと損した気分になる。" },
              { no: "03", title: "探す時間がない", body: "調べて、比べて、注文して。それだけで疲れてしまう。" },
              { no: "04", title: "気付けば毎回同じ", body: "冒険するより安心を取る。でも食卓はいつもマンネリ。" },
            ].map((p) => (
              <WF_Card key={p.no}>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-muted-foreground mt-0.5 shrink-0">{p.no}</span>
                  <div>
                    <p className="text-sm font-bold mb-1">{p.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </WF_Card>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            ④ VALUE REFRAME / 価値の再定義
        ════════════════════════════════════════════════════════ */}
        <section className="px-5 pt-12 pb-12 border-b border-border">
          <SectionHeader no="04" title="Value Reframe — 価値の再定義" />

          <div className="mb-6">
            <WF_Label>Reframe Statement</WF_Label>
            <p className="text-xs text-muted-foreground mb-3">私たちが売っているのは</p>
            <div className="border-l-2 border-foreground pl-4 mb-4">
              <p className="text-lg font-bold line-through text-muted-foreground leading-snug">
                ご飯のお供
              </p>
            </div>
            <p className="text-xs text-muted-foreground mb-3">ではなく</p>
            <div className="border-l-2 border-foreground pl-4">
              <p className="text-lg font-bold leading-snug">
                日本各地との出会い。<br />
                選ぶ手間のない安心感。<br />
                毎月のワクワク。<br />
                食卓が豊かになる暮らし。
              </p>
            </div>
          </div>

          <WF_Divider label="価値の比較" />

          {/* Value comparison */}
          <div className="mb-6">
            <WF_Label>Value Comparison</WF_Label>
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-dashed border-border p-3 text-center">
                <p className="text-xs text-muted-foreground mb-1">外食1回</p>
                <p className="text-sm font-bold">¥3,000</p>
                <p className="text-[10px] text-muted-foreground mt-1">2時間で終わる<br />体験</p>
              </div>
              <div className="border-2 border-foreground p-3 text-center">
                <p className="text-xs text-muted-foreground mb-1">The Otomo</p>
                <p className="text-sm font-bold">¥2,980</p>
                <p className="text-[10px] text-muted-foreground mt-1">1ヶ月続く<br />暮らしへの投資</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm font-bold">
            外食1回分で、<br />1ヶ月の食卓が変わる。
          </p>
        </section>

        {/* ════════════════════════════════════════════════════════
            ⑤ FUTURE / 未来
        ════════════════════════════════════════════════════════ */}
        <section className="px-5 pt-10 pb-10 border-b border-border">
          <SectionHeader no="05" title="Future — 未来像" />

          <div className="mb-5">
            <WF_Label>Section H2</WF_Label>
            <h2 className="text-xl font-bold leading-snug">
              毎月、炊飯器を<br />
              開けるのが楽しみになる。
            </h2>
          </div>

          {/* Hero lifestyle image */}
          <WF_ImageBox label="ライフスタイル大写真｜笑顔の食卓 / 家族・夫婦" aspectRatio="aspect-[3/4]" className="mb-5" />

          {/* Future scenarios */}
          <div className="flex flex-col gap-3 mb-5">
            {[
              { icon: "📦", text: "毎月届く、知らなかった日本の味" },
              { icon: "🗾", text: "日本を旅するような食体験" },
              { icon: "💬", text: "家族との「今月は何かな？」という会話" },
              { icon: "🎁", text: "職場や友人へのお裾分けが喜ばれる" },
              { icon: "✨", text: "いつしか「食」が趣味になっていく" },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b border-border last:border-0">
                
                <p className="text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>

          {/* Scene Photo */}
          <WF_ImageBox label="情景写真③｜商品が届いた瞬間 / 開封シーン" aspectRatio="aspect-[4/3]" />
        </section>

        {/* ════════════════════════════════════════════════════════
            ⑥ CURATOR / 監修者
        ════════════════════════════════════════════════════════ */}
        <section className="px-5 pt-10 pb-10 border-b border-border bg-card">
          <SectionHeader no="06" title="Curator — 監修者" />

          <div className="mb-4">
            <WF_Label>Section Lead</WF_Label>
            <p className="text-xs text-muted-foreground mb-2">この人が選ぶなら、間違いない。</p>
            <h2 className="text-xl font-bold">長船 クニヒコ</h2>
          </div>

          <div className="flex gap-4 mb-5">
            {/* Profile photo */}
            <div className="w-24 h-24 bg-muted border border-border flex items-center justify-center shrink-0">
              <span className="text-[10px] font-mono text-muted-foreground text-center leading-tight">顔写真<br />正方形</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <WF_Badge>ご飯のお供 専門家</WF_Badge>
              <p className="text-xs text-muted-foreground leading-relaxed">
                全国食べ歩き歴15年以上。<br />
                メディア掲載多数。
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[
              { num: "1,500+", label: "実食種類" },
              { num: "47都道府県", label: "食べ歩き" },
              { num: "500+", label: "生産者と直接交流" },
            ].map((s) => (
              <div key={s.label} className="border border-border p-2 text-center">
                <p className="text-xs font-bold leading-tight">{s.num}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="mb-5">
            <WF_Label>Profile Text</WF_Label>
            <p className="text-xs text-muted-foreground leading-relaxed">
              1,500種類以上のご飯のお供を実食。全国の生産者と直接交流し、
              一般流通しない限定品を発掘し続けるプロフェッショナル。
              雑誌・テレビ・Webメディアへの掲載実績多数。
              「本当に美味しいものだけを、必要な人へ届けたい」という想いで
              The Otomoを監修。
            </p>
          </div>

          {/* Media logos placeholder */}
          <div className="mb-2">
            <WF_Label>Media Logos</WF_Label>
            <div className="flex gap-2 flex-wrap">
              {["雑誌A", "TV番組B", "WEBメディアC", "新聞D"].map((m) => (
                <div key={m} className="border border-dashed border-border px-3 py-1.5">
                  <span className="text-[10px] font-mono text-muted-foreground">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            ⑦ SELECTION PROCESS / 選定基準
        ════════════════════════════════════════════════════════ */}
        <section className="px-5 pt-10 pb-10 border-b border-border">
          <SectionHeader no="07" title="Selection — 選定基準" />

          <div className="mb-4">
            <WF_Label>Section H2</WF_Label>
            <h2 className="text-xl font-bold leading-snug mb-2">
              採用率2.1%。<br />
              厳選のプロセス。
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              全国から集まった候補の中から、本当に食卓を豊かにするものだけを選びます。
            </p>
          </div>

          {/* Process diagram */}
          <div className="mb-6">
            <WF_Label>Flow Diagram</WF_Label>
            <div className="flex flex-col gap-0">
              {[
                { step: "STEP 1", title: "現地訪問・生産者との対話", detail: "全国の生産者を直接訪問。製造背景・こだわりを確認。" },
                { step: "STEP 2", title: "サンプル収集・試食審査", detail: "候補品を試食。味・品質・独自性を複数基準で審査。" },
                { step: "STEP 3", title: "採用可否の判断", detail: "採用率2.1%の厳しい基準を通過した商品のみ掲載。" },
                { step: "STEP 4", title: "独自ネットワークで確保", detail: "一般流通しない限定品は生産者と直接契約し独占確保。" },
              ].map((s, i, arr) => (
                <div key={s.step} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 border-2 border-foreground flex items-center justify-center shrink-0">
                      <span className="text-[9px] font-mono font-bold">{i + 1}</span>
                    </div>
                    {i < arr.length - 1 && <div className="w-px flex-1 bg-border my-1" style={{ minHeight: "1.5rem" }} />}
                  </div>
                  <div className="pb-5">
                    <p className="text-[10px] font-mono text-muted-foreground">{s.step}</p>
                    <p className="text-sm font-bold mb-1">{s.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="border border-border p-3 bg-card">
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">審査候補</span>
              <span className="text-xs font-mono">年間 約1,000件</span>
            </div>
            <div className="my-2 h-px bg-border" />
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">採用</span>
              <span className="text-xs font-mono font-bold">約21件（2.1%）</span>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            ⑧ COMPARISON / 比較
        ════════════════════════════════════════════════════════ */}
        <section className="px-5 pt-10 pb-10 border-b border-border bg-card">
          <SectionHeader no="08" title="Comparison — 比較表" />

          <div className="mb-4">
            <WF_Label>Section H2</WF_Label>
            <h2 className="text-xl font-bold leading-snug mb-2">
              なぜThe Otomoなのか。
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="mb-4">
            <WF_Label>Comparison Table</WF_Label>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr>
                    <th className="border border-border bg-muted p-2 text-left font-mono text-[10px] text-muted-foreground w-[38%]">比較項目</th>
                    <th className="border border-border bg-muted p-2 text-center font-mono text-[10px] text-muted-foreground">自分で探す</th>
                    <th className="border border-border bg-muted p-2 text-center font-mono text-[10px] text-muted-foreground">他社</th>
                    <th className="border-2 border-foreground bg-background p-2 text-center font-bold text-[11px]">The Otomo</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["探す時間", "必要", "必要", "不要"],
                    ["プロ厳選", "×", "△", "◎"],
                    ["限定品・非売品", "×", "×", "◎"],
                    ["外れリスク", "高い", "あり", "ほぼなし"],
                    ["毎月届く", "×", "○", "◎"],
                    ["生産者との繋がり", "×", "△", "◎"],
                    ["継続率", "—", "—", "94.7%"],
                  ].map(([item, self, other, otomo]) => (
                    <tr key={item}>
                      <td className="border border-border p-2 text-[10px] text-muted-foreground">{item}</td>
                      <td className="border border-border p-2 text-center text-[11px] text-muted-foreground">{self}</td>
                      <td className="border border-border p-2 text-center text-[11px] text-muted-foreground">{other}</td>
                      <td className="border-2 border-foreground p-2 text-center text-[11px] font-bold">{otomo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">
            ※ 競合他社は当社調べ。2024年12月時点。
          </p>
        </section>

        {/* ════════════════════════════════════════════════════════
            ⑨ RARITY / 希少性
        ════════════════════════════════════════════════════════ */}
        <section className="px-5 pt-10 pb-10 border-b border-border">
          <SectionHeader no="09" title="Rarity — 希少性" />

          <div className="mb-4">
            <WF_Label>Section H2</WF_Label>
            <h2 className="text-xl font-bold leading-snug mb-2">
              市場では、手に入らない。
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Amazonでも、スーパーでも、百貨店でも売っていない。
              The Otomoだけで手に入る味があります。
            </p>
          </div>

          {/* Rarity cards */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {[
              { label: "非売品", desc: "生産者が特別に作る市場非流通品" },
              { label: "共同開発品", desc: "The Otomo × 生産者のオリジナル" },
              { label: "数量限定", desc: "生産量の都合で年間数百個のみ" },
              { label: "季節限定", desc: "その時期しか味わえない一期一会" },
            ].map((r) => (
              <WF_Card key={r.label} className="flex flex-col gap-1.5">
                <WF_Badge>{r.label}</WF_Badge>
                <p className="text-[11px] text-muted-foreground leading-snug mt-1">{r.desc}</p>
              </WF_Card>
            ))}
          </div>

          <WF_ImageBox label="希少商品イメージ｜特別な包装・産地写真" aspectRatio="aspect-[3/2]" className="mb-4" />

          <div className="border border-border p-3 text-center">
            <p className="text-xs text-muted-foreground mb-1">毎月違う商品が届く</p>
            <p className="text-sm font-bold">一期一会の食体験</p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            ⑩ LINEUP / 商品紹介
        ════════════════════════════════════════════════════════ */}
        <section className="px-5 pt-10 pb-10 border-b border-border bg-card">
          <SectionHeader no="10" title="Lineup — 商品紹介" />

          <div className="mb-5">
            <WF_Label>Section H2</WF_Label>
            <h2 className="text-xl font-bold leading-snug mb-2">
              毎月届く、日本の味。
            </h2>
            <p className="text-xs text-muted-foreground">過去の届け先はこんな商品でした。</p>
          </div>

          {/* Product cards 1-4 (公開) */}
          <div className="mb-3">
            <WF_Label>公開中 1〜4ヶ月</WF_Label>
          </div>
          <div className="flex flex-col gap-4 mb-5">
            {[
              { month: "1ヶ月目", name: "○○県産 醤油漬けいくら（数量限定）", tag: "非売品" },
              { month: "2ヶ月目", name: "△△県 柚子こしょう職人仕込み", tag: "限定100個" },
              { month: "3ヶ月目", name: "□□産 特製塩辛（共同開発品）", tag: "共同開発" },
              { month: "4ヶ月目", name: "◇◇地方の伝統発酵漬物", tag: "地域限定" },
            ].map((p) => (
              <div key={p.month} className="gap-3 border border-border bg-background p-3">
                <WF_ImageBox label="商品写真" aspectRatio="aspect-square" className="w-20 shrink-0" />
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-[10px] font-mono text-muted-foreground">{p.month}</p>
                    <p className="text-xs font-bold leading-snug mt-1">{p.name}</p>
                  </div>
                  <WF_Badge>{p.tag}</WF_Badge>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon 5-6 */}
          <div className="mb-3">
            <WF_Label>Coming Soon 5〜6ヶ月</WF_Label>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["5ヶ月目", "6ヶ月目"].map((m) => (
              <div key={m} className="border border-dashed border-border p-3 text-center">
                <WF_ImageBox label="" aspectRatio="aspect-square" className="mb-2 opacity-30" />
                <p className="text-[10px] font-mono text-muted-foreground">{m}</p>
                <p className="text-xs font-bold mt-1">Coming Soon</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            ⑪ REVIEWS / 口コミ
        ════════════════════════════════════════════════════════ */}
        <section className="px-5 pt-10 pb-10 border-b border-border">
          <SectionHeader no="11" title="Reviews — 口コミ" />

          <div className="mb-5">
            <WF_Label>Section H2</WF_Label>
            <h2 className="text-xl font-bold leading-snug mb-1">
              届いた方からの声
            </h2>
            <div className="flex items-center gap-2">
              <WF_Stars count={5} />
              <span className="text-sm font-bold">4.8</span>
              
            </div>
          </div>

          {/* SNS UGC image strip */}
          <div className="mb-5">
            <WF_Label>SNS UGC 食卓写真</WF_Label>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="shrink-0 w-24 aspect-square bg-muted border border-border flex items-center justify-center">
                  <span className="text-[9px] font-mono text-muted-foreground text-center">UGC<br />写真{i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review cards */}
          <div className="flex flex-col gap-3">
            {[
              { name: "30代・会社員・女性", stars: 5, text: "毎月届くのが本当に楽しみで、仕事のモチベーションになっています。先月の柚子こしょうは職場でも大評判でした！" },
              { name: "50代・夫婦二人暮らし", stars: 5, text: "二人で「今月は何かな」って話すのが習慣になりました。こんなに続くサブスクは初めてです。" },
              { name: "40代・一人暮らし・男性", stars: 4, text: "自分では絶対に選ばなかった産地のものが届く。外れが全然ないのが驚き。信頼できます。" },
            ].map((r, i) => (
              <WF_Card key={i}>
                <div className="flex items-start justify-between mb-2">
                  <p className="text-xs font-bold">{r.name}</p>
                  <WF_Stars count={r.stars} />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.text}</p>
              </WF_Card>
            ))}
          </div>

          <div className="mt-4 text-center">
            <WF_Button variant="ghost" size="sm">
              口コミをもっと見る
            </WF_Button>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            ⑫ TRACK RECORD / 実績
        ════════════════════════════════════════════════════════ */}
        <section className="px-5 pt-10 pb-10 border-b border-border bg-card">
          <SectionHeader no="12" title="Track Record — 実績" />

          <div className="mb-5">
            <WF_Label>Section H2</WF_Label>
            <h2 className="text-xl font-bold leading-snug">
              数字が証明する、信頼。
            </h2>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {[
              { num: "94.7%", label: "継続率", note: "※算出基準は下記参照" },
              { num: "1,500+", label: "実食種類数", note: "監修者累計" },
              { num: "500+", label: "提携生産者数", note: "全国47都道府県" },
              { num: "10,000+", label: "累計お届け件数", note: "2024年12月時点" },
            ].map((s) => (
              <div key={s.label} className="border border-border p-3 text-center bg-background">
                <p className="text-xl font-bold">{s.num}</p>
                <p className="text-xs font-bold mt-1">{s.label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{s.note}</p>
              </div>
            ))}
          </div>

          {/* Media mention */}
          <div className="mb-4">
            <WF_Label>メディア掲載実績</WF_Label>
            <div className="grid grid-cols-3 gap-2">
              {["媒体A", "媒体B", "媒体C", "媒体D", "媒体E", "媒体F"].map((m) => (
                <div key={m} className="border border-dashed border-border h-10 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-muted-foreground">{m} LOGO</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-3">
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              ※継続率94.7%：2024年1月〜12月の定期購読者のうち、
              3ヶ月以上継続した割合。（n=○○名、当社調べ）
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            ⑬ PRICING / 価格
        ════════════════════════════════════════════════════════ */}
        <section className="px-5 pt-10 pb-10 border-b border-border">
          <SectionHeader no="13" title="Pricing — 価格" />

          <div className="mb-5">
            <WF_Label>Section H2</WF_Label>
            <h2 className="text-xl font-bold leading-snug">
              外食1回分で、<br />
              1ヶ月の食卓が変わる。
            </h2>
          </div>

          {/* Pricing card */}
          <div className="border-2 border-foreground p-5 mb-4">
            <div className="text-center mb-4">
              <WF_Badge>初回特別価格</WF_Badge>
              <div className="mt-3">
                <span className="text-xs text-muted-foreground line-through">通常 ¥3,480</span>
              </div>
              <div className="flex items-baseline justify-center gap-1 mt-1">
                <span className="text-3xl font-bold">¥2,980</span>
                <span className="text-sm text-muted-foreground">/月</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">＋送料 ¥550</p>
            </div>

            <WF_Divider label="含まれるもの" />

            <ul className="flex flex-col gap-2 mt-3">
              {[
                "プロが厳選したご飯のお供 2〜3品",
                "産地・生産者カード付き",
                "毎月異なる日本各地の味",
                "非売品・限定品を含む",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs">
                  <span className="mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Value comparison */}
          <div className="border border-dashed border-border p-3 mb-5 bg-card">
            <p className="text-xs text-muted-foreground text-center mb-2">1日あたりで考えると</p>
            <p className="text-center text-lg font-bold">約99円 / 日</p>
            <p className="text-[11px] text-muted-foreground text-center mt-1">缶コーヒー1本以下</p>
          </div>

          <WF_Button variant="fill" size="lg" full>
            今すぐ定期便を始める →
          </WF_Button>

          <p className="text-[11px] text-muted-foreground text-center mt-2">
            いつでも解約可能｜30日以内返金保証
          </p>
        </section>

        {/* ════════════════════════════════════════════════════════
            ⑭ FAQ / よくある質問
        ════════════════════════════════════════════════════════ */}
        <section className="px-5 pt-10 pb-10 border-b border-border bg-card">
          <SectionHeader no="14" title="FAQ — よくある質問" />

          <div className="mb-5">
            <WF_Label>Section H2</WF_Label>
            <h2 className="text-xl font-bold leading-snug">
              よくある質問
            </h2>
          </div>

          <div className="flex flex-col border border-border">
            {[
              {
                q: "いつでも解約できますか？",
                a: "はい、次回発送の7日前までにマイページからご解約いただけます。電話やメールは不要です。",
              },
              {
                q: "送料はどのくらいかかりますか？",
                a: "全国一律550円（税込）です。初回は送料無料のキャンペーンを実施中です。",
              },
              {
                q: "量はどのくらいですか？",
                a: "毎月2〜3品をお届けします。各商品は1〜2人が1ヶ月楽しめる量が目安です。",
              },
              {
                q: "賞味期限はどのくらいですか？",
                a: "商品により異なりますが、お届け時に最低30日以上の賞味期限を確保しています。",
              },
              {
                q: "どんな商品が届くか事前に知れますか？",
                a: "サプライズをお楽しみいただくため、基本的に非公開です。ただし1〜4ヶ月前の商品はサイトで公開しています。",
              },
              {
                q: "ギフトとして送れますか？",
                a: "ギフト設定が可能です。専用のギフトラッピングと挨拶状もご用意しています。",
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-border last:border-0">
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-start justify-between gap-3 p-4 text-left"
                >
                  <span className="text-sm font-medium leading-snug">Q. {item.q}</span>
                  <span className="text-sm font-mono shrink-0 mt-0.5">{faqOpen === i ? "−" : "+"}</span>
                </button>
                {faqOpen === i && (
                  <div className="px-4 pb-4">
                    <p className="text-xs text-muted-foreground leading-relaxed border-l border-border pl-3">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            ⑮ CLOSING CTA / クロージング
        ════════════════════════════════════════════════════════ */}
        <section className="px-5 pt-12 pb-14 border-b border-border">
          <SectionHeader no="15" title="Closing CTA — クロージング" />

          {/* Closing hero image */}
          <WF_ImageBox label="クロージング大写真｜夜の静かな食卓 / 一人・夫婦" aspectRatio="aspect-[3/4]" className="mb-8" />

          <div className="mb-8 text-center">
            <WF_Label>Closing Copy</WF_Label>
            <h2 className="text-2xl font-bold leading-[1.5] mb-3">
              毎月、<br />
              日本を旅するような暮らし。
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              探す時間を買う。<br />
              食卓が少し楽しみになる。<br />
              それは、暮らしへの投資です。
            </p>
          </div>

          {/* Final price reminder */}
          <div className="border border-border p-4 mb-6 text-center">
            <p className="text-xs text-muted-foreground mb-1">初回特別価格</p>
            <p className="text-2xl font-bold">¥1,980 / 月</p>
            <p className="text-xs text-muted-foreground mt-1">外食1回分で、1ヶ月の食卓が変わる</p>
          </div>

          {/* Final CTA block */}
          <div className="flex flex-col gap-3 mb-6">
            <WF_Button variant="fill" size="lg" full>
              今すぐThe Otomoを始める →
            </WF_Button>
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────────────────────────── */}
        <footer className="px-5 py-8 bg-card border-t border-border">
          <div className="mb-4">
            <div className="border border-foreground inline-block px-3 py-1 mb-3">
              <span className="text-sm font-mono font-bold tracking-[0.2em]">The Otomo</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              日本各地の食文化と食卓をつなぐ<br />
              ご飯のお供の定期便サービス
            </p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
            {["特定商取引法に基づく表示", "プライバシーポリシー", "利用規約", "お問い合わせ"].map((l) => (
              <span key={l} className="text-[10px] text-muted-foreground underline">{l}</span>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground">
            © 2024 The Otomo. All rights reserved.
          </p>
        </footer>

        {/* ── STICKY CTA BAR ─────────────────────────────────────── */}
        <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto border-t-2 border-foreground bg-background px-4 py-3 z-40">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="text-[10px] text-muted-foreground">初回特別価格</p>
              <p className="text-base font-bold">¥2,980 / 月</p>
            </div>
            <WF_Button variant="fill" size="md">
              今すぐ始める →
            </WF_Button>
          </div>
        </div>

        {/* Bottom padding for sticky bar */}
        <div className="h-20" />
      </div>
    </div>
  );
}

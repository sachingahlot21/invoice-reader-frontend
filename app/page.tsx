import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900  overflow-x-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-50  bg-green-500  backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">SplitPay</h1>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#features" className="hover:text-black">Features</Link>
            <Link href="#pricing" className="hover:text-black">Pricing</Link>
            <Link href="#how" className="hover:text-black">How it works</Link>
            <Link href="/login" className="px-4 py-2 rounded-xl bg-black text-white">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Roommate expenses, <br /> sorted.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl">
              Snap a bill, choose your people, split instantly. <br />
              AI keeps everything fair and transparent.
            </p>
            <p className="text-gray-800 font-medium mb-10">
              Live together. Split smarter.
            </p>
            <div className="flex gap-4">
              <Link href="/login" className="px-6 py-3 rounded-xl bg-black text-white text-sm font-semibold">
                Try it free
              </Link>
              <Link href="#how" className="px-6 py-3 rounded-xl border text-sm font-semibold">
                See how it works
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 p-10 shadow-lg">
              <p className="text-sm text-gray-500 mb-2">Sample Bill</p>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between"><span>Groceries</span><span>45.60</span></li>
                <li className="flex justify-between"><span>Electricity</span><span>32.40</span></li>
                <li className="flex justify-between"><span>Internet</span><span>28.00</span></li>
                <li className="border-t pt-3 flex justify-between font-semibold">
                  <span>Split / person</span><span>35.33</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">Why you’ll love SplitPay</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Feature title="Snap & Split" desc="Upload a bill photo and let AI extract items instantly." />
            <Feature title="Fair Sharing" desc="Split equally or customise per person — your rules." />
            <Feature title="Full Transparency" desc="Everyone sees what they owe and why." />
            <Feature title="Roommate Friendly" desc="Designed for shared flats, houses, and groups." />
            <Feature title="No Confusion" desc="No maths, no arguments, no awkward reminders." />
            <Feature title="Secure & Private" desc="Your data stays encrypted and safe." />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-16 text-center">How it works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            <Step num="1" title="Snap" desc="Take a photo of the bill." />
            <Step num="2" title="Choose" desc="Select roommates and assign items." />
            <Step num="3" title="Split" desc="Get instant, fair calculations." />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">Simple pricing</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <PriceCard plan="Free" price="0" features={["Basic bill splits", "Manual entries", "Up to 3 people"]} />
            <PriceCard plan="Pro" price="5" highlight features={["AI bill scanning", "Unlimited roommates", "Custom splits"]} />
            <PriceCard plan="Household" price="10" features={["Multiple houses", "Export reports", "Priority support"]} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} SplitPay. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

type FeatureProps = { title: string; desc: string };

function Feature({ title, desc }: FeatureProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

type StepProps = { num: string; title: string; desc: string };

function Step({ num, title, desc }: StepProps) {
  return (
    <div>
      <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
        {num}
      </div>
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

type PriceCardProps = {
  plan: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

function PriceCard({ plan, price, features, highlight }: PriceCardProps) {
  return (
    <div className={`rounded-3xl p-8 shadow-sm border ${highlight ? "bg-black text-white scale-105" : "bg-white"}`}>
      <h4 className="text-xl font-bold mb-4">{plan}</h4>
      <p className="text-4xl font-extrabold mb-6">£{price}<span className="text-base font-medium">/mo</span></p>
      <ul className="space-y-3 text-sm mb-8">
        {features.map((f, i) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-xl font-semibold ${highlight ? "bg-white text-black" : "bg-black text-white"}`}>
        Get started
      </button>
    </div>
  );
}

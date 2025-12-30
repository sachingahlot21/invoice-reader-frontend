import Link from "next/link";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { BoxesCore } from "@/components/ui/background-boxes";
import Navbar from "@/components/Navbar";
import { HoverCardWrapper } from "@/components/ui/HoverCardWrapper";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900  overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen">
        {/* Ripple background */}
        <div className="absolute inset-0 z-0">
          <BackgroundRippleEffect />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-12 items-center h-full">
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
      <section
        id="how"
        className="h-[calc(100vh-64px)] flex items-center"
        style={{
          background: `linear-gradient(to bottom, rgba(241,196,15,0.71), rgb(241 196 15 / 23%))`,
        }}
      >


        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Section Title */}
          <h3 className="text-4xl sm:text-5xl font-extrabold mb-20 text-center">
            How it works
          </h3>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg mb-6 text-3xl">
                📸
              </div>
              <h4 className="text-2xl font-semibold mb-4">Snap the bill</h4>
              <p className="text-gray-800 text-lg leading-relaxed max-w-xs">
                Take a photo of your receipt or upload a bill. Our system instantly reads items and total amounts.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg mb-6 text-3xl">
                👥
              </div>
              <h4 className="text-2xl font-semibold mb-4">Choose people</h4>
              <p className="text-gray-800 text-lg leading-relaxed max-w-xs">
                Select roommates or friends and assign items. Split equally or customise who pays for what.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg mb-6 text-3xl">
                ⚡
              </div>
              <h4 className="text-2xl font-semibold mb-4">Split instantly</h4>
              <p className="text-gray-800 text-lg leading-relaxed max-w-xs">
                Get instant, fair calculations. Everyone knows exactly how much they owe — no awkward math or confusion.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section id="pricing" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">Simple pricing</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <HoverCardWrapper>
              <PriceCard
                plan="Free"
                price="0"
                features={["Basic bill splits", "Manual entries", "Up to 3 people"]}
              />
            </HoverCardWrapper>

            <HoverCardWrapper>
              <PriceCard
                plan="Pro"
                price="5"
                highlight
                features={["AI bill scanning", "Unlimited roommates", "Custom splits"]}
              />
            </HoverCardWrapper>

            <HoverCardWrapper>
              <PriceCard
                plan="Household"
                price="10"
                features={["Multiple houses", "Export reports", "Priority support"]}
              />
            </HoverCardWrapper>
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

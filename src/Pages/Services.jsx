import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/ui/NavBar";
import { serviceCategories } from "@/Data/serviceDetails";
import { useDrawer } from "@/Context/DrawerContext";

function Services() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const { setIsOpen } = useDrawer();

  const category = serviceCategories[activeCategory];
  const tab = category.tabs[activeTab];

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    setActiveTab(0);
  };

  return (
    <div className="min-h-screen">
      <NavBar agencyName="Slate Studio" />

      <main className="w-full px-8 pt-50 pl-25 pr-25">
        {/* Page header */}
        <div className="mb-16 ">
          <h1 className="text-5xl font-medium mb-4">Our Services</h1>
          <p className="text-white/50 text-lg max-w-2xl">
            Everything we build is custom, full-service, and built to last.
            No templates, no shortcuts.
          </p>
        </div>

        {/* Layout: left nav + right content */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12">
          {/* Left side nav */}
          <nav className="flex flex-col gap-1">
            {serviceCategories.map((cat, index) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(index)}
                className={`text-left px-4 py-4 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                  activeCategory === index
                    ? "bg-white/5 text-white"
                    : "text-white/40 hover:text-white/70 hover:bg-white/[0.02]"
                }`}
              >
                <span className="text-lg">{cat.name}</span>
                <ChevronRight
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeCategory === index ? "rotate-90 opacity-100" : "opacity-0 group-hover:opacity-50"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Right content area */}
          <div>
            {/* Tabs */}
            <div className="flex gap-1 border-b border-white/10 mb-10">
              {category.tabs.map((t, index) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-3 text-sm transition-colors duration-200 relative ${
                    activeTab === index
                      ? "text-white"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {t.title}
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${category.id}-${tab.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-medium mb-4">{tab.headline}</h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-3xl mb-10">
                  {tab.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {tab.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/5"
                    >
                      <div className="h-2 w-2 rounded-full bg-white/40 mt-2 shrink-0" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <Button variant="white" size="lg" onClick={() => setIsOpen(true)}>
                    Let's Talk <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Services;

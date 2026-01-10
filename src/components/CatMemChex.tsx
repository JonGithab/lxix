import { useState, useEffect, useCallback } from "react";
import { Heart, Flame, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import cat1Image from "@/assets/cat1.jpg";
import cat2Image from "@/assets/cat2.jpg";

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

interface CatCardProps {
  image: string;
  name: string;
  score: number;
  onHot: () => void;
  onNot: () => void;
  isAnimating: boolean;
  hearts: FloatingHeart[];
}

const CatCard = ({ image, name, score, onHot, onNot, isAnimating, hearts }: CatCardProps) => {
  return (
    <div className="group relative flex flex-col items-center">
      {/* Card */}
      <div className="relative overflow-visible rounded-3xl glass shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 overflow-hidden rounded-3xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Score Badge */}
          <motion.div 
            className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass shadow-lg"
            animate={isAnimating ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="font-bold text-foreground">{score}</span>
          </motion.div>
          
          {/* Name */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white drop-shadow-lg">{name}</h3>
          </div>
        </div>
        
        {/* Floating Hearts */}
        <AnimatePresence>
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              className="absolute pointer-events-none"
              style={{ 
                left: `${heart.x}%`, 
                top: `${heart.y}%`,
              }}
              initial={{ 
                opacity: 1, 
                scale: 0, 
                y: 0,
                rotate: 0,
              }}
              animate={{ 
                opacity: [1, 1, 0], 
                scale: [0, heart.scale, heart.scale * 0.8],
                y: -150,
                rotate: heart.rotation,
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut",
              }}
            >
              <Heart 
                className="w-8 h-8 text-primary fill-primary drop-shadow-lg" 
                style={{ filter: 'drop-shadow(0 0 8px hsl(340, 82%, 62%))' }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <Button
          variant="not"
          size="lg"
          onClick={onNot}
          className="rounded-full w-14 h-14 p-0"
        >
          <X className="w-6 h-6" />
        </Button>
        <Button
          variant="hot"
          size="lg"
          onClick={onHot}
          className="rounded-full w-14 h-14 p-0"
        >
          <Flame className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

const CatMemChex = () => {
  const [scores, setScores] = useState<{ cat1: number; cat2: number }>(() => {
    const saved = localStorage.getItem("catmemchex-scores");
    return saved ? JSON.parse(saved) : { cat1: 0, cat2: 0 };
  });
  
  const [animating, setAnimating] = useState<{ cat1: boolean; cat2: boolean }>({
    cat1: false,
    cat2: false,
  });

  const [hearts, setHearts] = useState<{ cat1: FloatingHeart[]; cat2: FloatingHeart[] }>({
    cat1: [],
    cat2: [],
  });

  const [heartId, setHeartId] = useState(0);

  useEffect(() => {
    localStorage.setItem("catmemchex-scores", JSON.stringify(scores));
  }, [scores]);

  const spawnHearts = useCallback((cat: "cat1" | "cat2") => {
    const newHearts: FloatingHeart[] = Array.from({ length: 6 }, (_, i) => ({
      id: heartId + i,
      x: 20 + Math.random() * 60,
      y: 30 + Math.random() * 40,
      scale: 0.6 + Math.random() * 0.8,
      rotation: -30 + Math.random() * 60,
    }));

    setHeartId((prev) => prev + 6);
    setHearts((prev) => ({ ...prev, [cat]: [...prev[cat], ...newHearts] }));

    // Remove hearts after animation
    setTimeout(() => {
      setHearts((prev) => ({
        ...prev,
        [cat]: prev[cat].filter((h) => !newHearts.find((nh) => nh.id === h.id)),
      }));
    }, 1500);
  }, [heartId]);

  const handleHot = (cat: "cat1" | "cat2") => {
    setScores((prev) => ({ ...prev, [cat]: prev[cat] + 1 }));
    setAnimating((prev) => ({ ...prev, [cat]: true }));
    spawnHearts(cat);
    setTimeout(() => setAnimating((prev) => ({ ...prev, [cat]: false })), 300);
  };

  const handleNot = (cat: "cat1" | "cat2") => {
    setAnimating((prev) => ({ ...prev, [cat]: true }));
    setTimeout(() => setAnimating((prev) => ({ ...prev, [cat]: false })), 300);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <header className="py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-8 h-8 text-primary fill-primary" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            CatMemChex
          </h1>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Heart className="w-8 h-8 text-primary fill-primary" />
          </motion.div>
        </div>
        <p className="text-muted-foreground text-lg">Vote for your favorite furry friend!</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center">
          <CatCard
            image={cat1Image}
            name="Ginger"
            score={scores.cat1}
            onHot={() => handleHot("cat1")}
            onNot={() => handleNot("cat1")}
            isAnimating={animating.cat1}
            hearts={hearts.cat1}
          />
          
          {/* VS Badge */}
          <motion.div 
            className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full gradient-primary shadow-glow"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xl font-extrabold text-white">VS</span>
          </motion.div>
          
          <CatCard
            image={cat2Image}
            name="Shadow"
            score={scores.cat2}
            onHot={() => handleHot("cat2")}
            onNot={() => handleNot("cat2")}
            isAnimating={animating.cat2}
            hearts={hearts.cat2}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center">
        <p className="text-sm text-muted-foreground">
          Tap <Flame className="w-4 h-4 inline text-primary" /> for Hot • Tap <X className="w-4 h-4 inline text-muted-foreground" /> for Not
        </p>
      </footer>
    </div>
  );
};

export default CatMemChex;
